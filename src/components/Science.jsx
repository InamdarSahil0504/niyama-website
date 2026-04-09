export default function Science() {
    const facts = [
        { emoji: '⏰', stat: '#1', description: 'most powerful regulator of circadian rhythm is consistent wake time — governing cortisol, metabolism and cognitive performance', researcher: 'Andrew Huberman, Stanford' },
        { emoji: '😴', stat: '50%', description: 'reduction in melatonin from blue light exposure after sunset — disrupting sleep and dopamine regulation', researcher: 'Matthew Walker, UC Berkeley' },
        { emoji: '❤️', stat: '40%', description: 'reduction in all-cause mortality from daily walking', researcher: 'Preventive Medicine Research' },
        { emoji: '🧠', stat: 'Only', description: 'aerobic exercise generates new neurons in the hippocampus — the first region destroyed by Alzheimer\'s disease', researcher: 'Peter Attia, MD' },
        { emoji: '📵', stat: '3 hrs', description: 'of daily screen time is the threshold beyond which dopamine reward circuits are hijacked — the same pathways implicated in addiction', researcher: 'Jonathan Haidt, NYU' },
    ]

    return (
        <section id="science" style={{ padding: '100px 24px', backgroundColor: '#1a2e28' }}>
            <style>{`
        .science-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 64px;
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
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '20px' }}>
                        The science behind Niyama
                    </div>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
                        We didn't pick these habits randomly.
                    </h2>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto' }}>
                        Each one is backed by decades of peer-reviewed research. The evidence is not emerging or contested — it is overwhelming.
                    </p>
                </div>

                <div className="science-grid">
                    {facts.map(function (fact) {
                        return (
                            <div key={fact.stat} style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '32px 24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{fact.emoji}</div>
                                <div style={{ fontSize: '40px', fontWeight: '700', color: '#D4735F', marginBottom: '8px', lineHeight: 1 }}>{fact.stat}</div>
                                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '16px' }}>{fact.description}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5A8A78' }}></div>
                                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>{fact.researcher}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '48px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '22px', fontWeight: '600', color: 'white', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 24px', fontStyle: 'italic' }}>
                        "I spent five years in the lab watching disease erase people. Most of it was preventable. These five habits are what the science says could have changed that."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#5A8A78', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: 'white' }}>S</div>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>Sahil Inamdar</div>
                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Founder & CEO · PhD, Chemical Engineering</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}