import SEO from '../components/SEO'
export default function NotFound() {
    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="Page Not Found" path="/404" />
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', backgroundColor: '#F4F7F5', textAlign: 'center' }}>
                <div style={{ maxWidth: '560px' }}>
                    <div style={{ fontSize: '80px', marginBottom: '24px' }}>🌿</div>
                    <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                        Looks like this habit didn't complete.
                    </h1>
                    <p style={{ fontSize: '18px', color: '#4a6b62', lineHeight: '1.7', marginBottom: '40px' }}>
                        The page you are looking for does not exist. But your streak is still intact — head back home and keep going.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/" style={{ backgroundColor: '#5A8A78', color: 'white', fontWeight: '700', fontSize: '16px', padding: '14px 32px', borderRadius: '30px', textDecoration: 'none' }}>
                            Back to Home
                        </a>
                        <a href="/contact" style={{ backgroundColor: 'transparent', color: '#5A8A78', fontWeight: '600', fontSize: '16px', padding: '14px 32px', borderRadius: '30px', textDecoration: 'none', border: '2px solid #5A8A78' }}>
                            Contact Us
                        </a>
                    </div>
                    <p style={{ fontSize: '13px', color: '#7a9990', marginTop: '40px', fontStyle: 'italic' }}>
                        Niyama (Nee-yah-ma) — discipline and self-observance
                    </p>
                </div>
            </section>
        </main>
    )
}