import { useRegion } from '../context/RegionContext'

export default function PointsRewards() {
    const { region } = useRegion()

    const isIndia = region === 'india'

    const rewardAmounts = {
        usa: {
            free:    { max: '$2.50',  sub: 'first 3 months only' },
            basic:   { max: '$5.00',  sub: 'per month' },
            plus:    { max: '$17.50', sub: 'per month with milestones' },
            premium: { max: '$35.00', sub: 'per month with all milestones' },
        },
        india: {
            free:    { max: '₹30',    sub: 'first 3 months only' },
            basic:   { max: '₹100',   sub: 'per month' },
            plus:    { max: '₹500',   sub: 'per month with milestones' },
            premium: { max: '₹1,500', sub: 'per month with all milestones' },
        },
    }

    const amounts = rewardAmounts[region] || rewardAmounts.usa

    const tiers = [
        { key: 'free',    label: 'Free',    color: '#4A7A68', bg: '#f0f7f4', border: '1px solid #d8e8e2' },
        { key: 'basic',   label: 'Basic',   color: '#4A7A68', bg: '#f0f7f4', border: '1px solid #d8e8e2' },
        { key: 'plus',    label: 'Plus',    color: '#4A7A68', bg: '#e8f5f0', border: '2px solid #4A7A68' },
        { key: 'premium', label: 'Premium', color: '#C96A52', bg: '#fdf0ed', border: '2px solid #C96A52' },
    ]

    const steps = [
        { number: '1', title: 'Complete your habits', description: 'Show up every day and hit your successful day threshold for your tier.', color: '#4A7A68' },
        { number: '2', title: 'Hit milestones', description: 'Reach 10 days, 20 days, and a successful month to progressively unlock bonus rewards.', color: '#C9973A' },
        { number: '3', title: 'Rewards are calculated', description: 'At month end, your base cap plus any milestone bonuses you unlocked are totalled.', color: '#C9973A' },
        { number: '4', title: 'Redeem anywhere', description: 'Rewards delivered as gift cards via Tremendous — redeemable at hundreds of brands.', color: '#C96A52' },
    ]

    return (
        <section style={{ padding: '100px 24px', backgroundColor: 'white' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        How rewards work
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '540px', margin: '0 auto 20px' }}>
                        Your rewards grow as your consistency grows. The more milestones you hit, the more you unlock.
                    </p>
                </div>

                {/* Reward tier cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '72px' }}>
                    {tiers.map(function (tier) {
                        const amt = amounts[tier.key]
                        return (
                            <div key={tier.key} style={{ backgroundColor: tier.bg, borderRadius: '16px', padding: '28px 20px', textAlign: 'center', border: tier.border }}>
                                <div style={{ fontSize: '11px', fontWeight: '700', color: '#7a9990', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                                    {tier.label}
                                </div>
                                <div style={{ fontSize: '30px', fontWeight: '700', color: tier.color, marginBottom: '6px', lineHeight: 1 }}>
                                    {amt.max}
                                </div>
                                <div style={{ fontSize: '11px', color: '#7a9990', lineHeight: '1.4' }}>{amt.sub}</div>
                            </div>
                        )
                    })}
                </div>

                {/* Milestone explainer — USA only */}
                {!isIndia && (
                    <div style={{ backgroundColor: '#f0f7f4', borderRadius: '20px', padding: '36px 40px', marginBottom: '72px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2e28', marginBottom: '6px' }}>
                            Rewards grow with your consistency
                        </h3>
                        <p style={{ fontSize: '14px', color: '#4a6b62', marginBottom: '28px', lineHeight: '1.7' }}>
                            Premium subscribers can unlock up to $35/month by hitting every milestone. Each one is additive — miss one, and you still keep everything you have already unlocked.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                            {[
                                { stage: 'Base',           reward: '$25.00', desc: 'Available from day 1',          color: '#4A7A68' },
                                { stage: '10-day bonus',   reward: '+$2.50', desc: 'Hit 10 successful days',        color: '#C9973A' },
                                { stage: '20-day bonus',   reward: '+$5.00', desc: 'Hit 20 successful days',        color: '#C9973A' },
                                { stage: 'Month bonus',    reward: '+$7.50', desc: 'Complete a successful month',   color: '#C9973A' },
                                { stage: 'Perfect month',  reward: '+$10.00', desc: 'Every submitted day successful', color: '#C96A52' },
                            ].map(function (m) {
                                return (
                                    <div key={m.stage} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', border: '1px solid #c8e8d8' }}>
                                        <div style={{ fontSize: '11px', color: '#7a9990', marginBottom: '4px' }}>{m.stage}</div>
                                        <div style={{ fontSize: '20px', fontWeight: '700', color: m.color, marginBottom: '4px' }}>{m.reward}</div>
                                        <div style={{ fontSize: '11px', color: '#4a6b62' }}>{m.desc}</div>
                                    </div>
                                )
                            })}
                            <div style={{ backgroundColor: '#1a2e28', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ fontSize: '11px', color: '#7a9990', marginBottom: '4px' }}>Max total</div>
                                <div style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>$35.00</div>
                                <div style={{ fontSize: '11px', color: '#7a9990' }}>Premium · per month</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '13px', color: '#7a9990', marginTop: '16px', lineHeight: '1.6' }}>
                            Plus subscribers unlock up to $17.50/mo — base $10.00 + milestones at 20 days and successful month.
                        </p>
                    </div>
                )}

                {/* 4-step flow */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                    {steps.map(function (step) {
                        return (
                            <div key={step.number} style={{ textAlign: 'center' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: step.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '700', margin: '0 auto 16px' }}>
                                    {step.number}
                                </div>
                                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>{step.title}</h3>
                                <p style={{ fontSize: '13px', color: '#4a6b62', lineHeight: '1.65' }}>{step.description}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
