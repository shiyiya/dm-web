import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { css, jsx } from '@emotion/react'
import theme from '../theme'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { usePostsByTagQuery } from '../generated/graphql'
import Link from 'next/link'

export const SlideContainer: React.FC = (props) => (
  <Box
    css={css`
      position: relative;
      &::after {
        position: absolute;
        content: '';
        display: block;
        height: 140px;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 999;
        background: linear-gradient(
          0deg,
          ${theme.colors.major} 15%,
          rgba(59, 0, 135, 0)
        );
      }
    `}
  >
    <Flex
      {...props}
      __css={{
        position: 'relative',
        '.swiper-container': {
          // marginBottom: '-120px',
        },
      }}
    />
  </Box>
)

const titleBgShadow = css`
  font-size: 2.25rem;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 3px 3px 4px rgb(0 0 0 / 72%);
  color: #fff;
`

const GDSwiper: React.FC = () => {
  const { data } = usePostsByTagQuery({ variables: { tagId: '1' } })

  console.log(data?.postsByTag?.posts)

  if (!data?.postsByTag?.posts?.length) return null

  return (
    <SlideContainer>
      <SwipeableViews
        enableMouseEvents
        animateTransitions
        autoPlay
        hysteresis={2}
      >
        {data?.postsByTag?.posts?.map((_, k) => (
          <div
            style={{
              backgroundImage: `url('${_.cover}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              zIndex: 1,
              width: '100%',
              height: ' calc((9 / 16) * 100vw)',
              maxHeight: 'calc(100vh - 140px)',
            }}
          >
            <Box pos="absolute" left="5vw" bottom="140px">
              <Heading as="h2" css={titleBgShadow}>
                {_.title}
              </Heading>

              <Link href={`/post/${_.id}`}>
                <Button
                  _hover={{
                    bg: theme.colors.accent,
                    color: '#fff',
                    boxShadow: `0 0 15px 0 ${theme.colors.accent}`,
                  }}
                  bg="#fff"
                  colorScheme="#fff"
                  mt={10}
                  rightIcon={<ArrowForwardIcon />}
                  size="lg"
                  borderRadius={60}
                >
                  Start Watching Now
                </Button>
              </Link>
            </Box>
          </div>
        ))}
      </SwipeableViews>
    </SlideContainer>
  )
}

export default GDSwiper
