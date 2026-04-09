import { useState } from 'react'

export default function ComingSoonLanding() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')

    async function handleSubmit(e) {
        e.preventDefault()
        if (!email) return
        setStatus('loading')
        try {
            const response = await fetch('https://jzbqicxycryebennqyhe.supabase.co', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6YnFpY3h5Y3J5ZWJlbm5xeWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMzQ1NTAsImV4cCI6MjA4OTcxMDU1MH0.3ydrT70qUl2HWwirNMlaXfN5AAfRkKKuKkUvCBaiPcQ',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6YnFpY3h5Y3J5ZWJlbm5xeWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMzQ1NTAsImV4cCI6MjA4OTcxMDU1MH0.3ydrT70qUl2HWwirNMlaXfN5AAfRkKKuKkUvCBaiPcQ',
                    'Prefer': 'return=minimal',
                },
                body: JSON.stringify({ email: email, region: 'unknown' }),
            })
            if (response.ok) {
                setStatus('success')
                setEmail('')
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#F4F7F5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>🌿</div>
                <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: '700', color: '#1a2e28', marginBottom: '12px', letterSpacing: '-1px', lineHeight: '1.15' }}>
                    Niyama Life
                </h1>
                <p style={{ fontSize: '16px', color: '#7a9990', marginBottom: '8px', fontStyle: 'italic' }}>
                    Nee-yah-ma — discipline and self-observance
                </p>
                <p style={{ fontSize: 'clamp(18px, 3vw, 24px)', color: '#4a6b62', lineHeight: '1.6', marginBottom: '8px', fontWeight: '500' }}>
                    Daily discipline. Backed by science.
                </p>
                <p style={{ fontSize: 'clamp(18px, 3vw, 24px)', color: '#D4735F', lineHeight: '1.6', marginBottom: '40px', fontWeight: '700' }}>
                    Rewarded financially.
                </p>

                <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '40px', border: '1px solid #d8e8e2', marginBottom: '32px' }}>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#1a2e28', marginBottom: '8px' }}>
                        Something meaningful is coming.
                    </p>
                    <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.7', marginBottom: '32px' }}>
                        We are building a behaviour change platform that rewards you financially for the daily habits science has proven will change your health and your life. Join the waitlist and be among the first to experience it.
                    </p>

                    {status === 'success' ? (
                        <div style={{ backgroundColor: '#e8f2ee', borderRadius: '12px', padding: '24px', border: '1px solid #5A8A78' }}>
                            <div style={{ fontSize: '28px', marginBottom: '8px' }}>✅</div>
                            <p style={{ fontSize: '15px', fontWeight: '600', color: '#1a2e28', marginBottom: '4px' }}>You are on the list.</p>
                            <p style={{ fontSize: '14px', color: '#4a6b62', margin: 0 }}>We will be in touch when we launch.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required style={{ flex: 1, minWidth: '220px', padding: '14px 20px', borderRadius: '25px', border: '1px solid #d8e8e2', fontSize: '15px', color: '#1a2e28', backgroundColor: '#F4F7F5', outline: 'none' }} />
                            <button type="submit" disabled={status === 'loading'} style={{ backgroundColor: '#D4735F', color: 'white', fontWeight: '700', fontSize: '15px', padding: '14px 28px', borderRadius: '25px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                            </button>
                        </form>
                    )}

                    {status === 'error' && (
                        <p style={{ fontSize: '13px', color: '#D4735F', marginTop: '12px' }}>Something went wrong. Please try again.</p>
                    )}

                    <p style={{ fontSize: '12px', color: '#7a9990', marginTop: '16px' }}>No spam. No credit card. Just one email when we launch.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#5A8A78' }}>5</div>
                        <div style={{ fontSize: '12px', color: '#7a9990' }}>Science-backed habits</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#5A8A78' }}>Real</div>
                        <div style={{ fontSize: '12px', color: '#7a9990' }}>Financial rewards</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#5A8A78' }}>Free</div>
                        <div style={{ fontSize: '12px', color: '#7a9990' }}>To get started</div>
                    </div>
                </div>

                <p style={{ fontSize: '12px', color: '#7a9990', marginTop: '40px' }}>
                    © 2026 Niyama Life · <a href="mailto:info@niyamalife.com" style={{ color: '#5A8A78', textDecoration: 'none' }}>info@niyamalife.com</a>
                </p>
            </div>
        </div>
    )
}