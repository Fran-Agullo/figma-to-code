import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <article className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/blog">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al blog
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#EA580C] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-[#64748b]">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#030711] tracking-tight leading-[1.15] mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-[#64748b] mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3">
              <span className="text-sm text-[#64748b]">Por {post.author}</span>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 rounded-2xl overflow-hidden aspect-video"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div 
              className="text-[#030711] leading-relaxed"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75'
              }}
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('# ')) return `<h1 class="text-4xl font-bold mb-6 mt-12">${line.slice(2)}</h1>`;
                    if (line.startsWith('## ')) return `<h2 class="text-3xl font-bold mb-4 mt-10">${line.slice(3)}</h2>`;
                    if (line.startsWith('### ')) return `<h3 class="text-2xl font-bold mb-3 mt-8">${line.slice(4)}</h3>`;
                    if (line.startsWith('**') && line.endsWith('**')) return `<p class="font-bold mb-4">${line.slice(2, -2)}</p>`;
                    if (line.trim() === '') return '<br />';
                    if (line.startsWith('```')) return '';
                    return `<p class="mb-4">${line}</p>`;
                  })
                  .join('')
              }}
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-12 pb-12 border-b border-[#e5e5e5]"
          >
            <Tag className="w-5 h-5 text-[#64748b]" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-[#f9f7f7] text-[#030711] px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-[#030711] mb-8">
                Artículos relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-[#f9f7f7] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-[#030711] group-hover:text-[#EA580C] transition-colors mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-[#64748b] line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </article>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
