import ReactMapGL, { NavigationControl } from 'react-map-gl'
import { useEffect, useState } from 'react'

import ViewportContext from '@/contexts/ViewportContext'

function Map({ children, sidebarWidth = 3 / 4 }) {
  const [viewport, setViewport] = useState({
    width: window.innerWidth * sidebarWidth,
    height: window.innerHeight,
    position: [0, 0, 0],
  })

  useEffect(() => {
    const handler = () => {
      setViewport((v) => ({
        ...v,
        width: window.innerWidth * sidebarWidth,
        height: window.innerHeight,
      }))
    }
    window.addEventListener('resize', handler)
    window.addEventListener('orientationchange', handler)

    return () => {
      window.removeEventListener('resize', handler)
      window.removeEventListener('orientationchange', handler)
    }
  }, [])

  console.log(viewport)

  return (
    <ViewportContext.Provider value={{ viewport, setViewport }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(v) => setViewport(v)}
        scrollZoom={false}
        attributionControl={false}
      >
        {children}
        <NavigationControl showCompass={false} className="bottom-8 right-8" />
      </ReactMapGL>
    </ViewportContext.Provider>
  )
}

export default Map
