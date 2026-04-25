import SEO from '../components/SEO'

export default function Terms() {
    const sections = [
        { title: '1. Acceptance of terms', content: 'By accessing or using the Niyama Life platform — including the website at niyamalife.com and the Niyama Life Progressive Web App at app.niyamalife.com — you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use Niyama Life. These terms constitute a legally binding agreement between you and Niyama Life Inc., a Delaware C-Corporation.' },
        { title: '2. Description of service', content: 'Niyama Life is a behaviour change platform that allows users to build a personalised framework of 9 daily habits, accumulate points, and redeem those points as financial rewards in the form of gift cards, subject to subscription tier eligibility. The service is live. Subscriptions are active and rewards are paid monthly to eligible subscribers.' },
        { title: '3. Eligibility', content: 'You must be at least 13 years of age to create a Niyama Life account. Users under the age of 18 may use the platform but are not eligible to receive financial rewards. By creating an account you represent that you meet these age requirements. Niyama Life reserves the right to terminate accounts that do not meet eligibility requirements.' },
        { title: '4. Subscriptions and payments', content: 'Niyama Life offers four subscription tiers: Free, Basic, Plus, and Premium. Monthly subscriptions are charged in advance each month. Annual subscriptions are charged in full at the start of the billing year. All subscription fees are non-refundable except where required by applicable law. You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. Niyama Life reserves the right to change subscription pricing with 30 days notice.' },
        { title: '5. Rewards — eligibility and conditions', content: 'Financial rewards are delivered exclusively as gift cards via Tremendous and are subject to the following conditions: you must meet the minimum successful days requirement for your subscription tier in the relevant calendar month; you must not have 5 or more consecutive inactive days in that month; a successful day is defined as completing at least 5 of your 9 habits with at least 2 being core habits; rewards include a base cap plus progressive milestone bonuses that unlock at 10 successful days, 20 successful days, a successful month, and a perfect month, depending on your tier; rewards reset on the 1st of every calendar month and do not carry over; users under the age of 18 are not eligible to receive rewards; rewards are not cash and cannot be transferred or redeemed for cash. Niyama Life reserves the right to modify reward amounts, caps, milestone thresholds, and eligibility criteria with notice.' },
        { title: '6. Streak freeze', content: 'Plus and Premium subscribers receive one streak freeze per calendar month. A streak freeze may be applied within 24 hours of a missed day to preserve your streak. Unused freezes do not carry over to the following month. Streak freeze days do not count toward your successful day total for reward eligibility purposes.' },
        { title: '7. The honour system and fraud', content: 'Niyama Life operates on a self-reporting honour system. You are responsible for accurately logging your daily habits. By submitting your daily habits you represent that the information is accurate and truthful. Niyama Life uses automated fraud detection to identify patterns of fraudulent reporting. Users found to have fraudulently reported habits will be permanently disqualified from receiving rewards and may have their accounts terminated without refund.' },
        { title: '8. Intellectual property', content: 'All content, features, and functionality of Niyama Life — including but not limited to the reward system design, milestone structure, points system, habit selection methodology, fraud detection methodology, user interface, and branding — are the exclusive property of Niyama Life Inc. and are protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any part of Niyama Life without express written permission.' },
        { title: '9. Prohibited conduct', content: 'You agree not to use Niyama Life to fraudulently report habits, attempt to circumvent the fraud detection system, reverse engineer any part of the platform, use automated tools to interact with the platform, share account credentials with others, or interfere with the security or integrity of the platform. Violation of these prohibitions may result in immediate account termination.' },
        { title: '10. Disclaimers', content: 'Niyama Life is provided on an "as is" basis. We make no warranties regarding the availability, accuracy, or reliability of the service. Health information provided within Niyama Life is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before making changes to your health routine. Financial rewards are not guaranteed and should not be relied upon as a source of income.' },
        { title: '11. Limitation of liability', content: 'To the maximum extent permitted by applicable law, Niyama Life Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including but not limited to loss of rewards, loss of data, or interruption of service. Our total liability to you shall not exceed the amount you paid to Niyama Life in the 12 months preceding the claim.' },
        { title: '12. Termination', content: 'Niyama Life reserves the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or any other reason at our sole discretion. You may terminate your account at any time via Settings in the app. Upon termination, your right to use the service ceases immediately. Subscription fees paid are non-refundable upon termination.' },
        { title: '13. Governing law', content: 'These Terms of Service are governed by the laws of the State of Delaware, United States, without regard to conflict of law provisions. Any disputes arising under these terms shall be resolved exclusively in the courts of Delaware.' },
        { title: '14. Changes to terms', content: 'Niyama Life reserves the right to modify these Terms of Service at any time. We will notify you of significant changes via email or in-app notification with at least 30 days notice. Continued use of Niyama Life after changes constitutes acceptance of the updated terms.' },
        { title: '15. Contact', content: 'For questions about these Terms of Service, contact us at info@niyamalife.com.' },
    ]

    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="Terms of Service" description="Niyama Life terms of service. Read about subscriptions, rewards eligibility, streak freezes, and your rights as a user." path="/terms" />
            <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: '700', color: '#1a2e28', lineHeight: '1.15', marginBottom: '16px', letterSpacing: '-1px' }}>Terms of Service</h1>
                    <p style={{ fontSize: '16px', color: '#7a9990' }}>Last updated: April 2026</p>
                </div>
            </section>
            <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: '#fdeee9', borderRadius: '12px', padding: '24px', marginBottom: '48px', border: '1px solid #C96A52' }}>
                        <p style={{ fontSize: '15px', color: '#a3442a', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>Plain English summary: By using Niyama Life you agree to these terms. Rewards are real gift cards delivered via Tremendous — not cash payments. Rewards depend on meeting eligibility requirements and are not guaranteed. We operate on an honour system. Fraudulent reporting results in permanent disqualification. Subscription fees are non-refundable.</p>
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
