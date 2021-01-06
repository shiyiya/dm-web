import React, { DOMElement, useRef, useState } from 'react'
import { Badge, Box, Heading, LinkBox, Tag, Text } from '@chakra-ui/react'
import NavBar from '../../components/NavBar'
import { css } from '@emotion/react'
import { StarIcon } from '@chakra-ui/icons'
import withApollo from '../../withApollo'
import { useRouter } from 'next/router'
import { usePostbyidQuery } from '../../generated/graphql'
import NextLink from 'next/link'
import TouchScrollRow from '../../components/TouchScrollRow'
import theme from '../../theme'
import marked from 'marked'

const Post: React.FC<{}> = () => {
  const id = useRouter().query.postId as string
  const { data } = usePostbyidQuery({ variables: { id: id } })
  const post = data?.postsById
  console.log(post)

  return (
    <>
      <NavBar />
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
                  background: url(${post?.cover}) center no-repeat
                    ${theme.colors.cardBg};
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

                <Box my={4}>
                  <Badge size={'sm'} mr={2}>
                    {post?.createdAt}
                  </Badge>
                </Box>

                <Tag> Japanese</Tag>

                <Box my={4}>
                  <StarIcon /> <StarIcon /> <StarIcon />
                  <StarIcon /> <StarIcon />
                </Box>
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
                {/* <Heading as="h4" size="md" mb={4}>
                </Heading> */}

                <Box
                  dangerouslySetInnerHTML={{
                    __html: marked(
                      post?.content?.replace(/\!\[suo\]\(.*\)/, '') || ''
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          style={{ margin: '20px auto', padding: '20px 0 35px', width: '90vw' }}
        >
          <TouchScrollRow>
            {post?.videos?.map((_, k) => (
              <Box
                css={css`
                  width: 20%;
                  min-width: 200px;
                `}
                key={k}
              >
                <NextLink href={`/play/${post.id}?url=${_.playUrl}`}>
                  <a
                    href={`/play/${post.id}?url=${_.playUrl}`}
                    draggable={false}
                  >
                    <Box>
                      <Box
                        css={css`
                          margin: 0 5px 0px;
                          box-shadow: 0 0 rgba(0, 0, 0, 0.2);
                          border-radius: 5px;
                          position: relative;
                          transition: all 0.15s ease-out;
                          background-image: url(${_.cover || post.cover});
                          background-repeat: no-repeat;
                          background-size: 100.1%;
                          background-position: 50% 50%;
                          position: relative;
                          border-radius: 5px;
                          overflow: hidden;
                          background-color: rgba(0, 0, 0, 0.4);
                          transition: all 0.15s ease-out;

                          &::before {
                            display: block;
                            content: '';
                            width: 100%;
                            padding-top: 56%;
                          }
                        `}
                      ></Box>

                      <Text mr={4} my={4}>
                        {k + 1} {_.title}
                      </Text>
                    </Box>
                  </a>
                </NextLink>
              </Box>
            ))}
          </TouchScrollRow>
        </Box>

        {/* recommend */}
        {/* <VideoCardList /> */}
      </Box>
    </>
  )
}

export default withApollo(Post)
