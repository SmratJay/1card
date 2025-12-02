export default function FeaturesSection() {
  const features = [
    {
      title: "Elite Trainer Ranking",
      description:
        "Access a curated leaderboard of top-performing traders ranked by ROI, consistency, and community trust.",
      icon: "🏆",
    },
    {
      title: "1CARD Vault Staking",
      description: "Stake $1CARD to unlock trainer status. Higher stakes = higher visibility and greater fee shares.",
      icon: "🔒",
    },
    {
      title: "Copy Trading Engine",
      description:
        "Real-time trade replication powered by smart contracts. Execute trades simultaneously with your chosen trainer.",
      icon: "⚙️",
    },
    {
      title: "Deflationary Tokenomics",
      description: "Every copy trade burns $1CARD, creating permanent scarcity and rewarding long-term holders.",
      icon: "🔥",
    },
    {
      title: "Performance Collateral",
      description: "Trainers' staked $1CARD can be slashed for underperformance, protecting acolytes from rug pulls.",
      icon: "🛡️",
    },
    {
      title: "Battle Arena Rewards",
      description:
        "Compete for monthly leaderboard prizes in $1CARD. Top performers earn exclusive status and rewards.",
      icon: "⚡",
    },
  ]

  return (
    <section id="features" className="relative py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Designed for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Traders.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to copy elite traders and build wealth on Solana, powered by $1CARD.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-border bg-secondary/30 hover:border-accent/50 transition-all duration-300 hover:neon-glow-cyan group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
