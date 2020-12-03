import React, { Fragment, useEffect, useState } from 'react'
import { Skeleton } from './Skeleton'
import { Category } from '../Category'
import { Item, List } from './styles'
import { useCollection } from '../../hooks/useFirebase'
import { useProducts } from '../../context/Products.context'

export const ListCategories = () => {
    const { category, setCategory } = useProducts()
    const { data, loading } = useCollection('categories', "order", "asc")
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = fixed => (
        <List fixed={fixed}>
            {loading
                ? <Skeleton />
                : <Fragment>
                    {category && <Item onClick={() => setCategory(null)}>
                        <Category
                            id={null}
                            name="Todos"
                            cover="https://res.cloudinary.com/dbytfycuy/image/upload/v1606973482/icons8-cancelar-240_ibiucn.png"
                        />
                    </Item>}
                    {data.map(category => (
                        <Item key={category.id} onClick={() => setCategory(category.id)}>
                            <Category {...category} id={category.id} />
                        </Item>
                    ))}
                </Fragment>
            }
        </List>
    )

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}