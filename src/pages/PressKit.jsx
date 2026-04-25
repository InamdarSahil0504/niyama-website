import SEO from '../components/SEO'

export default function PressKit() {
    const facts = [
        { label: 'Founded', value: '2026' },
        { label: 'Founder', value: 'Sahil Inamdar' },
        { label: 'Headquarters', value: 'Mountain View, California, USA' },
        { label: 'Status', value: 'Beta 2 — Active' },
        { label: 'Markets', value: 'USA (live) · India (coming soon)' },
        { label: 'Product type', value: 'Behaviour change platform · PWA' },
        { label: 'Habits', value: '9 (3 core + 4 library + up to 2 custom)' },
        { label: 'Max monthly reward', value: 'Up to $45/month (Premium, USA)' },
        { label: 'Pricing', value: 'Free · $0.99 · $4.99 · $14.99 per month' },
        { label: 'Reward delivery', value: 'Gift cards via Tremendous' },
    ]

    const descriptions = [
        {
            label: 'One line',
            text: 'Niyama Life is a behaviour change platform that rewards users financially for completing 9 science-backed daily habits.',
        },
        {
            label: 'Three lines',
            text: 'Niyama Life is a behaviour change platform backed by science and powered by real financial rewards. Users build a personalised framework of 9 daily habits — anchored by 3 science-backed core habits and personalised with 4 library choices — and unlock progressive milestone rewards for staying consistent. Built by a biotech researcher who spent years watching preventable disease erase people.',
        },
        {
            label: 'Full paragraph',
            text: 'Niyama Life is a subscription-based behaviour change platform that uses financial incentives to drive daily discipline. Users build a personalised 9-habit framework — 3 fixed core habits chosen for their overwhelming research evidence, plus 4 habits selected from a curated library of 10 science-backed options. Premium subscribers can add up to 3 custom habits on top. Rewards are not flat — they grow with consistency through a progressive milestone system, with Premium subscribers able to unlock up to $45 per month. Founded by Sahil Inamdar, a PhD biotech researcher with 700+ citations and years working on cancer immunotherapy and neurodegenerative diseases, Niyama Life represents a scientifically grounded approach to preventive health — where daily discipline is not just tracked, but financially rewarded.',
        },
    ]

    const taglines = [
        { label: 'Primary', text: 'Daily discipline. Backed by science. Rewarded financially.' },
        { label: 'Short', text: 'Rewarding Discipline.' },
        { label: 'Investor / Press', text: 'Science-backed. Reward-driven.' },
        { label: 'CTA', text: 'Real change. Real rewards.' },
    ]

    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="Press Kit" description="Brand assets, founder bio, key facts, and boilerplate descriptions for press coverage of Niyama Life." path="/press" />

            <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#e8f2ee', color: '#3d6b5c', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px' }}>
                        Press
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', color: '#1a2e28', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                        Press Kit
                    </h1>
                    <p style={{ fontSize: '20px', color: '#4a6b62', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto 32px' }}>
                        Everything you need to write about Niyama Life. For press enquiries contact info@niyamalife.com
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a2e28', marginBottom: '32px' }}>Brand</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '64px' }}>
                        {[
                            { bg: '#4A7A68', text: 'white', label: 'Primary — Sage Green' },
                            { bg: '#F4F7F5', text: '#1a2e28', label: 'Light background', border: true },
                            { bg: '#1a2e28', text: 'white', label: 'Dark background' },
                        ].map(function (variant) {
                            return (
                                <div key={variant.label} style={{ backgroundColor: variant.bg, borderRadius: '16px', padding: '48px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', border: variant.border ? '1px solid #d8e8e2' : 'none' }}>
                                    <span style={{ fontSize: '48px' }}>🌿</span>
                                    <span style={{ fontWeight: '700', fontSize: '20px', color: variant.text }}>Niyama Life</span>
                                    <span style={{ fontSize: '12px', color: variant.text, opacity: 0.6 }}>{variant.label}</span>
                                </div>
                            )
                        })}
                    </div>

                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a2e28', marginBottom: '32px' }}>Brand colours</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '64px' }}>
                        {[
                            { name: 'Sage Green', hex: '#4A7A68' },
                            { name: 'Terracotta', hex: '#C96A52' },
                            { name: 'Warm Gold', hex: '#C9973A' },
                            { name: 'Deep Green', hex: '#1a2e28' },
                            { name: 'Light Sage', hex: '#F5F7F4' },
                        ].map(function (color) {
                            return (
                                <div key={color.name} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #d8e8e2' }}>
                                    <div style={{ backgroundColor: color.hex, height: '72px' }}></div>
                                    <div style={{ padding: '12px 16px', backgroundColor: 'white' }}>
                                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#1a2e28', marginBottom: '2px' }}>{color.name}</div>
                                        <div style={{ fontSize: '12px', color: '#7a9990', fontFamily: 'monospace' }}>{color.hex}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a2e28', marginBottom: '32px' }}>Key facts</h2>
                    <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '32px', marginBottom: '64px', border: '1px solid #d8e8e2' }}>
                        {facts.map(function (fact, i) {
                            return (
                                <div key={fact.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < facts.length - 1 ? '1px solid #d8e8e2' : 'none', gap: '16px', flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#7a9990' }}>{fact.label}</span>
                                    <span style={{ fontSize: '14px', color: '#1a2e28', fontWeight: '500', textAlign: 'right' }}>{fact.value}</span>
                                </div>
                            )
                        })}
                    </div>

                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a2e28', marginBottom: '32px' }}>Taglines</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '64px' }}>
                        {taglines.map(function (t) {
                            return (
                                <div key={t.label} style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '20px 24px', border: '1px solid #d8e8e2', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#7a9990', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: '100px' }}>{t.label}</span>
                                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a2e28' }}>{t.text}</span>
                                </div>
                            )
                        })}
                    </div>

                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a2e28', marginBottom: '32px' }}>Boilerplate descriptions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
                        {descriptions.map(function (desc) {
                            return (
                                <div key={desc.label} style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '28px', border: '1px solid #d8e8e2' }}>
                                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#7a9990', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>{desc.label}</div>
                                    <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', margin: 0 }}>{desc.text}</p>
                                </div>
                            )
                        })}
                    </div>

                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>Founder</h2>
                    <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '28px', border: '1px solid #d8e8e2', marginBottom: '64px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#4A7A68', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700', color: 'white', flexShrink: 0 }}>S</div>
                            <div>
                                <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a2e28' }}>Sahil Inamdar</div>
                                <div style={{ fontSize: '13px', color: '#7a9990' }}>Founder & CEO · Niyama Life</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.75', margin: '0 0 16px' }}>
                            Sahil Inamdar is a biotech researcher and founder of Niyama Life. He holds a PhD in Chemical Engineering from Arizona State University, has published 20+ peer-reviewed papers with 700+ citations, and spent years working on cancer immunotherapy and neurodegenerative diseases including Alzheimer's and Parkinson's. He built Niyama Life from a personal conviction that daily discipline should be rewarded — not just tracked.
                        </p>
                    </div>

                    <div style={{ backgroundColor: '#1a2e28', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
                        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>For press enquiries</p>
                        <p style={{ fontSize: '20px', fontWeight: '700', color: 'white', margin: 0 }}>info@niyamalife.com</p>
                    </div>

                </div>
            </section>
        </main>
    )
}
