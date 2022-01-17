import { PageContext } from '@/contexts/PageContext'
import { ScrollContext } from '@/contexts/ScrollContext'
import journey from '@/assets/data/journey.json'
import { useContext } from 'react'

function usePageData() {
  const { journeyItems, journeyTitle, details } = journey.data
  const { page, setPage: setPageInternal } = useContext(PageContext)
  const { progress, setProgress, navigationMode, setNavigationMode } =
    useContext(ScrollContext)
  const totalPages = journeyItems.length + 1

  const setPage = (newPage, options = { navigationMode: 'slide' }) => {
    setNavigationMode(options.navigationMode)
    setPageInternal(Math.min(Math.max(newPage, 0), totalPages - 1))
  }

  const pageProps = {
    page,
    setPage,
    totalPages,
    progress,
    setProgress,
    navigationMode,
    setNavigationMode,
  }

  if (page === 0) {
    const places = journeyItems
      .filter((item) => item['@type'] !== 'Leg')
      .map((item) => item.place)

    const legs = journeyItems.filter((item) => item['@type'] === 'Leg')

    const title = journeyTitle
    const type = 'Overview'

    return {
      ...pageProps,
      type,
      places,
      legs,
      title,
      details,
      startDate: journeyItems[0].itemStartDate,
      endDate: journeyItems[journeyItems.length - 1].itemEndDate,
    }
  }

  const item = journeyItems[page - 1]
  const type = item['@type']
  const places = type === 'Leg' ? [item.fromPlace, item.toPlace] : [item.place]
  const legs = type === 'Leg' ? [item] : []

  return {
    ...pageProps,
    ...item,
    type,
    places,
    legs,
    startDate: item.itemStartDate,
    endDate: item.itemEndDate,
  }
}

export default usePageData
