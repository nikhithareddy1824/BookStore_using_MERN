"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { useCart } from "@/contexts/CartContext"
import { User, ShoppingBag, Heart, Settings } from "lucide-react"

export default function Profile() {
  const { user } = useAuth()
  const { totalItems, totalPrice } = useCart()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
          <User className="h-8 w-8 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{user?.name}</h1>
          <p className="text-muted-foreground">{user?.email}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Current Cart
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{totalItems}</p>
              <CardDescription>
                {totalItems} item{totalItems !== 1 ? "s" : ""} worth ${totalPrice.toFixed(2)}
              </CardDescription>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Wishlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">0</p>
              <CardDescription>No items in wishlist yet</CardDescription>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-transparent">
              Edit Profile
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your recent bookstore activity</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No recent activity to display.</p>
        </CardContent>
      </Card>
    </div>
  )
}
