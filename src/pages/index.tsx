import { Box } from '@chakra-ui/react'
import React from 'react'
import Loading from '../components/Loading'
import NavBar from '../components/NavBar'
import GDSwiper from '../components/Swiper'
import VideoCardList from '../components/VideoCard'
import { useLastedPostQuery, usePostsByTagQuery } from '../generated/graphql'
import withApollo from '../withApollo'

const Index = () => {
  const { data } = useLastedPostQuery()

  return (
    <>
      <NavBar />
      <GDSwiper />

      <VideoCardList data={data?.lasted} title="最近更新" />

      {/* <Box
        h="300px"
        my={30}
        height="calc((1 / 3.5) * 100vw)"
        max-height="calc(100vh - 240px)"
        background="url(https://0c86e2d1-madman-com-au.akamaized.net/shows/attack-on-titan_stage-key-art-clean-large_62135.jpeg) center no-repeat"
      ></Box> */}
    </>
  )
}

export default withApollo(Index)
