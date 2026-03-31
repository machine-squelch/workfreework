/**
 * Interactive Time Savings Calculator
 * Helps users visualize their potential time and money savings
 */

'use client'

import { useState } from 'react'

export default function TimeSavingsCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20)
  const [hourlyRate, setHourlyRate] = useState(50)

  const weeklyValue = hoursPerWeek * hourlyRate
  const monthlyValue = weeklyValue * 4
  const yearlyValue = monthlyValue * 12

  return (
    <div className="bg-gray-900 p-8 rounded-2xl border-4 border-green-400 shadow-2xl neon-border--green neon-backglow--green">
      <h3 className="text-2xl font-bold mb-6 text-center text-white">
        Calculate Your Time Savings
      </h3>

      <div className="space-y-6 mb-8">
        {/* Hours per week slider */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Hours wasted per week: <span className="text-green-400">{hoursPerWeek}</span>
          </label>
          <input
            type="range"
            min="5"
            max="40"
            step="5"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5hrs</span>
            <span>40hrs</span>
          </div>
        </div>

        {/* Hourly rate slider */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Your hourly rate: <span className="text-green-400">${hourlyRate}</span>
          </label>
          <input
            type="range"
            min="25"
            max="200"
            step="25"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$25/hr</span>
            <span>$200/hr</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg border-2 border-gray-700">
          <div className="text-sm text-gray-400 mb-1">Weekly Value</div>
          <div className="text-3xl font-bold text-green-400">${weeklyValue.toLocaleString()}</div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border-2 border-gray-700">
          <div className="text-sm text-gray-400 mb-1">Monthly Value</div>
          <div className="text-3xl font-bold text-green-400">${monthlyValue.toLocaleString()}</div>
        </div>

        <div className="bg-black p-6 rounded-lg border-4 border-green-400 neon-border--green">
          <div className="text-sm text-gray-400 mb-1">Yearly Value</div>
          <div className="text-4xl font-bold text-green-400">${yearlyValue.toLocaleString()}</div>
          <div className="text-sm text-gray-300 mt-2">
            That's the value of your wasted time. Now imagine automating it.
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-300 mb-4">
          WorkFreeWork helps you reclaim this time through automation
        </p>
        <a
          href="/pricing"
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-green-500/50"
        >
          Start Saving Time →
        </a>
      </div>
    </div>
  )
}
