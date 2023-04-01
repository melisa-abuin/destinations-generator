import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Search } from '@/components/search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const onSearch = (city: string) => console.log(city)

  return (
    <>
      <Head>
        <title>Cool Destinations</title>
        <meta name="description" content="Cool destinations for one day" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`h-screen w-screen ${inter.className}`}>
        <div className="content-center flex flex-col flex-wrap h-full justify-center text-center w-full">
          <div className="max-w-2xl px-2">
            <h1 className="font-bold pb-12 text-3xl">Destinations</h1>
            <p className="pb-8">
              Here you can search for the best places to go for one day from
              your location. Start writing the city and we'll do the rest!
            </p>
            <Search onSubmit={onSearch} />
          </div>
        </div>
      </main>
    </>
  )
}
