import React from 'react'
import MainLayout from '../layouts'
import { EmpityCompnent } from '../components/Empty'
import { useCart } from '../context/CartContext'

export default function CartPage() {
    const { cart } = useCart()

    return (
        <MainLayout showActionIcon={false}>
            {cart.length === 0
                ? <EmpityCompnent />
                : <p>hay elementos </p>
            }
        </MainLayout>
    )
}