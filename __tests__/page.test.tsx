import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders the landing page with welcome heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /welcome to next\.js/i });
    expect(heading).toBeInTheDocument();
  });

  it('displays get started instruction', () => {
    render(<Home />);
    const text = screen.getByText(/get started by editing/i);
    expect(text).toBeInTheDocument();
  });

  it('shows the file path to edit', () => {
    render(<Home />);
    const code = screen.getByText('app/page.tsx');
    expect(code).toBeInTheDocument();
  });

  it('renders documentation link', () => {
    render(<Home />);
    const docLink = screen.getByRole('link', { name: /read the docs/i });
    expect(docLink).toBeInTheDocument();
    expect(docLink).toHaveAttribute('href', 'https://nextjs.org/docs');
  });

  it('renders templates link', () => {
    render(<Home />);
    const templateLink = screen.getByRole('link', { name: /explore templates/i });
    expect(templateLink).toBeInTheDocument();
    expect(templateLink).toHaveAttribute('href', 'https://vercel.com/templates?framework=next.js');
  });

  it('renders footer links', () => {
    render(<Home />);
    const learnLink = screen.getByRole('link', { name: /^learn$/i });
    const docsLink = screen.getByRole('link', { name: /^documentation$/i });
    const visitLink = screen.getByRole('link', { name: /visit next\.js/i });

    expect(learnLink).toBeInTheDocument();
    expect(docsLink).toBeInTheDocument();
    expect(visitLink).toBeInTheDocument();
  });

  it('applies Tailwind CSS classes', () => {
    const { container } = render(<Home />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toHaveClass('flex', 'flex-col', 'gap-8');
  });
});
