import SEO from '../components/SEO'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import { useRegion } from '../context/RegionContext'

export default function PricingPage() {
    const { region } = useRegion()

    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="Pricing" description="Simple, transparent pricing. Start free and earn real rewards for your first 3 months. Upgrade anytime to unlock higher reward potential." path="/pricing" />
            <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#e8f2ee', color: '#3d6b5c', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px' }}>
                        Pricing
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', color: '#1a2e28', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                        Start free. <span style={{ color: '#D4735F' }}>Get rewarded.</span>
                    </h1>
                    <p style={{ fontSize: '20px', color: '#4a6b62', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 24px' }}>
                        Every tier gives you access to all 5 science-backed habits. Upgrade to unlock higher reward potential.
                    </p>
                    <div style={{ display: 'inline-block', backgroundColor: '#e8f2ee', color: '#3d6b5c', fontSize: '14px', fontWeight: '600', padding: '8px 20px', borderRadius: '20px' }}>
                        {region === 'india' ? '1,000 pts = ₹50 in rewards' : '1,000 pts = $1.00 in rewards'}
                    </div>
                </div>
            </section>

            <Pricing />

            <section style={{ padding: '80px 24px', backgroundColor: '#F4F7F5' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: '#1a2e28', marginBottom: '40px', textAlign: 'center' }}>
                        How eligibility works
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '24px' }}>
                        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #d8e8e2' }}>
                            <div style={{ fontSize: '24px', marginBottom: '12px' }}>📅</div>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>Minimum successful days</h3>
                            <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7' }}>Each tier requires a minimum number of successful days per month to qualify for rewards. A successful day means completing any 4 of the 5 habits.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #d8e8e2' }}>
                            <div style={{ fontSize: '24px', marginBottom: '12px' }}>🔄</div>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>Monthly reset</h3>
                            <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7' }}>Rewards reset on the 1st of every month. Each month is a fresh start — your points accumulate from day one and are calculated at month end.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #d8e8e2' }}>
                            <div style={{ fontSize: '24px', marginBottom: '12px' }}>🏆</div>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>Perfect month bonus</h3>
                            <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7' }}>Premium users who achieve a perfect month — every submitted day being a successful day — receive an additional bonus on top of their points-based reward.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #d8e8e2' }}>
                            <div style={{ fontSize: '24px', marginBottom: '12px' }}>🤝</div>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>The honour system</h3>
                            <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7' }}>Niyama operates on self-reporting. We trust our users. Those found fraudulently reporting habits are permanently disqualified. Log honestly — not for Niyama, but for yourself.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
            <CTA />
        </main>
    )
}