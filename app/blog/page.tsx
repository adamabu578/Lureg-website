"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Clock, ArrowRight, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Lupus: A Comprehensive Guide for Newly Diagnosed Warriors",
    excerpt:
      "Everything you need to know about lupus diagnosis, symptoms, and the first steps in your journey as a lupus warrior.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Education",
    image: "/placeholder.svg?height=300&width=500&text=Lupus+Guide",
    featured: true,
  },
  {
    id: 2,
    title: "Living Well with Lupus: Daily Management Tips and Strategies",
    excerpt:
      "Practical advice for managing lupus symptoms, maintaining energy levels, and living a fulfilling life with chronic illness.",
    author: "Maria Rodriguez",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Lifestyle",
    image: "/placeholder.svg?height=300&width=500&text=Daily+Management",
    featured: false,
  },
  {
    id: 3,
    title: "The Power of Community: How Support Groups Changed My Lupus Journey",
    excerpt:
      "A personal story about finding strength, hope, and friendship through lupus support groups and community connections.",
    author: "Jennifer Chen",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Personal Stories",
    image: "/placeholder.svg?height=300&width=500&text=Community+Support",
    featured: false,
  },
  {
    id: 4,
    title: "Nutrition and Lupus: Foods That Help and Foods to Avoid",
    excerpt:
      "Evidence-based nutritional guidance for lupus patients, including anti-inflammatory foods and dietary strategies.",
    author: "Dr. Michael Thompson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Health",
    image: "/placeholder.svg?height=300&width=500&text=Nutrition+Guide",
    featured: false,
  },
  {
    id: 5,
    title: "Exercise and Lupus: Safe Workouts for Managing Symptoms",
    excerpt:
      "How to stay active with lupus, including low-impact exercises, yoga routines, and activity modifications.",
    author: "Lisa Park",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Fitness",
    image: "/placeholder.svg?height=300&width=500&text=Exercise+Guide",
    featured: false,
  },
  {
    id: 6,
    title: "Mental Health and Lupus: Coping with the Emotional Impact",
    excerpt:
      "Addressing the psychological aspects of living with lupus, including anxiety, depression, and building resilience.",
    author: "Dr. Amanda Wilson",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Mental Health",
    image: "/placeholder.svg?height=300&width=500&text=Mental+Health",
    featured: false,
  },
]

const categories = ["All", "Education", "Lifestyle", "Personal Stories", "Health", "Fitness", "Mental Health"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              style={{
                background: "linear-gradient(45deg, #ffffff, #e0e7ff, #ffffff)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Blog
            </motion.h1>
            <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Stories, insights, and resources from our lupus warrior community. Stay informed, inspired, and connected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-2 border-gray-200 focus:border-purple-500 transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full ${
                      selectedCategory === category
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "border-purple-200 text-purple-600 hover:bg-purple-50"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Badge className="bg-yellow-500 text-black mb-4">Featured Article</Badge>
              <h2 className="text-2xl font-bold text-gray-900">Editor's Pick</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/blog/${featuredPost.id}`}>
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-purple-100 text-purple-800">{featuredPost.category}</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 line-clamp-2">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-purple-600" />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, resources, and community updates directly in
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 border-2 border-gray-200 focus:border-purple-500"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
