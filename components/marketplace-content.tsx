"use client"

import Image from 'next/image'
import { motion } from 'motion/react'
import { Heart, ShoppingBag, Plus, Store, AlertCircle, Sparkles, TrendingUp, Zap } from 'lucide-react'

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
    <main className='min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90'>
      <div className='container mx-auto px-6 py-12 space-y-12'>
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center space-y-6'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20'
          >
            <Sparkles className='h-4 w-4 text-primary' />
            <span className='text-sm font-medium text-primary'>AI-Powered Marketplace</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent'
          >
            Discover Amazing
            <br />
            <span className='bg-gradient-to-r from-primary/80 via-primary to-primary/90 bg-clip-text text-transparent'>
              Products
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'
          >
            Experience the future of shopping with our intelligent marketplace that understands your needs and preferences
          </motion.p>
        </motion.div>

        {/* Error State */}
        {error ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='max-w-2xl mx-auto'
          >
            <Card className='border-destructive/30 bg-destructive/5 backdrop-blur-sm'>
              <CardHeader className='text-center pb-4'>
                <div className='flex justify-center mb-4'>
                  <div className='p-3 rounded-full bg-destructive/10'>
                    <AlertCircle className='h-8 w-8 text-destructive' />
                  </div>
                </div>
                <CardTitle className='text-destructive text-xl'>Connection Error</CardTitle>
                <CardDescription className='text-destructive/80 text-base'>
                  {error}
                </CardDescription>
              </CardHeader>
              <CardFooter className='justify-center pt-0'>
                <p className='text-sm text-muted-foreground text-center'>
                  Make sure MongoDB is connected and check your environment variables.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        ) : (
          <div className='space-y-10'>
            {/* Stats & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Card className='backdrop-blur-sm bg-card/50 border-border/50 shadow-xl'>
                <CardHeader>
                  <div className='flex items-center justify-between'>
                    <div className='space-y-2'>
                      <CardTitle className='flex items-center gap-3 text-2xl'>
                        <div className='p-2 rounded-lg bg-primary/10'>
                          <Store className='h-6 w-6 text-primary' />
                        </div>
                        Marketplace Collection
                      </CardTitle>
                      <CardDescription className='text-base'>
                        {items.length} {items.length === 1 ? 'exceptional item' : 'exceptional items'} curated for you
                      </CardDescription>
                    </div>
                    <div className='flex gap-3'>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className='cursor-pointer gap-2 px-6 shadow-lg hover:shadow-xl transition-all duration-200'>
                          <Plus className='h-4 w-4' />
                          Add Item
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant='outline' className='cursor-pointer gap-2 px-6 backdrop-blur-sm hover:bg-accent/50 transition-all duration-200'>
                          <TrendingUp className='h-4 w-4' />
                          Analytics
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className='max-w-2xl mx-auto'
              >
                <Card className='py-20 backdrop-blur-sm bg-card/30 border-border/50 shadow-xl'>
                  <CardContent className='text-center space-y-8'>
                    <div className='relative'>
                      <div className='w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm'>
                        <Store className='w-12 h-12 text-primary' />
                      </div>
                      <div className='absolute inset-0 bg-primary/5 rounded-full blur-xl'></div>
                    </div>
                    <div className='space-y-4'>
                      <CardTitle className='text-3xl text-muted-foreground'>
                        Your marketplace awaits
                      </CardTitle>
                      <CardDescription className='text-lg max-w-md mx-auto leading-relaxed'>
                        Start building your amazing marketplace by adding your first product and watch the magic happen
                      </CardDescription>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size='lg' className='cursor-pointer gap-3 px-8 py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-200'>
                        <Plus className='h-5 w-5' />
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
                transition={{ delay: 1.0, duration: 1.0 }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
              >
                {items.map((item, index) => (
                  <motion.div
                    key={String(item._id)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className='group'
                  >
                    <Card className='overflow-hidden h-full flex flex-col backdrop-blur-sm bg-card/60 border-border/50 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300'>
                      {/* Image */}
                      {item.imageUrl ? (
                        <div className='aspect-square bg-muted/50 overflow-hidden relative'>
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className='object-cover transition-transform duration-500 group-hover:scale-110'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                      ) : (
                        <div className='aspect-square bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center backdrop-blur-sm'>
                          <ShoppingBag className='w-16 h-16 text-muted-foreground/60' />
                        </div>
                      )}

                      {/* Content */}
                      <CardHeader className='flex-1 pb-3'>
                        <CardTitle className='line-clamp-2 group-hover:text-primary transition-colors duration-200 text-lg'>
                          {item.title}
                        </CardTitle>
                        {item.description && (
                          <CardDescription className='line-clamp-2 text-base leading-relaxed'>
                            {item.description}
                          </CardDescription>
                        )}
                      </CardHeader>

                      <CardContent className='pb-3'>
                        <div className='flex items-center justify-between'>
                          <span className='text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
                            ${item.price.toFixed(2)}
                          </span>
                          {item.category && (
                            <Badge variant='secondary' className='bg-primary/10 text-primary border-primary/20 backdrop-blur-sm'>
                              {item.category}
                            </Badge>
                          )}
                        </div>
                      </CardContent>

                      {/* Actions */}
                      <CardFooter className='gap-3 pt-0'>
                        <motion.div 
                          whileHover={{ scale: 1.02 }} 
                          whileTap={{ scale: 0.98 }}
                          className='flex-1'
                        >
                          <Button className='cursor-pointer w-full gap-2 shadow-lg hover:shadow-xl transition-all duration-200'>
                            <ShoppingBag className='h-4 w-4' />
                            View Details
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button variant='outline' size='icon' className='cursor-pointer backdrop-blur-sm hover:bg-accent/50 border-border/50'>
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
      </div>
    </main>
  )
}