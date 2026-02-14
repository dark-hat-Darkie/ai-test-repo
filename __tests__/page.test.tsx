import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders the welcome heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /welcome to next\.js/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the get started message', () => {
    render(<Home />)
    const message = screen.getByText(/get started by editing/i)
    expect(message).toBeInTheDocument()
  })

  it('displays the correct file path to edit', () => {
    render(<Home />)
    const codeElement = screen.getByText('app/page.tsx')
    expect(codeElement).toBeInTheDocument()
  })

  it('applies proper Tailwind CSS classes for centering', () => {
    const { container } = render(<Home />)
    const main = container.querySelector('main')
    expect(main).toHaveClass('flex', 'min-h-screen', 'items-center', 'justify-center')
  })
})
