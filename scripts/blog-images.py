"""Builds optimized blog images (cover and inline) from catalogue product photos.

Usage (from the project root):
    py -3 scripts/blog-images.py spec.json

spec.json is a list of jobs:
    [{"name": "blog-example-guide", "layout": "trio", "files": ["a.jpg", "b.jpg", "c.jpg"]},
     {"name": "blog-example-guide-inline-1", "layout": "duo", "files": ["a.jpg", "b.jpg"]}]

layout: "trio" (three tiles, use for the cover), "duo" (two tiles) or "solo" (one large tile).
files are names inside public/products (owner-supplied catalogue photos only; never scraped images).

Each job writes public/images/<name>.{webp,avif} at 1600 px plus -800 and -480 variants, the sizes the blog
srcset expects, and prints the file sizes so oversized output is obvious. Reference the image in a post as
'/images/<name>.webp' (the cover `image` field or an inline { img: { src, alt, caption } } block).
"""
import json
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

W, H = 1600, 900
R = 56
PAD = 34
WARN_KB = 180  # warn when the 1600 px WebP is larger than this

LAYOUTS = {
    'trio': {'tile': 470, 'xs': [45, 565, 1085], 'y': 215},
    'duo': {'tile': 560, 'xs': [210, 830], 'y': 170},
    'solo': {'tile': 640, 'xs': [480], 'y': 130},
}


def background():
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    base = np.array([7, 10, 18], np.float32)
    navy = np.array([16, 44, 84], np.float32)
    amber = np.array([110, 70, 12], np.float32)
    img = np.tile(base, (H, W, 1))
    dn = np.sqrt((xx / W) ** 2 + ((H - yy) / H) ** 2)
    wn = np.clip(1 - dn / 0.75, 0, 1) ** 1.6
    da = np.sqrt(((W - xx) / W) ** 2 + (yy / H) ** 2)
    wa = np.clip(1 - da / 0.7, 0, 1) ** 1.8
    img = img + (navy - base) * wn[..., None] + (amber - base) * wa[..., None]
    return Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), 'RGB')


def tile(path, size):
    im = Image.open(os.path.join('public', 'products', path)).convert('RGB')
    inner = size - 2 * PAD
    im.thumbnail((inner, inner), Image.LANCZOS)
    t = Image.new('RGB', (size, size), 'white')
    t.paste(im, ((size - im.width) // 2, (size - im.height) // 2))
    m = Image.new('L', (size, size), 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, size - 1, size - 1), R, fill=255)
    return t, m


def build(job):
    name, layout, files = job['name'], job['layout'], job['files']
    cfg = LAYOUTS[layout]
    if len(files) != len(cfg['xs']):
        raise SystemExit(f"{name}: layout {layout} needs {len(cfg['xs'])} files, got {len(files)}")
    size, y = cfg['tile'], cfg['y']
    canvas = background().convert('RGBA')
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    for x in cfg['xs']:
        ImageDraw.Draw(shadow).rounded_rectangle((x, y + 24, x + size, y + size + 24), R, fill=(0, 0, 0, 150))
    canvas = Image.alpha_composite(canvas, shadow.filter(ImageFilter.GaussianBlur(26)))
    for x, f in zip(cfg['xs'], files):
        t, m = tile(f, size)
        canvas.paste(t, (x, y), m)
    out = canvas.convert('RGB')
    for suffix, w in (('', 1600), ('-800', 800), ('-480', 480)):
        o = out if w == W else out.resize((w, round(H * w / W)), Image.LANCZOS)
        base = f'public/images/{name}{suffix}'
        o.save(base + '.webp', quality=82, method=6)
        o.save(base + '.avif', quality=60)
    kb = lambda p: round(os.path.getsize(p) / 1024)
    full = f'public/images/{name}'
    flag = '  <-- large, simplify the tiles' if kb(full + '.webp') > WARN_KB else ''
    print(f"ok {name}: webp {kb(full + '.webp')} KB, avif {kb(full + '.avif')} KB (1600 px){flag}")


if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    for job in json.load(open(sys.argv[1], encoding='utf-8')):
        build(job)
