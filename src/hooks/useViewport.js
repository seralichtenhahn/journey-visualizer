import { useContext } from 'react'
import ViewportContext from '@/contexts/ViewportContext'

function useViewport() {
  return useContext(ViewportContext)
}

export default useViewport
