import PageContentLeg from '@/components/Page/PageContentLeg'
import PageContentOverview from '@/components/Page/PageContentOverview'
import PageContentStay from '@/components/Page/PageContentStay'
import PageContentStop from '@/components/Page/PageContentStop'
import React from 'react'
import usePageData from '@/hooks/usePageData'

export default function PageContent() {
  const { type } = usePageData()

  const ContentTypes = {
    Overview: PageContentOverview,
    Leg: PageContentLeg,
    Stop: PageContentStop,
    Stay: PageContentStay,
  }

  const Component = ContentTypes[type]

  return (
    <div className="h-full py-6 pl-6">
      <Component />
    </div>
  )
}
