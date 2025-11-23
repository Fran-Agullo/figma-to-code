import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import { ScrollToTop } from '@/components/ScrollToTop';
import { blogPosts, categories } from '@/data/blogPosts';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#030711] tracking-tight leading-[1.15] mb-6">
              Blog de <span className="text-[#EA580C]">Birdie Digital</span>
            </h1>
            <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
              Artículos sobre diseño web, desarrollo, SEO y las últimas tendencias digitales.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#EA580C] text-white'
                    : 'bg-[#f9f7f7] text-[#030711] hover:bg-[#e5e5e5]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-[#64748b]">
                No hay artículos en esta categoría todavía.
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
