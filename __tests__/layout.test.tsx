import fs from 'fs';
import path from 'path';

describe('RootLayout', () => {
  it('has a layout.tsx file in the app directory', () => {
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    expect(fs.existsSync(layoutPath)).toBe(true);
  });

  it('includes proper metadata export', () => {
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

    expect(layoutContent).toContain('export const metadata');
    expect(layoutContent).toContain('Metadata');
  });

  it('imports globals.css for Tailwind styles', () => {
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

    expect(layoutContent).toContain('./globals.css');
  });

  it('exports a RootLayout function', () => {
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

    expect(layoutContent).toContain('export default function RootLayout');
  });

  it('includes html and body tags in layout structure', () => {
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

    expect(layoutContent).toContain('<html');
    expect(layoutContent).toContain('<body>');
  });

  it('sets language attribute on html tag', () => {
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

    expect(layoutContent).toContain('lang="en"');
  });
});
