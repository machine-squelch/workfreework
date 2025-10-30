'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  placeholder?: string
  buttonText?: string
  className?: string
}

export default function EmailCapture({ 
  placeholder = "Your email", 
  buttonText = "Get the Playbook",
  className = ""
}: EmailCaptureProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')

    try {
      // Submit via our server to avoid CORS and standardize handling
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setStatus('success')
        setMessage('🎉 Success! Check your email for the WorkFree Blueprint!')
        e.currentTarget.reset()
      } else {
        setStatus('error')
        const data = await response.json().catch(() => ({}))
        setMessage(data?.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`w-full max-w-md mx-auto ${className}`}>
        <div className="text-center p-6 bg-green-900 border border-green-700 rounded-lg">
          <p className="text-green-400 font-semibold">
            {message}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          name="email"
          placeholder={placeholder}
          required
          className="flex-1 px-4 py-3 rounded-md border border-gray-600 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-glass whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : buttonText}
        </button>
      </form>
      {message && status === 'error' && (
        <p className="mt-3 text-sm text-center text-red-400">
          {message}
        </p>
      )}
    </div>
  )
}