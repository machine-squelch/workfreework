import EmailCapture from './EmailCapture'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-gray-900 py-10 md:py-12">
      {/* Skull background image - lowest layer */}
      <div 
        className="absolute inset-0 opacity-10 skull-anim"
        style={{
          backgroundImage: 'url(/skull-complete.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Darker animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 animate-gradient opacity-90"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 h-full grid place-items-center px-4">
        <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center gap-16 md:gap-20">
          
          {/* Glass Card Behind Logo - 25px padding, matches logo dimensions */}
          <div className="relative flex justify-center">
            {/* Glass card wraps logo with 25px padding on all sides */}
            <div className="glass-card rounded-3xl p-[25px]">
              <Image 
                src="/wfw-logo-rwb.png" 
                alt="WorkFreeWork Logo" 
                width={600} 
                height={600}
                priority
                className="w-[300px] md:w-[600px] h-auto"
              />
            </div>
          </div>
          
          {/* Glass Card Behind Text */}
          <div className="relative">
            <div className="absolute inset-0 -mx-8 -my-6">
              <div className="glass-card w-full h-full rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 py-6 md:py-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Work Free. Earn More.
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto font-semibold">
                Build a company in hours, not fiscal quarters.
              </p>
              
              <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
                No pitch decks. No gatekeepers. No permission.
              </p>

              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                You aren't here to take notes. You're here to build an asset that prints revenue.
              </p>

              {/* Email Capture */}
              <div className="max-w-xl mx-auto mb-6">
                <EmailCapture 
                  placeholder="Your email"
                  buttonText="Get My 20 Hours Back"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Five steps to reclaim 20 hours a week and build real income without clock-punching.
                </p>
              </div>

              {/* Secondary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                <Link 
                  href="/pricing"
                  className="inline-block text-lg"
                  data-btn="glass"
                >
                  Enter the OS →
                </Link>
                <p className="text-sm text-gray-400">
                  Claim your build slot. Autonomy starts now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
