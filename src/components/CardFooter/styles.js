import styled from 'styled-components'

export const Button = styled.button`
    display: flex; 
    align-items: center;
    & svg {
        margin-right: 4px;
    }
`
export const Price = styled.p`
    font-size: 20px;
    //font-weight: lighter;
`

export const Col = styled.div`
    display: flex;
    justify-content:space-between;
    padding-top: 8px;    
    padding-left: 5px;
    padding-right: 5px;
`