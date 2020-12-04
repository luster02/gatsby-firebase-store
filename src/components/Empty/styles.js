import styled, {css} from 'styled-components'

export const Container = styled.div`
    width: auto;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props=> !props.height
    ?css`
       height: 80vh;  
    
    `
    :css`
        props.height
    ` }
`

export const Img = styled.img`
    height: 220px;
`

export const Text = styled.div`
    text-align: center;
    font-size: 25px;
    margin-left: 20px;
    margin-top: 20px;
`