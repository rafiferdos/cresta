export default function LiquidGlassShowcase() {
  return (
    <div className='min-h-screen p-8 space-y-12'>
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold'>Liquid Glass CSS Classes</h1>
        <p className='text-lg text-muted-foreground'>
          Use these classes directly in your components for instant liquid glass
          effects
        </p>
      </div>

      {/* Basic Examples */}
      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Basic Usage</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* .liquid-glass */}
          <div className='liquid-glass p-6'>
            <h3 className='font-semibold mb-2'>Basic Glass</h3>
            <p className='text-sm opacity-80 mb-4'>
              Simple liquid glass effect with subtle corner bending
            </p>
            <code className='text-xs bg-white/10 px-2 py-1 rounded'>
              .liquid-glass
            </code>
          </div>

          {/* .liquid-glass-distort */}
          <div className='liquid-glass-distort p-6'>
            <h3 className='font-semibold mb-2'>Corner Distort</h3>
            <p className='text-sm opacity-80 mb-4'>
              Advanced corner distortion with clip-path bending
            </p>
            <code className='text-xs bg-white/10 px-2 py-1 rounded'>
              .liquid-glass-distort
            </code>
          </div>

          {/* .liquid-glass-bento */}
          <div className='liquid-glass-bento p-6'>
            <h3 className='font-semibold mb-2'>Flowing Bento</h3>
            <p className='text-sm opacity-80 mb-4'>
              Animated liquid flow with organic movement
            </p>
            <code className='text-xs bg-white/10 px-2 py-1 rounded'>
              .liquid-glass-bento
            </code>
          </div>

          {/* .liquid-glass-morphic */}
          <div className='liquid-glass-morphic p-6'>
            <h3 className='font-semibold mb-2'>Morphic Style</h3>
            <p className='text-sm opacity-80 mb-4'>
              Rotating gradients with premium effects
            </p>
            <code className='text-xs bg-white/10 px-2 py-1 rounded'>
              .liquid-glass-morphic
            </code>
          </div>
        </div>
      </section>

      {/* Real World Examples */}
      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Real World Examples</h2>

        {/* Navigation Bar */}
        <div className='liquid-glass-distort p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-6'>
              <div className='liquid-glass p-2'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg'></div>
              </div>
              <nav className='flex space-x-4'>
                <a
                  href='#'
                  className='font-medium hover:text-primary transition-colors'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='font-medium hover:text-primary transition-colors'
                >
                  Products
                </a>
                <a
                  href='#'
                  className='font-medium hover:text-primary transition-colors'
                >
                  About
                </a>
              </nav>
            </div>
            <div className='flex space-x-3'>
              <button className='liquid-glass px-4 py-2 font-medium hover:bg-white/10 transition-colors'>
                Sign In
              </button>
              <button className='liquid-glass-bento px-4 py-2 font-medium hover:bg-white/10 transition-colors'>
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='liquid-glass p-6'>
            <h3 className='text-lg font-semibold mb-4'>Total Revenue</h3>
            <div className='text-3xl font-bold mb-2'>$124,500</div>
            <div className='text-sm text-green-400'>+12% from last month</div>
          </div>

          <div className='liquid-glass-distort p-6'>
            <h3 className='text-lg font-semibold mb-4'>Active Users</h3>
            <div className='text-3xl font-bold mb-2'>2,847</div>
            <div className='text-sm text-blue-400'>+5% from last week</div>
          </div>

          <div className='liquid-glass-morphic p-6'>
            <h3 className='text-lg font-semibold mb-4'>Conversion Rate</h3>
            <div className='text-3xl font-bold mb-2'>3.2%</div>
            <div className='text-sm text-purple-400'>+0.5% improvement</div>
          </div>
        </div>

        {/* Modal Example */}
        <div className='max-w-md mx-auto'>
          <div className='liquid-glass-morphic p-8 text-center'>
            <div className='liquid-glass-bento w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center'>
              <span className='text-2xl'>✨</span>
            </div>
            <h3 className='text-xl font-semibold mb-4'>Success!</h3>
            <p className='text-sm opacity-80 mb-6'>
              Your action was completed successfully. Notice how the liquid
              glass effects create depth and authenticity.
            </p>
            <div className='flex space-x-3 justify-center'>
              <button className='liquid-glass px-6 py-2 font-medium hover:bg-white/10 transition-colors'>
                Cancel
              </button>
              <button className='liquid-glass-distort px-6 py-2 font-medium hover:bg-white/10 transition-colors'>
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className='liquid-glass p-8'>
        <h2 className='text-2xl font-semibold mb-6'>How to Use</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>HTML Examples</h3>
            <div className='space-y-3'>
              <div className='liquid-glass-bento p-3 font-mono text-sm'>
                {'<div className="liquid-glass p-6">'}
                <br />
                {'  Your content here'}
                <br />
                {'</div>'}
              </div>
              <div className='liquid-glass-distort p-3 font-mono text-sm'>
                {'<button className="liquid-glass-distort px-4 py-2">'}
                <br />
                {'  Click me'}
                <br />
                {'</button>'}
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Available Classes</h3>
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <code className='text-sm'>.liquid-glass</code>
                <span className='text-xs opacity-60'>Basic effect</span>
              </div>
              <div className='flex justify-between items-center'>
                <code className='text-sm'>.liquid-glass-distort</code>
                <span className='text-xs opacity-60'>Corner bending</span>
              </div>
              <div className='flex justify-between items-center'>
                <code className='text-sm'>.liquid-glass-bento</code>
                <span className='text-xs opacity-60'>Flowing animation</span>
              </div>
              <div className='flex justify-between items-center'>
                <code className='text-sm'>.liquid-glass-morphic</code>
                <span className='text-xs opacity-60'>Rotating gradients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
