export default function ComingSoon() {
    const milestones = [
        { status: 'done', emoji: '✅', label: 'Beta 1', description: 'Core app live. Habit tracking, points, analytics, subscription tiers.' },
        { status: 'current', emoji: '🔄', label: 'Beta 2', description: 'Apple Health integration. Native iOS and Android apps. Real rewards going live.' },
        { status: 'upcoming', emoji: '🔜', label: 'Full Launch', description: 'Open to everyone. Rewards fully automated.' },
    ]

    return (
        <section style={{ padding: '100px 24px', backgroundColor: '#1a2e28' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '20px' }}>
                    The road ahead
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
                    What's coming
                </h2>
                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 64px', lineHeight: '1.7' }}>
                    Niyama Life is growing. Here is where we are headed.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
                    {milestones.map(function (milestone) {
                        const isCurrent = milestone.status === 'current'
                        const isDone = milestone.status === 'done'
                        return (
                            <div key={milestone.label} style={{ backgroundColor: isCurrent ? 'rgba(212, 115, 95, 0.15)' : 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px 32px', border: isCurrent ? '1px solid rgba(212,115,95,0.4)' : '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <span style={{ fontSize: '24px', flexShrink: 0 }}>{milestone.emoji}</span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                                        <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', margin: 0 }}>{milestone.label}</h3>
                                        {isCurrent && (
                                            <span style={{ fontSize: '11px', fontWeight: '700', backgroundColor: '#D4735F', color: 'white', padding: '2px 8px', borderRadius: '10px' }}>In Progress</span>
                                        )}
                                        {isDone && (
                                            <span style={{ fontSize: '11px', fontWeight: '700', backgroundColor: '#5A8A78', color: 'white', padding: '2px 8px', borderRadius: '10px' }}>Live</span>
                                        )}
                                    </div>
                                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: '1.6' }}>{milestone.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}