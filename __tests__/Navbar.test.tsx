import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders the logo image', () => {
    render(<Navbar />)
    expect(screen.getByAltText('tekFoundation')).toBeInTheDocument()
  })

  it('renders About Us link pointing to #about', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: /about us/i })
    expect(link).toHaveAttribute('href', '#about')
  })

  it('renders Donate button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /donate/i })).toBeInTheDocument()
  })

  it('renders LinkedIn and Instagram links', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
