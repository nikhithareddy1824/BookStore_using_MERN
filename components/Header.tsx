"use client"

import type React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/AuthContext"
import { useCart } from "@/contexts/CartContext"
import { BookOpen, ShoppingCart, User, LogOut, Search, Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth()
  const { totalItems } = useCart()
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <TooltipProvider>
      <header className="bg-card border-b shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-serif font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <BookOpen className="h-6 w-6" />
              <span className="hidden sm:block">BookStore</span>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search books, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50 border-border/50 focus:bg-background transition-colors"
                />
              </div>
            </form>

            {/* Navigation */}
            <nav className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <Link to="/books">
                  <Button variant="ghost" size="sm" className="font-medium">
                    Browse Books
                  </Button>
                </Link>

                {isAuthenticated ? (
                  <>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link to="/cart" className="relative">
                          <Button variant="ghost" size="sm" className="relative">
                            <ShoppingCart className="h-4 w-4" />
                            {totalItems > 0 && (
                              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-pulse">
                                {totalItems}
                              </Badge>
                            )}
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Shopping Cart ({totalItems} items)</p>
                      </TooltipContent>
                    </Tooltip>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <User className="h-4 w-4" />
                          <span className="hidden sm:inline">{user?.name}</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem asChild>
                          <Link to="/profile" className="cursor-pointer">
                            <User className="h-4 w-4 mr-2" />
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="ghost" size="sm">
                        Login
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              <ModeToggle />

              {/* Mobile Menu */}
              <div className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/books" className="cursor-pointer">
                        Browse Books
                      </Link>
                    </DropdownMenuItem>
                    {isAuthenticated ? (
                      <>
                        <DropdownMenuItem asChild>
                          <Link to="/cart" className="cursor-pointer">
                            Cart ({totalItems})
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/profile" className="cursor-pointer">
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                          Logout
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem asChild>
                          <Link to="/login" className="cursor-pointer">
                            Login
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/register" className="cursor-pointer">
                            Register
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </TooltipProvider>
  )
}
