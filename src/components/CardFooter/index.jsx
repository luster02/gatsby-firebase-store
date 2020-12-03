import React from 'react'
import { MdShoppingBasket, MdBookmarkBorder } from "react-icons/md";
import { Button, Col, Price } from './styles'

export const CardFooter = ({ price = 0 }) => {

    return (
        <Col>
            <Button>
                <MdBookmarkBorder size="32px" />
            </Button>
            <Price>
                ${price}
            </Price>
            <Button>
                <MdShoppingBasket size="32px" />
            </Button>
        </Col>
    )
}