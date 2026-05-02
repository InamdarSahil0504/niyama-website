import SEO from '../components/SEO'
import Founder from '../components/Founder'
import CTA from '../components/CTA'

export default function About() {
    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="About" description="Learn about Niyama Life and the scientist who built it. Built by a biotech researcher who spent five years watching preventable disease erase people." path="/about" />
            <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <img src="/niyama-icon.svg" alt="Niyama Life" style={{ height: '72px', width: 'auto', marginBottom: '32px', borderRadius: '18px', display: 'block', margin: '0 auto 32px' }} />
                    <div style={{ display: 'inline-block', backgroundColor: '#e8f2ee', color: '#3d6b5c', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px' }}>
                        Our story
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', color: '#1a2e28', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                        Why we built Niyama Life
                    </h1>
                    <p style={{ fontSize: '20px', color: '#4a6b62', lineHeight: '1.7', maxWidth: '640px', margin: '0 auto' }}>
                        Niyama Life was not built by a product team chasing a market opportunity. It was built by a scientist who spent five years watching disease erase people — and who understood, at a molecular level, how preventable most of it was.
                    </p>
                </div>
            </section>

            <section style={{ padding: '100px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '80px' }}>
                        <div>
                            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>
                                The name
                            </h2>
                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                                Niyama — pronounced <em>Nee-yah-ma</em> — is a Sanskrit word meaning personal observance and self-discipline. It is the second limb of Patanjali's eight-limbed yoga path.
                            </p>
                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8' }}>
                                In yogic philosophy, Niyama represents the practice of showing up for yourself — consistently, honestly, without external pressure. Inner rules. Self-commitment. Daily discipline not for anyone else, but for yourself.
                            </p>
                        </div>
                        <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '40px', textAlign: 'center', border: '1px solid #d8e8e2' }}>
                            <img src="/niyama-icon.svg" alt="Niyama Life" style={{ height: '80px', width: 'auto', marginBottom: '20px', borderRadius: '20px', display: 'block', margin: '0 auto 20px' }} />
                            <p style={{ fontSize: '28px', fontWeight: '700', color: '#4A7A68', marginBottom: '8px', fontStyle: 'italic' }}>Niyama</p>
                            <p style={{ fontSize: '14px', color: '#7a9990', marginBottom: '4px' }}>Nee-yah-ma</p>
                            <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.6' }}>Personal observance · Self-discipline · Inner commitment</p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>
                            The problem we are solving
                        </h2>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                            The scientific literature on preventive health is not ambiguous. Sleep deprivation accelerates neurodegeneration. Sedentary behaviour drives metabolic disease. Chronic screen exposure disrupts dopamine and cortisol regulation. The research is decades deep, repeatedly replicated, and largely ignored.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                            The problem is not knowledge. Most people know they should sleep earlier, move more, and put their phone down. The gap between knowing something and doing it every single day is not an information problem. It is a behavioural economics problem.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', fontStyle: 'italic', borderLeft: '3px solid #C96A52', paddingLeft: '16px' }}>
                            We live in a world where bad decisions are free and good decisions require daily effort. Niyama inverts that.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>
                            The mission
                        </h2>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                            Niyama Life exists to make the cost of discipline lower than the cost of neglect — one day at a time. To give people a reason to do what they already know they should do, long enough for it to become who they are.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8' }}>
                            The goal has never been to make people rich. It is to build a world where daily discipline is universally rewarded — financially, physically, and mentally.
                        </p>
                    </div>
                </div>
            </section>

            <Founder />
            <CTA />
        </main>
    )
}
