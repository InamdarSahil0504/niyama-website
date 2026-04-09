import SEO from '../components/SEO'

export default function Blog() {
    const articles = [
        { slug: 'why-these-5-habits', title: 'Why we chose these 5 habits — and not any others', date: 'April 2026', readTime: '6 min read', excerpt: 'Every habit in Niyama Life was chosen because the evidence is overwhelming. Here is the science behind each one — and why we left everything else out.', category: 'Science' },
        { slug: 'financial-incentives-behaviour', title: 'The science of financial incentives and behaviour change', date: 'April 2026', readTime: '7 min read', excerpt: 'Streaks fade. Badges lose meaning. Financial consequences change behaviour in ways that no gamification system can match. Here is why.', category: 'Behaviour Science' },
        { slug: 'what-is-niyama', title: 'What is Niyama? The Sanskrit philosophy behind the app', date: 'April 2026', readTime: '4 min read', excerpt: 'Niyama is a Sanskrit word rooted in yogic philosophy. It means personal observance and self-discipline. Here is why that name matters.', category: 'Philosophy' },
        { slug: 'tracking-is-not-enough', title: 'Why tracking habits is not enough — consequences change behaviour', date: 'April 2026', readTime: '5 min read', excerpt: 'Most habit apps track what you do. None of them change what it costs you to skip. That asymmetry is the real problem Niyama solves.', category: 'Behaviour Science' },
        { slug: 'researchers-behind-niyama', title: 'Andrew Huberman, Matthew Walker, Peter Attia — the researchers behind Niyama', date: 'April 2026', readTime: '8 min read', excerpt: 'The five habits in Niyama Life are not arbitrary. They are grounded in the work of three of the most influential researchers in preventive health and longevity.', category: 'Science' },
    ]

    const categoryColors = {
        'Science': { bg: '#e8f2ee', color: '#3d6b5c' },
        'Behaviour Science': { bg: '#fdeee9', color: '#a3442a' },
        'Philosophy': { bg: '#F4F7F5', color: '#4a6b62' },
    }

    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="Blog" description="Science, philosophy, and the case for daily discipline. Written by a researcher who believes that what you do every day determines who you become." path="/blog" />
            <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#e8f2ee', color: '#3d6b5c', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px' }}>
                        Insights
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', color: '#1a2e28', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                        The Niyama Life blog
                    </h1>
                    <p style={{ fontSize: '20px', color: '#4a6b62', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto' }}>
                        Science, philosophy, and the case for daily discipline. Written by a researcher who believes that what you do every day determines who you become.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {articles.map(function (article) {
                            const cat = categoryColors[article.category] || categoryColors['Philosophy']
                            return (
                                <div key={article.slug} style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '36px', border: '1px solid #d8e8e2', display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'start' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                            <span style={{ fontSize: '12px', fontWeight: '600', backgroundColor: cat.bg, color: cat.color, padding: '3px 10px', borderRadius: '20px' }}>{article.category}</span>
                                            <span style={{ fontSize: '12px', color: '#7a9990' }}>{article.date} · {article.readTime}</span>
                                        </div>
                                        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a2e28', marginBottom: '10px', lineHeight: '1.4' }}>{article.title}</h2>
                                        <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7', margin: 0 }}>{article.excerpt}</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid #d8e8e2', color: '#5A8A78', fontSize: '20px', flexShrink: 0 }}>
                                        →
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <p style={{ textAlign: 'center', fontSize: '14px', color: '#7a9990', marginTop: '48px' }}>
                        More articles coming soon. 🌿
                    </p>
                </div>
            </section>
        </main>
    )
}