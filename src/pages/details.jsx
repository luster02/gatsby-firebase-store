import React, { useEffect } from "react"
import { Helmet } from 'react-helmet'
import MainLayout from '../layouts'
import { PhotoCard } from '../components/PhotoCard'
import { DetailsHedaer } from '../components/DetailsHeader'
import { DetailsFooter } from '../components/DetailsFooter'
import { useProducts } from '../context/Products.context'

export default function Details({ path }) {
    const { current, setCurrent } = useProducts()

    useEffect(() => {
        return () => setCurrent({})
    }, [setCurrent])

    return (
        <MainLayout path={path} showNavbar={false}>
            <Helmet title="angular | details" />
            <PhotoCard product={current} showFooter={false} />
            <DetailsHedaer />
            <DetailsFooter />
        </MainLayout>
    )
}