import styled, { css } from 'styled-components'
import { Link as LinkRouter } from 'gatsby'
import { fadeIn } from '../../styles/animations'

export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 1000;
    &::-webkit-scrollbar {
      display: none;
    }
    ${props => props.fixed && css`
        {
        ${fadeIn({ time: '0.5s' })};
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
      }
    `}
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
      color: #000;
     
      &:after {
        ${fadeIn({ time: '0.5s' })};
        content: '·';
        position: absolute;
        bottom: 0;
        font-size: 34px;
        line-height: 15px;
    }
  }
`