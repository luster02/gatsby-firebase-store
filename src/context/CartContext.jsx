import React, { useState } from 'react'

const CartContext = React.createContext()

export function CartProvider(props) {
    const [cart, setCart] = useState([])

    function addProduct(product) {
        setCart(older => [...older, product])
    }

    function removeProduct(product) {
        setCart(cart.filter(element => element.id !== product.id))
    }

    const value = {
        cart,
        setCart,
        addProduct,
        removeProduct
    }

    return <CartContext.Provider  {...props} value={value} />
}

export function useCart() {
    const context = React.useContext(CartContext)
    if (!context) throw new Error('useCart is out from provider')
    return context
}