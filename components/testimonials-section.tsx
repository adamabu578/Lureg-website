"use client"

import { motion } from "framer-motion"

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-purple-200 mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">We do GOOD WORK</h3>
          <p className="text-purple-100 text-lg max-w-4xl mx-auto leading-relaxed">
            With LUREG I have a sense of hope and community that I never had before. I have been diagnosed with lupus
            for over 10 years and I have never felt this supported. I am so thankful for this organization and all they
            do for the lupus community. Because of the being happy and stress free is the first step to any chronic. To
            all fellow Champions, never let any one limit your dreams.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
