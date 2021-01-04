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
import React, { useState } from 'react'
import theme from '../theme'
import NextLink from 'next/link'
import { useMeQuery } from '../generated/graphql'
import { useRouter } from 'next/router'

const NavBar = () => {
  const { data } = useMeQuery()
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()

  // console.log(router)

  return (
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
          <NextLink href="/">
            <StarIcon mr="48px" boxSize={8} />
          </NextLink>

          <InputGroup size="sm">
            <Input
              borderRadius="20px"
              variant="filled"
              pr="4.5rem"
              type="text"
              fontSize="18px"
              placeholder="search everything..."
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <InputRightElement
              width="4.5rem"
              overflow="hidden"
              onClick={() => {
                router.push(`/post/search/?t=${searchInput}`)
              }}
            >
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
          <Avatar name="-" />
        </Box>
      </Flex>
    </Box>
  )
}

export default NavBar
