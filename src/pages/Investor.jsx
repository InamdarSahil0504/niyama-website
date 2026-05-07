import { useState, useEffect } from 'react'

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
                        <img src="/niyama-icon.svg" alt="Niyama Life" style={{ height: '72px', width: 'auto', display: 'block', margin: '0 auto 24px', borderRadius: '18px' }} />
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

    return <InvestorContent />
}

        { tier: 'Free', price: '$0', annual: '—', maxReward: '$2.50/mo', note: 'First 3 months only', highlight: false },
        { tier: 'Basic', price: '$0.99/mo', annual: '$9.99/yr', maxReward: '$5.00/mo', note: 'Flat cap', highlight: false },
        { tier: 'Plus', price: '$4.99/mo', annual: '$49.99/yr', maxReward: '$17.50/mo', note: 'Milestone-gated', highlight: true },
        { tier: 'Premium', price: '$14.99/mo', annual: '$149.99/yr', maxReward: '$45.00/mo', note: 'Milestone-gated', highlight: false },
    ]

    const indiaTiers = [
        { tier: 'Free', price: '₹0', annual: '—', maxReward: '₹30/mo', note: 'First 3 months only', highlight: false },
        { tier: 'Basic', price: '₹49/mo', annual: '₹499/yr', maxReward: '₹100/mo', note: 'Flat cap', highlight: false },
        { tier: 'Plus', price: '₹249/mo', annual: '₹2,499/yr', maxReward: '₹750/mo', note: 'Milestone-gated', highlight: true },
        { tier: 'Premium', price: '₹499/mo', annual: '₹4,999/yr', maxReward: '₹2,000/mo', note: 'Milestone-gated', highlight: false },
    ]

    const tiers = market === 'usa' ? usaTiers : indiaTiers

    return (
        <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Business model</h2>

            {/* Market toggle */}
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#f0f7f4', borderRadius: '50px', padding: '4px', marginBottom: '24px' }}>
                <button onClick={() => setMarket('usa')} style={{ padding: '8px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '600', backgroundColor: market === 'usa' ? '#4A7A68' : 'transparent', color: market === 'usa' ? 'white' : '#4a6b62', transition: 'all 0.2s', fontFamily: 'inherit' }}>
                    🇺🇸 USA
                </button>
                <button onClick={() => setMarket('india')} style={{ padding: '8px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '600', backgroundColor: market === 'india' ? '#4A7A68' : 'transparent', color: market === 'india' ? 'white' : '#4a6b62', transition: 'all 0.2s', fontFamily: 'inherit' }}>
                    🇮🇳 India
                </button>
            </div>

            <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2', marginBottom: '24px' }}>
                {market === 'usa' ? (
                    <>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                            Revenue is generated through monthly and annual subscriptions across four tiers. The model works because average reward payouts are significantly below the tier cap — most users will not achieve maximum milestone rewards every month.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                            Rewards are progressive — base cap plus milestone bonuses that unlock only when users hit 10-day, 20-day, successful month, and perfect month thresholds. Reward costs scale with the most engaged users, who also have the highest retention and LTV.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', margin: 0 }}>
                            All subscriptions are web-based — users subscribe at niyamalife.com/pricing, bypassing Apple's 30% and Google's 15% commission entirely. Payments via Stripe. Rewards delivered as gift cards via Tremendous.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                            India is Niyama Life's second market — planned post-seed. The Indian wellness and digital health market represents a generational opportunity, with over 500 million smartphone users and rapidly growing health consciousness.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                            India pricing is structured in INR at a fraction of USA pricing — making Niyama Life accessible to India's massive middle class. Payments via Razorpay. Rewards delivered locally.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', margin: 0 }}>
                            India operations will be incorporated as <strong>Niyama Life Private Limited</strong> — a separate Indian subsidiary — post-seed. This ensures DPDPA 2023 compliance, local data residency, and the ability to accept Indian investment.
                        </p>
                    </>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                {tiers.map(function (t) {
                    return (
                        <div key={t.tier} style={{ backgroundColor: t.highlight ? '#e8f5f0' : 'white', borderRadius: '12px', padding: '20px', border: t.highlight ? '2px solid #4A7A68' : '1px solid #d8e8e2' }}>
                            <div style={{ fontSize: '15px', fontWeight: '700', color: '#1a2e28', marginBottom: '10px' }}>{t.tier}</div>
                            <div style={{ fontSize: '13px', color: '#4a6b62', marginBottom: '4px' }}>Monthly: <strong>{t.price}</strong></div>
                            <div style={{ fontSize: '13px', color: '#4a6b62', marginBottom: '4px' }}>Annual: <strong>{t.annual}</strong></div>
                            <div style={{ fontSize: '13px', color: '#4a6b62', marginBottom: '4px' }}>Max reward: <strong>{t.maxReward}</strong></div>
                            <div style={{ fontSize: '11px', color: '#7a9990', marginTop: '6px' }}>{t.note}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function InvestorContent() {
    const traction = [
        { stat: 'Live', label: 'Web app — app.niyamalife.com, fully functional' },
        { stat: 'Live', label: 'Website — www.niyamalife.com, 10 pages' },
        { stat: 'Live', label: 'Stripe subscriptions — all 4 tiers, monthly + annual' },
        { stat: 'Live', label: 'First paying subscriber — $4.99/month' },
        { stat: 'Live', label: 'Delaware C-Corp incorporated — EIN 42-2077253' },
        { stat: 'Live', label: 'PostHog + Mixpanel — analytics wired across all events' },
        { stat: 'Live', label: 'Tremendous — gift card reward delivery integrated' },
        { stat: 'Built', label: 'React Native mobile app — all 5 tabs complete' },
        { stat: 'Pending', label: 'App Store + Google Play — blocked on Apple Developer D-U-N-S' },
    ]

    const roadmap = [
        {
            label: 'Completed',
            color: '#4A7A68',
            bg: '#e8f5f0',
            border: '#c8e8d8',
            items: [
                'Beta 2 web app — 9-habit framework, milestone rewards, Stripe subscriptions live',
                'Marketing website — 10 pages, full brand identity, Stripe checkout',
                'React Native mobile app — 5 tabs, onboarding, mood tracking, analytics, UI polish',
                'Delaware C-Corp incorporation — EIN issued, 83(b) filed',
                'Tremendous gift card rewards — production account approved and integrated',
                'PostHog + Mixpanel analytics — wired across all platforms',
                'First paying subscriber acquired',
            ]
        },
        {
            label: 'In Progress — May 2026',
            color: '#C9973A',
            bg: '#fff8e6',
            border: '#f0d080',
            items: [
                'Apple Developer account — D-U-N-S submitted to D&B, awaiting number',
                'Tremendous reward payout edge function — monthly automated delivery',
                'Stripe webhook handler — subscription tier sync to Supabase',
                'YC Summer 2026 application — target batch',
            ]
        },
        {
            label: 'Next — Q3 2026',
            color: '#4A7A68',
            bg: '#F4F7F5',
            border: '#d8e8e2',
            items: [
                'App Store + Google Play submission — pending Apple Developer account',
                'Apple HealthKit + Google Health Connect — automatic habit verification',
                'Push notifications — wake alert, streak protection, reward delivery',
                'Grow to 500+ active users — first real cohort data for YC',
            ]
        },
        {
            label: 'Post-seed — Q4 2026 onwards',
            color: '#4A7A68',
            bg: '#F4F7F5',
            border: '#d8e8e2',
            items: [
                'India market launch — Niyama Life Private Limited incorporated as Indian subsidiary',
                'Razorpay payments, INR rewards, DPDPA 2023 compliance, local data residency',
                'AI midday nudge — Claude API personalised habit coaching at noon',
                'Social sharing with branded achievement cards',
                'Referral system — growth loop with reward bonuses',
                'Seed round — marketing, full-time founder salary, India expansion, first hire',
            ]
        },
    ]

    return (
        <main style={{ paddingTop: '64px' }}>

            {/* Hero */}
            <section style={{ padding: '100px 24px', backgroundColor: '#1a2e28', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <img src="/niyama-wordmark-dark.svg" alt="Niyama Life" style={{ height: '40px', width: 'auto', display: 'block', margin: '0 auto 32px' }} />
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px' }}>
                        Investor Overview · Confidential · May 2026
                    </div>
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

                    {/* The pitch */}
                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>The pitch</h2>
                        <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2' }}>
                            <p style={{ fontSize: '22px', fontWeight: '600', color: '#1a2e28', lineHeight: '1.7', margin: 0 }}>
                                Most people know what healthy habits look like. Nobody does them consistently because skipping costs nothing. Niyama Life changes that — real financial rewards for real daily discipline.
                            </p>
                        </div>
                    </div>

                    {/* Why this founder */}
                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Why this founder</h2>
                        <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#4A7A68', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700', color: 'white', flexShrink: 0 }}>S</div>
                                <div>
                                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#1a2e28' }}>Sahil Inamdar</div>
                                    <div style={{ fontSize: '13px', color: '#7a9990' }}>Founder & CEO · Niyama Life, Inc.</div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '28px' }}>
                                {[
                                    { stat: 'PhD', label: 'Chemical Engineering, ASU' },
                                    { stat: '700+', label: 'Research citations' },
                                    { stat: '20+', label: 'Peer-reviewed publications' },
                                    { stat: 'H-index 15', label: 'Research impact' },
                                ].map(function (cred) {
                                    return (
                                        <div key={cred.stat} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '16px', textAlign: 'center', border: '1px solid #d8e8e2' }}>
                                            <div style={{ fontSize: '20px', fontWeight: '700', color: '#4A7A68', marginBottom: '2px' }}>{cred.stat}</div>
                                            <div style={{ fontSize: '11px', color: '#4a6b62' }}>{cred.label}</div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                                {[
                                    'Spent years in the lab working on cancer immunotherapy, Alzheimer\'s, Parkinson\'s, and traumatic brain injury — understanding at a molecular level how preventable most chronic disease is.',
                                    'Built the entire product — web app, React Native mobile app, Supabase backend, and marketing website — without a prior coding background. Product is live, incorporated, and generating real subscription revenue.',
                                    'The gap between knowing what to do and doing it every day is not an information problem. It is a behavioural economics problem. Sahil is the only founder who has spent years on both sides of that equation — in the lab studying the diseases, and building the behavioural system to prevent them.',
                                ].map(function (point, i) {
                                    return (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4A7A68', flexShrink: 0, marginTop: '6px' }}></div>
                                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.7', margin: 0 }}>{point}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <a href="https://www.linkedin.com/in/sahil-inamdar" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#4A7A68', fontWeight: '600', textDecoration: 'none' }}>LinkedIn Profile →</a>
                        </div>
                    </div>

                    {/* The problem */}
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

                    {/* The solution */}
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

                    {/* Traction */}
                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Traction — May 2026</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                            {traction.map(function (item) {
                                const isLive = item.stat === 'Live'
                                const isBuilt = item.stat === 'Built'
                                const bgColor = isLive ? '#e8f5f0' : isBuilt ? '#e8f5f0' : '#F4F7F5'
                                const statColor = isLive || isBuilt ? '#4A7A68' : '#7a9990'
                                return (
                                    <div key={item.label} style={{ backgroundColor: bgColor, borderRadius: '12px', padding: '20px', border: '1px solid #d8e8e2' }}>
                                        <div style={{ fontSize: '11px', fontWeight: '700', color: statColor, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{item.stat}</div>
                                        <div style={{ fontSize: '13px', color: '#4a6b62', lineHeight: '1.5' }}>{item.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* Business model with toggle */}
                    <BusinessModel />

                    {/* Why now */}
                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Why now</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            {[
                                { title: 'Post-pandemic health awareness', description: 'Consumer health consciousness is at an all-time high. People are actively looking for tools that work.' },
                                { title: 'Wearables mainstream', description: 'Health tracking is already a daily habit for hundreds of millions. The behaviour infrastructure exists.' },
                                { title: 'Health and fintech converging', description: 'Financial wellness and physical wellness are merging into a single consumer category.' },
                                { title: 'Behaviour change is proven', description: 'The research on financial incentives and habit formation is robust, replicated, and well-understood.' },
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

                    {/* Market size */}
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

                    {/* Roadmap */}
                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Roadmap</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {roadmap.map(function (phase) {
                                return (
                                    <div key={phase.label} style={{ backgroundColor: phase.bg, borderRadius: '16px', padding: '28px 32px', border: `1px solid ${phase.border}` }}>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: phase.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>{phase.label}</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {phase.items.map(function (item, i) {
                                                return (
                                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: phase.color, flexShrink: 0, marginTop: '6px' }}></div>
                                                        <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.65', margin: 0 }}>{item}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* YC callout */}
                        <div style={{ backgroundColor: '#1a2e28', borderRadius: '16px', padding: '32px', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '200px' }}>
                                <div style={{ fontSize: '12px', fontWeight: '700', color: '#C9973A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>YC Summer 2026</div>
                                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', margin: 0 }}>
                                    Targeting Y Combinator Summer 2026. Application deadline approximately September 2026. Deal: $500,000 for 7% equity. Use of funds: marketing, full-time founder salary, India launch, first hire.
                                </p>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px 28px', textAlign: 'center', flexShrink: 0 }}>
                                <div style={{ fontSize: '28px', fontWeight: '700', color: '#C9973A', marginBottom: '4px' }}>$500K</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>for 7% equity</div>
                            </div>
                        </div>
                    </div>

                    {/* Get in touch */}
                    <div style={{ backgroundColor: '#1a2e28', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
                        <img src="/niyama-wordmark-dark.svg" alt="Niyama Life" style={{ height: '32px', width: 'auto', display: 'block', margin: '0 auto 24px' }} />
                        <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>Get in touch</h2>
                        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '32px', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto 32px' }}>
                            To discuss investment opportunities or request a pitch deck, contact Sahil directly.
                        </p>
                        <a href="mailto:sahil.inamdar@niyamalife.com" style={{ display: 'inline-block', backgroundColor: '#C96A52', color: 'white', fontWeight: '700', fontSize: '16px', padding: '14px 36px', borderRadius: '30px', textDecoration: 'none', marginBottom: '20px' }}>
                            sahil.inamdar@niyamalife.com
                        </a>
                        <br />
                        <a href="https://www.linkedin.com/in/sahil-inamdar" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                            linkedin.com/in/sahil-inamdar
                        </a>
                    </div>

                </div>
            </section>
        </main>
    )
}
