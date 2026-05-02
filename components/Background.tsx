'use client'

import { motion } from 'framer-motion'

const orbs = [
  {
    // Large primary — top-left quadrant, drifts wide
    size: 900,
    style: {
      left: '15%',
      top: '20%',
      background:
        'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0.08) 40%, transparent 70%)',
    },
    animate: {
      x: [0, 120, -80, 60, -40, 0],
      y: [0, -70, 90, -50, 30, 0],
      scale: [1, 1.08, 0.96, 1.04, 1],
    },
    duration: 38,
    delay: 0,
  },
  {
    // Mid right — contrasting tone
    size: 700,
    style: {
      left: '70%',
      top: '35%',
      background:
        'radial-gradient(circle at 50% 50%, rgba(29,78,216,0.18) 0%, rgba(29,78,216,0.06) 45%, transparent 70%)',
    },
    animate: {
      x: [0, -100, 60, -50, 80, 0],
      y: [0, 80, -60, 70, -40, 0],
      scale: [1.05, 1, 1.1, 0.97, 1.05],
    },
    duration: 44,
    delay: 5,
  },
  {
    // Bottom-center — cooler blue, rises and falls
    size: 600,
    style: {
      left: '45%',
      top: '75%',
      background:
        'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)',
    },
    animate: {
      x: [0, 70, -90, 40, -60, 0],
      y: [0, -90, 50, -70, 30, 0],
      scale: [1, 1.12, 0.94, 1.06, 1],
    },
    duration: 32,
    delay: 10,
  },
  {
    // Small vivid accent — upper right
    size: 420,
    style: {
      left: '80%',
      top: '10%',
      background:
        'radial-gradient(circle at 50% 50%, rgba(96,165,250,0.20) 0%, rgba(96,165,250,0.07) 45%, transparent 70%)',
    },
    animate: {
      x: [0, -60, 80, -50, 40, 0],
      y: [0, 60, -40, 80, -30, 0],
      scale: [1.1, 1, 1.15, 0.95, 1.1],
    },
    duration: 28,
    delay: 3,
  },
  {
    // Deep navy blob — lower left, very slow
    size: 550,
    style: {
      left: '5%',
      top: '65%',
      background:
        'radial-gradient(circle at 50% 50%, rgba(30,58,138,0.20) 0%, rgba(30,58,138,0.06) 50%, transparent 70%)',
    },
    animate: {
      x: [0, 80, -50, 70, -30, 0],
      y: [0, -50, 60, -40, 50, 0],
      scale: [1, 1.06, 0.98, 1.04, 1],
    },
    duration: 50,
    delay: 8,
  },
]

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            translateX: '-50%',
            translateY: '-50%',
            ...orb.style,
            willChange: 'transform',
            filter: 'blur(72px)',
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        />
      ))}
    </div>
  )
}
