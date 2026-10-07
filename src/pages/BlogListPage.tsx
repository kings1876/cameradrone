import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/content';

export const BlogListPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Drone Articles & Flight Guides | Camera Drone Sales Australia';
  }, []);

  return (
    <div className="py-16 bg-[#0b0f17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Flight Intel & Hardware Guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Australian Drone Articles
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Equipment buying guides and CASA airspace regulations for Australian drone pilots, surveyors and farmers.
          </p>
        </div>

        {/* Blog Post Cards Grid with Direct URL Routing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              {post.image && (
                <div className="bg-white h-44 flex items-center justify-center p-3 border-b border-slate-800">
                  <img src={post.image} alt={post.imageAlt ?? post.title} loading="lazy" className="w-full h-full object-contain" />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="font-semibold text-amber-400/90">{post.tags[0]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display line-clamp-2 leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{post.date}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
