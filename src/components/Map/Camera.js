import { LinearInterpolator, TRANSITION_EVENTS } from 'react-map-gl'
import { along, distance, lineString } from '@turf/turf'

import { getBoundsOfPlaces } from '@/utils'
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'
import usePageData from '@/hooks/usePageData'
import useViewport from '@/hooks/useViewport'

const transition = {
  transitionDuration: 2000,
  transitionInterpolator: new LinearInterpolator(),
  transitionInterruption: TRANSITION_EVENTS.UPDATE,
  transitionEasing: (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
}

export default function Camera() {
  const { viewport, setViewport } = useViewport()
  const { places, page, type, navigationMode, progress } = usePageData()

  useEffect(() => {
    if (navigationMode === 'scroll' && type === 'Leg') {
      return
    }

    const pitch = type === 'Leg' ? 45 : 0

    if (places.length === 1) {
      const { longitude, latitude } = places[0].geoCoordinates
      setViewport((v) => ({
        ...v,
        ...transition,
        pitch,
        longitude,
        latitude,
        zoom: 12,
      }))
      return
    }

    const { latitude, longitude, zoom } = getBoundsOfPlaces({
      places,
      viewport,
    })

    setViewport((v) => ({
      ...v,
      ...transition,
      latitude,
      longitude,
      zoom,
      pitch,
    }))
  }, [page])

  useEffect(() => {
    if (navigationMode === 'slide') {
      return
    }

    if (type !== 'Leg') {
      return
    }

    const route = lineString(
      places.map((place) => [
        place.geoCoordinates.longitude,
        place.geoCoordinates.latitude,
      ]),
    )

    const distanceInKm = Math.floor(
      distance(route.geometry.coordinates[0], route.geometry.coordinates[1], {
        units: 'kilometers',
      }),
    )

    const feature = along(route, (distanceInKm / 100) * progress)
    const [longitude, latitude] = feature.geometry.coordinates

    setViewport((v) => ({
      ...v,
      transitionInterpolator: new LinearInterpolator(),
      transitionInterruption: TRANSITION_EVENTS.UPDATE,
      transitionDuration: 1000,
      pitch: 45,
      zoom: 12,
      longitude,
      latitude,
    }))
  }, [progress])
  return null
}
