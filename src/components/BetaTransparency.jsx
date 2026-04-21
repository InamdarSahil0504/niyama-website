export default function BetaTransparency() {
    const milestones = [
        {
            status: 'done',
            label: 'Beta 1',
            description: 'Core habit tracking, points system, analytics, subscription tiers — fully functional and live at app.niyamalife.com. Early users onboarded. No fees charged, no rewards paid out during Beta 1.',
        },
        {
            status: 'current',
            label: 'Beta 2 — Web App',
            description: 'Complete rebuild with the full 9-habit framework, milestone reward system, streak freezes, referrals, and account management. Stripe subscriptions and real rewards going live with Beta 2.',
            highlight: 'Subscriptions and rewards activate at Beta 2 launch.',
        },
        {
            status: 'upcoming',
            label: 'App Store Launch',
            description: 'Native iOS and Android apps via React Native and Expo. Apple HealthKit and Google Health Connect integration for automatic habit verification. Push notifications and in-app sleep mode.',
        },
        {
            status: 'upcoming',
            label: 'Health Integration',
            description: 'Steps, sleep, and active heart rate pulled directly from Apple Health and Google Health Connect. Removes manual self-reporting for core health metrics.',
        },
        {
            status: 'upcoming',
            label: 'India Launch',
            description: 'Full India market launch with INR pricing, Razorpay payments, and India-specific reward delivery. Requires local entity setup post-seed.',
        },
    ]

    return (
        <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#fdeee9', color: '#a3442a', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '20px' }}>
                        Currently in Beta
                    </div>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        We are building this in the open
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
                        Niyama Life is in Beta. Here is exactly where we are, what is live, and what is coming next.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '64px' }}>
                    {milestones.map(function (milestone) {
                        const isDone = milestone.status === 'done'
                        const isCurrent = milestone.status === 'current'
                        const bgColor = isDone ? '#e8f5f0' : isCurrent ? 'white' : 'white'
                        const borderColor = isDone ? '#4A7A68' : isCurrent ? '#C96A52' : '#d8e8e2'
                        const borderWidth = isCurrent ? '2px' : '1px'
                        const dotColor = isDone ? '#4A7A68' : isCurrent ? '#C96A52' : '#d8e8e2'
                        const statusText = isDone ? 'Complete' : isCurrent ? 'In Progress' : 'Coming Soon'
                        const statusBg = isDone ? '#e8f5f0' : isCurrent ? '#fdeee9' : '#f0f0f0'
                        const statusColor = isDone ? '#3d6b5c' : isCurrent ? '#a3442a' : '#888'

                        return (
                            <div key={milestone.label} style={{ backgroundColor: bgColor, borderRadius: '16px', padding: '28px 32px', border: borderWidth + ' solid ' + borderColor, display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: dotColor, flexShrink: 0, marginTop: '4px' }}></div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                        <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a2e28', margin: 0 }}>{milestone.label}</h3>
                                        <span style={{ fontSize: '11px', fontWeight: '700', backgroundColor: statusBg, color: statusColor, padding: '3px 10px', borderRadius: '20px' }}>{statusText}</span>
                                    </div>
                                    <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.75', margin: 0 }}>{milestone.description}</p>
                                    {milestone.highlight && (
                                        <p style={{ fontSize: '13px', color: '#C96A52', fontWeight: '600', lineHeight: '1.7', margin: '8px 0 0' }}>{milestone.highlight}</p>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '40px', textAlign: 'center', border: '1px solid #d8e8e2' }}>
                    <p style={{ fontSize: '17px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>
                        Join now as an early user.
                    </p>
                    <p style={{ fontSize: '15px', color: '#4a6b62', maxWidth: '480px', margin: '0 auto', lineHeight: '1.75' }}>
                        You are not just downloading an app. You are joining a small group of people who believe that discipline should be rewarded — and who are helping build something that could change how the world approaches daily health.
                    </p>
                </div>
            </div>
        </section>
    )
}
