"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Trainer {
  id: number
  name: string
  rank: "Gym Leader" | "Elite Four"
  roi: number
  followers: number
  stake: string
  avatar: string
}

const trainers: Trainer[] = [
  { id: 1, name: "Brock", rank: "Gym Leader", roi: 350, followers: 1200, stake: "250M", avatar: "⛏️" },
  { id: 2, name: "Misty", rank: "Gym Leader", roi: 420, followers: 1800, stake: "250M", avatar: "💧" },
  { id: 3, name: "Sabrina", rank: "Elite Four", roi: 580, followers: 2100, stake: "500M", avatar: "🔮" },
  { id: 4, name: "Blaine", rank: "Elite Four", roi: 495, followers: 1950, stake: "500M", avatar: "🔥" },
  { id: 5, name: "Erika", rank: "Gym Leader", roi: 380, followers: 1400, stake: "250M", avatar: "🌿" },
]

export default function TrainersCarousel() {
  const [position, setPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setPosition(Math.max(0, position - 1))
    } else {
      setPosition(Math.min(trainers.length - 1, position + 1))
    }
  }

  return (
    <section id="trainers" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Trainers.</span>
          </h2>
          <p className="text-lg text-muted-foreground">Copy elite traders with verified performance history.</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${position * (100 / 2)}%)`,
              }}
            >
              {trainers.map((trainer) => (
                <div key={trainer.id} className="flex-none w-full md:w-1/2 lg:w-1/3">
                  <div className="p-6 rounded-lg border border-border bg-secondary/30 hover:border-accent/50 hover:neon-glow-cyan transition-all duration-300 h-full flex flex-col">
                    {/* Avatar */}
                    <div className="text-6xl mb-4">{trainer.avatar}</div>

                    {/* Name & Rank */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{trainer.name}</h3>
                    <div className="inline-block bg-gradient-to-r from-primary to-accent text-background px-3 py-1 text-xs font-bold mb-6 rounded">
                      {trainer.rank}
                    </div>

                    {/* Stats */}
                    <div className="space-y-3 mb-6 flex-grow">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">7D ROI</span>
                        <span className="text-xl font-bold text-primary">+{trainer.roi}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">Followers</span>
                        <span className="font-bold text-foreground">{trainer.followers.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">Vault Stake</span>
                        <span className="text-sm font-bold text-accent">{trainer.stake} $1CARD</span>
                      </div>
                    </div>

                    <button className="btn-primary w-full">Copy Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-lg border border-border hover:border-accent transition-all duration-300 disabled:opacity-30"
            disabled={position === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-lg border border-border hover:border-accent transition-all duration-300 disabled:opacity-30"
            disabled={position === trainers.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
