import { useState } from 'react'
import { useRegion } from '../context/RegionContext'

export default function Waitlist() {
    const { region } = useRegion()
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')
    const isIndia = region === 'india'

    async function handleSubmit(e) {
        e.preventDefault()
        if (!email) return
        setStatus('loading')
        try {
            const response = await fetch(import.meta.env.VITE_SUPABASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                    'Authorization': 'Bearer ' + import.meta.env.VITE_SUPABASE_ANON_KEY,
                    'Prefer': 'return=minimal',
                },
                body: JSON.stringify({ email: email, region: region }),
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
        <section id="waitlist" style={{ padding: '100px 24px', backgroundColor: '#F4F7F5' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>🌿</div>
                <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                    {isIndia ? 'Join the India waitlist' : 'Join the waitlist'}
                </h2>
                <p style={{ fontSize: '16px', color: '#4a6b62', marginBottom: '40px', lineHeight: '1.7' }}>
                    {isIndia
                        ? 'Niyama Life is coming to India soon. Enter your email and we will let you know the moment we launch.'
                        : 'Be among the first to know when Beta 2 opens. No spam. Just one email when it is time.'}
                </p>

                {status === 'success' ? (
                    <div style={{ backgroundColor: '#e8f2ee', borderRadius: '16px', padding: '40px', border: '1px solid #5A8A78' }}>
                        <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>You are on the list.</h3>
                        <p style={{ fontSize: '15px', color: '#4a6b62', margin: 0 }}>
                            {isIndia ? 'We will reach out as soon as Niyama Life launches in India.' : 'We will be in touch when Beta 2 opens. Welcome to Niyama Life.'}
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            style={{ flex: 1, minWidth: '240px', padding: '14px 20px', borderRadius: '25px', border: '1px solid #d8e8e2', fontSize: '15px', color: '#1a2e28', backgroundColor: 'white', outline: 'none' }}
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            style={{ backgroundColor: '#D4735F', color: 'white', fontWeight: '700', fontSize: '15px', padding: '14px 32px', borderRadius: '25px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
                        >
                            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                        </button>
                    </form>
                )}

                {status === 'error' && (
                    <p style={{ fontSize: '13px', color: '#D4735F', marginTop: '12px' }}>
                        Something went wrong. Please try again or email us at info@niyamalife.com
                    </p>
                )}

                <p style={{ fontSize: '12px', color: '#7a9990', marginTop: '16px' }}>
                    No spam. No credit card. Unsubscribe anytime.
                </p>
            </div>
        </section>
    )
}