"use client"

import { useState, useEffect } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export default function TokenStats() {
  const [burned, setBurned] = useState(0)
  const maxBurned = 150000000

  useEffect(() => {
    let currentValue = 0
    const increment = maxBurned / 60
    const interval = setInterval(() => {
      currentValue += increment
      if (currentValue >= maxBurned) {
        currentValue = maxBurned
        clearInterval(interval)
      }
      setBurned(currentValue)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const feeDistribution = [
    { name: "Trainer Reward (50%)", value: 50, color: "#00ff88" },
    { name: "Token Burn (20%)", value: 20, color: "#ff0055" },
    { name: "Treasury (15%)", value: 15, color: "#00ffff" },
    { name: "Acolyte Rewards (15%)", value: 15, color: "#ffd700" },
  ]

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B"
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M"
    return num.toFixed(0)
  }

  const renderLabel = (entry: any) => {
    return `${entry.value}%`
  }

  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Token{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Economics.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time ecosystem metrics powered by $1CARD.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Total Staked */}
          <div className="p-6 rounded-lg border border-border bg-secondary/30 hover:border-accent/50 hover:neon-glow transition-all duration-300">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Total Staked in Vault
            </p>
            <p className="text-5xl font-bold text-primary mb-4">2.5B</p>
            <p className="text-sm text-muted-foreground mb-6">Locked in Trainer Collateral</p>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent h-full" style={{ width: "65%" }} />
            </div>
          </div>

          {/* Total Burned */}
          <div className="p-6 rounded-lg border border-border bg-secondary/30 hover:border-accent/50 hover:neon-glow transition-all duration-300">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Total Burned</p>
            <p className="text-5xl font-bold text-destructive mb-4">{formatNumber(burned)}</p>
            <p className="text-sm text-muted-foreground">Deflationary pressure from every trade</p>
          </div>

          {/* Fee Distribution */}
          <div className="p-6 rounded-lg border border-border bg-secondary/30 hover:border-accent/50 hover:neon-glow transition-all duration-300 md:col-span-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Acolyte Fee Distribution Breakdown
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="w-full lg:w-1/2">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={feeDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      dataKey="value"
                      label={renderLabel}
                      labelLine={false}
                    >
                      {feeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => `${value}%`}
                      contentStyle={{
                        backgroundColor: "rgba(15, 20, 25, 0.95)",
                        border: "1px solid #00ff88",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full lg:w-1/2 space-y-3">
                {feeDistribution.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground flex-1">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
