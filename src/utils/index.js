import { WebMercatorViewport } from 'react-map-gl'
import mapboxgl from 'mapbox-gl'

export const getBoundsOfPlaces = ({ viewport, places, options = {} }) => {
  const coords = places.map((place) => [
    place.geoCoordinates.longitude,
    place.geoCoordinates.latitude,
  ])

  const bounds = new mapboxgl.LngLatBounds()
  coords.forEach((coord) => bounds.extend(coord))

  return new WebMercatorViewport(viewport).fitBounds(bounds.toArray(), {
    padding: 100,
    maxZoom: 12,
    ...options,
  })
}
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
