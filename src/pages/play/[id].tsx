import 'video-react/dist/video-react.css' // import css
import React from 'react'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'

const player = () => {
  const url = useRouter().query.url

  console.log(url)

  return (
    <ReactPlayer
      url={url}
      width="100vw"
      height="100vh"
      playing={true}
      controls={true}
    />
  )
}

export default player
