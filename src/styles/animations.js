import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`


const loadingFlash = keyframes`
  0% {
      background-position: -250px;
  }
  100% {
      background-position: calc(100% + 250px);
  }
`

export const flashing = ({ time = '2s' } = {}) =>
  css`animation: ${loadingFlash} ${time}  infinite linear;`  