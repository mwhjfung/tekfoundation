import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import { HERO } from '@/data/content'

describe('Hero', () => {
  it('renders the eyebrow label', () => {
    render(<Hero />)
    expect(screen.getByText(HERO.eyebrow)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO.headline)
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(HERO.tagline)).toBeInTheDocument()
  })

  it('renders primary and secondary CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: HERO.primaryCta })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: HERO.secondaryCta })).toBeInTheDocument()
  })
})
