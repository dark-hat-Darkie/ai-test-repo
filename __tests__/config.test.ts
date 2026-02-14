import fs from 'fs';
import path from 'path';

describe('Configuration Files', () => {
  describe('TypeScript Configuration', () => {
    it('has a tsconfig.json file', () => {
      const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
      expect(fs.existsSync(tsConfigPath)).toBe(true);
    });

    it('enables strict mode in TypeScript', () => {
      const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
      const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf-8'));
      expect(tsConfig.compilerOptions.strict).toBe(true);
    });

    it('configures path aliases', () => {
      const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
      const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf-8'));
      expect(tsConfig.compilerOptions.paths).toHaveProperty('@/*');
    });
  });

  describe('Tailwind CSS Configuration', () => {
    it('has a tailwind.config.ts file', () => {
      const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.ts');
      expect(fs.existsSync(tailwindConfigPath)).toBe(true);
    });

    it('has correct content paths configured', () => {
      const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.ts');
      const configContent = fs.readFileSync(tailwindConfigPath, 'utf-8');

      // Check that content paths are configured for proper purging
      expect(configContent).toContain('./pages/**/*.{js,ts,jsx,tsx,mdx}');
      expect(configContent).toContain('./components/**/*.{js,ts,jsx,tsx,mdx}');
      expect(configContent).toContain('./app/**/*.{js,ts,jsx,tsx,mdx}');
    });
  });

  describe('Package Configuration', () => {
    it('has Next.js as a dependency', () => {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      expect(packageJson.dependencies).toHaveProperty('next');
    });

    it('has React as a dependency', () => {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      expect(packageJson.dependencies).toHaveProperty('react');
      expect(packageJson.dependencies).toHaveProperty('react-dom');
    });

    it('has TypeScript as a dev dependency', () => {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      expect(packageJson.devDependencies).toHaveProperty('typescript');
      expect(packageJson.devDependencies).toHaveProperty('@types/react');
      expect(packageJson.devDependencies).toHaveProperty('@types/node');
    });

    it('has Tailwind CSS as a dev dependency', () => {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      expect(packageJson.devDependencies).toHaveProperty('tailwindcss');
      expect(packageJson.devDependencies).toHaveProperty('autoprefixer');
      expect(packageJson.devDependencies).toHaveProperty('postcss');
    });

    it('has dev script configured', () => {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      expect(packageJson.scripts).toHaveProperty('dev');
      expect(packageJson.scripts.dev).toBe('next dev');
    });

    it('has build script configured', () => {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      expect(packageJson.scripts).toHaveProperty('build');
      expect(packageJson.scripts.build).toBe('next build');
    });
  });

  describe('CSS Configuration', () => {
    it('has globals.css with Tailwind directives', () => {
      const globalsPath = path.join(process.cwd(), 'app/globals.css');
      expect(fs.existsSync(globalsPath)).toBe(true);

      const cssContent = fs.readFileSync(globalsPath, 'utf-8');
      expect(cssContent).toContain('@tailwind base');
      expect(cssContent).toContain('@tailwind components');
      expect(cssContent).toContain('@tailwind utilities');
    });
  });
});
