interface Props {
  data: string[] | null
  isFetching: boolean
  error: Error | null
}

export const Result = ({ data, isFetching, error }: Props) => {
  if (isFetching) {
    return (
      <div className="flex items-center justify-center pt-16">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    )
  }

  if (!!error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-16"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">Something went wrong.</span>
      </div>
    )
  }

  if (data) {
    return (
      <div className="pt-16">
        {data.map((city: string) => (
          <p key={city} className="pt-2">
            {city}
          </p>
        ))}
      </div>
    )
  }

  return null
}
