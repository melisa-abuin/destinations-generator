import { Result } from '..'
import { render, screen } from '@testing-library/react'
import { ComponentProps } from 'react'

const defaultProps = {
  data: ['rome', 'florence', 'pompei'],
  isFetching: false,
  error: null,
}

const mount = (props: ComponentProps<typeof Result> = defaultProps) => {
  return render(<Result {...props} />)
}

describe('Result', () => {
  it('renders the loader if the fetch is not yet finished', () => {
    mount({ ...defaultProps, isFetching: true })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders the error if the api call was not successful', () => {
    mount({ ...defaultProps, error: new Error() })

    expect(screen.queryByText('Something went wrong.')).toBeInTheDocument()
  })

  it('renders the data if the api call was successful', () => {
    mount()

    expect(screen.queryByText('rome')).toBeInTheDocument()
  })
})
