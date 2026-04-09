import { useState, useEffect } from 'react'

export default function CookieConsent() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('niyama_cookie_consent')
        if (!consent) {
            setTimeout(() => setVisible(true), 1500)
        }
    }, [])

    function accept() {
        localStorage.setItem('niyama_cookie_consent', 'accepted')
        setVisible(false)
    }

    function decline() {
        localStorage.setItem('niyama_cookie_consent', 'declined')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', zIndex: 9998 }}>
            <div style={{ backgroundColor: '#1a2e28', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <span style={{ fontSize: '20px' }}>🌿</span>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', margin: 0 }}>We use cookies to improve Niyama Life</h3>
                    </div>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', margin: 0, maxWidth: '600px' }}>
                        We use cookies and analytics to understand how people use Niyama Life — so we can make it better. This data helps us improve the product, fix issues faster, and build features that matter to you. We never sell your data. See our <a href="/privacy" style={{ color: '#5A8A78', textDecoration: 'none', fontWeight: '600' }}>Privacy Policy</a> for full details.
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0, minWidth: '160px' }}>
                    <button onClick={accept} style={{ backgroundColor: '#5A8A78', color: 'white', fontWeight: '700', fontSize: '14px', padding: '12px 28px', borderRadius: '25px', border: 'none', cursor: 'pointer' }}>
                        Accept all cookies
                    </button>
                    <button onClick={decline} style={{ backgroundColor: 'transparent', color: 'rgba(255,255,255,0.5)', fontWeight: '600', fontSize: '13px', padding: '10px 28px', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer' }}>
                        Decline non-essential
                    </button>
                </div>
            </div>
        </div>
    )
}