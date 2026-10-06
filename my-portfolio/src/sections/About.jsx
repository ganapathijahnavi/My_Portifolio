// import aboutPicture from '../assets/Picture.png'
// import AboutGreetingCard from '../components/AboutGreetingCard'

// const About = () => {
//   return (
//     <>
//     <section id="about" className="section about">
//       <div className="section-heading">
//         <p className="eyebrow">About</p>
//         <h2>Curious, creative, and hands-on.</h2>
//       </div>
//       <div className="about-flex">
//         <div className="about-copy">
//           <p>
//             I am a developer with a strong foundation in Python and data structures, backed by hands on experience in full stack MERN development.
//             I enjoy designing scalable backend systems and building products that solve real world problems.
//           </p>
//           <p>
//             My core interests lie in AI, machine learning, and product focused engineering.
//             I focus on writing clean, reliable code and turning ideas into working applications.
//             I am driven by curiosity and consistently invest in learning new technologies.
//             Beyond tech, I enjoy creative work, playing shuttle badminton, reading novels, and listening to music.
//           </p>
//           <p>
//             I aim to grow as an engineer who builds meaningful technology that creates lasting impact.
//           </p>
//           <div className="about-interests">
//             <h3>Interests</h3>
//             <p>AI/ML, Software Developer, Scalable Systems</p>
//           </div>
//           <div className="about-education">
//             <h4>Education</h4>
//             <span role="img" aria-label="graduation">🎓</span> BTECH — SRGEC, Gudlavalleru <span style={{color: '#555', fontWeight: 500}}>(8.92 CGPA)</span>
//           </div>
//         </div>
//         <div className="about-media-stack">
//           <AboutGreetingCard />
//           <div className="about-art">
//             <img
//               src={aboutPicture}
//               alt="Creative portrait"
//               className="about-portrait"
//             />
//           </div>
//         </div>
//       </div>
//     </section>

//     </>
//   )
// }

// export default About

import img1 from "./aboutimgs/1.jpeg";
import img2 from "./aboutimgs/2.jpeg";
import img3 from "./aboutimgs/3.jpeg";
import img4 from "./aboutimgs/4.jpeg";
import img5 from "./aboutimgs/5.jpeg";
import img6 from "./aboutimgs/6.jpeg";
import img7 from "./aboutimgs/7.jpeg";
import img8 from "./aboutimgs/8.jpeg";
import { useState } from 'react'
import aboutPicture from '../assets/Picture.png'
import AboutGreetingCard from '../components/AboutGreetingCard'

