import { Search } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Search', () => {
  it('renders the search input', () => {
    render(<Search onSubmit={jest.fn()} />)

    expect(screen.getByPlaceholderText('New york')).toBeInTheDocument()
  })

  it('returns the string value of the field on submit', async () => {
    const onSubmit = jest.fn()
    render(<Search onSubmit={onSubmit} />)

    const input = screen.getByPlaceholderText('New york')

    userEvent.type(input, 'some value')

    await waitFor(() => {
      expect(input).toHaveValue('some value')
    })

    const button = screen.getByText('Search')

    userEvent.click(button)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith('some value')
    })
  })
})
