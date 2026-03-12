import AlKahfLayout from './AlKahfLayout'

function AlKahfPrivacy() {
  return (
    <AlKahfLayout>
      <section className="ak-legal">
        <div className="ak-container">
          <h1 className="ak-legal__title">Privacy Policy</h1>
          <span className="ak-legal__updated">Last updated: March 12, 2026</span>

          <div className="ak-legal__section">
            <h2>Overview</h2>
            <p>
              Al-Kahf ("the App") is built with privacy as a core principle. We
              believe your worship and personal data should remain private. This
              policy explains how we handle (and don't handle) your information.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>Data We Collect</h2>
            <p>
              Al-Kahf is designed to collect as little data as possible. Here's
              what we access:
            </p>
            <ul>
              <li>
                <strong>Location (optional):</strong> Used only to calculate
                accurate prayer times for your area. Your location is never
                stored on our servers.
              </li>
              <li>
                <strong>Donation information:</strong> When you make a donation,
                payment processing is handled securely by our third-party payment
                provider. We do not store your payment details.
              </li>
              <li>
                <strong>Reading progress:</strong> Your Surah Al-Kahf reading
                progress is stored locally on your device only.
              </li>
            </ul>
          </div>

          <div className="ak-legal__section">
            <h2>Data We Don't Collect</h2>
            <ul>
              <li>We do not collect personal identification information</li>
              <li>We do not track your browsing or reading habits</li>
              <li>We do not use advertising or analytics trackers</li>
              <li>We do not sell, share, or rent any user data to third parties</li>
              <li>We do not use cookies for tracking purposes</li>
            </ul>
          </div>

          <div className="ak-legal__section">
            <h2>Local Storage</h2>
            <p>
              All personal preferences, reading progress, and app settings are
              stored locally on your device. This data never leaves your phone
              and is fully under your control. Uninstalling the app removes all
              locally stored data.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>Donations & Payments</h2>
            <p>
              100% of all donations go directly to the charitable causes listed
              in the app. We take zero admin fees and zero overhead. Payment
              processing is handled by secure, PCI-compliant third-party
              providers. We never see or store your card details.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>Third-Party Services</h2>
            <p>
              The app may use the following third-party services:
            </p>
            <ul>
              <li>
                <strong>Prayer time APIs:</strong> To provide accurate prayer
                times based on your location
              </li>
              <li>
                <strong>Payment processor:</strong> To securely handle charitable
                donations
              </li>
            </ul>
            <p>
              Each third-party service has its own privacy policy governing their
              use of information.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>Children's Privacy</h2>
            <p>
              Al-Kahf does not knowingly collect personal data from children
              under 13. The app is suitable for all ages as it collects minimal
              data.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this policy periodically.
            </p>
          </div>

          <div className="ak-legal__section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or the app,
              please contact us at:{' '}
              <a href="mailto:joseph.hayes003@gmail.com" style={{ color: 'var(--ak-gold-dark)', fontWeight: 600 }}>
                joseph.hayes003@gmail.com
              </a>
            </p>
          </div>

          <div className="ak-legal__box">
            <p>
              🔒 Your privacy matters. Al-Kahf is built to serve the Muslim
              community without compromising personal data. We will always
              prioritise your trust.
            </p>
          </div>
        </div>
      </section>
    </AlKahfLayout>
  )
}

export default AlKahfPrivacy