const aboutCards = [
  {
    id: 1,
    number: '01',
    title: 'WHO AM I?',
    color: 'who',
    images: [
      img1,
      img2,
    ],
    paragraphs: [
      'I am a developer with a strong foundation in Python, data structures, and AI/ML, backed by hands-on experience in full-stack MERN development.',
      'I enjoy designing scalable backend systems and building AI-powered web applications that solve real-world problems.',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'CORE INTERESTS',
    color: 'interests',
    images: [
      img3,
      img4,
    ],
    paragraphs: [
      'My core interests lie in Software Development, Data Structures & Algorithms, AI/ML, System Design, and product-focused engineering.',
      'I enjoy building AI-powered applications. I am driven by curiosity, problem-solving, creativity.',
    ],
    tags: [
      'Software Development',
      'Data Structures & Algorithms',
      'AI / ML',
      'System Design',
      'Product Engineering',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'MY EDUCATION',
    color: 'education',
    images: [
      img5,
      img6,
    ],
    degree: 'B.Tech',
    branch: 'Computer Science & Engineering',
    institution: 'SRGEC, Gudlavalleru',
    score: '8.97 CGPA',
    paragraphs: [
      'Built a strong foundation in programming, Data Structures, Software Development, and Computer Science.',
      'Continuously learning and applying new technologies to build practical, real-world solutions.',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'MY HOBBIES',
    color: 'hobbies',
    images: [
      img7,
      img8,
    ],
    paragraphs: [
      'Outside technology, I enjoy activities that keep me creative, curious, and relaxed.',
      'I enjoy observing details, finding inspiration in everyday moments, and expressing my thoughts through writing.',
    ],
    hobbies: [
      '🏸 Shuttle Badminton',
      '📖 Reading Novels',
      '🎧 Listening to Music',
      '✍️ Writing',
      '✦ Creative Work',
      '👀 Observing People & Things Around Me',
    ],
  },
]

const About = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const selected = aboutCards.find(
    (card) => card.id === selectedCard
  )

  const changeSelectedCard = (direction) => {
    const currentIndex = aboutCards.findIndex(
      (card) => card.id === selectedCard
    )
    const nextIndex =
      (currentIndex + direction + aboutCards.length) % aboutCards.length

    setSelectedCard(aboutCards[nextIndex].id)
  }

  const visualCards = [...aboutCards].reverse()

  return (
    <>
      <section id="about" className="section about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Curious. Creative. Building..</h2>
        </div>

        <div className="about-flex">

          {/* LEFT SIDE — SCRAPBOOK */}
          <div className="about-copy about-interactive">

            {selectedCard === null && (
              <div className="about-fan-wrapper">

                <div className="about-fan">
                  {visualCards.map((card) => (
                    <button
                      key={card.id}
                      className={`fan-card fan-card-${card.id}`}
                      onClick={() => setSelectedCard(card.id)}
                      aria-label={`Open ${card.title}`}
                    >
                      <div className="fan-card-content">

                        <span className="fan-number">
                          {card.number}
                        </span>

                        <img
                          src={card.images[0]}
                          alt=""
                          className="fan-image fan-image-one"
                        />

                        <h3>{card.title}</h3>

                        {/* WHO AM I */}
                        {card.id === 1 && (
                          <div className="fan-text">
                            <p>{card.paragraphs[0]}</p>
                            <p>{card.paragraphs[1]}</p>
                          </div>
                        )}

                        {/* CORE INTERESTS */}
                        {card.id === 2 && (
                          <div className="fan-text">
                            <p>{card.paragraphs[0]}</p>

                            <div className="fan-tags">
                              {card.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* EDUCATION */}
                        {card.id === 3 && (
                          <div className="fan-text">
                            <div className="fan-education">
                              <strong>{card.degree}</strong>
                              <span>{card.branch}</span>
                              <span>{card.institution}</span>
                              <em>{card.score}</em>
                            </div>

                            <p>{card.paragraphs[0]}</p>
                          </div>
                        )}

                        {/* HOBBIES */}
                        {card.id === 4 && (
                          <div className="fan-text">
                            <p>{card.paragraphs[0]}</p>

                            <div className="fan-hobbies">
                              {card.hobbies
                                .slice(0, 4)
                                .map((hobby) => (
                                  <span key={hobby}>
                                    {hobby}
                                  </span>
                                ))}
                            </div>
                          </div>
                        )}

                        <img
                          src={card.images[1]}
                          alt=""
                          className="fan-image fan-image-two"
                        />

                      </div>
                    </button>
                  ))}
                </div>

                <div className="fan-hint">
                  <span aria-hidden="true">✦</span>
                  Hover over a card or click to explore
                  <span aria-hidden="true">↗</span>
                </div>

              </div>
            )}

            {/* SELECTED CARD */}
            {selectedCard !== null && selected && (
              <div
                className={`about-selected-card selected-${selected.color}`}
              >
                <button
                  className="about-back-button"
                  onClick={() => setSelectedCard(null)}
                >
                  ← Back
                </button>

                <span className="selected-number">
                  {selected.number}
                </span>

                <div className="selected-main">

                  <div className="selected-content">
                    <h3>{selected.title}</h3>

                    {/* WHO AM I */}
                    {selected.id === 1 && (
                      <div className="selected-body">
                        {selected.paragraphs.map(
                          (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          )
                        )}
                      </div>
                    )}

                    {/* CORE INTERESTS */}
                    {selected.id === 2 && (
                      <div className="selected-body">
                        {selected.paragraphs.map(
                          (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          )
                        )}

                        <div className="selected-tags">
                          {selected.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* EDUCATION */}
                    {selected.id === 3 && (
                      <div className="selected-body">

                        <div className="selected-education-details">
                          <strong>{selected.degree}</strong>
                          <span>{selected.branch}</span>
                          <span>{selected.institution}</span>
                          <em>{selected.score}</em>
                        </div>

                        {selected.paragraphs.map(
                          (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          )
                        )}

                      </div>
                    )}

                    {/* HOBBIES */}
                    {selected.id === 4 && (
                      <div className="selected-body">

                        {selected.paragraphs.map(
                          (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          )
                        )}

                        <div className="selected-hobby-list">
                          {selected.hobbies.map((hobby) => (
                            <span key={hobby}>
                              {hobby}
                            </span>
                          ))}
                        </div>

                      </div>
                    )}
                  </div>

                  <div className="selected-images">

                    <img
                      src={selected.images[0]}
                      alt=""
                      className="selected-image selected-image-one"
                    />

                    <img
                      src={selected.images[1]}
                      alt=""
                      className="selected-image selected-image-two"
                    />

                  </div>

                </div>

                <div className="selected-navigation" aria-label="Change about card">
                  <button
                    type="button"
                    className="selected-navigation-button"
                    onClick={() => changeSelectedCard(-1)}
                    aria-label="Show previous card"
                  >
                    &lt;
                  </button>
                  <button
                    type="button"
                    className="selected-navigation-button"
                    onClick={() => changeSelectedCard(1)}
                    aria-label="Show next card"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT SIDE — UNTOUCHED */}
          <div className="about-media-stack">
            <AboutGreetingCard />

            <div className="about-art">
              <img
                src={aboutPicture}
                alt="Creative portrait"
                className="about-portrait"
              />
            </div>
          </div>

        </div>
      </section>

      <style>{`

        /* =====================================================
           LEFT SCRAPBOOK AREA
           NO BACKGROUND / NO ROUNDED PANEL / NO EXTRA EFFECT
        ===================================================== */

        .about-copy.about-interactive {
          width: 100%;
          min-width: 0;
          height: 680px;
          min-height: 680px;
          padding: 0 !important;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;

          background: transparent !important;
          background-image: none !important;
          background-color: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          outline: none !important;

          overflow: visible !important;
        }

        .about-interactive::before,
        .about-interactive::after {
          content: none !important;
          display: none !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        .about-fan-wrapper {
          width: 100%;
          height: 680px;
          min-height: 0;

          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          outline: none !important;

          position: relative;
        }

        .about-fan-wrapper::before,
        .about-fan-wrapper::after {
          content: none !important;
          display: none !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        .about-fan {
          position: relative;

          width: 620px;
          height: 560px;

          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          outline: none !important;

          transform: scale(0.86);
          transform-origin: left center;
          margin-left: 8px;
        }
          

        /* =====================================================
           CARDS
        ===================================================== */

        .fan-card {
          position: absolute;

          width: 360px;
          min-width: 360px;
          max-width: 360px;
          height: 500px;
          box-sizing: border-box;

          padding: 0;

          border: 2px solid #111;

          box-shadow:
            inset 0 0 0 5px #ffffff,
            0 18px 35px rgba(20, 18, 15, 0.18);

          overflow: hidden;

          cursor: pointer;
          text-align: left;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            filter 0.35s ease;

          clip-path: polygon(
            0.8% 1%,
            99% 0%,
            100% 98.8%,
            98.5% 100%,
            1% 99%,
            0% 2%
          );
        }

        .fan-card-1,
        .fan-card-2,
        .fan-card-3,
        .fan-card-4 {
          width: 360px;
          min-width: 360px;
          max-width: 360px;
          height: 500px;
          min-height: 500px;
          max-height: 500px;
        }

        /* RIGHTMOST */
        .fan-card-1 {
          background: #ded2c1;

          left: 240px;
          top: 20px;

          transform: rotate(5deg);

          z-index: 4;
        }

        /* SECOND */
        .fan-card-2 {
          background: #cbd4c3;

          left: 160px;
          top: 20px;

          transform: rotate(5deg);

          z-index: 3;
        }

        /* THIRD */
        .fan-card-3 {
          background: #d1c7d4;

          left: 80px;
          top: 20px;

          transform: rotate(-5deg);

          z-index: 2;
        }

        /* LEFTMOST */
        .fan-card-4 {
          background: #dcb8b8;

          left: 0;
          top: 20px;

          transform: rotate(-13deg);

          z-index: 1;
        }

        /* =====================================================
           HOVER
        ===================================================== */

        .fan-card:hover {
          filter: brightness(1.035);

          box-shadow:
            inset 0 0 0 5px #ffffff,
            0 25px 48px rgba(15, 15, 15, 0.30),
            0 0 0 3px rgba(255, 255, 255, 0.35);

          z-index: 30;
        }

        .fan-card-1:hover {
          transform:
            rotate(5deg)
            translateY(-15px)
            translateX(8px);
        }

        .fan-card-2:hover {
          transform:
            rotate(5deg)
            translateY(-15px);
        }

        .fan-card-3:hover {
          transform:
            rotate(-5deg)
            translateY(-15px);
        }

        .fan-card-4:hover {
          transform:
            rotate(-13deg)
            translateY(-15px)
            translateX(-8px);
        }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .fan-card-content {
          position: absolute;
          inset: 0;

          padding: 30px;

          box-sizing: border-box;

          color: #403a34;

          display: flex;
          flex-direction: column;

          overflow: hidden;
        }

        .fan-number {
          font-family: Arial, sans-serif;
          font-size: 10px;
          letter-spacing: 3px;

          color: #38332e;
          opacity: 0.65;

          z-index: 5;
        }

        /* =====================================================
           TOP IMAGE
        ===================================================== */

        .fan-image-one {
          position: absolute;

          width: 90px;
          height: 105px;

          object-fit: cover;

          right: 24px;
          top: 52px;

          border: 2px solid #111;

          box-shadow:
            0 0 0 4px #fff,
            5px 7px 15px rgba(30, 25, 20, 0.22);

          transform: rotate(5deg);

          z-index: 2;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .fan-card:hover .fan-image-one {
          transform: rotate(2deg) scale(1.04);

          box-shadow:
            0 0 0 4px #fff,
            7px 10px 18px rgba(20, 20, 20, 0.28);
        }

        /* =====================================================
           BOTTOM IMAGE
        ===================================================== */

        .fan-image-two {
          position: absolute;

          width: 95px;
          height: 100px;

          object-fit: cover;

          right: 24px;
          bottom: 22px;

          border: 2px solid #111;

          box-shadow:
            0 0 0 4px #fff,
            4px 6px 14px rgba(30, 25, 20, 0.20);

          transform: rotate(-5deg);

          z-index: 2;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .fan-card-1 .fan-image-two,
        .fan-card-2 .fan-image-two,
        .fan-card-4 .fan-image-two {
          height: 150px;
        }

        .fan-card:hover .fan-image-two {
          transform: rotate(-2deg) scale(1.04);

          box-shadow:
            0 0 0 4px #fff,
            6px 9px 17px rgba(20, 20, 20, 0.27);
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .fan-card h3 {
          margin: 45px 0 18px;

          max-width: 220px;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 30px;
          line-height: 1.05;

          font-weight: 400;

          letter-spacing: 0.3px;

          color: #332e29;

          position: relative;

          z-index: 4;
        }

        .fan-text {
          position: relative;

          z-index: 3;

          max-width: 255px;
        }

        .fan-card p {
          margin: 0 0 14px;

          font-family: Arial, sans-serif;

          font-size: 11px;

          line-height: 1.6;

          color: #514b45;
        }

        /* =====================================================
           INTEREST TAGS
        ===================================================== */

        .fan-tags {
          display: flex;
          flex-wrap: wrap;

          gap: 6px;

          margin-top: 12px;

          max-width: 235px;
        }

        .fan-tags span {
          padding: 6px 8px;

          border-radius: 20px;

          background: rgba(255,255,255,0.35);

          border: 1px solid rgba(40,40,35,0.20);

          font-family: Arial, sans-serif;

          font-size: 8px;

          color: #4d4841;
        }

        /* =====================================================
           EDUCATION
        ===================================================== */

        .fan-education {
          display: flex;
          flex-direction: column;

          margin-bottom: 14px;

          max-width: 230px;
        }

        .fan-education strong {
          font-family: Georgia, serif;

          font-size: 26px;

          font-weight: 400;

          color: #3c3731;

          margin-bottom: 4px;
        }

        .fan-education span {
          font-family: Arial, sans-serif;

          font-size: 10.5px;

          line-height: 1.4;

          color: #5b554e;
        }

        .fan-education em {
          margin-top: 7px;

          font-family: Georgia, serif;

          font-size: 13px;

          color: #756a5c;
        }

        /* =====================================================
           HOBBIES
        ===================================================== */

        .fan-hobbies {
          display: flex;
          flex-direction: column;

          gap: 7px;

          margin-top: 6px;
        }

        .fan-hobbies span {
          font-family: Arial, sans-serif;

          font-size: 9.5px;

          color: #554f48;
        }

        /* =====================================================
           HINT
        ===================================================== */

        .fan-hint {
          position: relative;
          z-index: 20;
          display: block;
          width: 100%;
          margin-top: 8px;
          padding: 10px 18px;

          font-family: 'Space Grotesk', sans-serif;

          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-align: center;

          color: #2f241e;
          background: #f4dfc3;
          border: 2px solid #d66d4b;
          border-radius: 999px;
          box-shadow: 0 8px 18px rgba(20, 18, 15, 0.2);

          transform: none;
        }

        .fan-hint span {
          color: #b7432b;
          font-size: 18px;

          margin: 0 7px;
        }

        /* =====================================================
           SELECTED CARD
        ===================================================== */

        .about-selected-card {
          width: 100%;

          height: 680px;
          min-height: 0;
          max-height: 680px;

          box-sizing: border-box;

          padding: 48px 24px 72px;

          position: relative;

          overflow: hidden;

          display: flex;

          flex-direction: column;

          justify-content: center;

          border: 2px solid #111;
          background: #ded2c1;
          box-shadow: none;
          clip-path: polygon(
            0.5% 1%,
            99.3% 0%,
            100% 99%,
            98.8% 100%,
            0% 99%,
            0% 1.5%
          );

          animation: selectedCardOpen 0.35s ease;
        }

        @keyframes selectedCardOpen {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(12px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .selected-who {
          background: #ded2c1;
        }

        .selected-interests {
          background: #cbd4c3;
        }

        .selected-education {
          background: #d1c7d4;
        }

        .selected-hobbies {
          background: #dcc4b8;
        }

        /* =====================================================
           BACK BUTTON
        ===================================================== */

        .about-back-button {
          position: absolute;

          top: 22px;
          right: 25px;

          border: 1px solid #111;

          background: rgba(255,255,255,0.55);

          color: #332e29;

          padding: 8px 13px;

          border-radius: 0;

          font-family: Arial, sans-serif;

          font-size: 10px;

          cursor: pointer;

          transition: all 0.2s ease;

          z-index: 20;
        }

        .about-back-button:hover {
          background: #fff;

          transform: translateX(-4px);

          box-shadow: 3px 3px 0 #111;
        }

        .selected-number {
          position: absolute;

          top: 32px;
          left: 40px;

          font-family: Arial, sans-serif;

          font-size: 10px;

          letter-spacing: 3px;

          color: #38332e;

          opacity: 0.65;
        }

        /* =====================================================
           SELECTED CONTENT
        ===================================================== */

        .selected-main {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          gap: 40px;

          width: 100%;
        }

        .selected-navigation {
          position: absolute;
          left: 50%;
          bottom: 22px;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 20;
        }

        .selected-navigation-button {
          width: 38px;
          height: 32px;
          display: grid;
          place-items: center;
          padding: 0;
          border: 1px solid #332e29;
          border-radius: 0;
          background: rgba(255, 255, 255, 0.58);
          color: #332e29;
          font-family: Arial, sans-serif;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .selected-navigation-button:hover,
        .selected-navigation-button:focus-visible {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 3px 3px 0 #332e29;
          outline: none;
        }

        .selected-content {
          flex: 1;

          max-width: 580px;
          min-width: 0;
          overflow: visible;

          position: relative;

          z-index: 3;
        }

        .about-selected-card h3 {
          margin: 0 0 25px;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: 36px;

          line-height: 1.2;
          overflow: visible;

          font-weight: 400;

          letter-spacing: 0.5px;

          color: #332e29;
        }

        .selected-body {
          width: 100%;
          max-width: 100%;
          overflow-wrap: anywhere;
        }

        .selected-body p {
          margin: 0 0 16px;

          font-family: Arial, sans-serif;

          font-size: 13px;

          line-height: 1.75;

          color: #514b45;
        }

        /* =====================================================
           SELECTED IMAGES
        ===================================================== */

        .selected-images {
          width: 220px;

          min-width: 220px;
          flex-shrink: 0;

          height: 330px;

          position: relative;
        }

        .selected-image {
          position: absolute;

          object-fit: cover;

          background: #fff;

          border: 2px solid #111;

          box-shadow:
            0 0 0 5px #fff,
            8px 12px 22px rgba(25, 20, 15, 0.20);

          transition: transform 0.3s ease;
        }

        .selected-image-one {
          width: 145px;
          height: 170px;

          top: 10px;
          right: 5px;

          transform: rotate(6deg);
        }

        .selected-image-two {
          width: 135px;
          height: 125px;

          bottom: 5px;
          left: 5px;

          transform: rotate(-7deg);
        }

        .selected-image-one:hover {
          transform: rotate(2deg) scale(1.03);
        }

        .selected-image-two:hover {
          transform: rotate(-2deg) scale(1.03);
        }

        /* =====================================================
           SELECTED TAGS
        ===================================================== */

        .selected-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;

          margin-top: 22px;
        }

        .selected-tags span {
          padding: 8px 11px;

          border-radius: 20px;

          background: rgba(255,255,255,0.38);

          border: 1px solid rgba(30,30,25,0.20);

          font-family: Arial, sans-serif;

          font-size: 9px;

          color: #514a42;
        }

        /* =====================================================
           SELECTED EDUCATION
        ===================================================== */

        .selected-education-details {
          display: flex;

          flex-direction: column;

          margin-bottom: 20px;
        }

        .selected-education-details strong {
          font-family: Georgia, serif;

          font-size: 32px;

          font-weight: 400;

          color: #38322c;

          margin-bottom: 6px;
        }

        .selected-education-details span {
          font-family: Arial, sans-serif;

          font-size: 13px;

          line-height: 1.5;

          color: #554f48;
        }

        .selected-education-details em {
          margin-top: 10px;

          font-family: Georgia, serif;

          font-size: 15px;

          color: #766a5c;
        }

        /* =====================================================
           SELECTED HOBBIES
        ===================================================== */

        .selected-hobby-list {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 11px;

          margin-top: 20px;
        }

        .selected-main {
          gap: 24px;
          min-width: 0;
          box-sizing: border-box;
        }

        .selected-content {
          min-width: 0;
          max-width: none;
          overflow-wrap: anywhere;
        }

        .selected-hobby-list span {
          font-family: Arial, sans-serif;

          font-size: 12px;

          color: #554f48;
        }

        .fan-card-content,
        .fan-card-content h3,
        .fan-card-content p,
        .fan-card-content span,
        .fan-card-content strong,
        .fan-card-content em,
        .about-selected-card h3,
        .about-selected-card p,
        .about-selected-card span,
        .about-selected-card strong,
        .about-selected-card em {
          font-family: 'Isometra', serif;
        }

        .about-selected-card.selected-who {
          background: #ded2c1 !important;
        }

        .about-selected-card.selected-interests {
          background: #cbd4c3 !important;
        }

        .about-selected-card.selected-education {
          background: #d1c7d4 !important;
        }

        .about-selected-card.selected-hobbies {
          background: #dcc4b8 !important;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {

          .about-fan {
            transform: scale(0.72);
          }

          .about-fan-wrapper {
            height: 560px;
            min-height: 0;
          }

          .about-interactive {
            height: 560px;
            min-height: 560px;
          }

          .about-selected-card {
            height: 560px;
            max-height: 560px;
          }

          .selected-main {
            gap: 25px;
          }

          .selected-images {
            width: 190px;
            min-width: 190px;
          }

        }

        @media (max-width: 700px) {

          .about-interactive {
          height: 550px;
          min-height: 550px;
          }

          .about-fan-wrapper {
          height: 550px;
          min-height: 0;
          }

          .about-fan {
            width: 620px;
            height: 520px;
            transform: scale(0.68);
          }


          .fan-card {
          width: 345px;
          min-width: 345px;
          max-width: 345px;
          height: 470px;
          }

          .fan-card-1,
          .fan-card-2,
          .fan-card-3,
          .fan-card-4 {
          width: 345px;
          min-width: 345px;
          max-width: 345px;
          height: 470px;
          min-height: 470px;
          max-height: 470px;
          }

          .about-selected-card {
          height: 550px;
          min-height: 0;
          max-height: 550px;
          }

          .selected-main {
            flex-direction: column;

            align-items: flex-start;
          }

          .about-selected-card h3 {
            font-size: 34px;
          }

          .selected-body p {
            font-size: 12px;
          }

          .selected-images {
            width: 100%;
            min-width: 0;

            height: 190px;

            margin-top: 10px;
          }

          .selected-image-one {
            width: 110px;
            height: 130px;

            right: 20px;
          }

          .selected-image-two {
            width: 105px;
            height: 100px;

            left: 20px;
          }

          .selected-hobby-list {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 900px) {
          .about-flex {
            flex-direction: column;
            align-items: stretch;
            gap: 28px;
          }

          .about-interactive,
          .about-media-stack {
            width: 100%;
            min-width: 0;
          }
        }

      `}</style>
    </>
  )
}

export default About