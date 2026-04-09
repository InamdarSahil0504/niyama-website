import { useRegion } from '../context/RegionContext'

export default function PointsRewards() {
    const { region } = useRegion()

    const conversionRate = region === 'india' ? '1,000 pts = ₹50 in rewards' : '1,000 pts = $1.00 in rewards'

    const rewardAmounts = {
        usa: { free: '$2.50', basic: '$5.00', plus: '$10.00', premium: '$30.00' },
        india: { free: '₹30', basic: '₹100', plus: '₹500', premium: '₹1,500' },
    }

    const amounts = rewardAmounts[region] || rewardAmounts.usa

    return (
        <section style={{ padding: '100px 24px', backgroundColor: 'white' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        How rewards work
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '520px', margin: '0 auto 20px' }}>
                        Build your daily discipline. Get rewarded for showing up.
                    </p>
                    <div style={{ display: 'inline-block', backgroundColor: '#e8f2ee', color: '#3d6b5c', fontSize: '14px', fontWeight: '600', padding: '8px 20px', borderRadius: '20px' }}>
                        {conversionRate}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '64px' }}>
                    <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '28px 20px', textAlign: 'center' }}>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#7a9990', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Free</div>
                        <div style={{ fontSize: '32px', fontWeight: '700', color: '#5A8A78', marginBottom: '4px' }}>{amounts.free}</div>
                        <div style={{ fontSize: '12px', color: '#7a9990' }}>per month · first 3 months</div>
                    </div>
                    <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '28px 20px', textAlign: 'center' }}>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#7a9990', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Basic</div>
                        <div style={{ fontSize: '32px', fontWeight: '700', color: '#5A8A78', marginBottom: '4px' }}>{amounts.basic}</div>
                        <div style={{ fontSize: '12px', color: '#7a9990' }}>per month</div>
                    </div>
                    <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '28px 20px', textAlign: 'center', border: '2px solid #5A8A78' }}>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#7a9990', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Plus</div>
                        <div style={{ fontSize: '32px', fontWeight: '700', color: '#5A8A78', marginBottom: '4px' }}>{amounts.plus}</div>
                        <div style={{ fontSize: '12px', color: '#7a9990' }}>per month</div>
                    </div>
                    <div style={{ backgroundColor: '#fdeee9', borderRadius: '16px', padding: '28px 20px', textAlign: 'center', border: '2px solid #D4735F' }}>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#a3442a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Premium</div>
                        <div style={{ fontSize: '32px', fontWeight: '700', color: '#D4735F', marginBottom: '4px' }}>{amounts.premium}</div>
                        <div style={{ fontSize: '12px', color: '#a3442a' }}>per month with perfect month</div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                    {[
                        { number: '1', title: 'Complete your habits', description: 'Show up every day and complete your daily habits.' },
                        { number: '2', title: 'Accumulate points', description: 'Points build throughout the month with every successful day.' },
                        { number: '3', title: 'Convert to rewards', description: 'At month end your points convert to real financial rewards.' },
                        { number: '4', title: 'Redeem anywhere', description: 'Rewards delivered via Tremendous — redeemable at hundreds of brands.' },
                    ].map(function (step) {
                        const isLast = step.number === '3' || step.number === '4'
                        return (
                            <div key={step.number} style={{ textAlign: 'center' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: isLast ? '#D4735F' : '#5A8A78', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700', margin: '0 auto 16px' }}>
                                    {step.number}
                                </div>
                                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>{step.title}</h3>
                                <p style={{ fontSize: '13px', color: '#4a6b62', lineHeight: '1.6' }}>{step.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}