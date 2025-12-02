"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Find a Trainer",
      description: "Browse elite traders on the leaderboard and check their verified performance metrics.",
      icon: "🔍",
    },
    {
      number: 2,
      title: "Subscribe with $1CARD",
      description: "Pay a weekly or monthly subscription fee to access real-time copy trading for that trainer.",
      icon: "💳",
    },
    {
      number: 3,
      title: "Copy Trades Automatically",
      description: "Every trade executed by your chosen trainer is instantly mirrored to your wallet on Solana.",
      icon: "⚡",
    },
    {
      number: 4,
      title: "Earn & Burn",
      description: "Share profits, grow your portfolio, and participate in a deflationary token economy.",
      icon: "📈",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary rounded-full mix-blend-screen blur-3xl opacity-10" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent rounded-full mix-blend-screen blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Works.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to start copying elite traders and building wealth on Solana.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-background mb-4">
                  {step.number}
                </div>
                {step.number < 4 && (
                  <div className="hidden md:block absolute top-8 left-20 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              <div className="text-4xl mt-6 mb-0">{step.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
