import { render, screen } from '@testing-library/react'
import BrandScroller from '../components/BrandScroller'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ unoptimized, ...props }: Record<string, unknown>) => {
    void unoptimized
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('BrandScroller', () => {
  it('renders without errors', () => {
    render(<BrandScroller />)
    expect(screen.getByText('Trusted by Leading Brands')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<BrandScroller />)
    expect(screen.getByText('Featured In')).toBeInTheDocument()
  })

  it('renders the section subtitle', () => {
    render(<BrandScroller />)
    expect(
      screen.getByText('Recognized and featured across top technology and news platforms')
    ).toBeInTheDocument()
  })

  it('renders brand logos with proper alt text', () => {
    render(<BrandScroller />)
    const techCrunchImages = screen.getAllByAltText('TechCrunch')
    expect(techCrunchImages.length).toBeGreaterThan(0)

    const forbesImages = screen.getAllByAltText('Forbes')
    expect(forbesImages.length).toBeGreaterThan(0)

    const wiredImages = screen.getAllByAltText('Wired')
    expect(wiredImages.length).toBeGreaterThan(0)
  })

  it('duplicates brand logos for infinite scroll', () => {
    render(<BrandScroller />)
    // Each brand should appear twice (original + duplicate for seamless loop)
    const techCrunchImages = screen.getAllByAltText('TechCrunch')
    expect(techCrunchImages).toHaveLength(2)

    const forbesImages = screen.getAllByAltText('Forbes')
    expect(forbesImages).toHaveLength(2)
  })

  it('has the scrolling animation container', () => {
    render(<BrandScroller />)
    const scrollContainer = screen.getByLabelText('Brand logos carousel')
    expect(scrollContainer).toHaveClass('animate-scroll')
  })

  it('renders brand names as text', () => {
    render(<BrandScroller />)
    const bloombergTexts = screen.getAllByText('Bloomberg')
    expect(bloombergTexts.length).toBeGreaterThan(0)

    const reutersTexts = screen.getAllByText('Reuters')
    expect(reutersTexts.length).toBeGreaterThan(0)
  })
})
