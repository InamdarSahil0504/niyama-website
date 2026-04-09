import SEO from '../components/SEO'
export default function Terms() {
    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="Terms of Service" description="Niyama Life terms of service. Read about subscriptions, rewards eligibility, the honour system, and your rights as a user." path="/terms" />
            <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: '700', color: '#1a2e28', lineHeight: '1.15', marginBottom: '16px', letterSpacing: '-1px' }}>
                        Terms of Service
                    </h1>
                    <p style={{ fontSize: '16px', color: '#7a9990' }}>Last updated: April 2026</p>
                </div>
            </section>

            <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: '#fdeee9', borderRadius: '12px', padding: '24px', marginBottom: '48px', border: '1px solid #D4735F' }}>
                        <p style={{ fontSize: '15px', color: '#a3442a', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                            Plain English summary: By using Niyama Life you agree to these terms. Rewards are real but not guaranteed — they depend on meeting eligibility requirements. We operate on an honour system. Fraudulent reporting results in permanent disqualification. Subscription fees are non-refundable.
                        </p>
                    </div>

                    {[
                        {
                            title: '1. Acceptance of terms',
                            content: 'By accessing or using the Niyama Life platform — including the website at niyamalife.com and the Niyama Life Progressive Web App — you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use Niyama Life. These terms constitute a legally binding agreement between you and Niyama Life Inc., a Delaware C-Corporation.'
                        },
                        {
                            title: '2. Description of service',
                            content: 'Niyama Life is a behaviour change platform that allows users to track 5 science-backed daily habits, accumulate points, and redeem those points as financial rewards subject to subscription tier eligibility. The service is currently in Beta. During the Beta period, no subscription fees are charged and no rewards are paid out. This will change when Beta concludes and the service launches fully.'
                        },
                        {
                            title: '3. Eligibility',
                            content: 'You must be at least 13 years of age to create a Niyama Life account. Users under the age of 18 may use the platform but are not eligible to receive financial rewards. By creating an account you represent that you meet these age requirements. Niyama Life reserves the right to terminate accounts that do not meet eligibility requirements.'
                        },
                        {
                            title: '4. Subscriptions and payments',
                            content: 'Niyama Life offers four subscription tiers: Free, Basic, Plus, and Premium. Subscription fees are charged monthly in advance. All subscription fees are non-refundable except where required by applicable law. You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. Niyama Life reserves the right to change subscription pricing with 30 days notice.'
                        },
                        {
                            title: '5. Rewards — eligibility and conditions',
                            content: 'Financial rewards are available to eligible subscribers subject to the following conditions: you must meet the minimum successful days requirement for your subscription tier in the relevant calendar month, you must not have 5 or more consecutive inactive days in the relevant month, a successful day is defined as completing any 4 of the 5 daily habits, rewards are capped at the maximum reward amount for your subscription tier, rewards reset on the 1st of every calendar month, Premium subscribers who achieve a perfect month receive an additional bonus as described in the current pricing schedule, and rewards are delivered via Tremendous and are redeemable at participating brands. Rewards are not guaranteed and depend entirely on meeting eligibility requirements. Niyama Life reserves the right to modify reward amounts, caps, and eligibility criteria with notice.'
                        },
                        {
                            title: '6. The honour system and fraud',
                            content: 'Niyama Life operates on a self-reporting honour system. You are responsible for accurately logging your daily habits. By submitting your daily habits you represent that the information submitted is accurate and truthful. Niyama Life uses automated fraud detection to identify patterns of fraudulent reporting. Users found to have fraudulently reported habits — including but not limited to consistently reporting 100% completion over extended periods, submitting habits at identical times each day, or other patterns indicative of dishonest reporting — will be permanently disqualified from receiving rewards and may have their accounts terminated without refund.'
                        },
                        {
                            title: '7. Intellectual property',
                            content: 'All content, features, and functionality of Niyama Life — including but not limited to the reward system design, points system, habit selection methodology, fraud detection methodology, user interface, and branding — are the exclusive property of Niyama Life Inc. and are protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any part of Niyama Life without express written permission.'
                        },
                        {
                            title: '8. Prohibited conduct',
                            content: 'You agree not to use Niyama Life for any unlawful purpose, to fraudulently report habits, to attempt to circumvent the fraud detection system, to reverse engineer any part of the platform, to use automated tools to interact with the platform, to share your account credentials with others, or to interfere with the security or integrity of the platform. Violation of these prohibitions may result in immediate account termination.'
                        },
                        {
                            title: '9. Disclaimers',
                            content: 'Niyama Life is provided on an "as is" basis. We make no warranties regarding the availability, accuracy, or reliability of the service. The health information provided within Niyama Life is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before making changes to your health routine. Financial rewards are not guaranteed and should not be relied upon as a source of income.'
                        },
                        {
                            title: '10. Limitation of liability',
                            content: 'To the maximum extent permitted by applicable law, Niyama Life Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including but not limited to loss of rewards, loss of data, or interruption of service. Our total liability to you shall not exceed the amount you paid to Niyama Life in the 12 months preceding the claim.'
                        },
                        {
                            title: '11. Termination',
                            content: 'Niyama Life reserves the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or any other reason at our sole discretion. You may terminate your account at any time via Settings in the app. Upon termination, your right to use the service ceases immediately. Subscription fees paid are non-refundable upon termination.'
                        },
                        {
                            title: '12. Governing law',
                            content: 'These Terms of Service are governed by the laws of the State of Delaware, United States, without regard to conflict of law provisions. Any disputes arising under these terms shall be resolved exclusively in the courts of Delaware.'
                        },
                        {
                            title: '13. Changes to terms',
                            content: 'Niyama Life reserves the right to modify these Terms of Service at any time. We will notify you of significant changes via email or in-app notification with at least 30 days notice. Continued use of Niyama Life after changes constitutes acceptance of the updated terms.'
                        },
                        {
                            title: '14. Contact',
                            content: 'For questions about these Terms of Service, contact us at info@niyamalife.com.'
                        },
                    ].map(function (section) {
                        return (
                            <div key={section.title} style={{ marginBottom: '40px' }}>
                                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a2e28', marginBottom: '12px' }}>{section.title}</h2>
                                <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', margin: 0 }}>{section.content}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}