export default function Science() {
    const facts = [
        {
            emoji: '⏰',
            stat: '#1',
            description: 'most powerful regulator of your circadian rhythm is a consistent wake time — governing cortisol, melatonin, metabolism, and cognitive performance all day long',
            researcher: 'Andrew Huberman, Stanford',
        },
        {
            emoji: '📵',
            stat: '50%',
            description: 'reduction in melatonin from blue light exposure after sunset — phone use after 10:30 PM directly degrades sleep quality and disrupts dopamine regulation',
            researcher: 'Matthew Walker, UC Berkeley · Jonathan Haidt, NYU',
        },
        {
            emoji: '👟',
            stat: '40%',
            description: 'reduction in all-cause mortality from daily walking — you cannot out-supplement a sedentary lifestyle. Every step tier you hit compounds this benefit',
            researcher: 'Preventive Medicine Research',
        },
        {
            emoji: '🧠',
            stat: 'Only',
            description: 'aerobic exercise reliably generates new neurons in the hippocampus — the first region destroyed by Alzheimer\'s disease. Movement is neurological preservation',
            researcher: 'Peter Attia, MD',
        },
        {
            emoji: '🔬',
            stat: '700+',
            description: 'research citations behind Niyama\'s founder — who spent years in the lab studying neurodegeneration, cancer, and traumatic brain injury before building this platform',
            researcher: 'Sahil Inamdar, PhD · Arizona State University',
        },
    ]

    return (
        <section id="science" style={{ padding: '100px 24px', backgroundColor: '#1a2e28' }}>
            <style>{`
                .science-grid {
                    display: grid;
                    grid-template-columns: repeat(5, minmax(0, 1fr));
                    gap: 20px;
                    margin-bottom: 56px;
                }
                @media (max-width: 1024px) {
                    .science-grid {
                        grid-template-columns: repeat(3, minmax(0, 1fr));
                    }
                }
                @media (max-width: 640px) {
                    .science-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '20px' }}>
                        The science behind Niyama
                    </div>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
                        We did not pick these habits randomly.
                    </h2>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto' }}>
                        Every habit in the Niyama framework is backed by decades of peer-reviewed research. The evidence is not emerging or contested — it is overwhelming.
                    </p>
                </div>

                {/* Stat cards */}
                <div className="science-grid">
                    {facts.map(function (fact) {
                        return (
                            <div key={fact.stat + fact.researcher} style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '32px 24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{fact.emoji}</div>
                                <div style={{ fontSize: '40px', fontWeight: '700', color: '#C96A52', marginBottom: '8px', lineHeight: 1 }}>{fact.stat}</div>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.65', marginBottom: '16px' }}>{fact.description}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4A7A68', flexShrink: 0 }}></div>
                                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>{fact.researcher}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Steps tiers callout */}
                <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '32px 40px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: '220px' }}>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Daily steps — tiered scoring</div>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', margin: 0 }}>
                            Steps are not all-or-nothing. Every level you hit counts toward your daily score — making progress rewarding at every fitness level.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        {[
                            { label: '5,000 steps', pts: '50 pts' },
                            { label: '7,500 steps', pts: '75 pts' },
                            { label: '10,000 steps', pts: '100 pts' },
                        ].map(function (tier) {
                            return (
                                <div key={tier.label} style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '16px 20px', minWidth: '100px' }}>
                                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>{tier.label}</div>
                                    <div style={{ fontSize: '12px', color: '#C9973A', fontWeight: '600' }}>{tier.pts}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Founder quote */}
                <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '21px', fontWeight: '600', color: 'white', lineHeight: '1.65', maxWidth: '700px', margin: '0 auto 28px', fontStyle: 'italic' }}>
                        "I spent years in the lab watching disease erase people. Most of it was preventable. The 9 habits in Niyama are what the science says could have changed that."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4A7A68', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: 'white' }}>S</div>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>Sahil Inamdar</div>
                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Founder & CEO · PhD, Chemical Engineering · 700+ citations</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
