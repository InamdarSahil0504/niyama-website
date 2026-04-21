export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Science builds your habit framework',
            description: 'Three core habits form your daily foundation — chosen because the evidence is overwhelming, not because they are trendy. Then you personalise: pick four more from a library of ten science-backed options. Plus and Premium subscribers can add their own custom habits on top.',
            color: '#4A7A68',
        },
        {
            number: '02',
            title: 'You show up daily',
            description: 'Track your habits every day. A successful day means completing at least 5 of your 9 habits — with at least 2 being core habits. The app is built for real life, not perfection. Miss a day? Plus and Premium subscribers get one streak freeze per month.',
            color: '#4A7A68',
        },
        {
            number: '03',
            title: 'Milestones unlock as you build momentum',
            description: 'Rewards do not just sit at a flat cap — they grow with your consistency. Hit 10 days, 20 days, complete a successful month, then a perfect month. Each milestone unlocks an additional reward bonus on top of your base cap.',
            color: '#C9973A',
        },
        {
            number: '04',
            title: 'Real rewards follow',
            description: 'Your rewards convert to real gift cards every month via Tremendous — redeemable at hundreds of brands. Premium subscribers can unlock up to $45 per month. No gimmicks. No points that expire. Real financial rewards for real discipline.',
            color: '#C96A52',
        },
    ]

    return (
        <section id="how-it-works" style={{ padding: '100px 24px', backgroundColor: 'white' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        How Niyama Life works
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '520px', margin: '0 auto' }}>
                        Four steps. No complexity. Just daily discipline — rewarded.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                    {steps.map(function (step) {
                        return (
                            <div key={step.number} style={{ backgroundColor: '#F4F7F5', borderRadius: '20px', padding: '40px 32px', position: 'relative' }}>
                                <div style={{ fontSize: '52px', fontWeight: '700', color: step.color, opacity: 0.15, marginBottom: '16px', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                                    {step.number}
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2e28', marginBottom: '12px', lineHeight: '1.3' }}>
                                    {step.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.75' }}>
                                    {step.description}
                                </p>
                                <div style={{ width: '40px', height: '3px', backgroundColor: step.color, borderRadius: '2px', marginTop: '28px' }}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
