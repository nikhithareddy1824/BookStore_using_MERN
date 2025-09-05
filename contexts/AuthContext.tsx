"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load user from localStorage on app start
      const savedUser = localStorage.getItem("bookstore_user")
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    if (typeof window === "undefined") return false

    // Simulate API call - in real app, this would be an actual API request
    const users = JSON.parse(localStorage.getItem("bookstore_users") || "[]")
    const foundUser = users.find((u: any) => u.email === email && u.password === password)

    if (foundUser) {
      const userWithoutPassword = { id: foundUser.id, email: foundUser.email, name: foundUser.name }
      setUser(userWithoutPassword)
      localStorage.setItem("bookstore_user", JSON.stringify(userWithoutPassword))
      return true
    }
    return false
  }

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    if (typeof window === "undefined") return false

    // Simulate API call
    const users = JSON.parse(localStorage.getItem("bookstore_users") || "[]")
    const existingUser = users.find((u: any) => u.email === email)

    if (existingUser) {
      return false // User already exists
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
    }

    users.push(newUser)
    localStorage.setItem("bookstore_users", JSON.stringify(users))

    const userWithoutPassword = { id: newUser.id, email: newUser.email, name: newUser.name }
    setUser(userWithoutPassword)
    localStorage.setItem("bookstore_user", JSON.stringify(userWithoutPassword))
    return true
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== "undefined") {
      localStorage.removeItem("bookstore_user")
    }
  }

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
