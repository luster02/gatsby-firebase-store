import React, { useState } from 'react'

const ProductsContext = React.createContext()

export function ProductsProvider(props) {
    const [current, setCurrent] = useState({})
    const [category, setCategory] = useState(null)

    const value = {
        current,
        setCurrent,
        category,
        setCategory
    }

    return <ProductsContext.Provider {...props} value={value} />
}

export function useProducts() {
    const context = React.useContext(ProductsContext)
    if (!context) throw new Error('useProducts is out from provider')
    return context
}