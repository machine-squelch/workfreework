import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">WorkFreeWork</h3>
            <p className="text-gray-400 mb-4">
              Automation for humans, not the other way around.
            </p>
            <p className="text-sm text-gray-500">
              Built by Thinkazoo
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/essays" className="hover:text-white transition-colors">
                  Essays
                </Link>
              </li>
              <li>
                <Link href="/playbook" className="hover:text-white transition-colors">
                  Playbook
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/newsletter" className="hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025-2026 Thinkazoo LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Grooveo Pro Link */}
        <div className="mt-8 flex flex-col items-center border-t border-gray-800 pt-8">
          <a 
            href="https://grooveo.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Visit Grooveo Pro"
          >
            <Image 
              src="/grooveo-pro-logo.png" 
              alt="Grooveo Pro" 
              width={300} 
              height={100}
              className="h-20 md:h-24 w-auto mb-3"
            />
          </a>
          <p className="text-gray-400 text-sm italic">Coming Soon!</p>
        </div>

        {/* Powered By Section */}
        <div className="mt-8 flex justify-center items-center">
          <span className="text-gray-500 text-sm mr-3">Powered by</span>
          <Image 
            src="/gurley-logo-sm.png" 
            alt="Gurley" 
            width={100} 
            height={30}
            className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Made with Love */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Made with ❤️ in Pleasanton - California
          </p>
        </div>

        {/* Bottom Logos - Left and Right */}
        <div className="mt-8 flex justify-between items-end">
          {/* Left Logo - Grooveoio */}
          <div>
            <Image 
              src="/1Artboard 1grooveoio-LOGO-3.PNG" 
              alt="Grooveoio" 
              width={120} 
              height={40}
              className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Right Logo - Flag */}
          <div>
            <Image 
              src="/flag-footer.PNG" 
              alt="Flag" 
              width={60} 
              height={40}
              className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

