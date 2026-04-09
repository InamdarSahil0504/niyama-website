import HowItWorks from '../components/HowItWorks'
import Habits from '../components/Habits'
import PointsRewards from '../components/PointsRewards'
import Pricing from '../components/Pricing'
import Science from '../components/Science'
import WhyNiyama from '../components/WhyNiyama'
import Founder from '../components/Founder'
import BetaTransparency from '../components/BetaTransparency'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Waitlist from '../components/Waitlist'
import SEO from '../components/SEO'

export default function Home() {
    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO path="/" />
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 24px',
                textAlign: 'center',
            }}>
                <div style={{ maxWidth: '720px' }}>
                    <div style={{
                        display: 'inline-block',
                        backgroundColor: '#e8f2ee',
                        color: '#3d6b5c',
                        fontSize: '13px',
                        fontWeight: '600',
                        padding: '6px 16px',
                        borderRadius: '20px',
                        marginBottom: '24px',
                        letterSpacing: '0.02em',
                    }}>
                        Science-backed behaviour change
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(36px, 6vw, 64px)',
                        fontWeight: '700',
                        color: '#1a2e28',
                        lineHeight: '1.15',
                        marginBottom: '24px',
                        letterSpacing: '-1px',
                    }}>
                        Daily discipline. Backed by science. <span style={{ color: '#D4735F' }}>Rewarded</span> financially.
                    </h1>

                    <p style={{
                        fontSize: '18px',
                        color: '#4a6b62',
                        lineHeight: '1.7',
                        marginBottom: '40px',
                        maxWidth: '520px',
                        margin: '0 auto 40px',
                    }}>
                        Complete 5 science-backed habits every day.
                        Earn points. Get real rewards.
                        Start completely free — no credit card required.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '48px',
                    }}>
                        <a href="https://niyama-rouge.vercel.app" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#D4735F', color: 'white', fontWeight: '600', fontSize: '16px', padding: '14px 32px', borderRadius: '30px', textDecoration: 'none' }}>
                            Start Free
                        </a>

                        <a href="#how-it-works" style={{ backgroundColor: 'transparent', color: '#5A8A78', fontWeight: '600', fontSize: '16px', padding: '14px 32px', borderRadius: '30px', textDecoration: 'none', border: '2px solid #5A8A78' }}>                            See How It Works
                        </a>
                    </div>

                    <p style={{
                        fontSize: '13px',
                        color: '#7a9990',
                    }}>
                        🌿 Currently in Beta · Science-backed · Free to start
                    </p>
                </div>
            </section >
            <HowItWorks />
            <Habits />
            <PointsRewards />
            <Pricing />
            <Science />
            <WhyNiyama />
            <Founder />
            <BetaTransparency />
            <Testimonials />
            <FAQ />
            <CTA />
            <Waitlist />
        </main >
    )
}