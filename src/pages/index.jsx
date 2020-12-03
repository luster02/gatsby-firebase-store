import React from "react"
import { Helmet } from 'react-helmet'
import MainLayout from '../layouts'
import { ListCategories } from '../components/ListCategories'
import { ListPhotos } from '../components/ListPhotos'

export default function Home({ path }) {
  return (
    <MainLayout path={path}>
      <Helmet title="angular | home" />
      <ListCategories />
      <ListPhotos />
    </MainLayout>
  )
}