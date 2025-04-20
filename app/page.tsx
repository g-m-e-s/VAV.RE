import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Modules from "@/components/modules"
import MicrosoftBadge from "@/components/ms-badge"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import CursorEffect from "@/components/cursor-effect"
import PageTransition from "@/components/page-transition"
import StructuredData from "@/components/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <StructuredData />
      <PageTransition />
      <Header />
      <Hero />
      <About />
      <Modules />
      <MicrosoftBadge />
      <FAQSection />
      <Footer />
      <ScrollToTop />
      <CursorEffect />
    </main>
  )
}
