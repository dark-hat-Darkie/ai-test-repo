import { render, screen } from '@testing-library/react'
import AboutPage from '../about/page'

// Mock next/font/google
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter-mock',
    variable: '--font-inter',
    style: { fontFamily: 'Inter' },
  }),
}))

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
})

describe('About Page', () => {
  it('renders without errors', () => {
    render(<AboutPage />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the About Us heading', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { name: /about us/i })
    ).toBeInTheDocument()
  })

  it('renders the mission section', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { name: /why we built x-force/i })
    ).toBeInTheDocument()
  })

  it('renders the values section', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { name: /what we stand for/i })
    ).toBeInTheDocument()
  })

  it('renders team member cards', () => {
    render(<AboutPage />)
    const teamCards = screen.getAllByTestId('team-member-card')
    expect(teamCards.length).toBeGreaterThanOrEqual(6)
  })

  it('renders the stats section', () => {
    render(<AboutPage />)
    expect(screen.getByTestId('stats-section')).toBeInTheDocument()
  })

  it('renders the navigation', () => {
    render(<AboutPage />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<AboutPage />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
