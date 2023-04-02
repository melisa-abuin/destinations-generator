export const fetchDestinations = async (city: string) => {
  const result = await fetch(`/api/destination/${city}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(() => new Error("It seems that we couldn't find that city"))
  return result
}
