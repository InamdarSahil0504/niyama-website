export default function WhyNiyama() {
    const differentiators = [
        { title: 'Tracking alone does not change behaviour.', description: 'Every habit app tracks your streaks. None of them change the underlying economics of the decision. Skipping a habit costs nothing — so people skip. Niyama changes that.' },
        { title: 'You never risk your own money.', description: 'Unlike cash competition apps where you stake your own money, Niyama works differently. You pay a small subscription and get rewarded when you succeed. No financial risk. Just upside.' },
        { title: 'Virtual points fade. Real rewards do not.', description: 'Badges and leaderboards create a brief dopamine spike and then disappear. Real financial rewards create real consequences. That is the difference between an app you open once and a habit that sticks.' },
    ]

    const positives = [
        { emoji: '🔬', title: 'Built on real science', description: 'Every habit chosen because the evidence is overwhelming. Not because it is trendy.' },
        { emoji: '💰', title: 'Real financial rewards', description: 'Not badges. Not streaks. Actual money redeemable at hundreds of brands.' },
        { emoji: '🌿', title: 'Holistic by design', description: 'Sleep, movement, screen discipline, wake time — the full picture of daily health.' },
        { emoji: '🧠', title: 'Behavioural science, not willpower', description: 'The same reinforcement principles used in clinical research, built into your daily routine.' },
        { emoji: '🎯', title: 'Forgiving by design', description: 'Any 4 of 5 habits counts as a successful day. Built for real life, not perfection.' },
        { emoji: '🔓', title: 'Start completely free', description: 'No credit card. No commitment. Earn real rewards for your first 3 months before spending a penny.' },
    ]

    return (
        <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        Why Niyama Life
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '520px', margin: '0 auto' }}>
                        The gap between knowing what to do and doing it every day is not an information problem. It is a behavioural economics problem.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '80px' }}>
                    {differentiators.map(function (item) {
                        return (
                            <div key={item.title} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2' }}>
                                <div style={{ width: '32px', height: '3px', backgroundColor: '#D4735F', borderRadius: '2px', marginBottom: '20px' }}></div>
                                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a2e28', marginBottom: '12px', lineHeight: '1.4' }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7' }}>
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#1a2e28', marginBottom: '12px' }}>
                        Here is what makes Niyama different
                    </h3>
                    <p style={{ fontSize: '16px', color: '#4a6b62' }}>
                        Not just another habit app. A behaviour change system.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {positives.map(function (item) {
                        return (
                            <div key={item.title} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #d8e8e2', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '28px', flexShrink: 0 }}>{item.emoji}</div>
                                <div>
                                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2e28', marginBottom: '6px' }}>{item.title}</h4>
                                    <p style={{ fontSize: '13px', color: '#4a6b62', lineHeight: '1.6' }}>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}