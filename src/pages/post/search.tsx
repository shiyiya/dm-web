import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import NavBar from '../../components/NavBar'
import VideoCardList from '../../components/VideoCard'
import { usePostbyidQuery, usePostsbytitleQuery } from '../../generated/graphql'
import withApollo from '../../withApollo'

const Index = () => {
  const t = useRouter().query.t as string

  console.log(useRouter().query)

  const { data } = usePostsbytitleQuery({ variables: { title: t } })

  console.log(data)

  return (
    <>
      <NavBar />
      <VideoCardList title="search result" data={data?.postsByTitle} />
    </>
  )
}

export default withApollo(Index)
