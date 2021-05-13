import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React, { useEffect, useRef, useState } from 'react'
import theme from '../theme'

const TouchScrollRow: React.FC = ({ children }) => {
  const [isT, setT] = useState(false)
  const [dis, setDis] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const dfn = () => {
    if (isT) setT(false)
  }

  useEffect(() => {
    document.addEventListener('mouseup', dfn)
    document.addEventListener('touchend', dfn)
    return () => {
      document.removeEventListener('mouseup', dfn)
      document.removeEventListener('touchend', dfn)
    }
  })

  return (
    <Box
      css={css`
        cursor: pointer;
        display: flex;
        overflow-y: auto;
        user-select: none;
        &::-webkit-scrollbar {
          height: 4px;
          width: 8px;
          background: #ccc;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.colors.translucent};
        }
      `}
      ref={ref}
      onMouseDown={(e) => {
        setT(true)
        setDis(e.screenX)
      }}
      onMouseMove={(e) => {
        if (isT) {
          setDis(e.screenX)
          if (e.screenX > dis) {
            ref.current?.scrollTo(
              ref.current?.scrollLeft - (e.screenX - dis),
              0
            )
          } else {
            ref.current?.scrollTo(
              ref.current?.scrollLeft + (dis - e.screenX),
              0
            )
          }
        }
      }}
      onMouseUp={() => setT(false)}
    >
      {children}
    </Box>
  )
}

export default TouchScrollRow
