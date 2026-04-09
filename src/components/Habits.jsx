export default function Habits() {
    const habits = [
        { emoji: '🌅', title: 'Wake before 7:30 AM', science: 'Consistent wake time is the single most powerful regulator of your circadian rhythm — the biological clock governing cortisol, melatonin, metabolism and cognitive performance. Irregular wake times are directly linked to increased risk of depression, metabolic syndrome and cardiovascular disease.', researcher: 'Andrew Huberman, Stanford' },
        { emoji: '🌙', title: 'Sleep by 10:30 PM', science: 'Sleep before midnight contains the highest concentration of slow-wave sleep — critical for memory consolidation, cellular repair and metabolic waste clearance. There is no biological function that does not benefit from adequate sleep.', researcher: 'Matthew Walker, UC Berkeley' },
        { emoji: '👟', title: '10,000 steps daily', science: 'Daily walking reduces all-cause mortality by up to 40%, improves insulin sensitivity, lowers blood pressure and enhances cognitive function. You cannot out-supplement a sedentary lifestyle.', researcher: 'Preventive Medicine Research' },
        { emoji: '📵', title: 'Screen time under 3 hours', science: 'Blue light after sunset suppresses melatonin by up to 50%. Infinite scroll content hijacks dopamine reward circuits — the same pathways implicated in addiction. Limiting screen time is a daily act of neurological self-defence.', researcher: 'Jonathan Haidt, NYU' },
        { emoji: '❤️', title: '30 min active heart rate', science: 'Aerobic exercise is the only proven intervention that generates new neurons in the hippocampus — the brain region first destroyed by Alzheimer\'s disease. 30 minutes of elevated heart rate per day is a neurological preservation strategy.', researcher: 'Peter Attia, MD' },
    ]

    return (
        <section id="habits" style={{ padding: '100px 24px', backgroundColor: '#F4F7F5' }}>
            <style>{`
        .habits-top {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin: 0 auto 24px;
          max-width: 700px;
        }
        .habits-bottom {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 768px) {
          .habits-top {
            grid-template-columns: 1fr;
            max-width: 100%;
          }
          .habits-bottom {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        The 5 habits
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '560px', margin: '0 auto' }}>
                        Not chosen arbitrarily. Every habit is backed by decades of peer-reviewed research. Complete any 4 of 5 for a successful day.
                    </p>
                </div>

                <div className="habits-top">
                    {habits.slice(0, 2).map(function (habit) {
                        return (
                            <div key={habit.title} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2' }}>
                                <div style={{ marginBottom: '16px' }}>
                                    <span style={{ fontSize: '32px' }}>{habit.emoji}</span>
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2e28', marginBottom: '12px' }}>{habit.title}</h3>
                                <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7', marginBottom: '16px' }}>{habit.science}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5A8A78' }}></div>
                                    <span style={{ fontSize: '12px', color: '#7a9990', fontStyle: 'italic' }}>{habit.researcher}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="habits-bottom">
                    {habits.slice(2).map(function (habit) {
                        return (
                            <div key={habit.title} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2' }}>
                                <div style={{ marginBottom: '16px' }}>
                                    <span style={{ fontSize: '32px' }}>{habit.emoji}</span>
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2e28', marginBottom: '12px' }}>{habit.title}</h3>
                                <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7', marginBottom: '16px' }}>{habit.science}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5A8A78' }}></div>
                                    <span style={{ fontSize: '12px', color: '#7a9990', fontStyle: 'italic' }}>{habit.researcher}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}