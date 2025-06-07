"use client"

import { motion, useInView } from "framer-motion"
import { Heart, Megaphone, HandHeart, Users } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const cards = [
  {
    icon: Heart,
    title: "Awareness",
    description:
      "Raising awareness about lupus and its impact on individuals and families through education and outreach programs.",
    href: "/awareness",
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    description: "Advocating for better healthcare policies, research funding, and support systems for lupus patients.",
    href: "/advocacy",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
  },
  {
    icon: HandHeart,
    title: "Support",
    description: "Providing emotional, financial, and practical support to lupus warriors and their families.",
    href: "/support",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Creating connections and building a strong community of lupus warriors, caregivers, and supporters.",
    href: "/networking",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
  },
]

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -15,
    scale: 0.8,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
  hover: {
    y: -20,
    scale: 1.05,
    rotateY: 5,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      type: "spring",
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
}

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.7,
    },
  },
}

const glowVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0, 0.5, 0],
    scale: [0, 1.5, 2],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 3,
    },
  },
}

export function AwarenessCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/placeholder.svg?height=800&width=1200&text=People+Community+Background')`,
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-purple-50/50 to-white/90"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            animate={
              isInView
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            style={{
              background: "linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899, #6366f1)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Objectives
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We are committed to supporting lupus warriors through comprehensive programs designed to educate, advocate,
            support, and connect our community.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className="group h-full perspective-1000"
            >
              <Link href={card.href}>
                <div
                  className={`relative bg-gradient-to-br ${card.bgColor} rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 text-center h-full flex flex-col justify-between min-h-[320px] backdrop-blur-sm overflow-hidden`}
                >
                  {/* Animated glow effect */}
                  <motion.div
                    variants={glowVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-20 rounded-3xl`}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                      delay: index * 0.5,
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      variants={iconVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover="hover"
                      className={`w-20 h-20 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg relative`}
                    >
                      <card.icon className="w-10 h-10 text-white" />

                      {/* Icon pulse effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-full`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>

                    <motion.h3
                      variants={titleVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover="hover"
                      className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300"
                    >
                      {card.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    variants={descriptionVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300 relative z-10"
                  >
                    {card.description}
                  </motion.p>

                  {/* Bottom border animation */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${card.color}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Floating action elements */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <p className="text-gray-600 text-lg">Scroll down to learn more about our community</p>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="mt-4"
            >
              <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto flex justify-center">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-3 bg-purple-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
