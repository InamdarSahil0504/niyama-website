import { useRegion } from '../context/RegionContext'

export default function CTA() {
    const { region } = useRegion()
    const isIndia = region === 'india'

    return (
        <section style={{ padding: '100px 24px', backgroundColor: '#5A8A78' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '24px' }}>🌿</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'white', marginBottom: '16px', lineHeight: '1.2', letterSpacing: '-0.5px' }}>
                    Your habits are worth something.
                </h2>
                <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.85)', marginBottom: '12px', fontStyle: 'italic' }}>
                    Daily discipline. Backed by science. <span style={{ color: '#fdeee9', fontWeight: '700' }}>Rewarded financially.</span>
                </p>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 48px', lineHeight: '1.7' }}>
                    {isIndia
                        ? 'Join the waitlist and be among the first to experience Niyama Life when we launch in India.'
                        : 'Start free. No credit card required. Earn real rewards for your first 3 months just for showing up.'}
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href={isIndia ? '#waitlist' : 'https://niyama-rouge.vercel.app'} target={isIndia ? '_self' : '_blank'} rel="noopener noreferrer" style={{ backgroundColor: '#D4735F', color: 'white', fontWeight: '700', fontSize: '16px', padding: '16px 40px', borderRadius: '30px', textDecoration: 'none' }}>
                        {isIndia ? 'Join the Waitlist' : 'Start Free'}
                    </a>
                    <a href="/about" style={{ backgroundColor: 'transparent', color: 'white', fontWeight: '600', fontSize: '16px', padding: '16px 40px', borderRadius: '30px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
                        Learn More
                    </a>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '24px' }}>
                    {isIndia ? 'India launch coming soon. Be the first to know.' : 'Free forever. Upgrade anytime. Cancel anytime.'}
                </p>
            </div>
        </section>
    )
}