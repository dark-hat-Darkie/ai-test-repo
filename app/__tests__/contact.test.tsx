import { render, screen } from '@testing-library/react'
import ContactPage from '../contact/page'

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

describe('Contact Page', () => {
  it('renders without errors', () => {
    render(<ContactPage />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the Contact Us heading', () => {
    render(<ContactPage />)
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
  })

  it('renders the name input field', () => {
    render(<ContactPage />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  })

  it('renders the email input field', () => {
    render(<ContactPage />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('renders the subject input field', () => {
    render(<ContactPage />)
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
  })

  it('renders the message textarea', () => {
    render(<ContactPage />)
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactPage />)
    expect(
      screen.getByRole('button', { name: /send message/i })
    ).toBeInTheDocument()
  })

  it('renders the Google Maps iframe', () => {
    render(<ContactPage />)
    expect(screen.getByTitle(/our location/i)).toBeInTheDocument()
  })

  it('renders the navigation', () => {
    render(<ContactPage />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<ContactPage />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
