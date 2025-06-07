"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HelpCircle, Heart, Users } from "lucide-react"

const cards = [
  {
    icon: HelpCircle,
    title: "What is Lupus?",
    description: "Learn about lupus, its symptoms, and how it affects millions of people worldwide.",
    color: "bg-red-500",
    href: "/what-is-lupus",
  },
  {
    icon: Heart,
    title: "Living with Lupus",
    description: "Discover resources, tips, and support for managing life with lupus.",
    color: "bg-purple-600",
    href: "/living-with-lupus",
  },
  {
    icon: Users,
    title: "Get Involved",
    description: "Join our community and help make a difference in the lives of lupus warriors.",
    color: "bg-blue-500",
    href: "/get-involved",
  },
]

export function GetInvolvedSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find out more & Get Involved</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={card.href}>
                <div
                  className={`${card.color} rounded-2xl p-8 text-white text-center h-80 flex flex-col justify-center items-center hover:shadow-xl transition-all duration-300`}
                >
                  <card.icon className="w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-white/90 leading-relaxed">{card.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
