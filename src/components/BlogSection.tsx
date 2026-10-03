import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, User } from 'lucide-react';
import { BLOG_POSTS } from '../data/content';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-16 bg-[#0b0f17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Zero-pill clean unboxed metadata */}
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
            <span>Drone Buying Guides</span>
            <span aria-hidden="true">·</span>
            <span>Australian Drone Market</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
            Drone Insights & Equipment Guides
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Authoritative buying guides, and CASA regulatory updates to help you choose the right drone in Australia.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-lg"
            >
              <div className="space-y-3">
                {/* Clean unboxed tags */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span>{post.tags[0]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{post.date}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl my-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <span>{selectedPost.tags.join(' · ')}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400 font-normal">{selectedPost.date}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400 font-normal">{selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-slate-300 italic border-l-2 border-amber-400 pl-3">
                {selectedPost.subtitle}
              </p>

              <div className="pt-6 border-t border-slate-800 space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Target keywords badge footer */}
              <div className="pt-6 border-t border-slate-800/80 mt-8">
                <span className="text-[11px] text-slate-400 block mb-2 font-medium">Keywords Indexed:</span>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-400 font-mono">
                  {selectedPost.targetKeywords.map((kw, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
