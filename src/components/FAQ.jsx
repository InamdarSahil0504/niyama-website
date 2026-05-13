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
            question: 'What habits does Niyama Life track?',
            answer: 'Niyama Life tracks 10 daily habits across two fixed groups. Three core habits are tracked for all users: Wake Consistency, Sleep Duration, and Steps. Seven library habits are also fixed for all users: Screen Time under 4 hours, No Phone after 10:30pm, Stand Consistency, Morning Sunlight, No Late Food after 8pm, Recovery Practice, and Meditation. Plus subscribers can add up to 2 custom habits that earn 25 points each. Premium subscribers can add up to 4. All users can track unlimited custom habits — only Plus and Premium earn points on them.',
        },
        {
            category: 'Habits',
            question: 'What counts as a successful day?',
            answer: 'A successful day means completing at least 2 of 3 core habits AND at least 3 of 7 library habits. Both conditions must be met. Custom habits do not count toward the successful day threshold. Each tier requires a minimum number of successful days per month to qualify for rewards — 10 days for Free and Basic, 7 for Plus, 5 for Premium.',
        },
        {
            category: 'Habits',
            question: 'How does the successful day threshold work?',
            answer: 'A successful day requires completing at least 2 of your 3 core habits AND at least 3 of your 7 library habits — both conditions must be met simultaneously. Completing 2 core and only 2 library does not count. Completing 0 core and all 7 library does not count. Custom habits are excluded from the threshold entirely but still earn points.',
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
            answer: 'Milestone bonuses are additional rewards on top of your base cap that unlock progressively as your consistency grows. For Plus: base $10.00, +$2.50 at 20 successful days, +$5.00 for a successful month, +$7.50 for a perfect month — up to $17.50/mo total. For Premium: base $25.00, +$2.50 at 10 days, +$5.00 at 20 days, +$7.50 for a successful month, +$10.00 for a perfect month — up to $35.00/mo total. Each milestone is additive — missing one does not remove what you have already unlocked.',
        },
        {
            category: 'Rewards',
            question: 'What is a perfect month bonus?',
            answer: 'A perfect month means every submitted day during the month was a successful day. Plus subscribers earn an additional $7.50 bonus. Premium subscribers earn an additional $10.00 bonus (USA).',
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
