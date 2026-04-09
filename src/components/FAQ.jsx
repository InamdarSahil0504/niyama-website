import { useState } from 'react'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    function toggle(index) {
        if (openIndex === index) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
    }

    const faqs = [
        { question: 'Are the rewards real money?', answer: 'Yes. Rewards are real and delivered via Tremendous — redeemable at hundreds of brands including Amazon, PayPal, and more. Rewards are currently not live during Beta. They will go live with Beta 2.' },
        { question: 'How do you verify habits?', answer: 'Niyama currently operates on an honour system. You self-report your habits daily. We believe that the person who benefits most from honest tracking is you — not us. Users found to be fraudulently reporting habits are permanently disqualified from rewards.' },
        { question: 'What happens if I miss a day?', answer: 'Missing a day does not disqualify you. You need to hit the minimum successful days for your tier each month to be eligible for rewards. You also cannot have 5 or more consecutive inactive days. A successful day means completing any 4 of the 5 habits.' },
        { question: 'When and how do I get my rewards?', answer: 'Rewards are calculated at the end of each month and delivered via Tremendous. You can redeem them at hundreds of brands. Rewards reset on the 1st of every month.' },
        { question: 'Is my data safe?', answer: 'Yes. Your data is stored securely using Supabase — encrypted in transit and at rest. We do not sell your personal data to third parties. You can request deletion of your data at any time.' },
        { question: 'Can I use Niyama Life in India?', answer: 'India is coming soon. You can join the India waitlist now and you will be among the first to know when we launch. All INR pricing and local payment options will be available at launch.' },
        { question: 'What is a PWA?', answer: 'A PWA — Progressive Web App — is a website that behaves like a native app. You open it in your browser, tap "Add to Home Screen", and it appears on your phone just like any other app. No App Store required. No download needed.' },
        { question: 'Can anyone sign up?', answer: 'Yes — anyone can sign up and use Niyama Life for free. However users under the age of 18 are not eligible to receive financial rewards.' },
        { question: 'Can I cancel anytime?', answer: 'Yes. There are no contracts or lock-in periods. You can cancel your subscription at any time. The Free tier is available forever with no credit card required.' },
        { question: 'Is Niyama Life free to try?', answer: 'Yes. The Free tier gives you full app access forever and real rewards of up to $2.50 per month for your first 3 months. No credit card required. After 3 months, habit tracking and analytics continue but rewards require upgrading to Basic or above.' },
    ]

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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {faqs.map(function (faq, index) {
                        const isOpen = openIndex === index
                        return (
                            <div key={index} style={{ backgroundColor: 'white', borderRadius: '12px', border: isOpen ? '1px solid #5A8A78' : '1px solid #d8e8e2', overflow: 'hidden', transition: 'border 0.2s' }}>
                                <button onClick={() => toggle(index)} style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}>
                                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a2e28', lineHeight: '1.5' }}>{faq.question}</span>
                                    <span style={{ fontSize: '20px', color: '#5A8A78', flexShrink: 0, transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>+</span>
                                </button>
                                {isOpen && (
                                    <div style={{ padding: '0 24px 20px' }}>
                                        <p style={{ fontSize: '14px', color: '#4a6b62', lineHeight: '1.8', margin: 0 }}>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}