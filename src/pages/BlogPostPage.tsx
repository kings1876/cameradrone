import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/content';
import { PRODUCTS } from '../data/products';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find(p => p.slug === slug || p.id === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (post) {
      document.title = `${post.title} | Camera Drone Sales Australia`;
    }
  }, [post, slug]);

  if (!post) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white font-display">Article Not Found</h1>
        <p className="text-sm text-slate-400">The requested flight article could not be located.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Flight Articles</span>
        </Link>
      </div>
    );
  }

  // Recommended products for this post
  const relatedProducts = PRODUCTS.slice(0, 3);

  return (
    <article className="py-12 bg-[#0b0f17] text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <span>{post.tags.join(' · ')}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">{post.date}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 italic border-l-2 border-amber-400 pl-4">
            {post.subtitle}
          </p>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
            <span>Author: <strong>{post.author}</strong></span>
            <span className="font-mono text-slate-500">/blog/{post.slug}</span>
          </div>
        </header>

        {post.image && (
          <div className="bg-white rounded-2xl h-64 sm:h-80 flex items-center justify-center p-4">
            <img src={post.image} alt={post.imageAlt ?? post.title} className="w-full h-full object-contain" />
          </div>
        )}

        {/* Article Prose Content */}
        <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Target Keywords Hub */}
        <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Indexed Flight & Hardware Topics
          </span>
          <div className="flex flex-wrap gap-1.5 text-xs text-amber-400 font-mono">
            {post.targetKeywords.map((kw, i) => (
              <span key={i} className="px-2.5 py-1 bg-slate-950 rounded border border-slate-800">
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Recommended Flight Hardware Section */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white font-display">Featured Systems in This Article</h3>
            <Link to="/shop" className="text-xs text-amber-400 hover:underline">View All Equipment →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedProducts.map(p => (
              <Link
                key={p.id}
                to={`/product/${p.slug}`}
                className="p-3.5 bg-[#0f172a] rounded-xl border border-slate-800 hover:border-amber-500/50 transition-colors block group"
              >
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">{p.brand}</span>
                <h4 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors truncate mt-0.5">
                  {p.name}
                </h4>
                <div className="flex justify-between items-baseline mt-2 text-xs font-mono">
                  <span className="text-white font-bold">${p.price.toLocaleString()}</span>
                  <span className="text-emerald-400 text-[10px]">Free AU Delivery</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
