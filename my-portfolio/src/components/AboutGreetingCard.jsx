import { useEffect, useRef, useState } from 'react'
import aboutWelcomeImage from '../assets/Cutie-1.png'
import aboutDreamImage from '../assets/Cutie-2.png'

const AboutGreetingCard = () => {
  const [showSecondCard, setShowSecondCard] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [heartBursts, setHeartBursts] = useState([])
  const cardRef = useRef(null)
  const cleanupTimers = useRef([])

  useEffect(() => {
    const cardElement = cardRef.current

    if (!cardElement) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(cardElement)

    return () => {
      observer.disconnect()
      cleanupTimers.current.forEach((timerId) => window.clearTimeout(timerId))
      cleanupTimers.current = []
    }
  }, [])

  const createHeartBursts = () => {
    const bursts = Array.from({ length: 9 }, (_, index) => ({
      id: `${Date.now()}-${index}`,
      left: `${40 + Math.random() * 24}%`,
      drift: `${-30 + Math.random() * 60}px`,
      size: `${0.78 + Math.random() * 0.8}rem`,
      delay: `${index * 70}ms`,
      duration: `${1100 + Math.random() * 500}ms`,
    }))

    setHeartBursts(bursts)

    const timerId = window.setTimeout(() => {
      setHeartBursts([])
    }, 1800)

    cleanupTimers.current.push(timerId)
  }

  const handleCardToggle = () => {
    setShowSecondCard((previous) => !previous)
    createHeartBursts()
  }

  const handleCardKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCardToggle()
    }
  }

  return (
    <div
      ref={cardRef}
      className={`about-interactive-card${showSecondCard ? ' is-revealed' : ''}${isVisible ? ' is-visible' : ''}`}
    >
      <div className="about-heart-effects" aria-hidden="true">
        {heartBursts.map((heartBurst) => (
          <span
            key={heartBurst.id}
            className="about-heart-particle"
            style={{
              left: heartBurst.left,
              '--drift': heartBurst.drift,
              '--particle-size': heartBurst.size,
              '--particle-delay': heartBurst.delay,
              '--particle-duration': heartBurst.duration,
            }}
          >
            ♥
          </span>
        ))}
      </div>
      <div className="about-interactive-card-media">
        <img
          src={aboutWelcomeImage}
          alt="Say Hi to Me greeting"
          className="about-interactive-image about-interactive-image-front"
        />
        <img
          src={aboutDreamImage}
          alt="Something good is coming message"
          className="about-interactive-image about-interactive-image-back"
        />
      </div>
      <p className="about-interactive-hint">
        Tap the Heart For a Little Hello
        <button
          type="button"
          className="about-heart-toggle"
          onClick={handleCardToggle}
          onKeyDown={handleCardKeyDown}
          aria-label="Show the other greeting image"
          aria-pressed={showSecondCard}
        >
          {showSecondCard ? '♥' : '♡'}
        </button>
        ✨
      </p>
    </div>
  )
}

export default AboutGreetingCard
