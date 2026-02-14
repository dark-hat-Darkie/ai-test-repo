import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  it('renders the home page', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('displays the Next.js logo', () => {
    render(<Home />)

    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders Deploy Now link', () => {
    render(<Home />)

    const deployLink = screen.getByText('Deploy Now')
    expect(deployLink).toBeInTheDocument()
    expect(deployLink.closest('a')).toHaveAttribute('href', expect.stringContaining('vercel.com/new'))
  })

  it('renders Documentation link', () => {
    render(<Home />)

    const docsLink = screen.getByText('Documentation')
    expect(docsLink).toBeInTheDocument()
    expect(docsLink.closest('a')).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'))
  })

  it('applies Tailwind CSS classes correctly', () => {
    const { container } = render(<Home />)

    const mainElement = container.querySelector('main')
    expect(mainElement).toHaveClass('flex', 'min-h-screen')
  })
})
