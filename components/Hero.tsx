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
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto">
                AI isn't stealing jobs — it's freeing people who know how to use it.
              </p>
              
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                You don't need another hustle. You need a system that pays you for being efficient.
              </p>

              <p className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto">
                Build a company in hours, not fiscal quarters.
              </p>
              <p className="text-base md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
                No pitch decks. No gatekeepers. No permission.
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
              <Link 
                href="/essays"
                className="inline-block text-white hover:text-gray-300 font-semibold border-b-2 border-white hover:border-gray-300 transition-all"
              >
                Start Printing Time →
              </Link>
              <p className="mt-6 text-sm md:text-base text-gray-300">
                Built for creators, founders, solopreneurs, and rebels tired of trading time for money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
