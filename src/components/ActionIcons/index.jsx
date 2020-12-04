import React from 'react'
import { navigate } from 'gatsby'
import { MdShoppingCart, MdHome } from 'react-icons/md'
import { Icon } from './styles'

const ShoppingCarIcon = () => < Icon onClick={() => navigate('/cart')} ><MdShoppingCart size="32px" /></Icon>
const HomeIcon = () => <Icon onClick={() => navigate('/')}> <MdHome size="32px" /> </Icon>

export const ActionIcons = ({ path = "/", show=true }) => {

    function conditionalIcon() {     
        switch (path) {
            case "/":
                return <ShoppingCarIcon />
    
            case "/details/":
                return <HomeIcon />
    
            default:
                return <ShoppingCarIcon />
        }
    }

    return show && conditionalIcon()
}
