import { Marker, WebMercatorViewport } from 'react-map-gl'
import { useEffect, useMemo } from 'react'

import IconMarker from '@/components/Icon/IconMarker'
import clsx from 'clsx'
import usePageData from '@//hooks/usePageData'
import useViewport from '@/hooks/useViewport'

function Markers() {
  const { places, type } = usePageData()

  const isOverview = type === 'overview'

  const placesMarkers = useMemo(
    () =>
      places.map((place) => (
        <Marker
          key={place.locationName}
          longitude={place.geoCoordinates.longitude}
          latitude={place.geoCoordinates.latitude}
        >
          <div
            className={clsx(
              'relative flex items-center space-x-1 -translate-y-full transfom',
              isOverview ? '-translate-x-4' : '-translate-x-5',
            )}
          >
            <IconMarker
              className={clsx(isOverview ? 'w-8 h-8' : 'w-10 h-10')}
            />
            <div
              className={clsx(
                'px-2 py-1  leading-none tracking-wide bg-white rounded-md shadow-sm',
                isOverview ? 'text-sm' : 'text-base',
              )}
            >
              {place.locationName}
            </div>
          </div>
        </Marker>
      )),
    [places],
  )

  return placesMarkers
}

export default Markers
