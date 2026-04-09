import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path }) {
    const baseUrl = 'https://www.niyamalife.com'
    const fullTitle = title ? title + ' — Niyama Life' : 'Niyama Life — Daily discipline. Backed by science. Rewarded financially.'
    const fullDescription = description || 'Niyama Life is a behaviour change platform that rewards you financially for completing 5 science-backed daily habits. Real change. Real rewards.'
    const fullUrl = baseUrl + (path || '')

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <meta name="keywords" content="habit tracking, behaviour change, daily habits, financial rewards, science backed habits, wellness app, discipline, Niyama Life" />
            <link rel="canonical" href={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Niyama Life" />
            <meta property="og:image" content={baseUrl + '/og-image.png'} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDescription} />
            <meta name="twitter:image" content={baseUrl + '/og-image.png'} />
            <meta name="twitter:site" content="@niyamalife" />
            <meta name="theme-color" content="#5A8A78" />
        </Helmet>
    )
}