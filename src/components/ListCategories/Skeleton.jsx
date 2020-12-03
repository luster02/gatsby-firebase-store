import React, { Fragment } from 'react'
import { CategorySkeleton } from '../Category'
import { Item } from './styles'

export const Skeleton = () => {
    const items = [1, 2, 3, 4, 5]

    return (
        <Fragment>
            {
                items.map(elemet => (
                    <Item key={elemet}>
                        <CategorySkeleton />
                    </Item>
                ))
            }
        </Fragment>
    )
}
