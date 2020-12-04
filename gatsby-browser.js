import React from 'react'
import "firebase/auth"
import "firebase/firestore"

import { ProductsProvider } from './src/context/Products.context'
import { CartProvider } from './src/context/CartContext'

export const wrapRootElement = ({ element }) => (
    <ProductsProvider>
        <CartProvider>
            {element}
        </CartProvider>
    </ProductsProvider>
)