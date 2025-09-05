"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useBooks } from "@/contexts/BookContext"
import { BookOpen, Star, TrendingUp, Users, Award, Zap } from "lucide-react"

export default function Home() {
  const { books } = useBooks()
  const featuredBooks = books.slice(0, 3)

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4 animate-pulse">
            ✨ New arrivals every week
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to BookStore
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover your next favorite book from our curated collection of bestsellers, classics, and hidden gems. Join
            thousands of readers on their literary journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/books">
              <Button size="lg" className="w-full sm:w-auto group">
                <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Browse Books
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/50 backdrop-blur-sm">
                Join Now - It's Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: BookOpen, label: "Books Available", value: "10,000+" },
          { icon: Users, label: "Happy Readers", value: "50,000+" },
          { icon: Award, label: "Awards Won", value: "25+" },
          { icon: Star, label: "Average Rating", value: "4.8/5" },
        ].map((stat, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
            <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
              Vast Collection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="leading-relaxed">
              Explore thousands of books across all genres, from bestsellers to rare finds. Our collection grows daily
              with new releases and timeless classics.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              Curated Selection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="leading-relaxed">
              Every book is carefully selected and reviewed by our team of literary experts to ensure quality reading
              experiences for all our customers.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
              Fast Delivery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="leading-relaxed">
              Get your books delivered quickly with our express shipping options. Most orders arrive within 2-3 business
              days, completely free.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Featured Books */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold">Featured Books</h2>
            <p className="text-muted-foreground mt-1">Hand-picked selections from our editors</p>
          </div>
          <Link to="/books">
            <Button variant="outline" className="group bg-transparent">
              View All
              <TrendingUp className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredBooks.map((book, index) => (
            <Card
              key={book.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm">#{index + 1} Bestseller</Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1 font-serif">{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${book.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
        <h2 className="text-3xl font-serif font-bold mb-4">Ready to Start Reading?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our community of book lovers and discover your next great read today.
        </p>
        <Link to="/books">
          <Button size="lg" className="group">
            <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Start Browsing
          </Button>
        </Link>
      </section>
    </div>
  )
}
