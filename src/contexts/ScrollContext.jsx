import { createContext, useState } from 'react'

export const ScrollContext = createContext()

export default function ScrollContextProvider({ children }) {
  const [progress, setProgress] = useState(0)
  const [navigationMode, setNavigationMode] = useState('slide')

  return (
    <ScrollContext.Provider
      value={{ progress, setProgress, navigationMode, setNavigationMode }}
    >
      {children}
    </ScrollContext.Provider>
  )
}
