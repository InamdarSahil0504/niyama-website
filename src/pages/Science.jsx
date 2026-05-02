import SEO from '../components/SEO'
import CTA from '../components/CTA'

export default function SciencePage() {
    const coreHabits = [
        {
            emoji: '🌅',
            title: 'Wake before 7:30 AM',
            researcher: 'Andrew Huberman, Stanford Neuroscience',
            summary: 'Consistent wake time is the single most powerful regulator of your circadian rhythm — the biological clock governing cortisol, melatonin, metabolism, and cognitive performance.',
            detail: 'Andrew Huberman\'s research at Stanford demonstrates that morning light exposure within 30 minutes of waking sets cortisol correctly for the entire day. Cortisol — often mischaracterised as purely a stress hormone — is essential for alertness, immune function, and metabolic regulation when released at the right time. Irregular wake times are directly linked to increased risk of depression, metabolic syndrome, and cardiovascular disease. The single most impactful intervention for sleep quality is not what time you go to bed — it is what time you wake up.',
            stat: 'Irregular wake times linked to 3x increased risk of metabolic syndrome',
        },
        {
            emoji: '📵',
            title: 'No phone after 10:30 PM',
            researcher: 'Matthew Walker, UC Berkeley · Jonathan Haidt, NYU',
            summary: 'Blue light after sunset suppresses melatonin by up to 50%. Infinite scroll hijacks the same dopamine reward circuits implicated in addiction — and degrades the slow-wave sleep your brain depends on.',
            detail: 'Blue light wavelengths emitted by screens signal to the brain that it is daytime, suppressing melatonin production by up to 50% and delaying sleep onset. Beyond light exposure, the behavioural design of social media platforms deliberately exploits dopamine reward circuits — the same neural pathways implicated in substance addiction. Sleep before midnight contains disproportionately more slow-wave sleep, which is critical for memory consolidation, cellular repair, and glymphatic waste clearance — the brain\'s mechanism for removing toxic proteins including those associated with Alzheimer\'s disease. Cutting off screens at 10:30 PM is not about productivity. It is a daily act of neurological self-defence.',
            stat: '50% reduction in melatonin from blue light exposure after sunset',
        },
        {
            emoji: '👟',
            title: 'Daily steps goal',
            researcher: 'Preventive Medicine Research',
            summary: 'Daily walking reduces all-cause mortality by up to 40%, improves insulin sensitivity, lowers blood pressure, and enhances cognitive function. Steps are tiered — every level counts.',
            detail: 'The relationship between daily steps and health outcomes is one of the most replicated findings in preventive medicine. Studies consistently show that sustained daily walking reduces all-cause mortality, improves insulin sensitivity, lowers resting blood pressure, and enhances cognitive function via BDNF — a neurotrophic factor that promotes neuronal growth. Niyama scores steps in tiers: 5,000 steps earns 50 points, 7,500 steps earns 75 points, and 10,000 steps earns the full 100 points. The human body was designed to move. Sedentary behaviour is not a neutral state — it is an active driver of metabolic dysfunction, cardiovascular disease, and cognitive decline.',
            stat: '40% reduction in all-cause mortality from consistent daily walking',
        },
    ]

    const libraryHighlights = [
        {
            emoji: '❤️',
            title: '30 min active heart rate',
            researcher: 'Peter Attia, MD · Longevity Research',
            summary: 'Aerobic exercise is the only proven intervention that generates new neurons in the hippocampus — the brain region first destroyed by Alzheimer\'s disease.',
            detail: 'Peter Attia\'s work on longevity medicine identifies Zone 2 cardiovascular exercise as the single most impactful intervention for healthspan. 30 minutes of sustained elevated heart rate improves mitochondrial density, VO2 max, and insulin sensitivity. Most significantly, aerobic exercise is the only proven intervention that drives neurogenesis in the hippocampus through BDNF release. The hippocampus is the first region destroyed by Alzheimer\'s disease. Daily cardiovascular exercise is not about fitness. It is a neurological preservation strategy.',
            stat: 'Only known intervention proven to generate new neurons in the human brain',
        },
        {
            emoji: '🧘',
            title: 'Mindfulness or meditation',
            researcher: 'Harvard Medical School · MBSR Research',
            summary: 'Regular mindfulness practice measurably reduces cortisol, improves emotional regulation, and increases grey matter density in the prefrontal cortex.',
            detail: 'Mindfulness-based stress reduction (MBSR) research from Harvard and other institutions consistently demonstrates that regular meditation practice reduces cortisol and inflammatory markers, improves emotional regulation, and increases grey matter density in the prefrontal cortex — the region responsible for executive function and impulse control. Even 10 minutes of daily practice produces measurable neurological changes within 8 weeks.',
            stat: '8 weeks of daily meditation measurably increases prefrontal grey matter density',
        },
        {
            emoji: '💧',
            title: 'Daily hydration goal',
            researcher: 'Journal of Nutrition · Hydration Research',
            summary: 'Mild dehydration of just 1–2% body weight impairs cognitive performance, mood, and physical endurance — yet most people are chronically under-hydrated.',
            detail: 'Research published in the Journal of Nutrition demonstrates that mild dehydration — as little as 1–2% of body weight — measurably impairs cognitive performance, working memory, mood, and physical endurance. The majority of adults are chronically mildly dehydrated without recognising the symptoms. Adequate hydration supports kidney function, joint lubrication, temperature regulation, and nutrient transport.',
            stat: '1-2% dehydration impairs cognitive performance equivalent to mild alcohol intoxication',
        },
    ]

    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="The Science" description="The science behind Niyama Life's 9 habits. Each one backed by decades of peer-reviewed research." path="/science" />

            {/* Hero */}
            <section style={{ padding: '100px 24px', backgroundColor: '#1a2e28', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px' }}>
                        The science
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', color: 'white', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                        We did not pick these habits randomly.
                    </h1>
                    <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
                        Every habit in the Niyama framework is backed by decades of peer-reviewed research. The evidence is not emerging or contested. It is overwhelming.
                    </p>
                </div>
            </section>

            {/* Core habits */}
            <section style={{ padding: '100px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '56px' }}>
                        <div style={{ backgroundColor: '#4A7A68', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.08em' }}>
                            CORE HABITS
                        </div>
                        <span style={{ fontSize: '14px', color: '#7a9990' }}>Fixed for all users · The scientific foundation of the framework</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {coreHabits.map(function (habit) {
                            return (
                                <div key={habit.title}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '24px' }}>
                                        <span style={{ fontSize: '48px', flexShrink: 0 }}>{habit.emoji}</span>
                                        <div>
                                            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>{habit.title}</h2>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4A7A68' }}></div>
                                                <span style={{ fontSize: '13px', color: '#7a9990', fontStyle: 'italic' }}>{habit.researcher}</span>
                                            </div>
                                            <p style={{ fontSize: '18px', color: '#4a6b62', lineHeight: '1.7', marginBottom: '20px', fontWeight: '500' }}>{habit.summary}</p>
                                            <p style={{ fontSize: '15px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '24px' }}>{habit.detail}</p>
                                            <div style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '16px 20px', borderLeft: '4px solid #C96A52' }}>
                                                <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a2e28', margin: 0 }}>{habit.stat}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '1px', backgroundColor: '#d8e8e2', marginTop: '40px' }}></div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Steps tiers callout */}
                    <div style={{ backgroundColor: '#f0f7f4', borderRadius: '16px', padding: '32px 40px', marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
                        <div style={{ flex: 1, minWidth: '220px' }}>
                            <div style={{ fontSize: '13px', fontWeight: '700', color: '#4A7A68', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Daily steps — tiered scoring</div>
                            <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.7', margin: 0 }}>
                                Steps are not all-or-nothing. Every level you hit counts — making progress rewarding at every fitness level.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            {[
                                { label: '5,000 steps', pts: '50 pts' },
                                { label: '7,500 steps', pts: '75 pts' },
                                { label: '10,000 steps', pts: '100 pts' },
                            ].map(function (tier) {
                                return (
                                    <div key={tier.label} style={{ textAlign: 'center', backgroundColor: 'white', borderRadius: '12px', padding: '16px 20px', minWidth: '100px', border: '1px solid #c8e8d8' }}>
                                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#1a2e28', marginBottom: '4px' }}>{tier.label}</div>
                                        <div style={{ fontSize: '12px', color: '#C9973A', fontWeight: '600' }}>{tier.pts}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Library habit highlights */}
            <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ backgroundColor: '#C9973A', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.08em' }}>
                            LIBRARY HABITS
                        </div>
                        <span style={{ fontSize: '14px', color: '#7a9990' }}>Pick 4 from 10 — the science behind selected options</span>
                    </div>
                    <p style={{ fontSize: '16px', color: '#4a6b62', marginBottom: '56px', lineHeight: '1.7' }}>
                        All 10 library habits are science-backed. Here is the research behind three of them.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        {libraryHighlights.map(function (habit) {
                            return (
                                <div key={habit.title} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '40px', border: '1px solid #d8e8e2' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                                        <span style={{ fontSize: '40px', flexShrink: 0 }}>{habit.emoji}</span>
                                        <div>
                                            <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>{habit.title}</h3>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C9973A', flexShrink: 0 }}></div>
                                                <span style={{ fontSize: '13px', color: '#7a9990', fontStyle: 'italic' }}>{habit.researcher}</span>
                                            </div>
                                            <p style={{ fontSize: '16px', color: '#4a6b62', lineHeight: '1.7', marginBottom: '16px', fontWeight: '500' }}>{habit.summary}</p>
                                            <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.8', marginBottom: '20px' }}>{habit.detail}</p>
                                            <div style={{ backgroundColor: '#F4F7F5', borderRadius: '12px', padding: '14px 18px', borderLeft: '4px solid #C9973A' }}>
                                                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1a2e28', margin: 0 }}>{habit.stat}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why financial incentives work */}
            <section style={{ padding: '80px 24px', backgroundColor: '#1a2e28' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
                        Why financial incentives work
                    </h2>
                    <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '16px' }}>
                        The science of behaviour change is clear. Intrinsic motivation — streaks, badges, leaderboards — creates a brief dopamine spike and then fades. None of it changes the underlying economics of the decision.
                    </p>
                    <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '32px' }}>
                        Financial consequences do. When showing up has a real reward, the decision calculus shifts permanently. This is not a gimmick. It is the same reinforcement principle used in clinical behaviour change research.
                    </p>
                    <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', fontStyle: 'italic', borderLeft: '3px solid #C96A52', paddingLeft: '20px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                        "The goal has never been to make people rich. It is to make the cost of discipline lower than the cost of neglect — one day at a time."
                    </p>
                </div>
            </section>

            <CTA />
        </main>
    )
}
