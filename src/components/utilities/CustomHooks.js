import { useEffect, useState } from "react"

export const useMediaQuery = query => {
  let mediaMatch = {}

  try {
    mediaMatch = window.matchMedia(query)
  } catch {}
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    const handler = e => setMatches(e.matches)
    mediaMatch.addListener(handler)
    return () => mediaMatch.removeListener(handler)
  })
  return matches
}
