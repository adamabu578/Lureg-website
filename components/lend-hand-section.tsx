"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function LendHandSection() {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-purple-600 mb-2">Lend a Hand</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Become a giver and save a warrior's life today
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your support can make a real difference in the life of someone battling lupus. Whether it's through
              donations, volunteering, or simply spreading awareness, every contribution helps us continue our mission
              of supporting lupus warriors.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join our community of givers and help us provide essential resources, emotional support, and hope to those
              who need it most. Together, we can create a world where no one faces lupus alone.
            </p>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-8">
              GIVE A GIFT →
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/assets/handimg.jpg"
              alt="Helping hands"
              width={500}
              height={400}
              className="rounded-2xl object-cover w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
