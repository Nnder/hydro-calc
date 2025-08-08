import { useBreakpoints } from '@vueuse/core'

export default function useScreenSize() {
  const breakpoints = useBreakpoints({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  })

  return {
    sm: breakpoints.greater('sm'),
    md: breakpoints.greater('md'),
    lg: breakpoints.greater('lg'),
    xl: breakpoints.greater('xl'),
    xxl: breakpoints.greater('xxl'),
  }
}
