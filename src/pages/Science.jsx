import SEO from '../components/SEO'
import CTA from '../components/CTA'

export default function SciencePage() {
    const coreHabits = [
        {
            emoji: '🌅',
            title: 'Wake Consistency',
            researcher: 'Andrew Huberman, Stanford Neuroscience',
            summary: 'Consistent wake time is the single most powerful regulator of your circadian rhythm — the biological clock governing cortisol, melatonin, metabolism, and cognitive performance.',
            detail: 'Andrew Huberman\'s research at Stanford demonstrates that morning light exposure within 30 minutes of waking sets cortisol correctly for the entire day. Cortisol — often mischaracterised as purely a stress hormone — is essential for alertness, immune function, and metabolic regulation when released at the right time. Irregular wake times are directly linked to increased risk of depression, metabolic syndrome, and cardiovascular disease. The single most impactful intervention for sleep quality is not what time you go to bed — it is what time you wake up.',
            stat: 'Irregular wake times linked to 3x increased risk of metabolic syndrome',
        },
        {
            emoji: '😴',
            title: 'Sleep Duration',
            researcher: 'Matthew Walker, UC Berkeley',
            summary: '7–9 hours of sleep is not a lifestyle preference — it is a biological necessity. Chronic short sleep is linked to Alzheimer\'s, cardiovascular disease, metabolic dysfunction, and immune collapse.',
            detail: 'Matthew Walker\'s research at UC Berkeley, documented extensively across peer-reviewed literature and in Why We Sleep, demonstrates that sleep duration is one of the most critical determinants of long-term health. During sleep, the glymphatic system flushes toxic proteins including amyloid-beta and tau — the proteins that accumulate in Alzheimer\'s disease. Sleeping under 6 hours per night doubles the risk of cancer, significantly impairs insulin sensitivity, elevates cortisol, suppresses immune function, and accelerates cognitive decline. The dose-response relationship is clear and unambiguous: every hour below the 7–9 hour optimal range compounds the biological cost. Niyama tracks sleep duration to ensure you are meeting the threshold your brain and body require.',
            stat: 'Sleeping under 6 hours per night doubles cancer risk and accelerates Alzheimer\'s protein accumulation',
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
            emoji: '📵',
            title: 'Screen Time under 4 hours',
            researcher: 'Jonathan Haidt, NYU · Jean Twenge, San Diego State University',
            summary: 'Excessive screen time rewires dopamine reward circuits, fragments attention, and is robustly correlated with anxiety, depression, and reduced life satisfaction.',
            detail: 'Research by Jonathan Haidt and Jean Twenge draws on large-scale longitudinal data linking heavy smartphone and social media use with declining mental health outcomes — particularly in young adults. Excessive screen time hijacks the brain\'s dopamine reward system through variable reinforcement schedules deliberately engineered by platform designers to maximise engagement at the cost of the user\'s attention and wellbeing. Sustained screen overuse impairs the capacity for deep work, degrades interpersonal connection, and displaces the recovery and sleep time that physical and cognitive health depend on. Keeping daily recreational screen time under 4 hours protects attentional bandwidth and reduces chronic low-grade anxiety.',
            stat: 'Adolescents using screens 5+ hours per day have twice the depression rates of those using under 1 hour',
        },
        {
            emoji: '🌙',
            title: 'No Phone after 10:30pm',
            researcher: 'Matthew Walker, UC Berkeley · Anna Lembke, Stanford',
            summary: 'Blue light after 10:30pm suppresses melatonin by up to 50% and delays sleep onset — derailing the slow-wave and REM sleep your brain depends on for repair and memory consolidation.',
            detail: 'The 460–480nm blue light spectrum emitted by screens directly suppresses the pineal gland\'s release of melatonin — the hormone that signals to the brain it is time to sleep. Matthew Walker\'s research shows that even dim artificial light can delay the internal clock by up to 3 hours and reduce melatonin by 50%. Beyond photobiology, the variable reward architecture of social media applications activates dopamine circuits that elevate arousal and override the body\'s natural sleep pressure. Anna Lembke\'s work documents how these platforms are designed using the same psychological principles as slot machines. Putting the phone down at 10:30pm is not a wellness suggestion. It is a prerequisite for the neurological repair that only happens in deep sleep.',
            stat: 'Screen exposure after 10pm delays sleep onset by up to 60 minutes and suppresses slow-wave sleep',
        },
        {
            emoji: '🧍',
            title: 'Stand Consistency',
            researcher: 'Dr. James Levine, Mayo Clinic · Sedentary Behaviour Research Network',
            summary: 'Prolonged sitting is independently lethal — even in people who exercise. Breaking sedentary time with consistent standing resets metabolic function and reduces cardiovascular risk.',
            detail: 'Research from the Mayo Clinic and multiple large cohort studies has established that prolonged uninterrupted sitting is independently associated with mortality, cardiovascular disease, and type 2 diabetes — regardless of whether the individual exercises at other times. Dr. James Levine coined the phrase "sitting is the new smoking." Even light activity breaks every 30–60 minutes measurably improve glucose metabolism, cerebral blood flow, and postural muscle activation. Non-exercise activity thermogenesis (NEAT) — the energy expended through low-intensity movement throughout the day — is a more powerful metabolic variable than formal exercise for most people. Stand Consistency is not about standing all day. It is about interrupting the compounding metabolic cost of extended sedentary periods.',
            stat: 'Sitting 8+ hours per day increases type 2 diabetes risk by up to 90% — independent of exercise habits',
        },
        {
            emoji: '☀️',
            title: 'Morning Sunlight (10+ min)',
            researcher: 'Andrew Huberman, Stanford Neuroscience',
            summary: 'Natural light in the first 30–60 minutes after waking anchors your circadian clock, correctly times cortisol, and programmes melatonin onset for the night ahead.',
            detail: 'Andrew Huberman\'s research at Stanford demonstrates that morning sunlight exposure — specifically the low-angle, long-wavelength light of early morning — activates intrinsically photosensitive retinal ganglion cells (ipRGCs) that directly signal the suprachiasmatic nucleus (SCN), the brain\'s master circadian clock. Getting outside for 10 or more minutes within the first hour of waking correctly anchors cortisol release timing, enhances daytime alertness, and programmes melatonin onset 12–16 hours later — making it substantially easier to fall asleep at the correct time. Critically, on overcast days outdoor exposure still delivers 10–50x more photons than indoor environments. Morning sunlight is free, requires no equipment, and produces measurable circadian benefits within days.',
            stat: 'Morning light exposure reduces insomnia severity and improves sleep quality by up to 83% in clinical trials',
        },
        {
            emoji: '🍽️',
            title: 'No Late Food after 8pm',
            researcher: 'Satchin Panda, Salk Institute · Time-Restricted Eating Research',
            summary: 'Eating after 8pm forces the gut, liver, and pancreas to process food when they are biologically programmed to repair — disrupting metabolic rhythms and impairing sleep quality.',
            detail: 'Satchin Panda\'s research at the Salk Institute on time-restricted eating (TRE) demonstrates that the timing of food intake is as critical as its composition. The digestive system, liver, and pancreas all operate on circadian rhythms — peaking in enzymatic activity during daylight and winding down after sunset. Eating late at night elevates blood glucose and insulin at a time when insulin sensitivity is lowest, promotes fat storage, raises core body temperature (which impairs sleep onset), and interrupts the fasting state required for cellular autophagy and gut microbiome repair. Limiting food intake to a window ending before 8pm produces measurable improvements in fasting glucose, insulin sensitivity, and inflammatory markers within weeks — without calorie restriction.',
            stat: 'Time-restricted eating ending before 8pm reduces fasting glucose and insulin by 3–4% within 12 weeks',
        },
        {
            emoji: '🧘',
            title: 'Recovery Practice',
            researcher: 'Herbert Benson, Harvard Medical School · HRV Research',
            summary: 'Deliberate recovery — stretching, yoga, or breathwork — activates the parasympathetic nervous system, drives physical adaptation from training stress, and measurably improves heart rate variability.',
            detail: 'Herbert Benson\'s research at Harvard Medical School identified the "relaxation response" — a measurable physiological counterstate to the chronic sympathetic nervous system activation that characterises modern life. Deliberate recovery practices including stretching, yoga, and controlled breathwork consistently reduce cortisol, lower inflammatory cytokines, improve heart rate variability (HRV), and accelerate muscle tissue repair after training. HRV — the variation in time between heartbeats — is one of the most validated biomarkers of autonomic nervous system health and recovery status. Without dedicated recovery, training stimulus accumulates without adaptation: a pattern that degrades both performance and resilience over time. Recovery is not passive. It is an active, measurable physiological intervention.',
            stat: 'Regular recovery practice improves HRV by 15–25% and reduces injury risk by up to 40%',
        },
        {
            emoji: '🧘‍♀️',
            title: 'Meditation (10+ min)',
            researcher: 'Sara Lazar, Harvard Medical School · Jon Kabat-Zinn, MBSR',
            summary: 'Daily meditation measurably increases grey matter in the prefrontal cortex, reduces amygdala reactivity, lowers cortisol, and improves both sustained attention and emotional regulation.',
            detail: 'Sara Lazar\'s neuroimaging research at Harvard Medical School demonstrated that long-term meditators have measurably thicker prefrontal cortices and reduced age-related cortical thinning — suggesting that meditation preserves the structural integrity of the brain over time. Jon Kabat-Zinn\'s Mindfulness-Based Stress Reduction (MBSR) trials show that 8 weeks of daily practice measurably reduces amygdala grey matter volume (the brain\'s threat-detection centre), lowers salivary cortisol, and improves standardised scores on attention and emotional regulation assessments. Ten minutes per day is sufficient to produce measurable neurological changes. Meditation is not a cultural practice. It is a tool for reshaping the architecture of the brain.',
            stat: '8 weeks of daily meditation measurably reduces amygdala volume, cortisol levels, and self-reported anxiety',
        },
    ]

    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="The Science" description="The science behind Niyama Life's 10 habits. Each one backed by decades of peer-reviewed research." path="/science" />

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
                        <span style={{ fontSize: '14px', color: '#7a9990' }}>Fixed for all users — the science behind all 7</span>
                    </div>
                    <p style={{ fontSize: '16px', color: '#4a6b62', marginBottom: '56px', lineHeight: '1.7' }}>
                        All 7 library habits are fixed for all users — each one selected because the evidence is overwhelming and consistent.
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
