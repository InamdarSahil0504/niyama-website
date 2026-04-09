import { createContext, useContext, useState, useEffect } from 'react'

const RegionContext = createContext()

export function RegionProvider({ children }) {
    const [region, setRegion] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const saved = localStorage.getItem('niyama_region')
        if (saved) {
            setRegion(saved)
        }
        setLoading(false)
    }, [])

    function chooseRegion(r) {
        setRegion(r)
        localStorage.setItem('niyama_region', r)
    }

    return (
        <RegionContext.Provider value={{ region, chooseRegion, loading }}>
            {children}
        </RegionContext.Provider>
    )
}

export function useRegion() {
    return useContext(RegionContext)
}