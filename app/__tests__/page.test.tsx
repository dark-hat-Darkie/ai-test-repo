import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock next/font/google
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter-mock',
    variable: '--font-inter',
    style: { fontFamily: 'Inter' },
  }),
}))

describe('Home Page', () => {
  it('renders without errors', () => {
    render(<Home />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the navigation with X-Force branding', () => {
    render(<Home />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getAllByText('X-Force').length).toBeGreaterThan(0)
  })

  it('renders the hero headline', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /automate your entire/i })
    ).toBeInTheDocument()
  })

  it('renders the Features section', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /powerful features/i })
    ).toBeInTheDocument()
  })

  it('renders the How It Works section', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /how it works/i })
    ).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /ready to automate/i })
    ).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<Home />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('has GitHub links', () => {
    render(<Home />)
    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks.length).toBeGreaterThan(0)
  })

  it('has Get Started links', () => {
    render(<Home />)
    const getStartedLinks = screen.getAllByRole('link', { name: /get started/i })
    expect(getStartedLinks.length).toBeGreaterThan(0)
  })

  it('wraps content in a min-h-screen container', () => {
    render(<Home />)
    const container = screen.getByRole('main').parentElement
    expect(container).toHaveClass('min-h-screen')
  })
})
