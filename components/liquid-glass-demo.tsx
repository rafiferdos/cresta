'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

export function LiquidGlassDemo() {
  return (
    <div className='p-8 space-y-8'>
      {/* SVG Filter Definition */}
      <svg style={{ display: 'none' }}>
        <defs>
          <filter
            id='glass-distort'
            x='-20%'
            y='-20%'
            width='140%'
            height='140%'
          >
            <feTurbulence
              baseFrequency='0.02 0.02'
              numOctaves='3'
              result='turbulence'
              seed='2'
            />
            <feGaussianBlur in='turbulence' stdDeviation='1' result='blur' />
            <feSpecularLighting
              in='blur'
              result='specular'
              lightingColor='white'
              surfaceScale='2'
              specularConstant='0.8'
              specularExponent='20'
            >
              <feDistantLight azimuth='45' elevation='60' />
            </feSpecularLighting>
            <feDisplacementMap
              in='SourceGraphic'
              in2='turbulence'
              scale='2'
              xChannelSelector='R'
              yChannelSelector='G'
            />
          </filter>

          <filter id='glass-blur' x='-20%' y='-20%' width='140%' height='140%'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='0.5' />
          </filter>
        </defs>
      </svg>

      {/* Basic Liquid Glass Card */}
      <div className='liquid-glass-wrapper'>
        <div className='liquid-glass-card w-80 h-48'>
          <div className='glass-distort-layer'></div>
          <div className='glass-tint-layer'></div>
          <div className='glass-shine-layer'></div>
          <div className='content-layer'>
            <h3 className='text-xl font-semibold mb-2'>Liquid Glass Card</h3>
            <p className='text-sm opacity-80 mb-4'>
              This demonstrates the liquid glass effect with Apple-style
              aesthetics.
            </p>
            <Button
              size='sm'
              className='bg-white/20 hover:bg-white/30 border-white/30'
            >
              Action Button
            </Button>
          </div>
        </div>
      </div>

      {/* Interactive Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='liquid-glass-wrapper'>
            <div className='liquid-glass-card w-full h-64'>
              <div className='glass-distort-layer'></div>
              <div className='glass-tint-layer'></div>
              <div className='glass-shine-layer'></div>
              <div className='content-layer'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4 opacity-80'></div>
                <h4 className='text-lg font-medium mb-2'>Feature {i}</h4>
                <p className='text-sm opacity-70 mb-4'>
                  Advanced liquid glass implementation with realistic distortion
                  and lighting effects.
                </p>
                <div className='flex space-x-2'>
                  <Button size='sm' variant='ghost' className='text-xs'>
                    Learn More
                  </Button>
                  <Button
                    size='sm'
                    className='text-xs bg-white/10 hover:bg-white/20'
                  >
                    Try It
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Bar Example */}
      <div className='liquid-glass-wrapper w-full'>
        <div className='liquid-glass-card w-full h-16'>
          <div className='glass-distort-layer'></div>
          <div className='glass-tint-layer'></div>
          <div className='glass-shine-layer'></div>
          <div className='content-layer flex items-center justify-between'>
            <div className='flex items-center space-x-6'>
              <div className='w-8 h-8 bg-gradient-to-br from-pink-400 to-orange-400 rounded-lg opacity-80'></div>
              <nav className='flex space-x-4'>
                <a
                  href='#'
                  className='text-sm font-medium opacity-80 hover:opacity-100 transition-opacity'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='text-sm font-medium opacity-80 hover:opacity-100 transition-opacity'
                >
                  Products
                </a>
                <a
                  href='#'
                  className='text-sm font-medium opacity-80 hover:opacity-100 transition-opacity'
                >
                  About
                </a>
              </nav>
            </div>
            <div className='flex items-center space-x-3'>
              <Button size='sm' variant='ghost' className='text-xs'>
                Sign In
              </Button>
              <Button
                size='sm'
                className='text-xs bg-white/10 hover:bg-white/20'
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal/Dialog Example */}
      <div className='liquid-glass-wrapper max-w-md mx-auto'>
        <div className='liquid-glass-card w-full'>
          <div className='glass-distort-layer'></div>
          <div className='glass-tint-layer'></div>
          <div className='glass-shine-layer'></div>
          <div className='content-layer text-center'>
            <div className='w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full mx-auto mb-4 opacity-80 flex items-center justify-center'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Success!</h3>
            <p className='text-sm opacity-80 mb-6'>
              Your action has been completed successfully. The liquid glass
              effect creates a beautiful, modern interface.
            </p>
            <div className='flex space-x-3 justify-center'>
              <Button size='sm' variant='ghost'>
                Cancel
              </Button>
              <Button size='sm' className='bg-white/10 hover:bg-white/20'>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
