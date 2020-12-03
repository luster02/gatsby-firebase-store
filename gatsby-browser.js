import React from 'react'
import "firebase/auth"
import "firebase/firestore"

import { ProductsProvider } from './src/context/Products.context'

export const wrapRootElement = ({ element }) => (
    <ProductsProvider>
        {element}
    </ProductsProvider>
)