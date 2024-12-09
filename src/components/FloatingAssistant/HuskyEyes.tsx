'use client'

import React, { useState, useEffect } from 'react'
import styles from './HuskyEyes.module.less'

const HuskyEyes: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const calculateEyePosition = (eyeId: string): React.CSSProperties => {
    const eye = document.getElementById(eyeId)
    if (!eye) return {}

    const rect = eye.getBoundingClientRect()
    const eyeCenterX = rect.left + rect.width / 2
    const eyeCenterY = rect.top + rect.height / 2

    const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX)
    const distance = Math.min(3, Math.hypot(mousePosition.x - eyeCenterX, mousePosition.y - eyeCenterY) / 20)

    return {
      transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`
    }
  }

  return (
    <div className={styles.huskyEyes}>
      <div id="leftEye" className={styles.eye}>
        <div className={styles.pupil} style={calculateEyePosition('leftEye')}></div>
      </div>
      <div id="rightEye" className={styles.eye}>
        <div className={styles.pupil} style={calculateEyePosition('rightEye')}></div>
      </div>
    </div>
  )
}

export default HuskyEyes

