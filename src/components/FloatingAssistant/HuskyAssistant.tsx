'use client'

import React, { useState } from 'react'
import HuskyEyes from './HuskyEyes'
import styles from './HuskyAssistant.module.less'

const HuskyAssistant: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles.huskyContainer}>
      <div 
        className={styles.huskyHead} 
        // onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.huskyFace}>
          <div className={styles.huskyEars}>
            <div className={styles.leftEar}></div>
            <div className={styles.rightEar}></div>
          </div>
          <HuskyEyes />
          <div className={styles.huskyNose}></div>
          <div className={styles.huskyMouth}></div>
        </div>
      </div>
      {isExpanded && (
        <div className={styles.feedbackPopup}>
          <a href="/feedback" className={styles.feedbackLink}>
            Give us feedback
          </a>
        </div>
      )}
    </div>
  )
}

export default HuskyAssistant

