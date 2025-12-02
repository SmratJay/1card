import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TokenStats from "@/components/token-stats"
import VaultCTA from "@/components/vault-cta"
import HowItWorks from "@/components/how-it-works"
import FooterCTA from "@/components/footer-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <TokenStats />
      <VaultCTA />
      <FooterCTA />
    </main>
  )
}
