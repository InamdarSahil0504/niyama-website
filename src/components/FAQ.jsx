import { useState } from 'react'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    function toggle(index) {
        setOpenIndex(openIndex === index ? null : index)
    }

    const faqs = [
        // Habits
        {
            category: 'Habits',
            question: 'What are the 9 habits?',
            answer: 'Your 9 habits are made up of three layers. First, 3 core habits that are fixed for all users: wake before 7:30 AM, no phone after 10:30 PM, and a daily steps goal. Second, you pick 4 library habits from a curated list of 10 science-backed options — including things like 30 minutes of active heart rate, mindfulness, hydration, reading, strength training, and more. Third, Plus subscribers can add 1 custom habit of their own, and Premium subscribers can add up to 3.',
        },
        {
            category: 'Habits',
            question: 'What counts as a successful day?',
            answer: 'A successful day means completing at least 5 of your 9 habits, with at least 2 of those being core habits. This threshold is the same across all tiers — what differs is the minimum number of successful days required per month to be eligible for rewards (10 days for Free and Basic, 7 for Plus, 5 for Premium).',
        },
        {
            category: 'Habits',
            question: 'Can I change my library habits?',
            answer: 'Yes. You can swap your library habits once per month. Core habits are fixed and cannot be changed — they form the scientific foundation of the framework. Custom habits (Plus and Premium) can also be updated monthly.',
        },
        {
            category: 'Habits',
            question: 'How are steps tracked?',
            answer: 'Steps are tiered — not all-or-nothing. Reaching 5,000 steps earns 50 points, 7,500 steps earns 75 points, and 10,000 steps earns the full 100 points. In the web app, steps are self-reported. The upcoming native app will integrate directly with Apple Health and Google Health Connect for automatic tracking.',
        },
        // Streak Freeze
        {
            category: 'Streak Freeze',
            question: 'What is a streak freeze?',
            answer: 'A streak freeze lets you protect your streak after a missed day. If you have a freeze available and miss a day, you have a 24-hour window to apply it — your streak is preserved and the day is treated as if it were submitted. Streak freezes do not count toward your successful day total for reward eligibility.',
        },
        {
            category: 'Streak Freeze',
            question: 'Who gets streak freezes?',
            answer: 'Streak freezes are available to Plus and Premium subscribers only. You get one freeze per calendar month. Unused freezes do not carry over to the next month.',
        },
        // Rewards
        {
            category: 'Rewards',
            question: 'Are the rewards real money?',
            answer: 'Yes. Rewards are real and delivered as gift cards via our rewards partner — redeemable at hundreds of brands. Rewards are calculated at the end of each month and delivered directly to your account.',
        },
        {
            category: 'Rewards',
            question: 'What are milestone bonuses and when do they trigger?',
            answer: 'Milestone bonuses are additional rewards on top of your base cap that unlock progressively as your consistency grows. For Plus: you unlock a bonus at 20 successful days and another at the end of a successful month. For Premium: bonuses unlock at 10 days, 20 days, a successful month, and a perfect month. Each milestone is additive — missing one does not remove what you have already unlocked.',
        },
        {
            category: 'Rewards',
            question: 'What is a perfect month bonus?',
            answer: 'A perfect month means every single day you submitted during the month was a successful day — no unsuccessful submissions. Premium subscribers earn an additional $7.50 (USA) or ₹500 (India) bonus for achieving this. It is the highest reward tier and is designed to reward exceptional consistency.',
        },
        {
            category: 'Rewards',
            question: 'When and how do I receive my rewards?',
            answer: 'Rewards are calculated at the end of each calendar month and delivered as gift cards via our rewards partner. You will receive a notification when your rewards are ready. Rewards reset on the 1st of every month — they do not roll over.',
        },
        // General
        {
            category: 'General',
            question: 'How do you verify habits?',
            answer: 'Niyama currently operates on an honour system — you self-report your habits daily. We believe the person who benefits most from honest tracking is you, not us. Our fraud detection monitors for patterns inconsistent with genuine human behaviour. Users found to be fraudulently reporting are permanently disqualified from rewards.',
        },
        {
            category: 'General',
            question: 'Can I use Niyama Life outside the USA?',
            answer: 'Niyama Life is currently available in the USA. International expansion is on the roadmap — India is next, followed by other markets. If you are outside the USA and want to be notified when we launch in your region, get in touch at info@niyamalife.com.',
        },
        {
            category: 'General',
            question: 'Is Niyama Life free to try?',
            answer: 'Yes. The Free tier gives you full app access forever with no credit card required. Free tier users can receive rewards for their first 3 months. After 3 months, habit tracking and analytics continue — rewards require upgrading to Basic or above.',
        },
        {
            category: 'General',
            question: 'Can I cancel anytime?',
            answer: 'Yes. There are no contracts or lock-in periods. You can cancel your subscription at any time from your account settings. The Free tier remains available forever after cancellation.',
        },
        {
            category: 'General',
            question: 'What is a PWA?',
            answer: 'A PWA — Progressive Web App — is a website that behaves like a native app. Open it in your browser, tap "Add to Home Screen", and it appears on your phone just like any other app. No App Store required, no download needed. A full native iOS and Android app is on the roadmap.',
        },
        {
            category: 'General',
            question: 'Can anyone sign up?',
            answer: 'Yes — anyone can sign up and use Niyama Life. Users under the age of 18 are not eligible to receive financial rewards.',
        },
    ]

    const categories = ['Habits', 'Streak Freeze', 'Rewards', 'General']

    return (
        <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px' }}>
                        Frequently asked questions
                    </h2>
                    <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '480px', margin: '0 auto' }}>
                        Everything you need to know about Niyama Life.
                    </p>
                </div>

                {categories.map(function (category) {
                    const categoryFaqs = faqs.filter(function (f) { return f.category === category })

                    return (
                        <div key={category} style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ fontSize: '11px', fontWeight: '700', color: '#4A7A68', textTransform: 'uppercase', letterSpacing: '0.1em', backgroundColor: '#e8f5f0', padding: '4px 12px', borderRadius: '20px' }}>
                                    {category}
                                </div>
                                <div style={{ flex: 1, height: '1px', backgroundColor: '#d8e8e2' }}></div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {categoryFaqs.map(function (faq) {
                                    const globalIndex = faqs.indexOf(faq)
                                    const isOpen = openIndex === globalIndex
                                    return (
                                        <div key={globalIndex} style={{ backgroundColor: 'white', borderRadius: '12px', border: isOpen ? '1px solid #4A7A68' : '1px solid #d8e8e2', overflow: 'hidden' }}>
                                            <button
                                                onClick={() => toggle(globalIndex)}
                                                style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px', fontFamily: 'inherit' }}
                                            >
                                                <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a2e28', lineHeight: '1.5' }}>{faq.question}</span>
                                                <span style={{ fontSize: '20px', color: '#4A7A68', flexShrink: 0, transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s', display: 'inline-block' }}>+</span>
                                            </button>
                                            {isOpen && (
                                                <div style={{ padding: '0 24px 20px' }}>
                                                    <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.85', margin: 0 }}>{faq.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
