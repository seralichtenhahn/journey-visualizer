import { useCallback, useEffect, useRef, useState } from 'react'

import usePageData from '@/hooks/usePageData'
import { useScroll } from '@use-gesture/react'

export default function ScrollController() {
  const {
    totalPages,
    setPage,
    page,
    setProgress,
    navigationMode,
    setNavigationMode,
  } = usePageData()
  const controllerContainer = useRef(null)

  useScroll(
    (options) => {
      const { offset, movement } = options

      if (offset[0]) {
        setNavigationMode('slide')
        return
      }

      const isScrollingDown = movement[1] > 0
      const progress = Math.floor(
        (Math.abs(offset[1] - page * window.innerHeight) / window.innerHeight) *
          100,
      )
      const currentPage = Math.floor(offset[1] / window.innerHeight)
      console.log({ currentPage, progress })

      setPage(currentPage, { navigationMode: 'scroll' })
      setProgress(progress)
    },
    {
      target: window,
    },
  )

  useEffect(() => {
    if (navigationMode === 'slide') {
      window.scrollTo(0, page * window.innerHeight)
    }
  }, [page])

  return (
    <div aria-hidden="false" ref={controllerContainer}>
      {Array.from({ length: totalPages }).map((_, i) => (
        <div key={`${i}-vscroller`} className="h-screen" />
      ))}
    </div>
  )
}
