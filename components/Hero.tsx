import EmailCapture from './EmailCapture'
import Link from 'next/link'
import Image from 'next/image'
import LetterGlitch from './LetterGlitch'
import Galaxy from './Galaxy';

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-black py-10 md:py-12">
      <div className="absolute inset-0">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5} /* Retain original density for a denser, brighter feel */
          glowIntensity={0.8} /* Further increased glow intensity for brighter neon */
          saturation={1.0} /* Max saturation for vibrant neon colors */
          hueShift={220} /* Adjusted hue shift to favor blues and white */
          twinkleIntensity={0.6} /* Keep increased twinkle for dynamic stars */
          rotationSpeed={0.1} /* Retain original rotation speed */
        />
        <div className="absolute inset-0" style={{ zIndex: -30 }}>
          <LetterGlitch glitchSpeed={60} centerVignette outerVignette smooth />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: -20,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(15,23,42,0.35) 45%, rgba(2,6,23,0.75) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"
          style={{
            zIndex: -10,
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(59,130,246,0.45) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.35) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full grid place-items-center px-4">
        <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center gap-16 md:gap-20">
          
          <div className="relative flex justify-center">
            <div className="p-3 md:p-4 rounded-3xl border-4 border-white glass-card no-shine fluoro-edge--hotwhite neon-backglow--white">
              <Image 
                src="/wfw-logo.png" 
                alt="WorkFreeWork Logo" 
                width={9964} 
                height={2888}
                priority
                className="max-w-full h-auto"
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 -mx-6 -my-4 rounded-3xl">
              <div className="glass-card no-shine w-full h-full rounded-3xl border-4 border-white fluoro-edge--hotwhite neon-backglow--white"></div>
            </div>
            <div className="relative z-10 py-6 md:py-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white neon-text-strong">
                Work Free. Earn More.
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto font-semibold">
                Build a company in hours, not fiscal quarters.
              </p>
              
              <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
                No pitch decks. No gatekeepers. No permission.
              </p>

              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto italic">
                Built for creators, founders, solopreneurs, and rebels tired of trading time for money.
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
                className="inline-block text-white hover:text-gray-300 font-semibold border-b-2 border-white hover:border-gray-300 transition-all neon-text"
              >
                Start Printing Time →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
