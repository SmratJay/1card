"use client"

import type React from "react"

interface TierProps {
  name: string
  stake: string
  feeShare: string
  status: string
  highlight?: boolean
}

const TierCard: React.FC<TierProps> = ({ name, stake, feeShare, status, highlight }) => (
  <div
    className={`p-8 rounded-lg border transition-all duration-300 ${
      highlight
        ? "border-primary bg-gradient-to-br from-primary/10 to-accent/10 ring-2 ring-primary/50 scale-105"
        : "border-border bg-secondary/30 hover:border-accent/50 hover:neon-glow"
    }`}
  >
    <h3 className="text-xl font-bold text-foreground mb-6">{name}</h3>
    <div className="mb-6">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Stake Required</p>
      <p className="text-3xl font-bold text-primary">{stake}</p>
    </div>
    <div className="mb-6">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Fee Share</p>
      <p className="text-2xl font-bold text-accent">{feeShare}</p>
    </div>
    <p className="text-xs text-muted-foreground mb-6">{status}</p>
    <button
      className={`w-full py-3 font-bold rounded-lg border transition-all ${
        highlight ? "btn-primary" : "btn-secondary"
      }`}
    >
      Stake Now
    </button>
  </div>
)

export default function VaultCTA() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Become a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Trainer.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stake $1CARD to unlock trainer status, build your reputation, and earn fees from acolytes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <TierCard name="Basic Trainer" stake="50M $1CARD" feeShare="40%" status="Public Listing" />
          <TierCard name="Gym Leader" stake="250M $1CARD" feeShare="50%" status="Featured Placement" highlight={true} />
          <TierCard name="Elite Four" stake="500M $1CARD" feeShare="60%" status="Exclusive Access" />
        </div>
      </div>
    </section>
  )
}
