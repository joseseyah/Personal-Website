import AlKahfLayout from './AlKahfLayout'
import homeImg from '/Kahfassets/home.png'
import caveImg from '/Kahfassets/cave.png'
import listenImg from '/Kahfassets/listen.png'
import sadaqahImg from '/Kahfassets/sadaqah.png'
import readImg from '/Kahfassets/read.png'
import globalImg from '/Kahfassets/global.png'

function AlKahfHome() {
  return (
    <AlKahfLayout>
      {/* Hero */}
      <section className="ak-hero">
        <div className="ak-container">
          <div className="ak-hero__badge">✨ Available exclusively on iOS</div>
          <h1 className="ak-hero__title">
            Your Companion{' '}
            <br />
            for <span className="ak-hero__friday">Friday</span>.
          </h1>
          <p className="ak-hero__desc">
            Track prayer times, listen to beautiful recitations of Surah Al-Kahf,
            and give Sadaqah seamlessly with our beautifully crafted app.
          </p>
          <div className="ak-hero__actions">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn--primary">
               Download on App Store
            </a>
            <a href="#feature-home" className="ak-btn ak-btn--secondary" onClick={(e) => {
              e.preventDefault()
              document.querySelector('#feature-home')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              See Features ↓
            </a>
          </div>
        </div>
      </section>

      {/* Feature 1: Home / Prayer Times */}
      <section id="feature-home" className="ak-showcase">
        <div className="ak-container ak-showcase__inner">
          <div className="ak-showcase__phone">
            <div className="ak-phone ak-phone--lg">
              <div className="ak-phone__notch" />
              <img src={homeImg} alt="Home screen" className="ak-phone__screen" />
            </div>
          </div>
          <div className="ak-showcase__text">
            <div className="ak-section-label">🕌 Prayer Times</div>
            <h2 className="ak-section-title">Your daily salah companion</h2>
            <p className="ak-showcase__desc">
              Accurate prayer times for your location with a live countdown to the
              next salah. See the current and upcoming prayer at a glance, track
              Hijri dates, and never miss a prayer again.
            </p>
            <ul className="ak-showcase__list">
              <li>Live countdown to next prayer</li>
              <li>Sunrise, Islamic Midnight & Last Third of the Night</li>
              <li>Hijri calendar date display</li>
              <li>Location-based accuracy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 2: The Cave / Golden Hour */}
      <section className="ak-showcase ak-showcase--alt">
        <div className="ak-container ak-showcase__inner ak-showcase__inner--reverse">
          <div className="ak-showcase__phone">
            <div className="ak-phone ak-phone--lg">
              <div className="ak-phone__notch" />
              <img src={caveImg} alt="The Cave screen" className="ak-phone__screen" />
            </div>
          </div>
          <div className="ak-showcase__text">
            <div className="ak-section-label">⏰ Friday Golden Hour</div>
            <h2 className="ak-section-title">Catch the blessed hour</h2>
            <p className="ak-showcase__desc">
              A live countdown timer to the special hour on Friday between Asr and
              Maghrib — a time when du'as are especially accepted. Never miss this
              blessed window again.
            </p>
            <ul className="ak-showcase__list">
              <li>Live countdown to the Golden Hour</li>
              <li>Start and Maghrib times displayed</li>
              <li>Today & tomorrow's key times</li>
              <li>The Cave — الكهف — themed interface</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 3: Listen */}
      <section className="ak-showcase">
        <div className="ak-container ak-showcase__inner">
          <div className="ak-showcase__phone">
            <div className="ak-phone ak-phone--lg">
              <div className="ak-phone__notch" />
              <img src={listenImg} alt="Listen screen" className="ak-phone__screen" />
            </div>
          </div>
          <div className="ak-showcase__text">
            <div className="ak-section-label">🎧 Listen</div>
            <h2 className="ak-section-title">Beautiful recitations of Surah Al-Kahf</h2>
            <p className="ak-showcase__desc">
              Listen to the full recitation of Surah Al-Kahf by world-renowned
              reciters including Mishary Rashid Alafasy. Play, pause, skip, and
              immerse yourself in the words of Allah.
            </p>
            <ul className="ak-showcase__list">
              <li>Full Surah Al-Kahf audio</li>
              <li>Reciter: Mishary Rashid Alafasy &amp; more</li>
              <li>Skip forward/back 15 seconds</li>
              <li>Beautiful now-playing interface</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 4: Read */}
      <section className="ak-showcase ak-showcase--alt">
        <div className="ak-container ak-showcase__inner ak-showcase__inner--reverse">
          <div className="ak-showcase__phone">
            <div className="ak-phone ak-phone--lg">
              <div className="ak-phone__notch" />
              <img src={readImg} alt="Read screen" className="ak-phone__screen" />
            </div>
          </div>
          <div className="ak-showcase__text">
            <div className="ak-section-label">📖 Read</div>
            <h2 className="ak-section-title">Read Surah Al-Kahf every Friday</h2>
            <p className="ak-showcase__desc">
              Read the full Surah Al-Kahf directly in the app with a clean,
              distraction-free reading experience. Follow along at your own pace
              and build a consistent Friday reading habit.
            </p>
            <ul className="ak-showcase__list">
              <li>Full Surah Al-Kahf text</li>
              <li>Clean, easy-to-read Arabic typography</li>
              <li>Scroll at your own pace</li>
              <li>Build your weekly Jumu'ah reading habit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 5: Sadaqah */}
      <section className="ak-showcase">
        <div className="ak-container ak-showcase__inner">
          <div className="ak-showcase__phone">
            <div className="ak-phone ak-phone--lg">
              <div className="ak-phone__notch" />
              <img src={sadaqahImg} alt="Sadaqah screen" className="ak-phone__screen" />
            </div>
          </div>
          <div className="ak-showcase__text">
            <div className="ak-section-label">💚 Sadaqah</div>
            <h2 className="ak-section-title">100% of donations go to charity</h2>
            <p className="ak-showcase__desc">
              Choose from meaningful causes and donate with complete confidence.
              Zero admin fees, zero overhead — every single penny reaches those
              in need. Track your impact and watch your contributions grow.
            </p>
            <ul className="ak-showcase__list">
              <li>Feed the Hungry — provide meals to families</li>
              <li>Clean Water — build wells for communities</li>
              <li>Orphan Support — sponsor education &amp; shelter</li>
              <li>Masjid Building — help mosques worldwide</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 6: Global */}
      <section className="ak-showcase ak-showcase--alt">
        <div className="ak-container ak-showcase__inner ak-showcase__inner--reverse">
          <div className="ak-showcase__phone">
            <div className="ak-phone ak-phone--lg">
              <div className="ak-phone__notch" />
              <img src={globalImg} alt="Global donations screen" className="ak-phone__screen" />
            </div>
          </div>
          <div className="ak-showcase__text">
            <div className="ak-section-label">🌍 Global Sadaqah</div>
            <h2 className="ak-section-title">Muslims giving around the world</h2>
            <p className="ak-showcase__desc">
              See real-time donations pouring in from cities across the globe on
              blessed Jumu'ah. From Kuala Lumpur to Istanbul, Jakarta to
              Birmingham — the ummah giving together.
            </p>
            <ul className="ak-showcase__list">
              <li>Live donation totals from around the world</li>
              <li>City-by-city breakdown with flags</li>
              <li>Total raised, donors, and cities count</li>
              <li>Feel the unity of the global ummah</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="ak-stats">
        <div className="ak-container">
          <div className="ak-stats__grid">
            <div className="ak-stats__item">
              <span className="ak-stats__num">110</span>
              <span className="ak-stats__label">Verses in Surah Al-Kahf</span>
            </div>
            <div className="ak-stats__item">
              <span className="ak-stats__num">4</span>
              <span className="ak-stats__label">Charitable Causes</span>
            </div>
            <div className="ak-stats__item">
              <span className="ak-stats__num">100%</span>
              <span className="ak-stats__label">Donations to Charity</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ak-cta">
        <div className="ak-container">
          <h2 className="ak-cta__title">Start Your Friday Right</h2>
          <p className="ak-cta__desc">
            Download Al-Kahf today — completely free. Read, listen, donate, and
            earn the reward every Jumu'ah.
          </p>
          <div className="ak-cta__buttons">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn--dark">
               Download Free on App Store
            </a>
            <a href="mailto:joseph.hayes003@gmail.com" className="ak-btn ak-btn--secondary">
              ✉️ Get in Touch
            </a>
          </div>
        </div>
      </section>
    </AlKahfLayout>
  )
}

export default AlKahfHome
