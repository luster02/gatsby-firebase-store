import React from "react"
import { Helmet } from 'react-helmet'
import MainLayout from '../layouts'

export default function Home({ path }) {
    return (
        <MainLayout path={path}>
            <Helmet title="angular | details" />
            <h1>404 page</h1>
        </MainLayout>
    )
}
