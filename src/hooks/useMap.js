import { MapContext } from 'react-map-gl'
import { useContext } from 'react'

function useMap() {
  return useContext(MapContext)
}

export default useMap
