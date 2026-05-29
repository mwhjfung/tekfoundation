import { render, screen } from '@testing-library/react'
import CharityPartners from '@/components/CharityPartners'
import { CHARITY_PARTNERS } from '@/data/content'

describe('CharityPartners', () => {
  it('renders the section heading', () => {
    render(<CharityPartners />)
    expect(screen.getByText(/charity partners/i)).toBeInTheDocument()
  })

  it('renders a placeholder for each partner', () => {
    render(<CharityPartners />)
    CHARITY_PARTNERS.forEach(({ name }) => {
      expect(screen.getByTitle(name)).toBeInTheDocument()
    })
  })
})
