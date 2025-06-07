"use client"

import { HeroSection } from "@/components/hero-section"
import { AwarenessCards } from "@/components/awareness-cards"
import { AboutSection } from "@/components/about-section"
import { ImageGallery } from "@/components/image-gallery"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { LendHandSection } from "@/components/lend-hand-section"
import { EventsSection } from "@/components/events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WorkTogetherSection } from "@/components/work-together-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="pt-16">
      <HeroSection />
      <AwarenessCards />
      <AboutSection />
      <ImageGallery />
      <GetInvolvedSection />
      <LendHandSection />
      <EventsSection />
      <TestimonialsSection />
      <WorkTogetherSection />
      <WhatsAppButton />
    </main>
  )
}
