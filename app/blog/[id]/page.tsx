"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
  const posts = [
    {
      id: 1,
      title: "Understanding Lupus: A Comprehensive Guide for Newly Diagnosed Warriors",
      content: `
        <p>Being diagnosed with lupus can feel overwhelming, but you're not alone in this journey. This comprehensive guide will help you understand what lupus is, what to expect, and how to take the first steps toward managing your condition effectively.</p>
        
        <h2>What is Lupus?</h2>
        <p>Lupus is a chronic autoimmune disease where your immune system becomes overactive and attacks healthy tissues in your body. This can cause inflammation and damage to various parts of your body, including your skin, joints, kidneys, heart, and lungs.</p>
        
        <h2>Types of Lupus</h2>
        <p>There are several types of lupus, but the most common include:</p>
        <ul>
          <li><strong>Systemic Lupus Erythematosus (SLE):</strong> The most common and serious form that can affect multiple organs</li>
          <li><strong>Cutaneous Lupus:</strong> Affects only the skin</li>
          <li><strong>Drug-induced Lupus:</strong> Caused by certain medications</li>
          <li><strong>Neonatal Lupus:</strong> Affects newborn babies</li>
        </ul>
        
        <h2>Common Symptoms</h2>
        <p>Lupus symptoms can vary greatly from person to person, but common signs include:</p>
        <ul>
          <li>Fatigue that doesn't improve with rest</li>
          <li>Joint pain and swelling</li>
          <li>Butterfly-shaped rash across the cheeks and nose</li>
          <li>Fever</li>
          <li>Hair loss</li>
          <li>Mouth ulcers</li>
          <li>Sensitivity to sunlight</li>
        </ul>
        
        <h2>Your First Steps</h2>
        <p>After diagnosis, it's important to:</p>
        <ol>
          <li>Build a strong healthcare team</li>
          <li>Learn about your specific type of lupus</li>
          <li>Connect with support groups</li>
          <li>Make lifestyle adjustments</li>
          <li>Stay informed about treatment options</li>
        </ol>
        
        <p>Remember, while lupus is a serious condition, many people with lupus live full, active lives. With proper medical care, lifestyle adjustments, and support from your community, you can successfully manage your condition.</p>
      `,
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Education",
      image: "/placeholder.svg?height=400&width=800&text=Lupus+Guide",
    },
    // Add more posts as needed
  ]

  return posts.find((post) => post.id === Number.parseInt(id))
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>

            <Badge className="mb-4 bg-purple-100 text-purple-800">{post.category}</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Like
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Comments & Discussion
            </h3>
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-4">Join the conversation and share your thoughts with our community.</p>
              <Button className="bg-purple-600 hover:bg-purple-700">Join Discussion</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
