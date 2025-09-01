'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

export function LiquidGlassDemo() {
  return (
    <div className='p-8 space-y-12'>
      {/* Authentic Liquid Glass Showcase */}
      <div className='text-center space-y-4 mb-12'>
        <h2 className='text-2xl font-bold'>Authentic Liquid Glass Effects</h2>
        <p className='text-muted-foreground max-w-2xl mx-auto'>
          Real liquid glass that bends and distorts at corners, not just blur effects
        </p>
      </div>

      {/* Basic Liquid Glass */}
      <div className='space-y-6'>
        <h3 className='text-xl font-semibold'>Basic Liquid Glass (.liquid-glass)</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='liquid-glass p-6 w-full h-48'>
            <h4 className='text-lg font-medium mb-3'>Basic Effect</h4>
            <p className='text-sm opacity-80 mb-4'>
              Simple liquid glass with subtle corner bending and radial highlights.
            </p>
            <Button size='sm' className='bg-white/10 hover:bg-white/20'>
              Action
            </Button>
          </div>
          
          <div className='liquid-glass p-6 w-full h-48'>
            <div className='w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4 opacity-80'></div>
            <h4 className='text-lg font-medium mb-2'>With Icon</h4>
            <p className='text-sm opacity-70'>
              Liquid glass card with icon and content.
            </p>
          </div>
          
          <div className='liquid-glass p-6 w-full h-48 flex flex-col justify-center items-center text-center'>
            <div className='text-3xl mb-2'>🌊</div>
            <h4 className='text-lg font-medium mb-2'>Centered</h4>
            <p className='text-sm opacity-70'>
              Perfect for dashboards
            </p>
          </div>
        </div>
      </div>

      {/* Distorted Liquid Glass */}
      <div className='space-y-6'>
        <h3 className='text-xl font-semibold'>Corner Distortion (.liquid-glass-distort)</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='liquid-glass-distort p-8 w-full h-64'>
            <h4 className='text-xl font-medium mb-4'>Distorted Corners</h4>
            <p className='text-sm opacity-80 mb-6'>
              Advanced liquid glass with corner bending using clip-path and conic gradients. 
              Notice how the corners are actually bent, not just rounded.
            </p>
            <div className='flex space-x-3'>
              <Button size='sm' variant='ghost' className='text-xs'>
                Learn More
              </Button>
              <Button size='sm' className='text-xs bg-white/10 hover:bg-white/20'>
                Try Now
              </Button>
            </div>
          </div>
          
          <div className='liquid-glass-distort p-8 w-full h-64 flex flex-col justify-between'>
            <div>
              <div className='w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl mb-4 opacity-80'></div>
              <h4 className='text-xl font-medium mb-2'>Premium Card</h4>
              <p className='text-sm opacity-70'>
                Hover to see the elevation effect with enhanced shadows.
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-2xl font-bold'>$99</span>
              <Button size='sm' className='bg-white/15 hover:bg-white/25'>
                Select
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Style Liquid Glass */}
      <div className='space-y-6'>
        <h3 className='text-xl font-semibold'>Bento Style (.liquid-glass-bento)</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='liquid-glass-bento p-6 w-full h-48'>
            <h4 className='text-lg font-medium mb-3'>Flowing Animation</h4>
            <p className='text-sm opacity-80'>
              Watch the subtle liquid flow animation that creates organic movement.
            </p>
          </div>
          
          <div className='liquid-glass-bento p-6 w-full h-48'>
            <div className='text-2xl mb-3'>📊</div>
            <h4 className='text-lg font-medium mb-2'>Analytics</h4>
            <div className='text-sm opacity-70'>
              <div className='flex justify-between mb-1'>
                <span>Users</span>
                <span>1.2k</span>
              </div>
              <div className='flex justify-between'>
                <span>Growth</span>
                <span className='text-green-400'>+12%</span>
              </div>
            </div>
          </div>
          
          <div className='liquid-glass-bento p-6 w-full h-48'>
            <h4 className='text-lg font-medium mb-3'>Masked Corners</h4>
            <p className='text-sm opacity-80'>
              Uses CSS mask for authentic corner bending with flowing effects.
            </p>
          </div>
        </div>
      </div>

      {/* Morphic Liquid Glass */}
      <div className='space-y-6'>
        <h3 className='text-xl font-semibold'>Morphic Style (.liquid-glass-morphic)</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='liquid-glass-morphic p-8 w-full h-72'>
            <h4 className='text-2xl font-medium mb-4'>Rotating Liquid</h4>
            <p className='text-sm opacity-80 mb-6'>
              Features a continuously rotating conic gradient that creates 
              a mesmerizing liquid effect with dynamic light patterns.
            </p>
            <div className='space-y-4'>
              <div className='flex items-center space-x-3'>
                <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                <span className='text-sm'>Continuous animation</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                <span className='text-sm'>Conic gradient borders</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-2 h-2 bg-pink-400 rounded-full'></div>
                <span className='text-sm'>Drop shadow filters</span>
              </div>
            </div>
          </div>
          
          <div className='liquid-glass-morphic p-8 w-full h-72 flex flex-col justify-center items-center text-center'>
            <div className='w-16 h-16 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-2xl mb-6 opacity-90'></div>
            <h4 className='text-2xl font-medium mb-4'>Premium Feature</h4>
            <p className='text-sm opacity-80 mb-6'>
              The most advanced liquid glass effect with rotating light patterns 
              and gradient borders.
            </p>
            <Button className='bg-white/15 hover:bg-white/25 backdrop-blur-sm'>
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>

      {/* Usage Guide */}
      <div className='liquid-glass p-8 space-y-4'>
        <h3 className='text-xl font-semibold'>Available CSS Classes</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-sm'>
          <div>
            <h4 className='font-medium mb-2 text-primary'>Basic Effects:</h4>
            <ul className='space-y-1 opacity-80'>
              <li><code className='bg-white/10 px-2 py-1 rounded'>.liquid-glass</code> - Basic liquid glass</li>
              <li><code className='bg-white/10 px-2 py-1 rounded'>.liquid-glass-distort</code> - Corner distortion</li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium mb-2 text-primary'>Advanced Effects:</h4>
            <ul className='space-y-1 opacity-80'>
              <li><code className='bg-white/10 px-2 py-1 rounded'>.liquid-glass-bento</code> - Flowing animation</li>
              <li><code className='bg-white/10 px-2 py-1 rounded'>.liquid-glass-morphic</code> - Rotating gradients</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
