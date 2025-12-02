"use client"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight text-balance">
          Your Unfair{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
            Advantage.
          </span>{" "}
          Onchain.
        </h1>

        <div className="mb-8 flex justify-center">
          <div className="px-6 py-3 rounded-full bg-secondary border border-accent/30 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-semibold text-foreground">Copy Like a Machine</p>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary">⚡</span>
            <span>Copy Elite Traders</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">✨</span>
            <span>Real-Time Execution</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">💰</span>
            <span>Earn Together</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">🔐</span>
            <span>Non-Custodial</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Get Early Access</button>
          <button className="btn-secondary">Follow us</button>
        </div>

        {/* Footer text */}
        <p className="text-xs text-muted-foreground mt-12">Powered by Solana • Non-Custodial • Gas-Optimized</p>
      </div>
    </section>
  )
}
