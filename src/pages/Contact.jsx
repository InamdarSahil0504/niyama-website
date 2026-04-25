import SEO from '../components/SEO'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState('idle')

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('loading')
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <main style={{ paddingTop: '64px' }}>
            <SEO title="Contact" description="Get in touch with the Niyama Life team. Questions, feedback, press enquiries, or investor enquiries." path="/contact" />
            <section style={{ padding: '100px 24px', backgroundColor: '#F4F7F5', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', backgroundColor: '#e8f2ee', color: '#3d6b5c', fontSize: '13px', fontWeight: '600', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px' }}>
                        Get in touch
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', color: '#1a2e28', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-1px' }}>
                        Contact us
                    </h1>
                    <p style={{ fontSize: '20px', color: '#4a6b62', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto' }}>
                        Questions, feedback, press enquiries, or just want to say hello — we would love to hear from you.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a2e28', marginBottom: '32px' }}>Send us a message</h2>
                        {status === 'success' ? (
                            <div style={{ backgroundColor: '#e8f2ee', borderRadius: '16px', padding: '40px', textAlign: 'center', border: '1px solid #4A7A68' }}>
                                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1a2e28', marginBottom: '8px' }}>Message received.</h3>
                                <p style={{ fontSize: '15px', color: '#4a6b62', margin: 0 }}>We will get back to you within 48 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid #d8e8e2', fontSize: '15px', color: '#1a2e28', backgroundColor: '#F4F7F5', outline: 'none' }} />
                                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid #d8e8e2', fontSize: '15px', color: '#1a2e28', backgroundColor: '#F4F7F5', outline: 'none' }} />
                                <select name="subject" value={formData.subject} onChange={handleChange} required style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid #d8e8e2', fontSize: '15px', color: formData.subject ? '#1a2e28' : '#7a9990', backgroundColor: '#F4F7F5', outline: 'none' }}>
                                    <option value="">Select a subject</option>
                                    <option value="general">General enquiry</option>
                                    <option value="support">User support</option>
                                    <option value="press">Press enquiry</option>
                                    <option value="investor">Investor enquiry</option>
                                    <option value="feedback">Product feedback</option>
                                </select>
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required rows={5} style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid #d8e8e2', fontSize: '15px', color: '#1a2e28', backgroundColor: '#F4F7F5', outline: 'none', resize: 'vertical', fontFamily: 'DM Sans, sans-serif' }} />
                                <button type="submit" disabled={status === 'loading'} style={{ backgroundColor: '#4A7A68', color: 'white', fontWeight: '700', fontSize: '15px', padding: '14px 32px', borderRadius: '25px', border: 'none', cursor: 'pointer' }}>
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                                {status === 'error' && (
                                    <p style={{ fontSize: '13px', color: '#C96A52', margin: 0 }}>Something went wrong. Please email us directly at info@niyamalife.com</p>
                                )}
                            </form>
                        )}
                    </div>

                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a2e28', marginBottom: '32px' }}>Other ways to reach us</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '24px', border: '1px solid #d8e8e2' }}>
                                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📧</div>
                                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2e28', marginBottom: '4px' }}>Email</h3>
                                <p style={{ fontSize: '14px', color: '#4a6b62', margin: '0 0 4px' }}>info@niyamalife.com</p>
                                <p style={{ fontSize: '12px', color: '#7a9990', margin: 0 }}>We respond within 48 hours</p>
                            </div>
                            <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '24px', border: '1px solid #d8e8e2' }}>
                                <div style={{ fontSize: '24px', marginBottom: '8px' }}>🌿</div>
                                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2e28', marginBottom: '4px' }}>Based in</h3>
                                <p style={{ fontSize: '14px', color: '#4a6b62', margin: 0 }}>Mountain View, California, USA</p>
                            </div>
                            <div style={{ backgroundColor: '#F4F7F5', borderRadius: '16px', padding: '24px', border: '1px solid #d8e8e2' }}>
                                <div style={{ fontSize: '24px', marginBottom: '8px' }}>💼</div>
                                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1a2e28', marginBottom: '4px' }}>Founder</h3>
                                <p style={{ fontSize: '14px', color: '#4a6b62', margin: 0 }}>Sahil Inamdar · info@niyamalife.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
