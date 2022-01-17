import { createBreakpoint } from 'react-use'
import resolveConfig from 'tailwindcss/resolveConfig'

const fullConfig = resolveConfig({})
const parseConfig = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, parseInt(value, 10)]),
  )

const useBreakpoint = createBreakpoint(parseConfig(fullConfig.theme.screens))

export default function useIsMobile() {
  const breakpoint = useBreakpoint()

  return breakpoint === 'sm'
}
