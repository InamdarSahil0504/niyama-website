export default function BetaTransparency() {
    const milestones = [
        { status: 'done', label: 'Beta 1', description: 'Core habit tracking, points system, analytics, subscription tiers — fully functional and live.' },
        { status: 'current', label: 'Beta 2', description: 'Native iOS and Android apps. Apple Health integration for verified tracking.', description2: 'Expanding to 50 users. Real rewards going live.' },
        { status: 'upcoming', label: 'Full Launch', description: 'Open to everyone. Rewards fully automated.' },
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
                        Niyama Life is currently in Beta. No subscription fees are being charged. No rewards are being paid out yet. We are testing, refining, and building toward a full launch.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '64px' }}>
                    {milestones.map(function (milestone) {
                        const isDone = milestone.status === 'done'
                        const isCurrent = milestone.status === 'current'
                        const bgColor = isDone ? '#e8f2ee' : isCurrent ? 'white' : 'white'
                        const borderColor = isDone ? '#5A8A78' : isCurrent ? '#D4735F' : '#d8e8e2'
                        const borderWidth = isCurrent ? '2px' : '1px'
                        const dotColor = isDone ? '#5A8A78' : isCurrent ? '#D4735F' : '#d8e8e2'
                        const statusText = isDone ? 'Live' : isCurrent ? 'In Progress' : 'Coming Soon'
                        const statusBg = isDone ? '#e8f2ee' : isCurrent ? '#fdeee9' : '#f0f0f0'
                        const statusColor = isDone ? '#3d6b5c' : isCurrent ? '#a3442a' : '#888'

                        return (
                            <div key={milestone.label} style={{ backgroundColor: bgColor, borderRadius: '16px', padding: '28px 32px', border: borderWidth + ' solid ' + borderColor, display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                                <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: dotColor, flexShrink: 0, marginTop: '4px' }}></div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2e28', margin: 0 }}>{milestone.label}</h3>
                                        <span style={{ fontSize: '11px', fontWeight: '700', backgroundColor: statusBg, color: statusColor, padding: '3px 10px', borderRadius: '20px' }}>{statusText}</span>
                                    </div>
                                    <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7', margin: 0 }}>{milestone.description}</p>
                                    {milestone.description2 && (
                                        <p style={{ fontSize: '14px', color: '#D4735F', fontWeight: '600', lineHeight: '1.7', margin: '8px 0 0' }}>{milestone.description2}</p>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '40px', textAlign: 'center', border: '1px solid #d8e8e2' }}>
                    <p style={{ fontSize: '17px', fontWeight: '600', color: '#1a2e28', marginBottom: '8px' }}>
                        Join now as an early user.
                    </p>
                    <p style={{ fontSize: '15px', color: '#4a6b62', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
                        You are not just downloading an app. You are joining a small group of people who believe that discipline should be rewarded — and who are helping build something that could change how the world approaches daily health.
                    </p>
                </div>
            </div>
        </section>
    )
}