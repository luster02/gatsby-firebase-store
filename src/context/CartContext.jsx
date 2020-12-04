import React, { useState } from 'react'

const CartContext = React.createContext()

export function CartProvider(props) {
    const [cart, setCart] = useState([])

    const value = {
        cart,
        setCart
    }

    return <CartContext.Provider  {...props} value={value} />
}

export function useCart() {
    const context = React.useContext(CartContext)
    if (!context) throw new Error('useCart is out from provider')
    return context
}