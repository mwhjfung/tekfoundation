import { render, screen } from '@testing-library/react'
import Supporters from '@/components/Supporters'
import { SUPPORTERS } from '@/data/content'

describe('Supporters', () => {
  it('renders the section heading', () => {
    render(<Supporters />)
    expect(screen.getByText(/partners & supporters/i)).toBeInTheDocument()
  })

  it('renders a placeholder for each supporter', () => {
    render(<Supporters />)
    SUPPORTERS.forEach(({ name }) => {
      expect(screen.getByTitle(name)).toBeInTheDocument()
    })
  })
})
