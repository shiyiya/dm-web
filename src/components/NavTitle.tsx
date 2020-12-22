import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import theme from '../theme'

const gradientTextStyle: React.CSSProperties = {
  WebkitTextFillColor: 'transparent',
  color: 'white',
  background: `-webkit-linear-gradient(-45deg,${theme.colors.purple[300]}, ${theme.colors.blue[100]})`,
}

const NavTitle: React.FC<{}> = ({ children }) => {
  return (
    <Box pt={8} pb={8} pl={4}>
      <Heading
        as="h1"
        size="md"
        display="inline-block"
        style={{
          ...gradientTextStyle,
          position: 'relative',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
        }}
      >
        <Box
          pos="absolute"
          width="100%"
          h={1}
          top={-3}
          style={gradientTextStyle}
        ></Box>
        {children}
      </Heading>
    </Box>
  )
}

export default NavTitle
