import React, { useEffect, useState } from 'react'
import { PhotoCard, PhotoCardSkeleton } from '../PhotoCard'
import { List } from './styles'
import { useCollection } from '../../hooks/useFirebase'
import { useProducts } from '../../context/Products.context'

export const ListPhotos = () => {
    const { data, loading } = useCollection('products', 'name', 'asc')
    const [array, setArray] = useState([])
    const { category, setCategory } = useProducts()

    useEffect(() => {
        setArray(data)
        return () => setCategory(null)
    }, [data])


    useEffect(() => {
        if (category) {
            setArray(data.filter(product => product.category === category))
        } else {
            setArray(data)
        }
    }, [category])


    return (
        <List>
            {loading
                ? <PhotoCardSkeleton />
                : array.map(product => <PhotoCard key={product.id} product={product} />)
            }
        </List>
    )
}