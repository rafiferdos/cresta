'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import {
  Heart,
  ShoppingBag,
  Plus,
  Store,
  AlertCircle,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
            className='liquid-glass inline-flex items-center gap-2 px-6 py-3'
          >
            <Sparkles className='h-4 w-4 text-primary' />
            <span className='text-sm font-medium text-primary'>
              AI-Powered Marketplace
            </span>
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
            Experience the future of shopping with our intelligent marketplace
            that understands your needs and preferences
          </motion.p>
        </motion.div>

        {/* Liquid Glass Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className='space-y-8'
        >
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent'>
              Liquid Glass UI Components
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Experience our marketplace with authentic liquid glass effects
            </p>
          </div>

          {/* Quick Examples Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Basic Liquid Glass */}
            <div className='liquid-glass p-6'>
              <div className='text-2xl mb-3'>🛍️</div>
              <h3 className='font-semibold mb-2'>Shop</h3>
              <p className='text-sm opacity-80'>Basic liquid glass card</p>
              <p className='text-xs mt-3 font-mono text-primary'>
                .liquid-glass
              </p>
            </div>

            {/* Distort Effect */}
            <div className='liquid-glass-distort p-6'>
              <div className='text-2xl mb-3'>🎨</div>
              <h3 className='font-semibold mb-2'>Design</h3>
              <p className='text-sm opacity-80'>Corner distortion effect</p>
              <p className='text-xs mt-3 font-mono text-primary'>
                .liquid-glass-distort
              </p>
            </div>

            {/* Bento Style */}
            <div className='liquid-glass-bento p-6'>
              <div className='text-2xl mb-3'>💫</div>
              <h3 className='font-semibold mb-2'>Flow</h3>
              <p className='text-sm opacity-80'>Animated flow effect</p>
              <p className='text-xs mt-3 font-mono text-primary'>
                .liquid-glass-bento
              </p>
            </div>

            {/* Morphic Style */}
            <div className='liquid-glass-morphic p-6'>
              <div className='text-2xl mb-3'>✨</div>
              <h3 className='font-semibold mb-2'>Premium</h3>
              <p className='text-sm opacity-80'>Rotating gradients</p>
              <p className='text-xs mt-3 font-mono text-primary'>
                .liquid-glass-morphic
              </p>
            </div>
          </div>
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
                <CardTitle className='text-destructive text-xl'>
                  Connection Error
                </CardTitle>
                <CardDescription className='text-destructive/80 text-base'>
                  {error}
                </CardDescription>
              </CardHeader>
              <CardFooter className='justify-center pt-0'>
                <p className='text-sm text-muted-foreground text-center'>
                  Make sure MongoDB is connected and check your environment
                  variables.
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
              <div className='liquid-glass-distort p-8'>
                <div className='flex items-center justify-between'>
                  <div className='space-y-2'>
                    <div className='flex items-center gap-3 text-2xl font-semibold'>
                      <div className='liquid-glass p-3'>
                        <Store className='h-6 w-6 text-primary' />
                      </div>
                      Marketplace Collection
                    </div>
                    <p className='text-base opacity-80'>
                      {items.length}{' '}
                      {items.length === 1
                        ? 'exceptional item'
                        : 'exceptional items'}{' '}
                      curated for you
                    </p>
                  </div>
                  <div className='flex gap-3'>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className='liquid-glass cursor-pointer gap-2 px-6 py-3 bg-transparent border-0 hover:bg-white/10'>
                        <Plus className='h-4 w-4' />
                        Add Item
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className='liquid-glass-bento cursor-pointer gap-2 px-6 py-3 bg-transparent border-0 hover:bg-white/10'>
                        <TrendingUp className='h-4 w-4' />
                        Analytics
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
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
                        Start building your amazing marketplace by adding your
                        first product and watch the magic happen
                      </CardDescription>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size='lg'
                        className='cursor-pointer gap-3 px-8 py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-200'
                      >
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
                    {/* Use different liquid glass effects for variety */}
                    <div
                      className={`overflow-hidden h-full flex flex-col ${
                        index % 4 === 0
                          ? 'liquid-glass-distort'
                          : index % 4 === 1
                          ? 'liquid-glass-bento'
                          : index % 4 === 2
                          ? 'liquid-glass-morphic'
                          : 'liquid-glass'
                      } p-6 hover:bg-white/5 transition-all duration-300`}
                    >
                      {/* Image */}
                      {item.imageUrl ? (
                        <div className='aspect-square bg-muted/20 overflow-hidden relative rounded-xl mb-4'>
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className='object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'></div>
                        </div>
                      ) : (
                        <div className='aspect-square bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center rounded-xl mb-4'>
                          <ShoppingBag className='w-16 h-16 text-muted-foreground/60' />
                        </div>
                      )}

                      {/* Content */}
                      <div className='flex-1 pb-3'>
                        <h3 className='line-clamp-2 group-hover:text-primary transition-colors duration-200 text-lg font-semibold mb-2'>
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className='line-clamp-2 text-base leading-relaxed opacity-80'>
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className='pb-3'>
                        <div className='flex items-center justify-between'>
                          <span className='text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
                            ${item.price.toFixed(2)}
                          </span>
                          {item.category && (
                            <Badge
                              variant='secondary'
                              className='liquid-glass bg-transparent text-primary border-primary/20 px-3 py-1'
                            >
                              {item.category}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className='gap-3 pt-0'>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className='flex-1'
                        >
                          <Button className='liquid-glass cursor-pointer w-full gap-2 bg-transparent border-0 hover:bg-white/10 transition-all duration-200'>
                            <ShoppingBag className='h-4 w-4' />
                            View Details
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        ></motion.div>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Button
                            variant='outline'
                            size='icon'
                            className='liquid-glass cursor-pointer bg-transparent border-0 hover:bg-white/10'
                          >
                            <Heart className='h-4 w-4' />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
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
