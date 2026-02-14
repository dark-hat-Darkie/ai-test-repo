import { render } from '@testing-library/react'
import RootLayout from '@/app/layout'

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { container } = render(
      <RootLayout>
        <div data-testid="test-child">Test Content</div>
      </RootLayout>
    )

    const child = container.querySelector('[data-testid="test-child"]')
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Content')
  })

  it('renders html and body tags', () => {
    const { container } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )

    const html = container.querySelector('html')
    const body = container.querySelector('body')

    expect(html).toBeInTheDocument()
    expect(body).toBeInTheDocument()
  })

  it('sets lang attribute to en on html element', () => {
    const { container } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )

    const html = container.querySelector('html')
    expect(html).toHaveAttribute('lang', 'en')
  })
})
