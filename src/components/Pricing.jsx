import { useRegion } from '../context/RegionContext'

export default function Pricing() {
    const { region } = useRegion()

    const tiers = {
        usa: [
            { name: 'Free', price: '$0', period: 'forever', reward: 'Up to $2.50', period2: 'per month', minDays: '10 successful days', note: 'First 3 months only. Full app access forever.', highlight: false, color: '#5A8A78', cta: 'Start Free', link: 'https://niyama-rouge.vercel.app' },
            { name: 'Basic', price: '$0.99', period: 'per month', reward: 'Up to $5.00', period2: 'per month', minDays: '10 successful days', note: null, highlight: false, color: '#5A8A78', cta: 'Get Basic', link: 'https://niyama-rouge.vercel.app' },
            { name: 'Plus', price: '$4.99', period: 'per month', reward: 'Up to $10.00', period2: 'per month', minDays: '7 successful days', note: null, highlight: true, color: '#5A8A78', cta: 'Get Plus', link: 'https://niyama-rouge.vercel.app' },
            { name: 'Premium', price: '$14.99', period: 'per month', reward: 'Up to $30.00', period2: 'per month', minDays: '5 successful days', note: 'Reward cap: $20.00 + Perfect month bonus: $10.00 = up to $30.00', highlight: false, color: '#D4735F', cta: 'Get Premium', link: 'https://niyama-rouge.vercel.app' },
        ],
        india: [
            { name: 'Free', price: '₹0', period: 'forever', reward: 'Up to ₹30', period2: 'per month', minDays: '10 successful days', note: 'First 3 months only. Full app access forever.', highlight: false, color: '#5A8A78', cta: 'Join Waitlist', link: '#waitlist' },
            { name: 'Basic', price: '₹49', period: 'per month', reward: 'Up to ₹100', period2: 'per month', minDays: '10 successful days', note: null, highlight: false, color: '#5A8A78', cta: 'Join Waitlist', link: '#waitlist' },
            { name: 'Plus', price: '₹249', period: 'per month', reward: 'Up to ₹500', period2: 'per month', minDays: '7 successful days', note: null, highlight: true, color: '#5A8A78', cta: 'Join Waitlist', link: '#waitlist' },
            { name: 'Premium', price: '₹499', period: 'per month', reward: 'Up to ₹1,500', period2: 'per month', minDays: '5 successful days', note: 'Reward cap: ₹1,000 + Perfect month bonus: ₹500 = up to ₹1,500', highlight: false, color: '#D4735F', cta: 'Join Waitlist', link: '#waitlist' },
        ],
    }

    const currentTiers = tiers[region] || tiers.usa

    return (
        <section id="pricing" style={{ padding: '100px 24px', backgroundColor: 'white' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        Simple, transparent pricing
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '520px', margin: '0 auto 16px' }}>
                        Start free. Upgrade when you are ready to earn more.
                    </p>
                    <div style={{ display: 'inline-block', backgroundColor: '#e8f2ee', color: '#3d6b5c', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px' }}>
                        {region === 'india' ? '1,000 pts = ₹50 in rewards' : '1,000 pts = $1.00 in rewards'}
                    </div>
                </div>

                {region === 'india' && (
                    <div style={{ backgroundColor: '#fdeee9', border: '1px solid #f5c4b3', borderRadius: '12px', padding: '16px 24px', textAlign: 'center', marginBottom: '40px' }}>
                        <p style={{ fontSize: '14px', color: '#a3442a', margin: 0, fontWeight: '500' }}>
                            🇮🇳 Niyama Life is coming to India soon. Join the waitlist to be first when we launch.
                        </p>
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                    {currentTiers.map(function (tier) {
                        return (
                            <div key={tier.name} style={{ backgroundColor: tier.highlight ? '#F4F7F5' : 'white', borderRadius: '16px', padding: '32px 24px', border: tier.highlight ? '2px solid #5A8A78' : '1px solid #d8e8e2', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                                {tier.highlight && (
                                    <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#5A8A78', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 16px', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                                        MOST POPULAR
                                    </div>
                                )}
                                {tier.name === 'Premium' && (
                                    <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#D4735F', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 16px', borderRadius: '20px', whiteSpace: 'nowrap' }}>
                                        BEST REWARD
                                    </div>
                                )}

                                <div style={{ marginBottom: '8px' }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2e28', marginBottom: '6px' }}>{tier.name}</h3>
                                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#1a2e28', marginBottom: '2px' }}>{tier.price}</div>
                                    <div style={{ fontSize: '11px', color: '#7a9990', marginBottom: '20px' }}>{tier.period}</div>
                                </div>

                                <div style={{ backgroundColor: tier.color === '#D4735F' ? '#fdeee9' : '#e8f2ee', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
                                    <div style={{ fontSize: '11px', fontWeight: '600', color: '#7a9990', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Reward potential</div>
                                    <div style={{ fontSize: '28px', fontWeight: '700', color: tier.color, marginBottom: '4px' }}>{tier.reward}</div>
                                    <div style={{ fontSize: '11px', color: '#7a9990' }}>{tier.period2}</div>
                                    <div style={{ fontSize: '11px', color: '#7a9990', marginBottom: tier.note ? '8px' : '0' }}>Min. {tier.minDays}</div>
                                    {tier.note && (
                                        <div style={{ fontSize: '12px', color: tier.color, fontWeight: '600', borderTop: '1px solid', borderColor: tier.color === '#D4735F' ? '#f5c4b3' : '#9fd3be', paddingTop: '8px', marginTop: '4px' }}>{tier.note}</div>
                                    )}
                                </div>

                                <div style={{ flex: 1 }}></div>

                                <a href={tier.link} target={tier.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: tier.highlight ? '#5A8A78' : tier.name === 'Premium' ? '#D4735F' : 'transparent', color: tier.highlight || tier.name === 'Premium' ? 'white' : '#5A8A78', fontWeight: '600', fontSize: '15px', padding: '14px 24px', borderRadius: '25px', textDecoration: 'none', border: tier.highlight || tier.name === 'Premium' ? 'none' : '2px solid #5A8A78', marginTop: '20px' }}>
                                    {tier.cta}
                                </a>
                            </div>
                        )
                    })}
                </div>

                <div style={{ textAlign: 'center', marginTop: '48px', padding: '32px', backgroundColor: '#F4F7F5', borderRadius: '16px' }}>
                    <div style={{ fontSize: '24px', marginBottom: '12px' }}>🌿</div>
                    <p style={{ fontSize: '17px', fontWeight: '600', color: '#1a2e28', marginBottom: '8px' }}>
                        Whatever tier you choose, you have already made the right decision.
                    </p>
                    <p style={{ fontSize: '15px', color: '#4a6b62', maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
                        Niyama Life is not just about rewards. It is about building the daily disciplines that science has proven will change your health, your mind, and your life — one day at a time.
                    </p>
                </div>

                <p style={{ textAlign: 'center', fontSize: '12px', color: '#7a9990', marginTop: '24px', lineHeight: '1.7' }}>
                    Rewards are subject to eligibility criteria and reset on the 1st of every month. Subscription fees are non-refundable. Rewards are not guaranteed and depend on meeting minimum successful days requirements.
                </p>
            </div>
        </section>
    )
}