import { render, screen } from '@testing-library/react'
import GetInTouch from '@/components/GetInTouch'
import { GET_IN_TOUCH } from '@/data/content'

describe('GetInTouch', () => {
  it('renders the heading', () => {
    render(<GetInTouch />)
    expect(screen.getByRole('heading', { name: GET_IN_TOUCH.heading })).toBeInTheDocument()
  })

  it('renders the body copy', () => {
    render(<GetInTouch />)
    expect(screen.getByText(GET_IN_TOUCH.body)).toBeInTheDocument()
  })

  it('renders the CTA link', () => {
    render(<GetInTouch />)
    expect(screen.getByRole('link', { name: GET_IN_TOUCH.cta })).toHaveAttribute('href', GET_IN_TOUCH.href)
  })

  it('has the correct id for anchor navigation', () => {
    render(<GetInTouch />)
    expect(document.getElementById(GET_IN_TOUCH.id)).toBeInTheDocument()
  })
})
