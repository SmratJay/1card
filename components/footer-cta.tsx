"use client"

export default function FooterCTA() {
  return (
    <section className="relative py-20 md:py-32 px-4 bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary rounded-full mix-blend-screen blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent rounded-full mix-blend-screen blur-3xl opacity-20" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Start{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Trading?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Connect your Solana wallet and join thousands of traders copying elite performers. Start earning passive
          income today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary text-lg px-8 py-4">Get Early Access</button>
          <button className="btn-secondary text-lg px-8 py-4">Learn More</button>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center mb-12">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-1">2.5B</p>
            <p className="text-xs text-muted-foreground">$1CARD Staked</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-accent mb-1">150M</p>
            <p className="text-xs text-muted-foreground">Burned</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-1">5.2K</p>
            <p className="text-xs text-muted-foreground">Active Traders</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Powered by Solana • Non-Custodial • Smart Contract Verified • Gas-Optimized
        </p>
      </div>
    </section>
  )
}
