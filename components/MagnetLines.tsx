"use client"
import React, { useRef, useEffect, CSSProperties } from 'react'

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  chrome?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MagnetLines: React.FC<MagnetLinesProps> = ({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  chrome = false,
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.querySelectorAll<HTMLSpanElement>('span')

    const onPointerMove = (pointer: { x: number; y: number }) => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect()
        const centerX = rect.x + rect.width / 2
        const centerY = rect.y + rect.height / 2
        const b = pointer.x - centerX
        const a = pointer.y - centerY
        const c = Math.sqrt(a * a + b * b) || 1
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1)
        item.style.setProperty('--rotate', `${r}deg`)
      })
    }

    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove({ x: e.x, y: e.y })
    }

    window.addEventListener('pointermove', handlePointerMove)

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2)
      const rect = items[middleIndex].getBoundingClientRect()
      onPointerMove({ x: rect.x, y: rect.y })
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  const total = rows * columns
  const spans = Array.from({ length: total }, (_, i) => {
    const styleBase: CSSProperties = {
      width: lineWidth,
      height: lineHeight,
      // @ts-ignore: CSS var assignment
      '--rotate': `${baseAngle}deg`,
      transform: 'rotate(var(--rotate))',
      willChange: 'transform',
      borderRadius: '9999px'
    }

    const chromeStyle: CSSProperties = chrome
      ? {
          background: `linear-gradient(135deg, #ffffff 0%, #e8edf2 10%, #a8b4c0 25%, #d4dbe2 40%, #8a98a6 55%, #c8d0d8 70%, #6e7f8e 82%, #e0e6ec 92%, #ffffff 100%)`,
          boxShadow:
            '0 0 6px rgba(255,255,255,0.5), 0 0 14px rgba(200,220,240,0.35), inset 0 0 3px rgba(255,255,255,0.7)'
        }
      : { backgroundColor: lineColor }

    return (
      <span key={i} className="block origin-center" style={{ ...styleBase, ...chromeStyle }} />
    )
  })

  return (
    <div
      ref={containerRef}
      className={`grid place-items-center ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  )
}

export default MagnetLines


