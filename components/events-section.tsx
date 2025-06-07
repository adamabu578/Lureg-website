"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const events = [
  { id: 1, src: "/assets/health-talk.png", title: "Safety First Workshop" },
  { id: 2, src: "/assets/luregprogram.png", title: "Lupus Awareness Seminar" },
  { id: 3, src: "/assets/luregsupport.png", title: "Community Support Meeting" },
  { id: 4, src: "/placeholder.svg?height=300&width=400", title: "Fundraising Gala" },
]

export function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-purple-600 mb-2">Attend an Event</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Join Us... Pick a Date</h3>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {events.slice(currentIndex, currentIndex + 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                >
                  <Image
                    src={event.src || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white font-semibold text-lg text-center px-4">{event.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prevSlide}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={nextSlide}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-4">More than 50+ events done successfully</h4>
        </motion.div>
      </div>
    </section>
  )
}
