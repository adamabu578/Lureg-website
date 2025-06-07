"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Learn more about LUREG Support Foundation and our mission
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Lupus Awareness Group (LUREG) Support Foundation was founded with a simple but powerful mission: to
              ensure that no one faces lupus alone. Our organization was born from the personal experiences of lupus
              warriors who understood the challenges, isolation, and need for community support that comes with this
              autoimmune disease.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are dedicated to supporting individuals and families affected by lupus through education, advocacy,
              community building, and direct support services. We believe that by working together, we can improve the
              quality of life for lupus warriors and create a more understanding and supportive world.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide educational resources about lupus and its management</li>
              <li>Advocate for better healthcare policies and research funding</li>
              <li>Offer emotional and practical support to lupus warriors and their families</li>
              <li>Create networking opportunities and build community connections</li>
              <li>Organize awareness events and fundraising activities</li>
              <li>Connect individuals with healthcare resources and support services</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Since our founding, we have supported hundreds of lupus warriors and their families, organized numerous
              awareness events, and built a strong community of supporters. Our work continues to grow as we reach more
              people and expand our services to meet the evolving needs of the lupus community.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
