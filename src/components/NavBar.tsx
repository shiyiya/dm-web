import { AtSignIcon, SearchIcon, StarIcon } from '@chakra-ui/icons'
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import theme from '../theme'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const NavBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()

  return (
    <Box
      h="72px"
      bgColor={theme.colors.black}
      bg={theme.colors.accent}
      style={{
        // ${theme.colors.accent} 0.5透明
        boxShadow: `0 5px 15px 4px #27396780`,
        position: 'relative',
        zIndex: 999,
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        maxW="90vw"
        margin="auto"
      >
        <Flex alignItems="center" h="100%">
          <NextLink href="/">
            <Link href="/">
              <Avatar name="LOGO" mr={6} />
            </Link>
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
              onKeyDown={(e) => {
                if (e.keyCode == 13) {
                  router.replace(`/post/search/?t=${searchInput}`)
                }
              }}
            />
            <InputRightElement
              width="4.5rem"
              overflow="hidden"
              onClick={() => {
                router.replace(`/post/search/?t=${searchInput}`)
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
        <Menu>
          <MenuButton as={Button} colorScheme="pink">
            <Avatar boxSize={8} />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  )
}

export default NavBar
