import { render, screen } from '@testing-library/react'
import Stats from '@/components/Stats'
import { STATS } from '@/data/content'

describe('Stats', () => {
  it('renders all stat values', () => {
    render(<Stats />)
    STATS.forEach(({ value }) => {
      expect(screen.getByText(value)).toBeInTheDocument()
    })
  })

  it('renders all stat labels', () => {
    render(<Stats />)
    STATS.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })
})
