import { fetchDestinations } from '@/services/fetchDestinations'
import { useCallback, useState } from 'react'

export const useDestinations = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState<string[] | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const fetch = useCallback(async (city: string) => {
    setIsFetching(true)

    const result = await fetchDestinations(city)

    if (result instanceof Error) {
      setError(result)
    } else {
      setData(result)
    }

    setIsFetching(false)
  }, [])

  return { data, isFetching, error, fetch }
}
