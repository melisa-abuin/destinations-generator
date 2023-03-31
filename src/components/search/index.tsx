import { useState } from 'react'

interface Props {
  onSubmit: (value: string) => void
}

export const Search = ({ onSubmit }: Props) => {
  const [value, setValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleButtonClick = () => {
    onSubmit(value)
    setValue('')
  }

  return (
    <div className="flex-row space-x-5">
      <input
        className="border-2 border-gray-200 border-solid py-2 px-4 rounded-md"
        onChange={handleInputChange}
        placeholder="New york"
        value={value}
      />
      <button
        className="bg-indigo-300 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  )
}
