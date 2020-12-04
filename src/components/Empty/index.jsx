import React from 'react'
import { Container, Img, Text } from './styles'
import SVG from '../../assets/img/undraw_No_data_re_kwbl.svg'

export const EmpityCompnent = ({ height = null, hintText = "no hay elemtentos" }) => {
    return (
        <Container height={height}>
            <div>
                <Img src={SVG} alt="paper empty sheet" />
                <Text>{hintText}</Text>
            </div>
        </Container>
    )
}
