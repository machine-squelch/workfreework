'use client'

import EmailCapture from './EmailCapture'
import Link from 'next/link'
import Image from 'next/image'
import LetterGlitch from './LetterGlitch'
import MagnetLines from './MagnetLines'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-black py-10 md:py-12">
      <div className="absolute inset-0 flex items-center justify-center">
        <MagnetLines 
          rows={12}
          columns={12}
          containerSize="100vmin"
          lineColor="#c0c8d0"
          lineWidth="0.6vmin"
          lineHeight="3.5vmin"
          baseAngle={-10}
          chrome={true}
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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute inset-0 -mx-6 -my-4 rounded-3xl">
              <div className="glass-card no-shine w-full h-full rounded-3xl border-4 border-white fluoro-edge--hotwhite neon-backglow--white"></div>
            </div>
            <div className="relative z-10 py-6 md:py-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white neon-text-strong"
              >
                Work Free. Earn More.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto font-semibold"
              >
                Build a company in hours, not fiscal quarters.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto"
              >
                No pitch decks. No gatekeepers. No permission.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto italic"
              >
                Built for creators, founders, solopreneurs, and rebels tired of trading time for money.
              </motion.p>

              {/* Email Capture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="max-w-xl mx-auto mb-6"
              >
                <EmailCapture 
                  placeholder="Your email"
                  buttonText="Get My 20 Hours Back"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Five steps to reclaim 20 hours a week and build real income without clock-punching.
                </p>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Link 
                  href="/essays"
                  className="inline-block text-white hover:text-gray-300 font-semibold border-b-2 border-white hover:border-gray-300 transition-all neon-text"
                >
                  Start Printing Time →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
