import { useDestinations } from '..'
import { renderHook, waitFor } from '@testing-library/react'
import { fetchDestinations } from '@/services/fetchDestinations'

jest.mock('@/services/fetchDestinations')

afterEach(() => {
  jest.resetAllMocks()
})

describe('useDestinations', () => {
  it('returns success when the api call is successful', async () => {
    jest
      .mocked(fetchDestinations)
      .mockReturnValueOnce(Promise.resolve(['rome', 'florence', 'pisa']))

    const { result } = renderHook(useDestinations)

    await waitFor(() => result.current.fetch('milan'))

    expect(result.current.data).toEqual(['rome', 'florence', 'pisa'])
  })

  it('returns error when the api call is not successful', async () => {
    jest
      .mocked(fetchDestinations)
      .mockReturnValueOnce(Promise.resolve(new Error()))

    const { result } = renderHook(useDestinations)

    await waitFor(() => result.current.fetch('milan'))

    expect(result.current.error).toStrictEqual(new Error())
  })
})
