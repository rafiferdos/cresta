'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  TrendingUp,
  Sparkles,
  Zap,
  Gift,
} from 'lucide-react'
import { motion } from 'motion/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
    { href: '/categories', label: 'Categories', icon: ShoppingBag },
    { href: '/trending', label: 'Trending', icon: TrendingUp },
    { href: '/new', label: 'New', icon: Sparkles },
    { href: '/deals', label: 'Deals', icon: Gift },
    { href: '/ai-picks', label: 'AI Picks', icon: Zap },
    { href: '/favorites', label: 'Favorites', icon: Heart },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='sticky top-0 z-50 w-full backdrop-blur-xl bg-background/70 shadow-lg shadow-black/5'
    >
      <div className='container mx-auto px-6'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center space-x-3'
          >
            <Link href='/' className='flex items-center space-x-3'>
              <div className='relative'>
                <div className='h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center shadow-lg'>
                  <Sparkles className='h-5 w-5 text-primary-foreground' />
                </div>
                <div className='absolute inset-0 bg-primary/20 rounded-xl blur-md'></div>
              </div>
              <span className='text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent'>
                Cresta
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links - Hidden on small screens */}
          <div className='hidden lg:flex items-center space-x-1'>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Button
                  variant='ghost'
                  size='sm'
                  asChild
                  className='cursor-pointer text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 backdrop-blur-sm'
                >
                  <Link
                    href={link.href}
                    className='flex items-center space-x-2'
                  >
                    <link.icon className='h-4 w-4' />
                    <span>{link.label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Search and Profile Section */}
          <div className='flex items-center space-x-4'>
            {/* Search */}
            <div className='relative'>
              {isSearchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='flex items-center'
                >
                  <Input
                    type='search'
                    placeholder='Search amazing products...'
                    className='w-64 lg:w-80 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-200'
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </motion.div>
              ) : (
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setIsSearchOpen(true)}
                  className='cursor-pointer text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200'
                >
                  <Search className='h-5 w-5' />
                  <span className='sr-only'>Search</span>
                </Button>
              )}
            </div>

            {/* Profile/Login */}
            {isLoggedIn && user ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant='ghost'
                  size='sm'
                  className='cursor-pointer flex items-center space-x-2 hover:bg-accent/50 transition-all duration-200'
                >
                  <Avatar className='h-7 w-7'>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className='text-sm bg-primary/10 text-primary'>
                      {user.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className='hidden sm:inline font-medium'>
                    {user.name}
                  </span>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='sm'
                  className='cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200'
                >
                  <User className='h-4 w-4 mr-2' />
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
