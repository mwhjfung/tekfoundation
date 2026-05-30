import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'
import { FOOTER } from '@/data/content'

describe('Footer', () => {
  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(FOOTER.copyright))).toBeInTheDocument()
  })

  it('renders the ABN', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(FOOTER.abn))).toBeInTheDocument()
  })

  it('renders the acknowledgement of Country', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.acknowledgement)).toBeInTheDocument()
  })

  it('renders LinkedIn and Instagram footer links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })
})
