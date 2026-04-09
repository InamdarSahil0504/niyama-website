export default function Testimonials() {
    const testimonials = [
        { quote: 'Placeholder quote from Beta user 1. Replace with real testimonial.', name: 'Beta User 1', detail: 'Early access member' },
        { quote: 'Placeholder quote from Beta user 2. Replace with real testimonial.', name: 'Beta User 2', detail: 'Early access member' },
        { quote: 'Placeholder quote from Beta user 3. Replace with real testimonial.', name: 'Beta User 3', detail: 'Early access member' },
    ]

    return (
        <section style={{ padding: '100px 24px', backgroundColor: 'white' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        What early users are saying
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '480px', margin: '0 auto' }}>
                        A small group of people already building better daily habits — and getting rewarded for it.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {testimonials.map(function (t) {
                        return (
                            <div key={t.name} style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ fontSize: '32px', color: '#5A8A78', lineHeight: 1, fontFamily: 'Georgia, serif' }}>"</div>
                                <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', fontStyle: 'italic', flex: 1 }}>
                                    {t.quote}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e8f2ee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: '#5A8A78', flexShrink: 0 }}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#1a2e28' }}>{t.name}</div>
                                        <div style={{ fontSize: '12px', color: '#7a9990' }}>{t.detail}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <p style={{ textAlign: 'center', fontSize: '13px', color: '#7a9990', marginTop: '32px' }}>
                    Niyama Life is currently in Beta. Testimonials from early access members.
                </p>
            </div>
        </section>
    )
}