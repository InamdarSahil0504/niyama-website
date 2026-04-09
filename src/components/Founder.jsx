export default function Founder() {
    const credentials = [
        { stat: 'PhD', label: 'Chemical Engineering, ASU' },
        { stat: '700+', label: 'Research citations' },
        { stat: '20+', label: 'Peer-reviewed publications' },
        { stat: 'H-15', label: 'H-index' },
    ]

    const publications = [
        { title: 'Rescue of dendritic cells from glycolysis inhibition improves cancer immunotherapy in mice', journal: 'Nature Communications, 2023' },
        { title: 'Short term, low dose alpha-ketoglutarate based polymeric nanoparticles with methotrexate reverse rheumatoid arthritis symptoms in mice and modulate T helper cell responses', journal: 'Biomaterials Science, 2022' },
        { title: 'Immunosuppressive formulations for immunological defense against traumatic brain injury', journal: 'Advanced Healthcare Materials, 2025' },
    ]

    return (
        <section style={{ padding: '100px 24px', backgroundColor: 'white' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        Built by a Scientist
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '520px', margin: '0 auto' }}>
                        Niyama Life was not built by a Silicon Valley product team. It was built by a researcher who spent five years watching what disease does to people — and decided to do something about it.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
                    <div>
                        <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#e8f2ee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', fontWeight: '700', color: '#5A8A78', marginBottom: '24px' }}>
                            S
                        </div>
                        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1a2e28', marginBottom: '4px' }}>
                            Sahil Inamdar
                        </h3>
                        <p style={{ fontSize: '14px', color: '#5A8A78', fontWeight: '600', marginBottom: '20px' }}>
                            Founder & CEO
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '20px' }}>
                            For five years I worked as a biotech researcher on some of the most devastating conditions in medicine — Alzheimer's, Parkinson's, cancer, and traumatic brain injury. Every day in the lab, I understood more precisely what these diseases do at a molecular level — and how preventable most of them are.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '20px' }}>
                            The science is clear. Sleep, movement, morning light, screen discipline — these five daily habits are the highest-leverage interventions known to prevent the exact conditions I spent my career studying. Most people know this. Almost nobody does it consistently.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '20px' }}>
                            The reason is not laziness. It is that skipping a habit costs nothing. No consequence. No friction. Every habit app I found relied on streaks and badges that fade within weeks. None of them changed the underlying economics of behaviour. Niyama does.
                        </p>
                        <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '32px', fontStyle: 'italic', borderLeft: '3px solid #D4735F', paddingLeft: '16px' }}>
                            "I built the app I wished had existed before the diseases I study became necessary."
                        </p>
                        <a href="https://www.linkedin.com/in/sahil-inamdar" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#0077b5', color: 'white', fontWeight: '600', fontSize: '14px', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none' }}>
                            View LinkedIn Profile
                        </a>
                    </div>

                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '40px' }}>
                            {credentials.map(function (cred) {
                                return (
                                    <div key={cred.stat} style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '28px', fontWeight: '700', color: '#5A8A78', marginBottom: '4px' }}>{cred.stat}</div>
                                        <div style={{ fontSize: '12px', color: '#4a6b62' }}>{cred.label}</div>
                                    </div>
                                )
                            })}
                        </div>

                        <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1a2e28', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Selected Publications
                        </h4>
                        {publications.map(function (pub) {
                            return (
                                <div key={pub.title} style={{ borderLeft: '3px solid #5A8A78', paddingLeft: '16px', marginBottom: '20px' }}>
                                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a2e28', lineHeight: '1.5', marginBottom: '4px' }}>{pub.title}</p>
                                    <p style={{ fontSize: '12px', color: '#7a9990', fontStyle: 'italic' }}>{pub.journal}</p>
                                </div>
                            )
                        })}

                        <div style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '24px', marginTop: '8px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#5A8A78', flexShrink: 0 }}></div>
                                    <span style={{ fontSize: '14px', color: '#4a6b62' }}>Patent holder</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#5A8A78', flexShrink: 0 }}></div>
                                    <span style={{ fontSize: '14px', color: '#4a6b62' }}>Book chapter author</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#5A8A78', flexShrink: 0 }}></div>
                                    <span style={{ fontSize: '14px', color: '#4a6b62' }}>Guest editor for peer-reviewed journals</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#5A8A78', flexShrink: 0 }}></div>
                                    <span style={{ fontSize: '14px', color: '#4a6b62' }}>100+ conference presentations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}