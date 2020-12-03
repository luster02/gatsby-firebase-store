import React from 'react'
import { PhotoCardSkeleton } from '../PhotoCard'
import { List, } from './styles'

export const Skeleton = () => {
    const items = [1, 2, 3, 4]
    return (
        <List>
            {items.map(element => <PhotoCardSkeleton key={element} />)}
        </List>
    )
}
