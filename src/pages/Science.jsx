import SEO from '../components/SEO'
import CTA from '../components/CTA'

export default function SciencePage() {
    const habits = [
        {
            emoji: '🌅',
            title: 'Wake before 7:30 AM',
            researcher: 'Andrew Huberman, Stanford Neuroscience',
            summary: 'Consistent wake time is the single most powerful regulator of your circadian rhythm — the biological clock governing cortisol, melatonin, metabolism and cognitive performance.',
            detail: 'Andrew Huberman\'s research at Stanford demonstrates that morning light exposure within 30 minutes of waking sets cortisol correctly for the entire day. Cortisol — often mischaracterised as purely a stress hormone — is essential for alertness, immune function, and metabolic regulation when released at the right time. Irregular wake times are directly linked to increased risk of depression, metabolic syndrome, and cardiovascular disease. The single most impactful intervention for sleep quality is not what time you go to bed — it is what time you wake up.',
            stat: 'Irregular wake times linked to 3x increased risk of metabolic syndrome',
        },
        {
            emoji: '👟',
            title: '10,000 steps daily',
            researcher: 'Preventive Medicine Research',
            summary: 'Daily walking reduces all-cause mortality by up to 40%, improves insulin sensitivity, lowers blood pressure and enhances cognitive function.',
            detail: 'The 10,000 steps figure is one of the most replicated interventions in preventive medicine. Studies consistently show that daily walking at this level reduces all-cause mortality, improves insulin sensitivity, lowers resting blood pressure, and enhances cognitive function via neurotrophic factors — particularly BDNF, which promotes neuronal growth. The mechanism is simple: the human body was designed to move. Sedentary behaviour is not a neutral state — it is an active driver of metabolic dysfunction, cardiovascular disease, and cognitive decline.',
            stat: '40% reduction in all-cause mortality from consistent daily walking',
        },
        {
            emoji: '📵',
            title: 'Screen time under 3 hours',
            researcher: 'Jonathan Haidt, NYU · Sleep Research',
            summary: 'Blue light after sunset suppresses melatonin by up to 50%. Infinite scroll hijacks dopamine reward circuits — the same pathways implicated in addiction.',
            detail: 'Blue light wavelengths emitted by screens signal to the brain that it is daytime, suppressing melatonin production by up to 50% and delaying sleep onset. Beyond light exposure, the behavioural design of social media and streaming platforms deliberately exploits dopamine reward circuits — the same neural pathways implicated in substance addiction. Chronic overstimulation from screens is linked to reduced attention span, elevated anxiety, impaired impulse control, and disrupted sleep architecture. Limiting screen time is not about productivity — it is a daily act of neurological self-defence.',
            stat: '50% reduction in melatonin from blue light exposure after sunset',
        },
        {
            emoji: '🌙',
            title: 'Sleep by 10:30 PM',
            researcher: 'Matthew Walker, UC Berkeley',
            summary: 'Sleep before midnight contains the highest concentration of slow-wave sleep — critical for memory consolidation, cellular repair and glymphatic waste clearance.',
            detail: 'Matthew Walker\'s research at UC Berkeley demonstrates that the first half of the night — sleep before midnight — contains disproportionately more slow-wave sleep, the deepest and most restorative stage. Slow-wave sleep is critical for memory consolidation, cellular repair, immune function, and glymphatic system activation — the brain\'s waste clearance mechanism that removes toxic proteins including those associated with Alzheimer\'s disease. Chronic late sleeping, even with adequate total sleep duration, is linked to neurodegeneration, impaired immunity, and elevated cancer risk. There is no biological function that does not benefit from adequate sleep.',
            stat: 'Chronic sleep deprivation increases Alzheimer\'s risk markers by up to 30%',
        },
        {
            emoji: '❤️',
            title: '30 min active heart rate',
            researcher: 'Peter Attia, MD · Longevity Research',
            summary: 'Aerobic exercise is the only proven intervention that generates new neurons in the hippocampus — the brain region first destroyed by Alzheimer\'s disease.',
            detail: 'Peter Attia\'s work on longevity medicine identifies Zone 2 cardiovascular exercise as the single most impactful intervention for healthspan. 30 minutes of sustained elevated heart rate improves mitochondrial density, VO2 max, and insulin sensitivity. Most significantly, aerobic exercise is the only proven intervention that generates new neurons in the hippocampus through a process called neurogenesis — driven by BDNF release. The hippocampus is the first region destroyed by Alzheimer\'s disease. Daily cardiovascular exercise is not about fitness. It is a neurological preservation strategy.',
            stat: 'Only known intervention proven to generate new neurons in the human brain',
        },
    ]

    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="The Science" description="The science behind Niyama Life's 5 habits. Each one backed by decades of peer-reviewed research from Huberman, Walker, and Attia." path="/science" />
            <section style={{ padding: '100px 24px', backgroundColor: '#1a2e28', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px' }}>
                        The science
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', color: 'white', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                        We didn't pick these habits randomly.
                    </h1>
                    <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
                        Each of the 5 habits in Niyama Life is backed by decades of peer-reviewed research. The evidence is not emerging or contested. It is overwhelming.
                    </p>
                </div>
            </section>

            <section style={{ padding: '100px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {habits.map(function (habit) {
                            return (
                                <div key={habit.title}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '24px' }}>
                                        <span style={{ fontSize: '48px', flexShrink: 0 }}>{habit.emoji}</span>
                                        <div>
                                            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>{habit.title}</h2>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5A8A78' }}></div>
                                                <span style={{ fontSize: '13px', color: '#7a9990', fontStyle: 'italic' }}>{habit.researcher}</span>
                                            </div>
                                            <p style={{ fontSize: '18px', color: '#4a6b62', lineHeight: '1.7', marginBottom: '20px', fontWeight: '500' }}>{habit.summary}</p>
                                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '24px' }}>{habit.detail}</p>
                                            <div style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '16px 20px', borderLeft: '4px solid #D4735F' }}>
                                                <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a2e28', margin: 0 }}>{habit.stat}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '1px', backgroundColor: '#d8e8e2', marginTop: '40px' }}></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 24px', backgroundColor: '#F4F7F5' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: '#1a2e28', marginBottom: '20px' }}>
                        Why financial incentives work
                    </h2>
                    <p style={{ fontSize: '16px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                        The science of behaviour change is clear. Intrinsic motivation — streaks, badges, leaderboards — creates a brief dopamine spike and then fades. None of it changes the underlying economics of the decision.
                    </p>
                    <p style={{ fontSize: '16px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '16px' }}>
                        Financial consequences do. When skipping a habit has a real cost — and showing up has a real reward — the decision calculus shifts. This is not a gimmick. It is the same reinforcement principle used in clinical behaviour change research.
                    </p>
                    <p style={{ fontSize: '16px', color: '#4a6b62', lineHeight: '1.8', fontStyle: 'italic', borderLeft: '3px solid #D4735F', paddingLeft: '16px', textAlign: 'left' }}>
                        "The goal has never been to make people rich. It is to make the cost of discipline lower than the cost of neglect — one day at a time."
                    </p>
                </div>
            </section>

            <CTA />
        </main>
    )
}