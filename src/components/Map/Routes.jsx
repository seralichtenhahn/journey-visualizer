import { Layer, Source } from 'react-map-gl'

import { useMemo } from 'react'
import usePageData from '@/hooks/usePageData'

function Routes() {
  const { legs } = usePageData()

  const routeLayer = {
    type: 'line',
    paint: {
      'line-color': '#000',
      'line-width': 2,
      'line-dasharray': [3, 1],
    },
  }

  return useMemo(
    () => (
      <Source
        id="route"
        type="geojson"
        data={{
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: legs.reduce((coordinates, leg) => {
              return [
                ...coordinates,
                [
                  leg.fromPlace.geoCoordinates.longitude,
                  leg.fromPlace.geoCoordinates.latitude,
                ],
                [
                  leg.toPlace.geoCoordinates.longitude,
                  leg.toPlace.geoCoordinates.latitude,
                ],
              ]
            }, []),
          },
        }}
      >
        <Layer {...routeLayer} />
      </Source>
    ),
    [legs],
  )
}

export default Routes
