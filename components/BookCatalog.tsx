"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useBooks } from "@/contexts/BookContext"
import { useCart } from "@/contexts/CartContext"
import { useAuth } from "@/contexts/AuthContext"
import { useToast } from "@/hooks/use-toast"
import { BookSkeleton } from "@/components/BookSkeleton"
import { Search, Star, ShoppingCart, Filter, Grid, List } from "lucide-react"

export default function BookCatalog() {
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredBooks, setFilteredBooks] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const { books, categories, searchBooks } = useBooks()
  const { addToCart } = useCart()
  const { isAuthenticated } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    // Simulate loading
    setIsLoading(true)
    const timer = setTimeout(() => {
      let result = books

      if (searchQuery.trim()) {
        result = searchBooks(searchQuery)
      }

      if (selectedCategory !== "all") {
        result = result.filter((book) => book.category === selectedCategory)
      }

      setFilteredBooks(result)
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [searchQuery, selectedCategory, books, searchBooks])

  const handleAddToCart = (book: any) => {
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "Please login to add items to your cart.",
        variant: "destructive",
      })
      return
    }

    addToCart(book)
    toast({
      title: "Added to cart",
      description: `${book.title} has been added to your cart.`,
    })
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search books, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex border rounded-md">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Grid View</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>List View</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold">
            {searchQuery ? `Search Results for "${searchQuery}"` : "All Books"}
          </h2>
          <span className="text-muted-foreground">
            {isLoading ? "Loading..." : `${filteredBooks.length} book${filteredBooks.length !== 1 ? "s" : ""} found`}
          </span>
        </div>

        {/* Book Grid/List */}
        {isLoading ? (
          <div
            className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <BookSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div
            className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}
          >
            {filteredBooks.map((book) => (
              <Card
                key={book.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <div
                  className={viewMode === "grid" ? "aspect-[3/4] bg-muted relative overflow-hidden" : "flex gap-4 p-4"}
                >
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className={
                      viewMode === "grid"
                        ? "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        : "w-24 h-32 object-cover rounded"
                    }
                  />
                  {!book.inStock && (
                    <Badge variant="destructive" className="absolute top-2 right-2">
                      Out of Stock
                    </Badge>
                  )}

                  {viewMode === "list" && (
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-serif font-semibold text-lg line-clamp-1">{book.title}</h3>
                        <p className="text-muted-foreground">{book.author}</p>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">${book.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{book.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {book.category}
                        </Badge>
                        <Button onClick={() => handleAddToCart(book)} disabled={!book.inStock} size="sm">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {book.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {viewMode === "grid" && (
                  <>
                    <CardHeader className="pb-2">
                      <CardTitle className="line-clamp-2 text-lg font-serif">{book.title}</CardTitle>
                      <CardDescription>{book.author}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">${book.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{book.rating}</span>
                        </div>
                      </div>

                      <Badge variant="secondary" className="text-xs">
                        {book.category}
                      </Badge>

                      <Button
                        onClick={() => handleAddToCart(book)}
                        disabled={!book.inStock}
                        className="w-full"
                        size="sm"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {book.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>
        )}

        {!isLoading && filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No books found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}
