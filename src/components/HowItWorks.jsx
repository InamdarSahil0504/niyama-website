export default function HowItWorks() {
    const steps = [
        { number: '01', title: 'Science selects the habits', description: 'Five daily habits chosen because the evidence is overwhelming — not because they are trendy. Each one is backed by decades of peer-reviewed research.', color: '#5A8A78' },
        { number: '02', title: 'You show up daily', description: 'Track your habits every day. Complete any 4 of 5 for a successful day. The app is built for real life — not perfection.', color: '#5A8A78' },
        { number: '03', title: 'Real rewards follow', description: 'Your points convert to real financial rewards every month. Redeemable at hundreds of brands via Tremendous. No gimmicks — just real money.', color: '#D4735F' },
    ]

    return (
        <section id="how-it-works" style={{ padding: '100px 24px', backgroundColor: 'white' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        How Niyama Life works
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '520px', margin: '0 auto' }}>
                        Three steps. No complexity. Just daily discipline — rewarded.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                    {steps.map(function (step) {
                        return (
                            <div key={step.number} style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '40px 32px', position: 'relative' }}>
                                <div style={{ fontSize: '48px', fontWeight: '700', color: step.color, opacity: 0.2, marginBottom: '16px', lineHeight: 1 }}>
                                    {step.number}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1a2e28', marginBottom: '12px' }}>
                                    {step.title}
                                </h3>
                                <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.7' }}>
                                    {step.description}
                                </p>
                                <div style={{ width: '40px', height: '3px', backgroundColor: step.color, borderRadius: '2px', marginTop: '24px' }}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}