import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../components/Navbar'

// Mock next/font/google
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter-mock',
    variable: '--font-inter',
    style: { fontFamily: 'Inter' },
  }),
}))

// Mock next/navigation
const mockPathname = '/'
jest.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('Navbar', () => {
  it('renders without errors', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders X-Force branding', () => {
    render(<Navbar />)
    expect(screen.getByText('X-Force')).toBeInTheDocument()
  })

  it('renders the hamburger menu button', () => {
    render(<Navbar />)
    const hamburgerButton = screen.getByLabelText('Open menu')
    expect(hamburgerButton).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger button is clicked', () => {
    render(<Navbar />)
    const hamburgerButton = screen.getByLabelText('Open menu')
    fireEvent.click(hamburgerButton)

    // After opening, the close button should be visible
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('shows navigation links in mobile menu when opened', () => {
    render(<Navbar />)
    const hamburgerButton = screen.getByLabelText('Open menu')
    fireEvent.click(hamburgerButton)

    // Mobile menu should show navigation links
    // There are both desktop and mobile links, so we check for multiple
    const featuresLinks = screen.getAllByText('Features')
    expect(featuresLinks.length).toBeGreaterThanOrEqual(2) // desktop + mobile

    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks.length).toBeGreaterThanOrEqual(2)

    const contactLinks = screen.getAllByText('Contact')
    expect(contactLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />)

    // Open menu
    const hamburgerButton = screen.getByLabelText('Open menu')
    fireEvent.click(hamburgerButton)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    // Click the mobile Features link (the one inside the mobile menu panel)
    const mobileMenuLinks = screen.getAllByText('Features')
    // Click the last Features link (the mobile one)
    fireEvent.click(mobileMenuLinks[mobileMenuLinks.length - 1])

    // Menu should be closed, so "Open menu" button should be back
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when close button is clicked', () => {
    render(<Navbar />)

    // Open menu
    fireEvent.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    // Click close
    fireEvent.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('renders Get Started CTA in mobile menu when opened', () => {
    render(<Navbar />)

    // Open menu
    fireEvent.click(screen.getByLabelText('Open menu'))

    // Should have Get Started links (desktop hidden + mobile menu)
    const getStartedLinks = screen.getAllByText('Get Started')
    expect(getStartedLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('has desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  it('sets aria-expanded correctly on hamburger button', () => {
    render(<Navbar />)
    const hamburgerButton = screen.getByLabelText('Open menu')
    expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(hamburgerButton)
    const closeButton = screen.getByLabelText('Close menu')
    expect(closeButton).toHaveAttribute('aria-expanded', 'true')
  })
})
