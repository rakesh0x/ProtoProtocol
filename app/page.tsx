import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Dashboard } from "@/components/dashboard"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <Hero />
      <Dashboard />
      <Stats />
      <Features />
      <Partners />
      <Footer />
    </main>
  )
}
