import { Box } from '@chakra-ui/react'
import { css, jsx } from '@emotion/react'
import theme from '../theme'

const Loading = () => (
  <Box
    css={css`
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
      background-color: ${theme.colors.major};
    `}
  >
    <Box
      css={css`
        @keyframes lds-dual-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        animation: lds-dual-ring 1.2s linear infinite;
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid #fff;
        border-color: #fff transparent #fff transparent;
      `}
    ></Box>
  </Box>
)

export default Loading
