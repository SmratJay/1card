"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const TIER_REQUIREMENTS = {
  1: 50_000_000, // 50M $1CARD
  2: 250_000_000, // 250M $1CARD
  3: 500_000_000, // 500M $1CARD
}

export default function VaultPage() {
  const { publicKey, connected } = useWallet()
  const [stakeAmount, setStakeAmount] = useState("")
  const [currentStake, setCurrentStake] = useState(0) // TODO: Fetch from smart contract

  const getCurrentTier = (stake: number) => {
    if (stake >= TIER_REQUIREMENTS[3]) return 3
    if (stake >= TIER_REQUIREMENTS[2]) return 2
    if (stake >= TIER_REQUIREMENTS[1]) return 1
    return 0
  }

  const currentTier = getCurrentTier(currentStake)

  const handleStake = async () => {
    if (!connected || !publicKey) {
      alert("Please connect your wallet first")
      return
    }
    
    // TODO: Call smart contract registerTrainer function
    alert(`Staking ${stakeAmount} $1CARD... (Smart contract integration coming soon)`)
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 pixel-text">1CARD VAULT</h1>
          <p className="text-lg text-muted-foreground">
            Stake $1CARD to become a Trainer and earn copying fees
          </p>
        </div>

        {!connected ? (
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Connect Your Wallet</CardTitle>
              <CardDescription>Connect your Solana wallet to access the Vault</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <WalletMultiButton className="btn-primary" />
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Current Status */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Your Trainer Status</CardTitle>
                <CardDescription>Wallet: {publicKey?.toBase58().slice(0, 8)}...</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Stake:</span>
                  <span className="text-2xl font-bold">{currentStake.toLocaleString()} $1CARD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Tier:</span>
                  <Badge variant={currentTier > 0 ? "default" : "secondary"}>
                    {currentTier === 3 && "🏆 Elite Four"}
                    {currentTier === 2 && "⚡ Gym Leader"}
                    {currentTier === 1 && "🎮 Basic Trainer"}
                    {currentTier === 0 && "Not Registered"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tier Requirements */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Trainer Tiers</CardTitle>
                <CardDescription>Higher tiers earn more from copying fees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-bold">🎮 Tier 1: Basic Trainer</h3>
                      <p className="text-sm text-muted-foreground">Entry level • 40% fee share</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{(TIER_REQUIREMENTS[1] / 1_000_000).toFixed(0)}M</p>
                      <p className="text-xs text-muted-foreground">$1CARD</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg border-primary/50">
                    <div>
                      <h3 className="font-bold">⚡ Tier 2: Gym Leader</h3>
                      <p className="text-sm text-muted-foreground">Featured • 50% fee share</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{(TIER_REQUIREMENTS[2] / 1_000_000).toFixed(0)}M</p>
                      <p className="text-xs text-muted-foreground">$1CARD</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border-2 rounded-lg border-yellow-500/50 bg-yellow-500/5">
                    <div>
                      <h3 className="font-bold">🏆 Tier 3: Elite Four</h3>
                      <p className="text-sm text-muted-foreground">Exclusive • 60% fee share</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{(TIER_REQUIREMENTS[3] / 1_000_000).toFixed(0)}M</p>
                      <p className="text-xs text-muted-foreground">$1CARD</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Staking Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Stake $1CARD</CardTitle>
                <CardDescription>Lock your tokens to register as a Trainer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Amount to Stake</label>
                  <Input
                    type="number"
                    placeholder="Enter amount in $1CARD"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Minimum: {(TIER_REQUIREMENTS[1] / 1_000_000).toFixed(0)}M $1CARD for Tier 1
                  </p>
                </div>

                <Button onClick={handleStake} className="w-full btn-primary" size="lg">
                  Stake & Register as Trainer
                </Button>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-sm">
                  <p className="font-semibold mb-1">⚠️ Important:</p>
                  <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                    <li>30-day lockup period</li>
                    <li>7-day withdrawal notice required</li>
                    <li>Performance-based slashing may apply</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
