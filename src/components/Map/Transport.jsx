import React, { useEffect } from 'react'

import { Threebox } from 'threebox-plugin'
import { distance } from '@turf/turf'
import { point } from '@turf/helpers'
import useMap from '@/hooks/useMap'
import usePageData from '@/hooks/usePageData'

export default function Transport() {
  const { map } = useMap()
  const { legs, type } = usePageData()

  const legId = legs.length === 1 ? legs[0].id : null

  useEffect(() => {
    if (type !== 'Leg') {
      return null
    }

    const leg = legs[0]

    window.tb = new Threebox(map, map.getCanvas().getContext('webgl'), {
      defaultLights: true,
    })

    const transportLayer = {
      id: legId,
      renderingMode: '3d',
      type: 'custom',
      onAdd() {
        const origin = [
          leg.fromPlace.geoCoordinates.longitude,
          leg.fromPlace.geoCoordinates.latitude,
        ]

        const destination = [
          leg.toPlace.geoCoordinates.longitude,
          leg.toPlace.geoCoordinates.latitude,
        ]

        const distanceInKm = Math.floor(
          distance(point(origin), point(destination), {
            units: 'kilometers',
          }),
        )

        const options = {
          obj: '/models/train/scene.gltf',
          type: 'gltf',
          scale: distanceInKm / 100,
          units: 'meters',
          anchor: 'center',
          rotation: { x: 90, y: 0, z: 0 },
        }

        tb.loadObj(options, function (model) {
          const train = model.setCoords(origin)
          tb.add(train)

          train.followPath({
            duration: 15000,
            path: [origin, destination],
          })
        })
      },
      render() {
        tb.update()
      },
    }

    map.addLayer(transportLayer)

    return () => {
      map && map.removeLayer(legId)
    }
  }, [legId])

  return null
}
