import { useInViewport, useSafeState } from "ahooks"
import { useEffect, useRef } from "react"

export const useLazyImg = (avatar, loading) => {
  const imgRef = useRef(null)
  const newLocal = 1
  // eslint-disable-next-line no-unused-vars
  const [_, ratio] = useInViewport(imgRef, {
    threshold: [newLocal]
  })

  const [imgUrl, setImgUrl] = useSafeState(loading)

  useEffect(() => {
    if (ratio !== 1) return
    setImgUrl(avatar)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ratio])

  return { imgRef, imgUrl }
}
