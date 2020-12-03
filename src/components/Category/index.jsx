import React from 'react'
import { Anchor, Image, AnchorSkeleton } from './styles'
import { useProducts } from '../../context/Products.context'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, id, name = '?' }) => {
    const { category } = useProducts()
    const active = id === category

    return (
        <Anchor>
            <Image src={cover} alt="cover" active={active} />
            {name}
        </Anchor>
    )
}

export const CategorySkeleton = () => <AnchorSkeleton />
