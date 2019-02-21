import styled, { keyframes } from 'styled-components'

const anim = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.0);
    opacity: 0;
  }
`

const Loader = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 100%;
  animation: ${anim} 1.0s infinite ease-in-out;
`

export default Loader
