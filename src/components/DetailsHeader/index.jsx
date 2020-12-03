import React from 'react'
import { Title, Price, Col } from './styles'
import { useProducts } from '../../context/Products.context'

export const DetailsHedaer = () => {
    const { current } = useProducts()

    return (
        <Col>
            <Title>{current.name}</Title>
            <Price>${current.price}</Price>
        </Col>
    )
}
