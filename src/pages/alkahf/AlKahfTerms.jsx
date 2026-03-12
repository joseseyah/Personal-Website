import AlKahfLayout from './AlKahfLayout'

function AlKahfTerms() {
  return (
    <AlKahfLayout>
      <section className="ak-legal">
        <div className="ak-container">
          <h1 className="ak-legal__title">Terms of Service</h1>
          <span className="ak-legal__updated">Last updated: March 12, 2026</span>

          <div className="ak-legal__section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Al-Kahf app ("the App"),
              you agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use the App.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>2. Description of Service</h2>
            <p>
              Al-Kahf is a free Friday companion app for Muslims that provides:
            </p>
            <ul>
              <li>Surah Al-Kahf text for reading</li>
              <li>Audio recitations of Surah Al-Kahf</li>
              <li>Prayer times based on your location</li>
              <li>Friday Golden Hour countdown timer</li>
              <li>Charitable donation facilitation to selected causes</li>
              <li>Global sadaqah tracking and community features</li>
            </ul>
          </div>

          <div className="ak-legal__section">
            <h2>3. Free to Use</h2>
            <p>
              Al-Kahf is completely free to download and use. There are no
              subscription fees, premium tiers, or in-app purchases required to
              access any features. The app is provided as a service to the Muslim
              community.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>4. Donations</h2>
            <p>
              The App provides the ability to donate to charitable causes.
              By making a donation through the App:
            </p>
            <ul>
              <li>You acknowledge that 100% of your donation goes directly to the stated cause</li>
              <li>Zero admin fees or overhead are deducted from donations</li>
              <li>Donations are processed by secure third-party payment providers</li>
              <li>Donations are voluntary and non-refundable once processed</li>
              <li>You are responsible for ensuring you are legally permitted to make donations in your jurisdiction</li>
            </ul>
          </div>

          <div className="ak-legal__section">
            <h2>5. Accuracy of Information</h2>
            <p>
              We strive to provide accurate prayer times and Quranic content.
              However, prayer times may vary based on calculation methods and
              your device's location accuracy. We recommend verifying prayer
              times with your local masjid. The Quranic text is sourced from
              verified and authentic sources.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>6. User Conduct</h2>
            <p>
              You agree to use the App in a manner consistent with Islamic values
              and applicable laws. You may not:
            </p>
            <ul>
              <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
              <li>Use the App for any unlawful or fraudulent purpose</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Misrepresent your identity when making donations</li>
            </ul>
          </div>

          <div className="ak-legal__section">
            <h2>7. Intellectual Property</h2>
            <p>
              The App's design, code, and branding are the intellectual property
              of the Al-Kahf development team. Quranic text is the word of Allah
              and is not subject to copyright claims. Audio recitations are
              used with permission from the respective reciters or their
              representatives.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>8. Limitation of Liability</h2>
            <p>
              The App is provided "as is" without warranties of any kind. We are
              not liable for any damages arising from your use of the App,
              including but not limited to inaccurate prayer times, service
              interruptions, or issues with third-party payment processing.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time.
              Continued use of the App after changes constitutes acceptance of the
              new terms. We will notify users of significant changes through the
              App or this page.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>10. Contact</h2>
            <p>
              For questions or concerns about these Terms of Service, please
              contact us at:{' '}
              <a href="mailto:joseph.hayes003@gmail.com" style={{ color: 'var(--ak-gold-dark)', fontWeight: 600 }}>
                joseph.hayes003@gmail.com
              </a>
            </p>
          </div>

          <div className="ak-legal__box">
            <p>
              ☪️ Al-Kahf is built as a sadaqah jariyah — an ongoing charity. We
              ask Allah to accept this effort and make it beneficial for the
              entire ummah.
            </p>
          </div>
        </div>
      </section>
    </AlKahfLayout>
  )
}

export default AlKahfTerms
