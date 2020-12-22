import { Box, Heading, Tag, Wrap, Link } from '@chakra-ui/react'
import React from 'react'
import theme from '../theme'
import { css } from '@emotion/react'
import NavTitle from './NavTitle'
import NextLink from 'next/link'

const cardCss = css`
  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 150%;
  }
`

const VideoCard = () => {
  return (
    <NextLink href="./show">
      <Link to="#">
        <Box
          margin="0 10px 20px"
          boxShadow="0 0 rgba(0,0,0,.2)"
          borderRadius="5px"
          position="relative"
          transition=" all .15s ease-out"
          maxW="250px"
          w="15vw"
          minW="150px"
          _hover={{ transform: 'scale(1.1, 1.1)' }}
        >
          <Box
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            backgroundPosition="center"
            pos="relative"
            borderRadius="5px"
            overflow="hidden"
            backgroundColor={theme.colors.translucent}
            transition="all .15s ease-out"
            maxH="600px"
            boxSize="border-box"
            backgroundImage="url(https://0c86e2d1-madman-com-au.akamaized.net/shows/domestic-girlfriend_portrait-key-art-normal-small_57943.jpeg)"
          >
            <Box css={cardCss}></Box>
          </Box>
          <Box className="card-details">
            <Heading as="h3" size="md" padding="10px 0 10px">
              Fairy Tail
            </Heading>
            <Tag mr={2}>2008</Tag>
            <Tag mr={2}>19集 </Tag>
          </Box>
          <Box className="card-reveal"></Box>
        </Box>
      </Link>
    </NextLink>
  )
}

const VideoCardList = () => (
  <Box w="90vw" m="auto" py="20px">
    <NavTitle>Trending Now</NavTitle>
    <Wrap>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </Wrap>
  </Box>
)

export default VideoCardList
