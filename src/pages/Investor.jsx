import { useState } from 'react'

const INVESTOR_PASSWORD = 'NiyamaLife2026'

export default function Investor() {
    const [password, setPassword] = useState('')
    const [unlocked, setUnlocked] = useState(false)
    const [error, setError] = useState(false)

    function handleUnlock(e) {
        e.preventDefault()
        if (password === INVESTOR_PASSWORD) {
            setUnlocked(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    if (!unlocked) {
        return (
            <main style={{ paddingTop: '64px' }}>
                <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', backgroundColor: '#F4F7F5' }}>
                    <div style={{ maxWidth: '440px', width: '100%', textAlign: 'center' }}>
                        <div style={{ fontSize: '40px', marginBottom: '16px' }}>🌿</div>
                        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>Investor Access</h1>
                        <p style={{ fontSize: '15px', color: '#4a6b62', marginBottom: '40px', lineHeight: '1.7' }}>
                            This page is private. Enter the access code to continue. To request access contact info@niyamalife.com
                        </p>
                        <form onSubmit={handleUnlock} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter access code"
                                style={{ padding: '14px 20px', borderRadius: '12px', border: error ? '1px solid #C96A52' : '1px solid #d8e8e2', fontSize: '15px', color: '#1a2e28', backgroundColor: 'white', outline: 'none', textAlign: 'center', letterSpacing: '0.1em' }}
                            />
                            {error && (
                                <p style={{ fontSize: '13px', color: '#C96A52', margin: 0 }}>Incorrect access code. Please try again or contact info@niyamalife.com</p>
                            )}
                            <button type="submit" style={{ backgroundColor: '#4A7A68', color: 'white', fontWeight: '700', fontSize: '15px', padding: '14px 32px', borderRadius: '25px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                                Access Investor Page
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main style={{ paddingTop: '64px' }}>
            <section style={{ padding: '100px 24px', backgroundColor: '#1a2e28', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px' }}>
                        Investor Overview · Confidential
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', color: 'white', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                        Niyama Life
                    </h1>
                    <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 16px' }}>
                        Science-backed. Reward-driven.
                    </p>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
                        This document is confidential and intended solely for the recipient. Do not distribute.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>The one-line pitch</h2>
                        <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2' }}>
                            <p style={{ fontSize: '20px', fontWeight: '600', color: '#1a2e28', lineHeight: '1.6', margin: 0 }}>
                                Niyama Life is a subscription behaviour change platform that rewards users financially for completing 9 science-backed daily habits — making daily discipline the most financially rational choice.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>The problem</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                'Chronic disease is the leading cause of death globally — and most of it is preventable through daily lifestyle habits.',
                                'People know what healthy habits look like. The gap between knowing and doing is not an information problem — it is a behavioural economics problem.',
                                'Existing habit apps rely on streaks, badges, and leaderboards. These create brief dopamine spikes and then fade. None of them change the underlying economics of the decision.',
                                'Skipping a habit costs nothing. Literally nothing. No consequence, no friction, no financial stake. So people skip.',
                            ].map(function (point, i) {
                                return (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '20px 24px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#C96A52', flexShrink: 0, marginTop: '6px' }}></div>
                                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.7', margin: 0 }}>{point}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>The solution</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                '9 daily habits across 3 tiers — 3 fixed core habits with overwhelming research evidence, 4 personalised library choices from 10 science-backed options, and up to 3 custom habits for Premium subscribers.',
                                'A progressive milestone reward system — rewards grow as consistency grows. Hit 10 days, 20 days, a successful month, a perfect month. Premium subscribers unlock up to $45 per month.',
                                'A subscription model — users pay a small monthly fee and get rewarded when they succeed. The financial incentive is real, not gamified.',
                                'Behavioural economics as the core mechanism — the same reinforcement principles used in clinical behaviour change research, applied to preventive health.',
                            ].map(function (point, i) {
                                return (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: '#e8f5f0', borderRadius: '12px', padding: '20px 24px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4A7A68', flexShrink: 0, marginTop: '6px' }}></div>
                                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.7', margin: 0 }}>{point}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Why now</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            {[
                                { title: 'Post-pandemic health awareness', description: 'Consumer health consciousness is at an all-time high.' },
                                { title: 'Wearables mainstream', description: 'Health tracking is already a daily habit for millions.' },
                                { title: 'Health and fintech converging', description: 'Financial wellness and physical wellness are merging markets.' },
                                { title: 'Behaviour change is proven', description: 'The research on financial incentives and habit formation is robust and replicated.' },
                            ].map(function (item) {
                                return (
                                    <div key={item.title} style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '24px', border: '1px solid #d8e8e2' }}>
                                        <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>{item.title}</h3>
                                        <p style={{ fontSize: '13px', color: '#4a6b62', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Market size</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            {[
                                { stat: '$5.6T', label: 'Global wellness market', source: 'Global Wellness Institute, 2022' },
                                { stat: '$87B', label: 'Digital health market by 2027', source: 'Grand View Research, 2023' },
                                { stat: '$50B+', label: 'Behavioural health market', source: 'Market Research Future, 2023' },
                                { stat: '1.4B', label: 'Target demographic — 18–35 globally', source: 'UN Population Data' },
                            ].map(function (item) {
                                return (
                                    <div key={item.stat} style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '24px', textAlign: 'center', border: '1px solid #d8e8e2' }}>
                                        <div style={{ fontSize: '32px', fontWeight: '700', color: '#4A7A68', marginBottom: '4px' }}>{item.stat}</div>
                                        <div style={{ fontSize: '13px', color: '#1a2e28', fontWeight: '600', marginBottom: '4px' }}>{item.label}</div>
                                        <div style={{ fontSize: '11px', color: '#7a9990', fontStyle: 'italic' }}>{item.source}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Business model</h2>
                        <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2', marginBottom: '24px' }}>
                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                                Revenue is generated through monthly and annual subscriptions across four tiers — Free ($0), Basic ($0.99/mo or $9.99/yr), Plus ($4.99/mo or $49.99/yr), and Premium ($14.99/mo or $149.99/yr). The model works because average reward payouts are significantly below the tier cap — most users will not achieve maximum milestone rewards every month.
                            </p>
                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                                Rewards are progressive — base cap plus milestone bonuses that unlock only when users hit 10-day, 20-day, successful month, and perfect month thresholds. This means reward costs scale with the most engaged users, who also have the highest retention and LTV.
                            </p>
                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', margin: 0 }}>
                                India pricing is structured separately in INR via Razorpay and a local entity, planned post-seed.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            {[
                                { tier: 'Basic', price: '$0.99/mo', maxReward: '$5.00/mo', margin: '~$0.99 base' },
                                { tier: 'Plus', price: '$4.99/mo', maxReward: '$17.50/mo', margin: 'Milestone-gated' },
                                { tier: 'Premium', price: '$14.99/mo', maxReward: '$45.00/mo', margin: 'Milestone-gated' },
                            ].map(function (t) {
                                return (
                                    <div key={t.tier} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #d8e8e2' }}>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>{t.tier}</div>
                                        <div style={{ fontSize: '13px', color: '#4a6b62', marginBottom: '4px' }}>Price: <strong>{t.price}</strong></div>
                                        <div style={{ fontSize: '13px', color: '#4a6b62', marginBottom: '4px' }}>Max reward: <strong>{t.maxReward}</strong></div>
                                        <div style={{ fontSize: '11px', color: '#7a9990' }}>{t.margin}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Traction</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
                            {[
                                { stat: 'Beta 1', label: 'Fully functional product — live' },
                                { stat: 'Beta 2', label: 'Web app complete — 9-habit framework' },
                                { stat: 'PWA', label: 'Live at app.niyamalife.com' },
                                { stat: 'Pre-revenue', label: 'Stripe activates at Beta 2 launch' },
                            ].map(function (item) {
                                return (
                                    <div key={item.stat} style={{ backgroundColor: '#e8f5f0', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '16px', fontWeight: '700', color: '#4A7A68', marginBottom: '4px' }}>{item.stat}</div>
                                        <div style={{ fontSize: '12px', color: '#4a6b62' }}>{item.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Roadmap</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { label: 'Phase 5 — Now', description: 'Website updated for Beta 2 launch. Stripe subscriptions and real rewards go live simultaneously with the Beta 2 web app.' },
                                { label: 'Phase 6 — Next', description: 'React Native app for iOS and Android via Expo. Apple HealthKit and Google Health Connect integration. Push notifications, sleep mode, and in-app AI coaching.' },
                                { label: 'Phase 7 — Post-seed', description: 'India market launch — Razorpay payments, INR rewards, DPDPA compliance, local entity. Referral and social sharing growth loops.' },
                                { label: 'YC Winter 2027', description: 'Target application cycle. Building toward the metrics and story that make Niyama Life a compelling YC application.' },
                            ].map(function (item) {
                                return (
                                    <div key={item.label} style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '24px', border: '1px solid #d8e8e2', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#4A7A68', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: '100px', paddingTop: '2px', flexShrink: 0 }}>{item.label}</div>
                                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.7', margin: 0 }}>{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>The founder</h2>
                        <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#4A7A68', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700', color: 'white', flexShrink: 0 }}>S</div>
                                <div>
                                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#1a2e28' }}>Sahil Inamdar</div>
                                    <div style={{ fontSize: '13px', color: '#7a9990' }}>Founder & CEO · Niyama Life</div>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '20px' }}>
                                {[
                                    { stat: 'PhD', label: 'Chemical Engineering, ASU' },
                                    { stat: '700+', label: 'Research citations' },
                                    { stat: '20+', label: 'Peer-reviewed publications' },
                                    { stat: 'H-index 15', label: 'Research impact' },
                                ].map(function (cred) {
                                    return (
                                        <div key={cred.stat} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '16px', textAlign: 'center', border: '1px solid #d8e8e2' }}>
                                            <div style={{ fontSize: '18px', fontWeight: '700', color: '#4A7A68', marginBottom: '2px' }}>{cred.stat}</div>
                                            <div style={{ fontSize: '11px', color: '#4a6b62' }}>{cred.label}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                                Sahil spent years working on cancer immunotherapy and neurodegenerative diseases including Alzheimer's and Parkinson's. He built Niyama Life from a personal conviction that the diseases he spent his career trying to cure are largely preventable — and that the gap between knowing and doing is a behavioural economics problem, not an information problem.
                            </p>
                            <a href="https://www.linkedin.com/in/sahil-inamdar" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#4A7A68', fontWeight: '600', textDecoration: 'none' }}>LinkedIn Profile →</a>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#1a2e28', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>Get in touch</h2>
                        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: '1.7' }}>
                            To discuss investment opportunities or request further information contact Sahil directly.
                        </p>
                        <a href="mailto:sahil.inamdar@gmail.com" style={{ display: 'inline-block', backgroundColor: '#C96A52', color: 'white', fontWeight: '700', fontSize: '16px', padding: '14px 36px', borderRadius: '30px', textDecoration: 'none', marginBottom: '16px' }}>
                            sahil.inamdar@gmail.com
                        </a>
                        <br />
                        <a href="https://www.linkedin.com/in/sahil-inamdar" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                            LinkedIn: linkedin.com/in/sahil-inamdar
                        </a>
                    </div>

                </div>
            </section>
        </main>
    )
}
