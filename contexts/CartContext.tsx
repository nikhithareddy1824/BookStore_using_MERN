"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./AuthContext"

export interface CartItem {
  id: string
  title: string
  author: string
  price: number
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (book: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const { user } = useAuth()

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load cart from localStorage when user changes
      if (user) {
        const savedCart = localStorage.getItem(`bookstore_cart_${user.id}`)
        if (savedCart) {
          setItems(JSON.parse(savedCart))
        }
      } else {
        setItems([])
      }
    }
  }, [user])

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save cart to localStorage whenever items change
      if (user) {
        localStorage.setItem(`bookstore_cart_${user.id}`, JSON.stringify(items))
      }
    }
  }, [items, user])

  const addToCart = (book: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === book.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { ...book, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
