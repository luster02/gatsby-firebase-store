import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { GlobalStyle } from '../styles/global.styles'
import { Logo } from '../components/Logo'
import { Navbar } from '../components/Navbar'

const MainLayout = ({ children, path, showNavbar = true, showActionIcon=true }) => {
    return (
        <Fragment>
            <Helmet>
                <noscript>this app needs javascript for run</noscript>
            </Helmet>
            <GlobalStyle />
            <Logo path={path} showActionIcon={showActionIcon} />
            {children}
            {showNavbar && <Navbar />}
        </Fragment>
    )
}

export default MainLayout
