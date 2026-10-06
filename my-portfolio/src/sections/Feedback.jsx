import { useState } from 'react'

const heartImage = 'https://www.kindpng.com/picc/m/118-1181466_heart-eyes-emoji-72-decal-love-emoticon-hd.png'
const thankYouAnimation = 'https://cdnl.iconscout.com/lottie/premium/thumb/feedback-animation-gif-download-5577153.mp4'

const Feedback = () => {
  const [liked, setLiked] = useState(false)
  const [suggestion, setSuggestion] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formsubmit.co/ajax/g.jahnavidurga@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New portfolio feedback',
          liked: liked ? 'Yes, the portfolio was liked' : 'No heart selected',
          suggestion: suggestion.trim() || 'No suggestion was added',
        }),
      })

      if (!response.ok) {
        throw new Error('Feedback submission failed')
      }

      setStatus('success')
      setSuggestion('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="feedback-section" aria-labelledby="feedback-title">
      <div className="feedback-card">
        {status === 'success' ? (
          <div className="feedback-success">
            <video
              className="feedback-success-animation"
              src={thankYouAnimation}
              autoPlay
              muted
              playsInline
              aria-label="Thank you animation"
            />
            <h2>Thank you for sharing your thoughts!</h2>
            <p>Your feedback means a lot to me.</p>
          </div>
        ) : (
          <>
            <div className="feedback-copy">
              <p className="eyebrow">A little note before you go</p>
              <h2 id="feedback-title">Did you enjoy my portfolio?</h2>
              <p>
                Leave a heart if you liked it, or share a suggestion to help me
                make it even better.
              </p>
            </div>

            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="feedback-reaction-row">
                <button
                  className={`feedback-heart-button${liked ? ' is-liked' : ''}`}
                  type="button"
                  aria-pressed={liked}
                  aria-label={liked ? 'Remove your heart from the jar' : 'Put a heart in the jar'}
                  onClick={() => setLiked((currentLiked) => !currentLiked)}
                >
                  <img className="feedback-heart-image" src={heartImage} alt="" aria-hidden="true" />
                  <span>{liked ? 'Heart added!' : 'Give a heart'}</span>
                </button>
              </div>
              <p className="feedback-jar-note">
                Click the heart to add a little love
              </p>
              <label htmlFor="portfolio-suggestion">Your suggestion</label>
              <textarea
                id="portfolio-suggestion"
                value={suggestion}
                onChange={(event) => setSuggestion(event.target.value)}
                placeholder="Tell me what you liked or what I can improve..."
                rows="3"
              />
              <button className="feedback-submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send feedback ↗'}
              </button>
              {status === 'error' && (
                <p className="feedback-error" role="alert">
                  I couldn&apos;t send that right now. Please try again.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </section>
  )
}

export default Feedback
