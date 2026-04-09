import { useState, useEffect } from 'react'
import { useRegion } from '../context/RegionContext'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { region, chooseRegion } = useRegion()

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    function openMenu() { setMenuOpen(true) }
    function closeMenu() { setMenuOpen(false) }

    function toggleRegion() {
        if (region === 'usa') {
            chooseRegion('india')
        } else {
            chooseRegion('usa')
        }
    }

    const links = [
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Habits', href: '/#habits' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Science', href: '/science' },
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Investors', href: '/investor' },
        { label: 'Contact', href: '/contact' },
    ]

    return (
        <div>
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .region-toggle { display: none !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
      `}</style>

            <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: scrolled ? 'rgba(244,247,245,0.95)' : '#F4F7F5', borderBottom: scrolled ? '1px solid #d8e8e2' : '1px solid transparent', transition: 'all 0.3s ease', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                    <span style={{ fontSize: '20px' }}>🌿</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: '18px', color: '#1a2e28' }}>Niyama Life</span>
                </a>

                <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                    {links.map(function (link) {
                        return (
                            <a key={link.label} href={link.href} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: '500', color: '#4a6b62', textDecoration: 'none' }}>
                                {link.label}
                            </a>
                        )
                    })}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button className="region-toggle" onClick={toggleRegion} style={{ background: 'white', border: '1px solid #d8e8e2', borderRadius: '20px', padding: '6px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#4a6b62', fontWeight: '500' }}>
                        <span>{region === 'usa' ? '🇺🇸' : '🇮🇳'}</span>
                        <span>{region === 'usa' ? 'USD' : 'INR'}</span>
                    </button>

                    <a href="https://niyama-rouge.vercel.app" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#D4735F', color: 'white', fontFamily: 'DM Sans, sans-serif', fontWeight: '600', fontSize: '14px', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                        Start Free
                    </a>

                    <button className="hamburger-btn" onClick={openMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }} aria-label="Open menu">
                        <span style={{ width: '22px', height: '2px', backgroundColor: '#1a2e28', borderRadius: '2px', display: 'block' }}></span>
                        <span style={{ width: '22px', height: '2px', backgroundColor: '#1a2e28', borderRadius: '2px', display: 'block' }}></span>
                        <span style={{ width: '22px', height: '2px', backgroundColor: '#1a2e28', borderRadius: '2px', display: 'block' }}></span>
                    </button>
                </div>
            </nav>

            <div style={{ position: 'fixed', inset: 0, backgroundColor: '#5A8A78', zIndex: 2000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px', transform: menuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.4s ease' }}>
                <button onClick={closeMenu} style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: '32px', lineHeight: 1 }} aria-label="Close menu">
                    ✕
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>🌿</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: '22px', color: 'white' }}>Niyama Life</span>
                </div>

                {links.map(function (link) {
                    return (
                        <a key={link.label} href={link.href} onClick={closeMenu} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '24px', fontWeight: '700', color: 'white', textDecoration: 'none' }}>
                            {link.label}
                        </a>
                    )
                })}

                <button onClick={toggleRegion} style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: 'white', fontWeight: '500' }}>
                    <span>{region === 'usa' ? '🇺🇸' : '🇮🇳'}</span>
                    <span>Switch to {region === 'usa' ? '🇮🇳 India' : '🇺🇸 USA'}</span>
                </button>

                <a href="https://niyama-rouge.vercel.app" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'white', color: '#5A8A78', fontFamily: 'DM Sans, sans-serif', fontWeight: '700', fontSize: '16px', padding: '14px 36px', borderRadius: '30px', textDecoration: 'none', marginTop: '8px' }}>
                    Start Free
                </a>
            </div>
        </div>
    )
}