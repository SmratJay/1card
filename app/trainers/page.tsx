"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data - will be replaced with real data from database
const MOCK_TRAINERS = [
  {
    id: 1,
    name: "CryptoAsh",
    tier: 3,
    avatar: "/placeholder-user.jpg",
    roi7d: 350,
    followers: 1200,
    stake: 500_000_000,
    winRate: 78,
  },
  {
    id: 2,
    name: "SolanaBrock",
    tier: 2,
    avatar: "/placeholder-user.jpg",
    roi7d: 185,
    followers: 840,
    stake: 250_000_000,
    winRate: 72,
  },
  {
    id: 3,
    name: "MistyTrader",
    tier: 2,
    avatar: "/placeholder-user.jpg",
    roi7d: 220,
    followers: 950,
    stake: 300_000_000,
    winRate: 75,
  },
]

export default function TrainersPage() {
  const { publicKey, connected } = useWallet()
  const [subscribedTrainers, setSubscribedTrainers] = useState<number[]>([])

  const handleSubscribe = async (trainerId: number) => {
    if (!connected || !publicKey) {
      alert("Please connect your wallet first")
      return
    }

    // TODO: Call smart contract paySubscription function
    alert(`Subscribing to trainer ${trainerId}... (Smart contract integration coming soon)`)
    setSubscribedTrainers([...subscribedTrainers, trainerId])
  }

  const getTierBadge = (tier: number) => {
    switch (tier) {
      case 3:
        return <Badge className="bg-yellow-500">🏆 Elite Four</Badge>
      case 2:
        return <Badge className="bg-blue-500">⚡ Gym Leader</Badge>
      case 1:
        return <Badge variant="secondary">🎮 Basic Trainer</Badge>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 pixel-text">BATTLE ARENA</h1>
          <p className="text-lg text-muted-foreground">
            Copy the best Trainers and level up your portfolio
          </p>
          {!connected && (
            <div className="mt-6">
              <WalletMultiButton className="btn-primary" />
            </div>
          )}
        </div>

        {/* Featured Trainers */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🌟 Featured Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_TRAINERS.map((trainer) => (
              <Card key={trainer.id} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={trainer.avatar} />
                      <AvatarFallback>{trainer.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{trainer.name}</CardTitle>
                      <div className="mt-1">{getTierBadge(trainer.tier)}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <p className="text-2xl font-bold text-green-500">+{trainer.roi7d}%</p>
                      <p className="text-xs text-muted-foreground">7D ROI</p>
                    </div>
                    <div className="text-center p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <p className="text-2xl font-bold">{trainer.winRate}%</p>
                      <p className="text-xs text-muted-foreground">Win Rate</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Followers:</span>
                      <span className="font-semibold">{trainer.followers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vault Stake:</span>
                      <span className="font-semibold">
                        {(trainer.stake / 1_000_000).toFixed(0)}M $1CARD
                      </span>
                    </div>
                  </div>

                  {/* Subscription Fee */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground">Monthly Subscription</p>
                    <p className="text-xl font-bold">
                      {trainer.tier === 3 ? "80M" : trainer.tier === 2 ? "65M" : "50M"} $1CARD
                    </p>
                  </div>

                  {/* Action Button */}
                  {subscribedTrainers.includes(trainer.id) ? (
                    <Button className="w-full" variant="secondary" disabled>
                      ✓ Subscribed
                    </Button>
                  ) : (
                    <Button
                      className="w-full btn-primary"
                      onClick={() => handleSubscribe(trainer.id)}
                      disabled={!connected}
                    >
                      {connected ? "Copy Now" : "Connect Wallet"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle>How Copy Trading Works</CardTitle>
            <CardDescription>Follow these simple steps to start copying successful Trainers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">1️⃣</div>
                <h3 className="font-bold mb-2">Choose a Trainer</h3>
                <p className="text-sm text-muted-foreground">
                  Browse Trainers and check their performance metrics
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">2️⃣</div>
                <h3 className="font-bold mb-2">Pay Subscription</h3>
                <p className="text-sm text-muted-foreground">
                  Pay monthly fee in $1CARD to access their signals
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">3️⃣</div>
                <h3 className="font-bold mb-2">Get Trade Signals</h3>
                <p className="text-sm text-muted-foreground">
                  Receive real-time trade alerts in your private channel
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
