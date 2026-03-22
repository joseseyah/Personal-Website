import AlKahfLayout from './AlKahfLayout'
import homeFridayImg from '/Kahfassets/home-friday.png'
import caveImg from '/Kahfassets/cave.png'
import qiblaImg from '/Kahfassets/qibla.png'
import readImg from '/Kahfassets/read.png'
import sadaqahImg from '/Kahfassets/sadaqah.png'
import checklistImg from '/Kahfassets/checklist.png'

function AlKahfHome() {
  return (
    <AlKahfLayout>
      {/* Hero */}
      <section className="ak-hero">
        <div className="ak-container">
          <div className="ak-hero__badge">🍉 Available exclusively on iOS</div>
          <h1 className="ak-hero__title">
            Your Companion{' '}
            <br />
            for <span className="ak-hero__friday">Friday</span>.<span className="ak-hero__watermelon">🍉</span>
          </h1>
          <p className="ak-hero__desc">
            Prayer times, Qibla direction, Surah Al-Kahf reading, Golden Hour
            countdown, Sadaqah, and a Jummah checklist — all in one beautifully
            crafted app with a fresh watermelon theme.
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

      {/* Feature 1: Home / Friday View */}
      <section id="feature-home" className="ak-showcase">
        <div className="ak-container ak-showcase__inner">
          <div className="ak-showcase__phone">
            <div className="ak-phone ak-phone--lg">
              <div className="ak-phone__notch" />
              <img src={homeFridayImg} alt="Home screen on Friday" className="ak-phone__screen" />
            </div>
          </div>
          <div className="ak-showcase__text">
            <div className="ak-section-label">🕌 Home</div>
            <h2 className="ak-section-title">Your Friday at a glance</h2>
            <p className="ak-showcase__desc">
              Open the app on Friday and see everything you need — a hadith
              reminder about reading Surah Al-Kahf, a live countdown to the next
              prayer, your Sunnah habits, and quick access to Surah Al-Kahf
              reading with progress tracking.
            </p>
            <ul className="ak-showcase__list">
              <li>Friday Reminder with hadith from the Prophet ﷺ</li>
              <li>Live countdown to next salah</li>
              <li>Surah Al-Kahf card with progress tracking</li>
              <li>Sunnah Habits — build consistency daily</li>
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
            <div className="ak-section-label">⏰ The Cave</div>
            <h2 className="ak-section-title">Golden Hour &amp; Night Times</h2>
            <p className="ak-showcase__desc">
              A dedicated Friday page with a live countdown to the Golden Hour —
              the blessed window before Maghrib when du'as are accepted. Plus
              Du'a of the Day from Surah Al-Kahf, and full Night Times including
              Sunrise, Islamic Midnight, and Last Third.
            </p>
            <ul className="ak-showcase__list">
              <li>Golden Hour countdown with start &amp; Maghrib times</li>
              <li>Du'a of the Day — Al-Kahf 18:10</li>
              <li>Night Times — Sunrise, Islamic Midnight, Last Third</li>
              <li>Hijri date display — 🍉 themed interface</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 3: Qibla */}
      <section className="ak-showcase">
        <div className="ak-container ak-showcase__inner">
          <div className="ak-showcase__phone">
            <div className="ak-phone ak-phone--lg">
              <div className="ak-phone__notch" />
              <img src={qiblaImg} alt="Qibla compass screen" className="ak-phone__screen" />
            </div>
          </div>
          <div className="ak-showcase__text">
            <div className="ak-section-label">🧭 Qibla</div>
            <h2 className="ak-section-title">Find the direction to Makkah</h2>
            <p className="ak-showcase__desc">
              A stunning watermelon-themed compass that points you to the Kaaba
              no matter where you are. See your precise bearing, distance in km,
              and get real-time directional guidance.
            </p>
            <ul className="ak-showcase__list">
              <li>Beautiful watermelon-themed compass design</li>
              <li>Real-time direction with degree indicator</li>
              <li>Distance to the Kaaba in km</li>
              <li>Turn guidance — "Turn right · 118°"</li>
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
            <h2 className="ak-section-title">Read Surah Al-Kahf &amp; Al-Mulk</h2>
            <p className="ak-showcase__desc">
              Verse-by-verse reading with beautiful Arabic typography and English
              translations side by side. Adjust font size, track your progress,
              and build a consistent reading habit for both Friday and nightly surahs.
            </p>
            <ul className="ak-showcase__list">
              <li>Surah Al-Kahf (Friday) &amp; Al-Mulk (Nightly)</li>
              <li>Arabic text with English translation</li>
              <li>Adjustable font size — 28pt and beyond</li>
              <li>Verse counter and progress tracking</li>
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
            <h2 className="ak-section-title">Kahf takes zero fees</h2>
            <p className="ak-showcase__desc">
              100% of your donation reaches those in need. We only ask you to
              cover external processing fees. Choose from meaningful causes and
              give with complete confidence — صدقة جارية.
            </p>
            <ul className="ak-showcase__list">
              <li>Feed the Hungry — meals for families in need</li>
              <li>Clean Water — wells for communities</li>
              <li>Orphan Support — education, food &amp; shelter</li>
              <li>Masjid Building — mosques around the world</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 6: Jummah Checklist */}
      <section className="ak-showcase ak-showcase--alt">
        <div className="ak-container ak-showcase__inner ak-showcase__inner--reverse">
          <div className="ak-showcase__phone">
            <div className="ak-phone ak-phone--lg">
              <div className="ak-phone__notch" />
              <img src={checklistImg} alt="Jummah Checklist" className="ak-phone__screen" />
            </div>
          </div>
          <div className="ak-showcase__text">
            <div className="ak-section-label">✅ Jummah Checklist</div>
            <h2 className="ak-section-title">Never miss a Friday Sunnah</h2>
            <p className="ak-showcase__desc">
              A beautiful checklist of recommended Friday actions from the Sunnah.
              Tick them off as you go and make the most of the blessed day of
              Jumu'ah every single week.
            </p>
            <ul className="ak-showcase__list">
              <li>Read Surah Al-Kahf</li>
              <li>Take a shower</li>
              <li>Make du'a in the Golden Hour</li>
              <li>Send salawat on the Prophet ﷺ</li>
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
          <h2 className="ak-cta__title">Start Your Friday Right 🍉</h2>
          <p className="ak-cta__desc">
            Download Al-Kahf today — completely free. Read, give, find Qibla,
            and earn the reward every Jumu'ah.
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
