import React, { useState, useEffect } from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdPersonOutline, MdBookmark } from 'react-icons/md'

const SIZE = "32px"

export const Navbar = () => {
    const [showFixed, setShowFixed] = useState(true)

    useEffect(() => {
        const onScroll = () => {
            const newShowFixed = window.scrollY < 120
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])


    return (
        showFixed && <Nav>
            <Link to="/" ><MdHome size={SIZE} /></Link>
            <Link to="/favs" ><MdBookmark size={SIZE} /></Link>
            <Link to="/user" ><MdPersonOutline size={SIZE} /></Link>
        </Nav>
    )
}