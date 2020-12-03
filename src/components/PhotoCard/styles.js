import styled from 'styled-components'
import { fadeIn, flashing } from '../../styles/animations'

export const Article = styled.article`
  min-height: 200px;
  margin-bottom: 0.6em;
`

export const ArticleSkeleton = styled.article`
  min-height: 200px;
  margin-bottom: 0.6em;
  border-radius: 10px;
  display: block;
  overflow: hidden;
  width: 100%;
  background-color: rgb(240, 240, 240);

  &::before {
    content: '';
    display: block;
    height: 200px;
    width: 100%;
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

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    ${fadeIn()};
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`