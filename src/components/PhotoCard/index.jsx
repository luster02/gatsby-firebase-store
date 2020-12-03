import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Img, ImgWrapper, Article, ArticleSkeleton } from './styles'
import { CardFooter } from '../CardFooter'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useProducts } from '../../context/Products.context'

const DEFAULT_IMAGE = "https://res.cloudinary.com/dbytfycuy/image/upload/v1606430601/pexels-mica-asato-1082528_yqzy4n.jpg"

export const PhotoCard = ({ product, showFooter = true }) => {
    const { setCurrent } = useProducts()
    const [show, element] = useNearScreen()

    function selectProduct() {
        setCurrent(product)
    }

    return (
        <Article ref={element}>
            {
                show && <Fragment>
                    <Link to="/details">
                        <ImgWrapper onClick={selectProduct}>
                            <Img src={product.src || DEFAULT_IMAGE} alt="detail" />
                        </ImgWrapper>
                    </Link>

                    {showFooter && <CardFooter price={product.price} />}
                </Fragment>
            }
        </Article>
    )
}

export const PhotoCardSkeleton = () => (
    <ArticleSkeleton />
)