import PageContentLeg from '@/components/Page/PageContentLeg'
import PageContentOverview from '@/components/Page/PageContentOverview'
import PageContentStay from '@/components/Page/PageContentStay'
import PageContentStop from '@/components/Page/PageContentStop'
import React, { useState, useEffect, useMemo, useRef, Fragment } from 'react'
import usePageData from '@/hooks/usePageData'
import { Transition } from '@headlessui/react'
import journey from '@/assets/data/journey.json'

const ContentTypes = {
  Leg: PageContentLeg,
  Stop: PageContentStop,
  Stay: PageContentStay,
}

export default function PageContent() {
  const { page } = usePageData()
  const [isShowing, setIsShowing] = useState(true)
  const [nextPage, setNextPage] = useState(page)

  const Content = useMemo(() => {
    if (nextPage === 0) {
      return <PageContentOverview />
    }

    const item = journey.data.journeyItems[nextPage - 1]

    const ContentComponent = ContentTypes[item['@type']]

    return <ContentComponent {...item} />
  }, [nextPage])

  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    setIsShowing(false)
    let timer = setTimeout(() => {
      setNextPage(page)
      setIsShowing(true)
    }, 400)

    return () => {
      clearTimeout(timer)
    }
  }, [page])

  return (
    <div className="h-full py-6 pl-6">
      <Transition
        as={Fragment}
        show={isShowing}
        appear
        enter="transform transition duration-[400ms] ease-in-out"
        enterFrom="opacity-0 translate-y-8"
        enterTo="opacity-100 translate-y-0"
        leave="transform transition duration-[400ms] ease-in-out"
        leaveFrom="opacity-100 -translate-y-0"
        leaveTo="opacity-0 -translate-y-8"
      >
        {Content}
      </Transition>
    </div>
  )
}
