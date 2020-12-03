import styled, { css } from 'styled-components'
import { flashing } from '../../styles/animations'

export const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`

export const AnchorSkeleton = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    background-color: rgb(240, 240, 240);
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
    padding: 7px;
    margin-bottom: 0.5em;

    &::before {
      content: '';
      display: block;
      height: 75px;
      width: 75px;
      background: linear-gradient(
        90deg,
        rgb(240, 240, 240) 0px,
        #f9f9f9 calc(50% - 25px),
        #f9f9f9 calc(50% + 25px),
        rgb(240, 240, 240) 100%
      );
      background-size: 35%;
      background-position: 0%;
      background-repeat: no-repeat;
      ${flashing()}
    }
`

export const Image = styled.img`
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
    padding: 7px;
    margin-bottom: 0.5em;

    ${props => props.active
    ? css`
      border: 2px solid #000;
    `
    : css`
       border: 1px solid #ddd;
    `}
`