"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WhatIsLupusPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">What is Lupus?</h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Understanding the autoimmune disease that affects millions worldwide
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Lupus</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lupus is a chronic autoimmune disease that occurs when your body's immune system attacks your own tissues
              and organs. The inflammation caused by lupus can affect many different body systems — including your skin,
              joints, kidneys, heart, lungs, and blood vessels.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Lupus</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Systemic Lupus Erythematosus (SLE) - the most common form</li>
              <li>Cutaneous Lupus - affects only the skin</li>
              <li>Drug-induced Lupus - triggered by certain medications</li>
              <li>Neonatal Lupus - affects newborn babies</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Symptoms</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Fatigue and fever</li>
              <li>Joint pain, stiffness and swelling</li>
              <li>Butterfly-shaped rash on the face</li>
              <li>Skin rashes on other parts of the body</li>
              <li>Chest pain and shortness of breath</li>
              <li>Hair loss</li>
              <li>Sensitivity to light</li>
            </ul>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Need Support?</h3>
              <p className="text-purple-800 mb-4">
                If you or someone you know is living with lupus, you're not alone. Our community is here to provide
                support, resources, and hope.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Link href="/get-involved">Join Our Community</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
