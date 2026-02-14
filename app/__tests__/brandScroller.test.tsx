import { render, screen } from '@testing-library/react'
import BrandScroller from '../components/BrandScroller'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('BrandScroller', () => {
  it('renders without errors', () => {
    render(<BrandScroller />)
    expect(screen.getByText('Powering Modern Development')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<BrandScroller />)
    expect(screen.getByText('Industry Leaders')).toBeInTheDocument()
  })

  it('renders the section subtitle', () => {
    render(<BrandScroller />)
    expect(
      screen.getByText('Built for teams that rely on the best tools in the industry')
    ).toBeInTheDocument()
  })

  it('renders brand logos with proper alt text', () => {
    render(<BrandScroller />)
    const techCrunchImages = screen.getAllByAltText('TechCrunch')
    expect(techCrunchImages.length).toBeGreaterThan(0)

    const dockerImages = screen.getAllByAltText('Docker')
    expect(dockerImages.length).toBeGreaterThan(0)

    const stripeImages = screen.getAllByAltText('Stripe')
    expect(stripeImages.length).toBeGreaterThan(0)
  })

  it('duplicates brand logos for infinite scroll', () => {
    render(<BrandScroller />)
    // Each brand should appear twice (original + duplicate for seamless loop)
    const techCrunchImages = screen.getAllByAltText('TechCrunch')
    expect(techCrunchImages).toHaveLength(2)

    const githubImages = screen.getAllByAltText('GitHub')
    expect(githubImages).toHaveLength(2)
  })

  it('has the scrolling animation container', () => {
    render(<BrandScroller />)
    const scrollContainer = screen.getByLabelText('Brand logos carousel')
    expect(scrollContainer).toHaveClass('animate-scroll')
  })

  it('renders brand names as text', () => {
    render(<BrandScroller />)
    const vercelTexts = screen.getAllByText('Vercel')
    expect(vercelTexts.length).toBeGreaterThan(0)

    const shopifyTexts = screen.getAllByText('Shopify')
    expect(shopifyTexts.length).toBeGreaterThan(0)
  })
})
