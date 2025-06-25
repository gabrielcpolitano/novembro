'use client'

import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ProductsSection } from '@/components/products-section'
import { Footer } from '@/components/footer'
import { CartSidebar } from '@/components/cart-sidebar'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}