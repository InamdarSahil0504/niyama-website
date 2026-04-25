export default function Habits() {
    const coreHabits = [
        {
            emoji: '🌅',
            title: 'Wake before 7:30 AM',
            science: 'Consistent wake time is the single most powerful regulator of your circadian rhythm — the biological clock governing cortisol, melatonin, metabolism, and cognitive performance. Irregular wake times are directly linked to increased risk of depression, metabolic syndrome, and cardiovascular disease.',
            researcher: 'Andrew Huberman, Stanford',
        },
        {
            emoji: '📵',
            title: 'No phone after 10:30 PM',
            science: 'Blue light after sunset suppresses melatonin by up to 50%. Infinite scroll hijacks the same dopamine reward circuits implicated in addiction. Cutting off screens before sleep is a daily act of neurological self-defence — and a prerequisite for restorative slow-wave sleep.',
            researcher: 'Matthew Walker, UC Berkeley · Jonathan Haidt, NYU',
        },
        {
            emoji: '👟',
            title: 'Daily steps goal',
            science: 'Daily walking reduces all-cause mortality by up to 40%, improves insulin sensitivity, lowers blood pressure, and enhances cognitive function. Steps are tiered — every level counts. You cannot out-supplement a sedentary lifestyle.',
            researcher: 'Preventive Medicine Research',
        },
    ]

    const libraryRow1 = [
        { emoji: '❤️', title: '30 min active heart rate' },
        { emoji: '🧘', title: 'Mindfulness or meditation' },
        { emoji: '💧', title: 'Daily hydration goal' },
        { emoji: '📖', title: '20 min reading' },
        { emoji: '🥗', title: 'No processed food' },
        { emoji: '💪', title: 'Strength training' },
    ]

    const libraryRow2 = [
        { emoji: '🌿', title: 'Time outdoors' },
        { emoji: '✍️', title: 'Journalling' },
        { emoji: '🚫', title: 'No alcohol' },
        { emoji: '🛌', title: 'In bed by 10:30 PM' },
    ]

    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #d8e8e2',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    }

    return (
        <section id="habits" style={{ padding: '100px 24px', backgroundColor: '#F4F7F5' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        9 habits. Your framework, your way.
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '600px', margin: '0 auto' }}>
                        Three core habits anchor your day. Then you personalise — choose four from a library of ten science-backed options. Complete at least 5 of 9 for a successful day.
                    </p>
                </div>

                {/* Core habits */}
                <div style={{ marginBottom: '56px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <div style={{ backgroundColor: '#4A7A68', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.08em' }}>
                            CORE HABITS
                        </div>
                        <span style={{ fontSize: '13px', color: '#7a9990' }}>Fixed for all users · 100 pts each · at least 2 required for a successful day</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {coreHabits.map(function (habit) {
                            return (
                                <div key={habit.title} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', border: '1px solid #d8e8e2' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span style={{ fontSize: '32px' }}>{habit.emoji}</span>
                                    </div>
                                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a2e28', marginBottom: '10px' }}>{habit.title}</h3>
                                    <p style={{ fontSize: '13px', color: '#4a6b62', lineHeight: '1.75', marginBottom: '16px' }}>{habit.science}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4A7A68', flexShrink: 0 }}></div>
                                        <span style={{ fontSize: '11px', color: '#7a9990', fontStyle: 'italic' }}>{habit.researcher}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Library habits */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <div style={{ backgroundColor: '#C9973A', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.08em' }}>
                            LIBRARY HABITS
                        </div>
                        <span style={{ fontSize: '13px', color: '#7a9990' }}>Pick 4 from 10 options · 50 pts each · swap monthly</span>
                    </div>

                    {/* Row 1 — 6 items */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', marginBottom: '12px' }}>
                        {libraryRow1.map(function (habit) {
                            return (
                                <div key={habit.title} style={cardStyle}>
                                    <span style={{ fontSize: '20px', flexShrink: 0 }}>{habit.emoji}</span>
                                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#1a2e28', lineHeight: '1.3' }}>{habit.title}</span>
                                </div>
                            )
                        })}
                    </div>

                    {/* Row 2 — 4 items centred */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
                        {libraryRow2.map(function (habit) {
                            return (
                                <div key={habit.title} style={{ ...cardStyle, width: 'calc(16.666% - 6px)', minWidth: '140px' }}>
                                    <span style={{ fontSize: '20px', flexShrink: 0 }}>{habit.emoji}</span>
                                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#1a2e28', lineHeight: '1.3' }}>{habit.title}</span>
                                </div>
                            )
                        })}
                    </div>

                    {/* Custom habits note */}
                    <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px 28px', border: '1px dashed #c8e8d8', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ fontSize: '28px' }}>✏️</div>
                        <div>
                            <div style={{ fontSize: '14px', fontWeight: '700', color: '#1a2e28', marginBottom: '4px' }}>Custom habits</div>
                            <div style={{ fontSize: '13px', color: '#4a6b62' }}>Plus subscribers can add 1 custom habit. Premium subscribers can add up to 3. Build the exact framework your life needs.</div>
                        </div>
                        <div style={{ marginLeft: 'auto', backgroundColor: '#f0f7f4', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: '700', color: '#4A7A68', whiteSpace: 'nowrap' }}>
                            Plus &amp; Premium
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
