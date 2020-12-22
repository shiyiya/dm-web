import { Box } from '@chakra-ui/react'
import React from 'react'
import theme from '../theme'

const Wrapper: React.FC<{}> = ({ children }) => {
  return (
    <Box px="48px">
      <Box
        mt={6}
        mx="auto"
        maxW={theme.breakpoints.xl}
        w="100%"
        bg={theme.colors.cardBg}
        borderRadius={4}
        overflow="hidden"
      >
        {children}
      </Box>
    </Box>
  )
}

export default Wrapper
