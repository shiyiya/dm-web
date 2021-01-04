import React from 'react'
import { Box, Heading, Tag } from '@chakra-ui/react'
import NavBar from '../../components/NavBar'
import { css } from '@emotion/react'
import VideoCardList from '../../components/VideoCard'
import { StarIcon } from '@chakra-ui/icons'
import withApollo from '../../withApollo'
import { useRouter } from 'next/router'
import { usePostbyidQuery } from '../../generated/graphql'
import NextLink from 'next/link'
import Link from 'next/link'

const Post: React.FC<{}> = () => {
  const id = useRouter().query.postId as string

  const { data } = usePostbyidQuery({ variables: { id: id } })
  const post = data?.postsById

  return (
    <>
      <NavBar />
      {/* info */}
      <Box overflow="hidden">
        <Box
          css={css`
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            max-width: 80em;
            position: relative;

            @media (min-width: 768px) {
              width: 750px;
            }
            @media (min-width: 992px) {
              width: 970px;
            }
            @media (min-width: 1200px) {
              width: 1170px;
            }
          `}
        >
          <Box
            css={css`
              display: flex;
              position: relative;
              flex-direction: column;
              width: 100vw;
              margin: 0 -15px;

              @media only screen and (min-width: 768px) {
                width: 100%;
                margin: 0;
                flex-direction: row;
              }
            `}
          >
            {/* cover */}
            <Box
              css={css`
                z-index: 999;
                @media only screen and (min-width: 768px) {
                  margin-bottom: auto;
                  max-width: 50%;
                  flex-basis: 50%;
                  padding: 40px 2.5vw 40px 0;
                }

                @media only screen and (min-width: 992px) {
                  margin-top: 5vw;
                  max-width: 400px;
                  flex-basis: 33%;
                  padding: 0 2.5vw 10vw 0;
                }
              `}
            >
              <Box
                css={css`
                  background: url(${post?.cover}) center no-repeat;
                  box-shadow: 11px -12px 37px 0 rgba(0, 0, 0, 0.3);
                  background-size: cover;

                  &:before {
                    display: block;
                    content: '';
                    width: 100%;
                    padding-top: 150%;
                  }
                `}
              ></Box>
            </Box>

            {/* info */}
            <Box
              css={css`
                flex: 1;
                display: flex;
                flex-direction: column;
              `}
            >
              {/* info primary */}
              <Box
                css={css`
                  @media only screen and (min-width: 768px) {
                    margin-top: 10vw;
                    padding: 0 0 40px;
                  }
                `}
              >
                <Heading as="h1" size="xl" mb={4}>
                  {post?.title}
                </Heading>
                <Box>
                  <StarIcon /> <StarIcon /> <StarIcon />
                </Box>

                <Tag mr={2}>2020</Tag>
                <Tag> Japanese</Tag>
                <Heading as="h4" size="sm" mt={4}>
                  {post?.content}
                </Heading>
              </Box>

              {/* info summary */}
              <Box
                css={css`
                  flex: 1;
                  background-color: rgba(0, 0, 0, 0.1);
                  position: relative;
                  padding: 20px;

                  &:before,
                  &:after {
                    content: ' ';
                    position: absolute;
                    z-index: 0;
                    background-color: rgba(0, 0, 0, 0.1);
                    top: 0;
                    bottom: 0;
                  }

                  @media only screen and (min-width: 768px) {
                    padding: 40px 40px 40px 0;
                    &:before {
                      left: -100vw;
                      width: 100vw;
                    }
                    &:after {
                      right: -100vw;
                      width: 100vw;
                    }
                  }
                `}
              >
                <Heading as="h4" size="md" mb={4}>
                  Act! Addict! Actors!
                </Heading>
                <Heading as="p" size="45em" mb={4} opacity={0.7}>
                  {post?.content}
                </Heading>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box margin="auto" w="90vw" my={10}>
          {post?.videos?.map((_, k) => (
            <NextLink href={`/play/${post.id}?url=${_.playUrl}`} key={_.id}>
              <Link href={`/play/${post.id}?url=${_.playUrl}`}>
                <Tag mr={2} my={2}>
                  {k + 1} {_.title}
                </Tag>
              </Link>
            </NextLink>
          ))}
        </Box>

        {/* recommend */}
        {/* <VideoCardList /> */}
      </Box>
    </>
  )
}

export default withApollo(Post)
