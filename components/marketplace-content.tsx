"use client"

import Image from 'next/image'
import { motion } from 'motion/react'
import { Heart, ShoppingBag, Plus, Store, AlertCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Item } from '@/lib/items'

interface MarketplaceContentProps {
  items: Item[]
  error: string | null
}

export function MarketplaceContent({ items, error }: MarketplaceContentProps) {
  return (
    <main className='container mx-auto px-4 py-8 space-y-8'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center space-y-4'
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent'
        >
          AI-Powered Marketplace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='text-xl text-muted-foreground max-w-2xl mx-auto'
        >
          Discover unique products tailored to your needs with our intelligent marketplace
        </motion.p>
      </motion.div>

      {/* Error State */}
      {error ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className='border-destructive/50 bg-destructive/5'>
            <CardHeader className='text-center'>
              <div className='flex justify-center mb-2'>
                <AlertCircle className='h-12 w-12 text-destructive' />
              </div>
              <CardTitle className='text-destructive'>Connection Error</CardTitle>
              <CardDescription className='text-destructive/80'>
                {error}
              </CardDescription>
            </CardHeader>
            <CardFooter className='justify-center'>
              <p className='text-sm text-muted-foreground'>
                Make sure MongoDB is connected and check your environment variables.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      ) : (
        <div className='space-y-8'>
          {/* Stats & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div>
                    <CardTitle className='flex items-center gap-2'>
                      <Store className='h-5 w-5' />
                      Marketplace Items
                    </CardTitle>
                    <CardDescription>
                      {items.length} {items.length === 1 ? 'item' : 'items'} available
                    </CardDescription>
                  </div>
                  <div className='flex gap-3'>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className='gap-2'>
                        <Plus className='h-4 w-4' />
                        Add Item
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant='outline' className='gap-2'>
                        <ShoppingBag className='h-4 w-4' />
                        Manage
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Items Grid */}
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Card className='py-16'>
                <CardContent className='text-center space-y-6'>
                  <div className='w-20 h-20 bg-muted rounded-full mx-auto flex items-center justify-center'>
                    <Store className='w-10 h-10 text-muted-foreground' />
                  </div>
                  <div className='space-y-2'>
                    <CardTitle className='text-muted-foreground'>
                      No items yet
                    </CardTitle>
                    <CardDescription className='max-w-md mx-auto'>
                      Start building your marketplace by adding some amazing products
                    </CardDescription>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size='lg' className='gap-2'>
                      <Plus className='h-4 w-4' />
                      Add Your First Item
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            >
              {items.map((item, index) => (
                <motion.div
                  key={String(item._id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className='group'
                >
                  <Card className='overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300'>
                    {/* Image */}
                    {item.imageUrl ? (
                      <div className='aspect-square bg-muted overflow-hidden relative'>
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className='object-cover group-hover:scale-105 transition-transform duration-300'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                        />
                      </div>
                    ) : (
                      <div className='aspect-square bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center'>
                        <ShoppingBag className='w-12 h-12 text-muted-foreground' />
                      </div>
                    )}

                    {/* Content */}
                    <CardHeader className='flex-1'>
                      <CardTitle className='line-clamp-2 group-hover:text-primary transition-colors'>
                        {item.title}
                      </CardTitle>
                      {item.description && (
                        <CardDescription className='line-clamp-2'>
                          {item.description}
                        </CardDescription>
                      )}
                    </CardHeader>

                    <CardContent>
                      <div className='flex items-center justify-between mb-4'>
                        <span className='text-2xl font-bold text-primary'>
                          ${item.price.toFixed(2)}
                        </span>
                        {item.category && (
                          <Badge variant='secondary'>
                            {item.category}
                          </Badge>
                        )}
                      </div>
                    </CardContent>

                    {/* Actions */}
                    <CardFooter className='gap-2'>
                      <motion.div 
                        whileHover={{ scale: 1.02 }} 
                        whileTap={{ scale: 0.98 }}
                        className='flex-1'
                      >
                        <Button className='w-full gap-2'>
                          <ShoppingBag className='h-4 w-4' />
                          View Details
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button variant='outline' size='icon'>
                          <Heart className='h-4 w-4' />
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      )}
    </main>
  )
}