import { render, screen } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'
import { TESTIMONIALS } from '@/data/content'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /what our partners say/i })).toBeInTheDocument()
  })

  it('renders each testimonial name', () => {
    render(<Testimonials />)
    TESTIMONIALS.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders each testimonial organisation', () => {
    render(<Testimonials />)
    TESTIMONIALS.forEach(({ org }) => {
      expect(screen.getByText(new RegExp(org))).toBeInTheDocument()
    })
  })
})
