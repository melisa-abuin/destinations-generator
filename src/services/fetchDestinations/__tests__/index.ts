import { fetchDestinations } from '..'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('getCocktailsByIngredient', () => {
  it('returns the destination list as an array when the api call is successful', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(['rome', 'florence', 'pisa']),
      })
    ) as jest.Mock

    const result = await fetchDestinations('milan')

    expect(global.fetch).toHaveBeenCalled()
    expect(result).toMatchObject(['rome', 'florence', 'pisa'])
  })

  it('returns null when there is an error', async () => {
    global.fetch = jest.fn(() => Promise.reject()) as jest.Mock

    const result = await fetchDestinations('milan')

    expect(global.fetch).toHaveBeenCalled()
    expect(result).toStrictEqual(
      new Error("It seems that we couldn't find that city")
    )
  })
})
