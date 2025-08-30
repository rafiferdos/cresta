"use client"

import * as React from "react"
import Link from "next/link"
import { Search, User, ShoppingBag, Heart, Settings, TrendingUp, Star } from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NavbarProps {
  isLoggedIn?: boolean
  user?: {
    name: string
    avatar?: string
  }
}

export function Navbar({ isLoggedIn = false, user }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)

  const navLinks = [
    { href: "/explore", label: "Explore", icon: TrendingUp },
    { href: "/categories", label: "Categories", icon: ShoppingBag },
    { href: "/trending", label: "Trending", icon: Star },
    { href: "/favorites", label: "Favorites", icon: Heart },
    { href: "/sellers", label: "Sellers", icon: User },
    { href: "/about", label: "About", icon: Settings },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary via-primary/90 to-primary/80 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                Cresta
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links - Hidden on small screens */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Link href={link.href} className="flex items-center space-x-1">
                    <link.icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Search and Profile Section */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center"
                >
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-48 lg:w-64"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </motion.div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              )}
            </div>

            {/* Profile/Login */}
            {isLoggedIn && user ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-xs">
                      {user.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline">{user.name}</span>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <User className="h-4 w-4 mr-1" />
                  <span>Login</span>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}