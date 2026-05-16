import SEO from '../components/SEO'

export default function Privacy() {
    const sections = [
        {
            title: '1. Who we are',
            content: 'Niyama Life Inc. is the operator of the Niyama Life behaviour change platform, accessible at niyamalife.com and via the Niyama Life Progressive Web App at app.niyamalife.com. Our contact email is info@niyamalife.com. References to "we", "us", or "our" in this policy refer to Niyama Life Inc.',
        },
        {
            title: '2. What data we collect',
            content: 'We collect the following personal data when you create an account and use Niyama Life: full name, email address, date of birth, region (USA or India), subscription tier and billing cycle, daily habit logs, points and streak data, reward history, referral code and referral relationships, and device information for app functionality. We collect only what is necessary to provide the Niyama Life service.',
        },
        {
            title: '3. Health app data',
            content: 'The upcoming native app will request access to Apple HealthKit (iOS) and Google Health Connect (Android) to automatically track steps, sleep duration, stand hours, and wake time — the health data points required to verify the relevant core and library habits. We access only the specific data points required to verify habit completion. We never sell, share, or use health data for advertising purposes. Health data is used solely to pre-fill habit completion on your behalf. You may revoke health app access at any time from your device settings, after which habits revert to self-reporting. You may also opt in to contributing anonymised, aggregated habit and health data to health research via the Research Consent toggle in your account Settings. This toggle is off by default and entirely optional. If enabled, only anonymised data — never personally identifiable information — is contributed. You may change this preference at any time.',
        },
        {
            title: '4. How we use your data',
            content: 'Your data is used solely to provide and improve the Niyama Life service. This includes: delivering your daily habit tracking and analytics, calculating your points and reward eligibility including milestone bonuses, processing subscription payments via Stripe (USA) or Razorpay (India), delivering gift card rewards via Tremendous, sending service-related notifications and emails via Resend, product analytics via PostHog and Mixpanel, and detecting fraudulent activity to protect the integrity of the rewards system. We do not sell your personal data to any third party under any circumstances.',
        },
        {
            title: '5. Analytics',
            content: 'We use PostHog for session recording, funnel analysis, and product analytics, and Mixpanel for event-based analytics including habit completion, tier upgrades, and reward redemption. Both services are configured to comply with GDPR. Analytics data is used solely to improve the Niyama Life product. You may opt out of analytics tracking via your account settings.',
        },
        {
            title: '6. Reward delivery — Tremendous',
            content: 'Rewards are delivered as gift cards via Tremendous. To process reward delivery, we share your name and email address with Tremendous. Tremendous operates its own privacy policy and data handling practices. We share only the minimum data required to deliver your rewards. We do not share your habit data, health data, or any other personal information with Tremendous.',
        },
        {
            title: '7. Legal basis for processing',
            content: 'We process your personal data on the following legal bases: performance of a contract (to provide the Niyama Life service you have signed up for), legitimate interests (to maintain security, prevent fraud, and improve our service), and consent (for marketing communications and analytics, which you may withdraw at any time).',
        },
        {
            title: '8. Data storage and security',
            content: 'Your data is stored securely using Supabase, a GDPR-compliant database infrastructure. All data is encrypted in transit using TLS and encrypted at rest. Access to your data is restricted using Row Level Security policies enforced at the database level. We retain your data for as long as your account is active. If you delete your account, your personal data is permanently deleted within 30 days.',
        },
        {
            title: '9. Third party services',
            content: 'Niyama Life uses the following third party services: Supabase (database and authentication), Vercel (website and app hosting), Stripe (payment processing — USA), Razorpay (payment processing — India, coming soon), Tremendous (gift card reward delivery), Resend (transactional email), PostHog (product analytics), and Mixpanel (event analytics). Each of these services operates its own privacy policy and data processing agreements.',
        },
        {
            title: '10. Cookies',
            content: 'We use essential cookies to keep you logged in and maintain your session. We use analytics cookies via PostHog and Google Analytics to understand how visitors use our website. You can accept or decline non-essential cookies via the cookie consent banner on your first visit. Declining analytics cookies will not affect your ability to use Niyama Life.',
        },
        {
            title: '11. Your rights',
            content: 'You have the right to access, correct, or delete your personal data at any time. You may request a copy of all data we hold about you. You may withdraw consent for marketing communications and analytics at any time. California residents have additional rights under the CCPA including the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale of personal information — we do not sell personal information. Indian residents have rights under the DPDPA 2023 including the right to access, correct, and erase personal data. To exercise any of these rights, contact us at info@niyamalife.com.',
        },
        {
            title: '12. Children\'s privacy',
            content: 'Niyama Life does not knowingly collect personal data from children under the age of 13. Users under the age of 18 may use Niyama Life but are not eligible to receive financial rewards. If you believe a child under 13 has provided us with personal data, contact us immediately at info@niyamalife.com.',
        },
        {
            title: '13. Data retention',
            content: 'We retain your personal data for as long as your account remains active. If you delete your account, we will permanently delete your personal data within 30 days, except where we are required to retain it for legal or compliance purposes. Anonymised and aggregated data may be retained indefinitely for analytics purposes.',
        },
        {
            title: '14. Changes to this policy',
            content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via email or via an in-app notification. The date of the most recent update is shown at the top of this page. Continued use of Niyama Life after changes constitutes acceptance of the updated policy.',
        },
        {
            title: '15. Contact',
            content: 'For any questions about this Privacy Policy or to exercise your data rights, contact us at info@niyamalife.com. We will respond within 48 hours.',
        },
    ]

    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="Privacy Policy" description="Niyama Life privacy policy. We collect only what we need, never sell your data, and you can delete your account anytime." path="/privacy" />
            <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: '700', color: '#1a2e28', lineHeight: '1.15', marginBottom: '16px', letterSpacing: '-1px' }}>
                        Privacy Policy
                    </h1>
                    <p style={{ fontSize: '16px', color: '#7a9990' }}>Last updated: April 2026</p>
                </div>
            </section>

            <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: '#e8f5f0', borderRadius: '12px', padding: '24px', marginBottom: '48px', border: '1px solid #4A7A68' }}>
                        <p style={{ fontSize: '15px', color: '#3d6b5c', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                            Plain English summary: We collect only what we need to run Niyama Life. We do not sell your data. Rewards are delivered as gift cards via Tremendous — we share only your name and email with them. Analytics are handled by PostHog and Mixpanel. You can delete your account and all associated data at any time.
                        </p>
                    </div>

                    {sections.map(function (section) {
                        return (
                            <div key={section.title} style={{ marginBottom: '40px' }}>
                                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a2e28', marginBottom: '12px' }}>{section.title}</h2>
                                <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.85', margin: 0 }}>{section.content}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
