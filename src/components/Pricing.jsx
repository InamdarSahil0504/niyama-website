import { useState } from 'react'
import { useRegion } from '../context/RegionContext'

// ─── Stripe Price IDs ────────────────────────────────────────────────────────
const STRIPE_PRICES = {
  basic_monthly:   'price_1TPaBo9crPKLFCMF39E116lA',
  basic_annual:    'price_1TPaBo9crPKLFCMFNkXgFJUF',
  plus_monthly:    'price_1TPaD49crPKLFCMF22QHLlq1',
  plus_annual:     'price_1TPaD49crPKLFCMFiYXkQpz0',
  premium_monthly: 'price_1TPaE09crPKLFCMFaFzsnPrn',
  premium_annual:  'price_1TPaE09crPKLFCMFIgphzKgO',
}

async function handleSubscribe(priceId) {
  try {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      console.error('No checkout URL returned:', data)
      alert('Something went wrong. Please try again.')
    }
  } catch (err) {
    console.error('Checkout error:', err)
    alert('Something went wrong. Please try again.')
  }
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Pricing() {
  const { region } = useRegion()
  const [billing, setBilling] = useState('monthly')
  const [loading, setLoading] = useState(null)

  const tiers = {
    usa: [
      {
        name: 'Free',
        monthly: '$0',
        annual: '$0',
        annualTotal: null,
        annualSaving: null,
        period: 'forever',
        highlight: false,
        badge: null,
        color: '#4A7A68',
        bgColor: '#f0f7f4',
        cta: 'Start Free',
        isSubscription: false,
        milestones: [
          { label: 'Base reward cap', value: '$2.50/mo' },
          { label: 'Available', value: 'First 3 months only' },
        ],
        maxReward: '$2.50',
        minDays: '10 successful days',
        features: [
          'Full app access — forever',
          '3 core habits tracked',
          'Basic analytics',
          'Rewards for first 3 months',
        ],
      },
      {
        name: 'Basic',
        monthly: '$0.99',
        annual: '$9.99',
        annualTotal: '$9.99/yr',
        annualSaving: 'Save $1.89/yr',
        period: 'per month',
        highlight: false,
        badge: null,
        color: '#4A7A68',
        bgColor: '#f0f7f4',
        cta: 'Get Basic',
        isSubscription: true,
        priceKey: 'basic',
        milestones: [
          { label: 'Base reward cap', value: '$5.00/mo' },
        ],
        maxReward: '$5.00',
        minDays: '10 successful days',
        features: [
          'Everything in Free',
          'Rewards every month — no expiry',
          'Core + library habits',
          'Streak freeze not included',
        ],
      },
      {
        name: 'Plus',
        monthly: '$4.99',
        annual: '$49.99',
        annualTotal: '$49.99/yr',
        annualSaving: 'Save $9.89/yr',
        period: 'per month',
        highlight: true,
        badge: 'MOST POPULAR',
        badgeColor: '#4A7A68',
        color: '#4A7A68',
        bgColor: '#e8f5f0',
        cta: 'Get Plus',
        isSubscription: true,
        priceKey: 'plus',
        milestones: [
          { label: 'Base reward cap', value: '$10.00/mo' },
          { label: '20-day milestone bonus', value: '+$2.50' },
          { label: 'Successful month bonus', value: '+$5.00' },
          { label: 'Perfect month bonus', value: '+$7.50' },
        ],
        maxReward: '$17.50',
        minDays: '7 successful days',
        features: [
          'Everything in Basic',
          'Milestone bonuses unlock progressively',
          '1 streak freeze per month',
          '2 custom habits earn points · unlimited custom tracking',
        ],
      },
      {
        name: 'Premium',
        monthly: '$14.99',
        annual: '$149.99',
        annualTotal: '$149.99/yr',
        annualSaving: 'Save $29.89/yr',
        period: 'per month',
        highlight: false,
        badge: 'BEST REWARDS',
        badgeColor: '#C96A52',
        color: '#C96A52',
        bgColor: '#fdf0ed',
        cta: 'Get Premium',
        isSubscription: true,
        priceKey: 'premium',
        milestones: [
          { label: 'Base reward cap', value: '$25.00/mo' },
          { label: '10-day milestone bonus', value: '+$2.50' },
          { label: '20-day milestone bonus', value: '+$5.00' },
          { label: 'Successful month bonus', value: '+$7.50' },
          { label: 'Perfect month bonus', value: '+$10.00' },
        ],
        maxReward: '$35.00',
        minDays: '5 successful days',
        features: [
          'Everything in Plus',
          'Highest reward potential',
          '1 streak freeze per month',
          '4 custom habits earn points · unlimited custom tracking',
        ],
      },
    ],
    india: [
      {
        name: 'Free',
        monthly: '₹0',
        annual: '₹0',
        annualTotal: null,
        annualSaving: null,
        period: 'forever',
        highlight: false,
        badge: null,
        color: '#4A7A68',
        bgColor: '#f0f7f4',
        cta: 'Join Waitlist',
        isSubscription: false,
        milestones: [
          { label: 'Base reward cap', value: '₹30/mo' },
          { label: 'Available', value: 'First 3 months only' },
        ],
        maxReward: '₹30',
        minDays: '10 successful days',
        features: [
          'Full app access — forever',
          '3 core habits tracked',
          'Basic analytics',
          'Rewards for first 3 months',
        ],
      },
      {
        name: 'Basic',
        monthly: '₹49',
        annual: '₹499',
        annualTotal: '₹499/yr',
        annualSaving: 'Save ₹89/yr',
        period: 'per month',
        highlight: false,
        badge: null,
        color: '#4A7A68',
        bgColor: '#f0f7f4',
        cta: 'Join Waitlist',
        isSubscription: true,
        milestones: [
          { label: 'Base reward cap', value: '₹100/mo' },
        ],
        maxReward: '₹100',
        minDays: '10 successful days',
        features: [
          'Everything in Free',
          'Rewards every month — no expiry',
          'Core + library habits',
          'Streak freeze not included',
        ],
      },
      {
        name: 'Plus',
        monthly: '₹249',
        annual: '₹2,499',
        annualTotal: '₹2,499/yr',
        annualSaving: 'Save ₹489/yr',
        period: 'per month',
        highlight: true,
        badge: 'MOST POPULAR',
        badgeColor: '#4A7A68',
        color: '#4A7A68',
        bgColor: '#e8f5f0',
        cta: 'Join Waitlist',
        isSubscription: true,
        milestones: [
          { label: 'Base reward cap', value: '₹250/mo' },
          { label: '20-day milestone bonus', value: '+₹100' },
          { label: 'Successful month bonus', value: '+₹100' },
          { label: 'Perfect month bonus', value: '+₹50' },
        ],
        maxReward: '₹500',
        minDays: '7 successful days',
        features: [
          'Everything in Basic',
          'Milestone bonuses unlock progressively',
          '1 streak freeze per month',
          '4 library habits + 1 custom habit',
        ],
      },
      {
        name: 'Premium',
        monthly: '₹499',
        annual: '₹4,999',
        annualTotal: '₹4,999/yr',
        annualSaving: 'Save ₹989/yr',
        period: 'per month',
        highlight: false,
        badge: 'BEST REWARDS',
        badgeColor: '#C96A52',
        color: '#C96A52',
        bgColor: '#fdf0ed',
        cta: 'Join Waitlist',
        isSubscription: true,
        milestones: [
          { label: 'Base reward cap', value: '₹750/mo' },
          { label: '10-day milestone bonus', value: '+₹100' },
          { label: '20-day milestone bonus', value: '+₹150' },
          { label: 'Successful month bonus', value: '+₹250' },
          { label: 'Perfect month bonus', value: '+₹250' },
        ],
        maxReward: '₹1,500',
        minDays: '5 successful days',
        features: [
          'Everything in Plus',
          'Highest reward potential',
          '1 streak freeze per month',
          '4 library habits + 3 custom habits',
        ],
      },
    ],
  }

  const currentTiers = tiers[region] || tiers.usa

  function getDisplayPrice(tier) {
    if (!tier.isSubscription) return { price: tier.monthly, sub: tier.period }
    if (billing === 'annual') return { price: tier.annual, sub: 'per year' }
    return { price: tier.monthly, sub: tier.period }
  }

  async function onClickCTA(tier) {
    if (!tier.isSubscription || region === 'india') {
      window.location.href = 'https://app.niyamalife.com'
      return
    }
    const key = `${tier.priceKey}_${billing}`
    const priceId = STRIPE_PRICES[key]
    setLoading(tier.name)
    await handleSubscribe(priceId)
    setLoading(null)
  }

  return (
    <section id="pricing" style={{ padding: '100px 24px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#1a2e28', marginBottom: '16px', lineHeight: '1.2' }}>
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: '18px', color: '#4a6b62', maxWidth: '520px', margin: '0 auto 32px' }}>
            Start free. Upgrade when you are ready to unlock more rewards.
          </p>

          {region !== 'india' && (
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#f0f7f4', borderRadius: '50px', padding: '4px', marginBottom: '8px' }}>
              <button
                onClick={() => setBilling('monthly')}
                style={{
                  padding: '8px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '600',
                  backgroundColor: billing === 'monthly' ? '#4A7A68' : 'transparent',
                  color: billing === 'monthly' ? 'white' : '#4a6b62',
                  transition: 'all 0.2s',
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                style={{
                  padding: '8px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '600',
                  backgroundColor: billing === 'annual' ? '#4A7A68' : 'transparent',
                  color: billing === 'annual' ? 'white' : '#4a6b62',
                  transition: 'all 0.2s',
                }}
              >
                Annual
              </button>
            </div>
          )}
          {region !== 'india' && billing === 'annual' && (
            <div style={{ display: 'block', fontSize: '13px', color: '#C9973A', fontWeight: '600', marginTop: '6px' }}>
              ✦ Save up to $29.89/year on annual billing
            </div>
          )}
        </div>

        {region === 'india' && (
          <div style={{ backgroundColor: '#fdeee9', border: '1px solid #f5c4b3', borderRadius: '12px', padding: '16px 24px', textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '14px', color: '#a3442a', margin: 0, fontWeight: '500' }}>
              🇮🇳 Niyama Life is coming to India soon. Join the waitlist to be notified when we launch.
            </p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
          {currentTiers.map(function (tier) {
            const { price, sub } = getDisplayPrice(tier)
            const isFree = !tier.isSubscription
            const isPremium = tier.name === 'Premium'
            const isLoading = loading === tier.name

            return (
              <div
                key={tier.name}
                style={{
                  backgroundColor: tier.highlight ? tier.bgColor : 'white',
                  borderRadius: '20px',
                  padding: '32px 24px 28px',
                  border: tier.highlight ? `2px solid ${tier.color}` : isPremium ? '1px solid #f5c4b3' : '1px solid #d8e8e2',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {tier.badge && (
                  <div style={{
                    position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: tier.badgeColor, color: 'white',
                    fontSize: '10px', fontWeight: '700', padding: '4px 16px',
                    borderRadius: '20px', whiteSpace: 'nowrap', letterSpacing: '0.08em',
                  }}>
                    {tier.badge}
                  </div>
                )}

                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#7a9990', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                    {tier.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '2px' }}>
                    <span style={{ fontSize: '36px', fontWeight: '700', color: '#1a2e28', lineHeight: 1 }}>{price}</span>
                    {tier.isSubscription && (
                      <span style={{ fontSize: '13px', color: '#7a9990', marginBottom: '6px' }}>{sub}</span>
                    )}
                    {isFree && (
                      <span style={{ fontSize: '13px', color: '#7a9990', marginBottom: '6px' }}>forever</span>
                    )}
                  </div>
                  {billing === 'annual' && tier.annualSaving && region !== 'india' && (
                    <div style={{ display: 'inline-block', backgroundColor: '#fff8e6', color: '#C9973A', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px', marginTop: '4px' }}>
                      {tier.annualSaving}
                    </div>
                  )}
                </div>

                <div style={{ backgroundColor: tier.bgColor, borderRadius: '14px', padding: '16px', marginBottom: '20px', border: `1px solid ${isPremium ? '#f5c4b3' : '#c8e8d8'}` }}>
                  <div style={{ fontSize: '10px', fontWeight: '700', color: '#7a9990', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                    Reward potential
                  </div>
                  {tier.milestones.map(function (m, i) {
                    const isLast = i === tier.milestones.length - 1
                    const isBonus = m.value.startsWith('+')
                    return (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        paddingBottom: isLast ? '0' : '6px',
                        marginBottom: isLast ? '0' : '6px',
                        borderBottom: isLast ? 'none' : `1px solid ${isPremium ? '#f5c4b3' : '#c8e8d8'}`,
                      }}>
                        <span style={{ fontSize: '12px', color: '#4a6b62' }}>{m.label}</span>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: isBonus ? tier.color : '#1a2e28' }}>{m.value}</span>
                      </div>
                    )
                  })}
                  <div style={{ borderTop: `1px dashed ${isPremium ? '#f5c4b3' : '#9fd3be'}`, marginTop: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#1a2e28' }}>Max rewards</span>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: tier.color }}>{tier.maxReward}<span style={{ fontSize: '11px', color: '#7a9990', fontWeight: '500' }}>/mo</span></span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#7a9990', marginTop: '6px', textAlign: 'right' }}>
                    Requires {tier.minDays}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                  {tier.features.map(function (f, i) {
                    return (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', fontSize: '13px', color: '#4a6b62', lineHeight: '1.4' }}>
                        <span style={{ color: tier.color, fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>✓</span>
                        {f}
                      </li>
                    )
                  })}
                </ul>

                <button
                  onClick={() => onClickCTA(tier)}
                  disabled={isLoading}
                  style={{
                    display: 'block', width: '100%', textAlign: 'center',
                    backgroundColor: tier.highlight ? tier.color : isPremium ? '#C96A52' : 'transparent',
                    color: tier.highlight || isPremium ? 'white' : tier.color,
                    fontWeight: '700', fontSize: '15px',
                    padding: '14px 24px', borderRadius: '50px',
                    border: tier.highlight || isPremium ? 'none' : `2px solid ${tier.color}`,
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    opacity: isLoading ? 0.7 : 1,
                    fontFamily: 'inherit',
                  }}
                >
                  {isLoading ? 'Redirecting...' : tier.cta}
                </button>
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: '56px', backgroundColor: '#f0f7f4', borderRadius: '20px', padding: '36px 40px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>
            What counts as a successful day?
          </h3>
          <p style={{ fontSize: '15px', color: '#4a6b62', marginBottom: '20px', lineHeight: '1.7' }}>
            Complete at least 2 of 3 core habits AND at least 3 of 7 library habits — both conditions must be met — and you have had a successful day. The more consistent you are, the more milestones you unlock.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { label: 'Core habits', desc: '3 fixed habits · 100 pts each' },
              { label: 'Library habits', desc: '7 fixed habits · 50 pts each' },
              { label: 'Custom habits', desc: 'Your own habits · 25 pts each (Plus & Premium · 2 or 4 slots)' },
            ].map(function (item) {
              return (
                <div key={item.label} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '14px 20px', border: '1px solid #c8e8d8', flex: '1', minWidth: '200px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#1a2e28', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '12px', color: '#7a9990' }}>{item.desc}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', padding: '36px 40px', backgroundColor: '#f0f7f4', borderRadius: '20px' }}>
          <div style={{ fontSize: '24px', marginBottom: '12px' }}>🌿</div>
          <p style={{ fontSize: '17px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>
            Whatever tier you choose, you have already made the right decision.
          </p>
          <p style={{ fontSize: '15px', color: '#4a6b62', maxWidth: '560px', margin: '0 auto', lineHeight: '1.8' }}>
            Niyama Life is not just about rewards. It is about building the daily disciplines that science has proven will change your health, your mind, and your life — one day at a time.
          </p>
        </div>

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#7a9990', marginTop: '24px', lineHeight: '1.8', maxWidth: '700px', margin: '24px auto 0' }}>
          Rewards are delivered as gift cards via Tremendous and are subject to eligibility criteria. Rewards reset on the 1st of every month. Subscription fees are non-refundable. Reward amounts depend on meeting minimum successful day requirements and are not guaranteed.
        </p>
      </div>
    </section>
  )
}
