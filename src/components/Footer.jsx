import { useRegion } from '../context/RegionContext'

export default function Footer() {
    const { region } = useRegion()

    return (
        <footer style={{ backgroundColor: '#1a2e28', color: 'white', padding: '80px 24px 40px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <span style={{ fontSize: '24px' }}>🌿</span>
                            <span style={{ fontWeight: '700', fontSize: '20px', color: 'white' }}>Niyama Life</span>
                        </div>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontWeight: '600' }}>
                            Real change. Real rewards.
                        </p>
                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', maxWidth: '320px', lineHeight: '1.7', marginBottom: '24px' }}>
                            Building the world's first behaviour change platform that makes daily discipline financially meaningful — one habit at a time.
                        </p>
                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>Social media coming soon 🌿</p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a href="/#how-it-works" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>How It Works</a>
                            <a href="/#habits" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>The 5 Habits</a>
                            <a href="/pricing" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Pricing</a>
                            <a href="/science" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>The Science</a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a href="/about" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About</a>
                            <a href="/blog" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Blog</a>
                            <a href="/press" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Press Kit</a>
                            <a href="/contact" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a href="/privacy" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy Policy</a>
                            <a href="/terms" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Terms of Service</a>
                            <a href="/contact" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact Us</a>
                            <a href="/investor" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Investors</a>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                            © 2026 Niyama Life · Currently in Beta. Rewards not yet live.
                        </p>
                        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
                            {region === 'india' ? '🇮🇳 India launch coming soon.' : '🇺🇸 Available in the United States.'}
                        </p>
                    </div>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', margin: 0 }}>
                        Niyama (Nee-yah-ma) — discipline and self-observance
                    </p>
                </div>
            </div>
        </footer>
    )
}