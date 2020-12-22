import { SearchIcon, StarIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
} from '@chakra-ui/react'
import React from 'react'
import theme from '../theme'

const NavBar = () => (
  <Box
    px="5vw"
    py="10px"
    h="72px"
    bgColor={theme.colors.black}
    bg={theme.colors.accent}
  >
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="100%"
      maxW={theme.breakpoints.xl}
      margin="auto"
    >
      <Flex alignItems="center" h="100%">
        <Link>
          <StarIcon mr="48px" boxSize={8} />
        </Link>

        <InputGroup size="sm">
          <Input
            borderRadius="20px"
            variant="filled"
            pr="4.5rem"
            type="text"
            fontSize="18px"
            placeholder="search everything..."
          />
          <InputRightElement width="4.5rem" overflow="hidden">
            <IconButton
              borderRadius="20px"
              backgroundColor="transparent"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Box className="">
        <Avatar name="Lin" />
      </Box>
    </Flex>
  </Box>
)

export default NavBar
