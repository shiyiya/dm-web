import { useEffect, useState } from 'react'
import { PostsMutation, usePostsMutation } from '../generated/graphql'

export function useTagsPostApi(tags: string[]) {
  const [videos, setVideos] = useState<PostsMutation | null>()
  const [poster] = usePostsMutation({ variables: { tagsId: ['eqweq'] } })

  useEffect(() => {
    poster().then((_) => setVideos(_.data))
  }, [])

  return videos
}

export function useTrendingPost() {
  const [videos, setVideos] = useState<PostsMutation | null>()

  return videos
}

export function useLastedPost() {
  const [videos, setVideos] = useState<PostsMutation | null>()

  return videos
}
