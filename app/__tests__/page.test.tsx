import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  it('renders without errors', () => {
    render(<Home />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('displays the welcome heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /welcome to ai test repo/i })).toBeInTheDocument()
  })

  it('displays the description text', () => {
    render(<Home />)
    expect(screen.getByText(/next\.js app with typescript and tailwind css/i)).toBeInTheDocument()
  })

  it('has a link to Next.js documentation', () => {
    render(<Home />)
    const docsLink = screen.getByRole('link', { name: /read the docs/i })
    expect(docsLink).toBeInTheDocument()
    expect(docsLink).toHaveAttribute('href', 'https://nextjs.org/docs')
    expect(docsLink).toHaveAttribute('target', '_blank')
  })

  it('has a link to GitHub', () => {
    render(<Home />)
    const githubLink = screen.getByRole('link', { name: /view on github/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com')
    expect(githubLink).toHaveAttribute('target', '_blank')
  })

  it('applies Tailwind CSS classes correctly', () => {
    render(<Home />)
    const container = screen.getByRole('main').parentElement
    expect(container).toHaveClass('min-h-screen')
  })
})
