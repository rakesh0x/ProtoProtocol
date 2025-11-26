import { Header } from "@/components/header"
import { DashboardPage } from "@/components/dashboard-page"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <DashboardPage />
    </main>
  )
}
