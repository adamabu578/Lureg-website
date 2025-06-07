"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function WorkTogetherSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Let us work together to make a difference
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Join our mission to support lupus warriors and create a community where no one faces this challenge alone.
            Together, we can make a lasting impact.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-8">
            JOIN WITH US →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
