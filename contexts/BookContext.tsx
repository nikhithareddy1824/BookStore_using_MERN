"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"

export interface Book {
  id: string
  title: string
  author: string
  price: number
  image: string
  description: string
  category: string
  rating: number
  inStock: boolean
}

interface BookContextType {
  books: Book[]
  categories: string[]
  searchBooks: (query: string) => Book[]
  getBooksByCategory: (category: string) => Book[]
  getBookById: (id: string) => Book | undefined
}

const BookContext = createContext<BookContextType | undefined>(undefined)

export const useBooks = () => {
  const context = useContext(BookContext)
  if (context === undefined) {
    throw new Error("useBooks must be used within a BookProvider")
  }
  return context
}

interface BookProviderProps {
  children: ReactNode
}

// Sample book data
const sampleBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    image: "/great-gatsby-book-cover.png",
    description: "A classic American novel set in the Jazz Age.",
    category: "Fiction",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 14.99,
    image: "/to-kill-a-mockingbird-cover.png",
    description: "A gripping tale of racial injustice and childhood innocence.",
    category: "Fiction",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "3",
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 29.99,
    image: "/clean-code-book-cover.png",
    description: "A handbook of agile software craftsmanship.",
    category: "Technology",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "4",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 18.99,
    image: "/psychology-of-money-book-cover.png",
    description: "Timeless lessons on wealth, greed, and happiness.",
    category: "Business",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "5",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 16.99,
    image: "/sapiens-book-cover.png",
    description: "A brief history of humankind and our species' journey.",
    category: "History",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "6",
    title: "Atomic Habits",
    author: "James Clear",
    price: 19.99,
    image: "/atomic-habits-inspired-cover.png",
    description: "An easy and proven way to build good habits and break bad ones.",
    category: "Self Help",
    rating: 4.9,
    inStock: true,
  },
]

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [books] = useState<Book[]>(sampleBooks)

  const categories = [...new Set(books.map((book) => book.category))]

  const searchBooks = (query: string): Book[] => {
    if (!query.trim()) return books

    const lowercaseQuery = query.toLowerCase()
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowercaseQuery) ||
        book.author.toLowerCase().includes(lowercaseQuery) ||
        book.category.toLowerCase().includes(lowercaseQuery),
    )
  }

  const getBooksByCategory = (category: string): Book[] => {
    return books.filter((book) => book.category === category)
  }

  const getBookById = (id: string): Book | undefined => {
    return books.find((book) => book.id === id)
  }

  const value = {
    books,
    categories,
    searchBooks,
    getBooksByCategory,
    getBookById,
  }

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}
