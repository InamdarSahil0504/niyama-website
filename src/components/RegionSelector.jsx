import { useRegion } from '../context/RegionContext'

export default function RegionSelector() {
    const { chooseRegion } = useRegion()

    return (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: '#F4F7F5', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <div style={{ maxWidth: '480px', width: '100%', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌿</div>
                <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                    Niyama Life
                </h1>
                <p style={{ fontSize: '15px', color: '#4a6b62', marginBottom: '8px', fontStyle: 'italic' }}>
                    Nee-yah-ma — discipline and self-observance
                </p>
                <p style={{ fontSize: '16px', color: '#4a6b62', marginBottom: '48px', lineHeight: '1.7' }}>
                    Daily discipline. Backed by science. <span style={{ color: '#D4735F', fontWeight: '600' }}>Rewarded financially.</span>
                </p>

                <p style={{ fontSize: '14px', fontWeight: '600', color: '#7a9990', marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Where are you based?
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => chooseRegion('usa')}
                        style={{ backgroundColor: 'white', border: '2px solid #d8e8e2', borderRadius: '16px', padding: '24px 32px', cursor: 'pointer', transition: 'all 0.2s', minWidth: '180px' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#5A8A78'; e.currentTarget.style.backgroundColor = '#e8f2ee' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#d8e8e2'; e.currentTarget.style.backgroundColor = 'white' }}
                    >
                        <div style={{ fontSize: '36px', marginBottom: '8px' }}>🇺🇸</div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a2e28', marginBottom: '4px' }}>United States</div>
                        <div style={{ fontSize: '13px', color: '#7a9990' }}>Rewards in USD</div>
                    </button>

                    <button
                        onClick={() => chooseRegion('india')}
                        style={{ backgroundColor: 'white', border: '2px solid #d8e8e2', borderRadius: '16px', padding: '24px 32px', cursor: 'pointer', transition: 'all 0.2s', minWidth: '180px' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#5A8A78'; e.currentTarget.style.backgroundColor = '#e8f2ee' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#d8e8e2'; e.currentTarget.style.backgroundColor = 'white' }}
                    >
                        <div style={{ fontSize: '36px', marginBottom: '8px' }}>🇮🇳</div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a2e28', marginBottom: '4px' }}>India</div>
                        <div style={{ display: 'inline-block', backgroundColor: '#fdeee9', color: '#D4735F', fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '10px', marginBottom: '4px' }}>Coming Soon</div>                        <div style={{ fontSize: '13px', color: '#7a9990' }}>Rewards in INR</div>
                    </button>
                </div>

                <p style={{ fontSize: '13px', color: '#4a6b62', marginTop: '32px', lineHeight: '1.7' }}>
                    🌍 Niyama Life is growing. We're expanding to new regions soon.
                </p>
                <p style={{ fontSize: '12px', color: '#7a9990', marginTop: '8px' }}>
                    You can change this anytime from the menu.
                </p>
            </div>
        </div>
    )
}