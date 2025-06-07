"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const features = [
    "Providing lupus education",
    "Focus on self-fundraising programs",
    "Our best programs which will inspire you",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-purple-600 mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A community of Warriors</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Lupus Awareness Group (LUREG) Support Foundation is a non-profit organization dedicated to supporting
              individuals and families affected by lupus. We focus on raising awareness, providing support, and building
              a strong community of warriors who understand the challenges of living with lupus.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower lupus warriors through education, advocacy, and community support. We believe
              that together, we can make a difference in the lives of those affected by this autoimmune disease.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 rounded-full px-8">Gallery</Button>
              <Button variant="outline" className="rounded-full px-8">
                Join Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <Image
                src="/assets/groupimg.png"
                alt="Community support"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full"
              />
              {/* <Image
                src="/placeholder.svg?height=150&width=300"
                alt="Lupus awareness"
                width={300}
                height={150}
                className="rounded-lg object-cover w-full"
              /> */}
            </div>
            <div className="space-y-4 pt-8">
              {/* <Image
                src="/placeholder.svg?height=150&width=300"
                alt="Support group"
                width={300}
                height={150}
                className="rounded-lg object-cover w-full"
              /> */}
              {/* <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Community events"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full"
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
