import { render, screen } from '@testing-library/react'
import VolunteerProjects from '@/components/VolunteerProjects'
import { VOLUNTEER_PROJECTS } from '@/data/content'

describe('VolunteerProjects', () => {
  it('renders the section heading', () => {
    render(<VolunteerProjects />)
    expect(screen.getByRole('heading', { name: /common volunteer projects/i })).toBeInTheDocument()
  })

  it('renders a pill tag for each project type', () => {
    render(<VolunteerProjects />)
    VOLUNTEER_PROJECTS.forEach((project) => {
      expect(screen.getByText(project)).toBeInTheDocument()
    })
  })
})
