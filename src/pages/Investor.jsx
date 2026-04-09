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
                                style={{ padding: '14px 20px', borderRadius: '12px', border: error ? '1px solid #D4735F' : '1px solid #d8e8e2', fontSize: '15px', color: '#1a2e28', backgroundColor: 'white', outline: 'none', textAlign: 'center', letterSpacing: '0.1em' }}
                            />
                            {error && (
                                <p style={{ fontSize: '13px', color: '#D4735F', margin: 0 }}>Incorrect access code. Please try again or contact info@niyamalife.com</p>
                            )}
                            <button type="submit" style={{ backgroundColor: '#5A8A78', color: 'white', fontWeight: '700', fontSize: '15px', padding: '14px 32px', borderRadius: '25px', border: 'none', cursor: 'pointer' }}>
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
                                Niyama Life is a subscription behaviour change platform that rewards users financially for completing science-backed daily habits — making daily discipline the most financially rational choice.
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
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D4735F', flexShrink: 0, marginTop: '6px' }}></div>
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
                                '5 science-backed daily habits — each chosen for overwhelming research evidence, not trend.',
                                'A points system that converts daily discipline into real financial rewards.',
                                'A subscription model — users pay a small monthly fee and get rewarded when they succeed. No financial risk for the user.',
                                'Behavioural economics as the core mechanism — the same reinforcement principles used in clinical behaviour change research.',
                            ].map(function (point, i) {
                                return (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: '#e8f2ee', borderRadius: '12px', padding: '20px 24px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5A8A78', flexShrink: 0, marginTop: '6px' }}></div>
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
                                { title: 'Behaviour change is scientifically proven', description: 'The research on financial incentives and habit formation is robust and replicated.' },
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
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                            {[
                                { stat: '$5.6T', label: 'Global wellness market', source: 'Global Wellness Institute, 2022' },
                                { stat: '$87B', label: 'Digital health market by 2027', source: 'Grand View Research, 2023' },
                                { stat: '$50B+', label: 'Behavioural health market', source: 'Market Research Future, 2023' },
                                { stat: '1.4B', label: 'Target demographic — 18-35 globally', source: 'UN Population Data' },
                            ].map(function (item) {
                                return (
                                    <div key={item.stat} style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '24px', textAlign: 'center', border: '1px solid #d8e8e2' }}>
                                        <div style={{ fontSize: '32px', fontWeight: '700', color: '#5A8A78', marginBottom: '4px' }}>{item.stat}</div>
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
                                Revenue is generated through monthly subscriptions across four tiers — Free ($0), Basic ($0.99/mo), Plus ($4.99/mo), and Premium ($14.99/mo). The model works because average reward payouts are significantly below the tier cap — most users will not achieve maximum rewards every month.
                            </p>
                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', margin: 0 }}>
                                India pricing is structured separately in INR via Razorpay and a local subsidiary, planned post-seed.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Traction</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
                            {[
                                { stat: 'Beta 1', label: 'Fully functional product live' },
                                { stat: 'PWA', label: 'Live at niyamalife.com' },
                                { stat: 'Beta 2', label: 'Apple Health integration planned' },
                                { stat: 'Pre-revenue', label: 'Beta — no fees charged yet' },
                            ].map(function (item) {
                                return (
                                    <div key={item.stat} style={{ backgroundColor: '#e8f2ee', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '18px', fontWeight: '700', color: '#5A8A78', marginBottom: '4px' }}>{item.stat}</div>
                                        <div style={{ fontSize: '12px', color: '#4a6b62' }}>{item.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>The founder</h2>
                        <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#5A8A78', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700', color: 'white', flexShrink: 0 }}>S</div>
                                <div>
                                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#1a2e28' }}>Sahil Inamdar</div>
                                    <div style={{ fontSize: '13px', color: '#7a9990' }}>Founder & CEO · Niyama Life</div>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '20px' }}>
                                {[
                                    { stat: 'PhD', label: 'Chemical Engineering, ASU' },
                                    { stat: '700+', label: 'Research citations' },
                                    { stat: '20+', label: 'Peer-reviewed publications' },
                                    { stat: '5+ yrs', label: 'Biotech research' },
                                ].map(function (cred) {
                                    return (
                                        <div key={cred.stat} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '16px', textAlign: 'center', border: '1px solid #d8e8e2' }}>
                                            <div style={{ fontSize: '20px', fontWeight: '700', color: '#5A8A78', marginBottom: '2px' }}>{cred.stat}</div>
                                            <div style={{ fontSize: '11px', color: '#4a6b62' }}>{cred.label}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                                Sahil spent five years working on cancer immunotherapy and neurodegenerative diseases including Alzheimer's and Parkinson's. He built Niyama Life from a personal conviction that the diseases he spent his career trying to cure are largely preventable — and that the gap between knowing and doing is a behavioural economics problem, not an information problem.
                            </p>
                            <a href="https://www.linkedin.com/in/sahil-inamdar" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#5A8A78', fontWeight: '600', textDecoration: 'none' }}>LinkedIn Profile →</a>
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>Vision</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { label: 'Near term', description: 'Grow to 1,000 active users across USA and India. Launch Apple Health integration for verified habit tracking.' },
                                { label: 'Medium term', description: 'Native iOS and Android apps. Razorpay integration for India. Build proprietary wearable verification layer.' },
                                { label: 'Long term', description: 'The world\'s leading behaviour change platform — where daily discipline is universally rewarded, financially and physically.' },
                            ].map(function (item) {
                                return (
                                    <div key={item.label} style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '24px', border: '1px solid #d8e8e2', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#5A8A78', textTransform: 'uppercase', letterSpacing: '0.05em', minWidth: '80px', paddingTop: '2px' }}>{item.label}</div>
                                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.7', margin: 0 }}>{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#1a2e28', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>Get in touch</h2>
                        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', lineHeight: '1.7' }}>
                            To discuss investment opportunities or request further information contact Sahil directly.
                        </p>
                        <a href="mailto:info@niyamalife.com" style={{ display: 'inline-block', backgroundColor: '#D4735F', color: 'white', fontWeight: '700', fontSize: '16px', padding: '14px 36px', borderRadius: '30px', textDecoration: 'none', marginBottom: '16px' }}>
                            info@niyamalife.com
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