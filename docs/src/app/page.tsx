'use client'

import React from 'react'
import { DocsLayout } from '@/components/DocsLayout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <DocsLayout>
      <div className="u-d-block">
        {/* Hero Section */}
        <div className="c-hero c-hero--center u-bg-transparent" style={{ "--atomix-hero-content-width": "650px" }}>
          <div className="c-hero__bg">
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Background" 
              className="c-hero__bg-image"
            />
            <div className="c-hero__overlay"></div>
          </div>
          <div className="c-hero__container o-container">
            <div className="c-hero__content">
              <p className="c-hero__subtitle">Modern UI Component Library</p>
              <h1 className="c-hero__title">Atomix Design System</h1>
              <p className="c-hero__text">
                A lightweight, highly customizable React component library for building beautiful interfaces with a focus on scalability, extensibility, and maintainability.
              </p>
              <div className="c-hero__actions">
                <div className="u-d-flex u-gap-3 u-justify-content-center">
                  <button className="c-btn c-btn--primary" aria-disabled="false">
                    <span className="button__label">Get Started</span>
                  </button>
                  <a 
                    href="https://liimonx.github.io/atomix/storybook/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="c-btn c-btn--outline-secondary"
                  >
                    View on Storybook
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="c-hero__overlay" style={{ opacity: 0.5 }}></div>
        </div>

        {/* Features Grid */}
        <section className="u-mt-20">
          <h2>Why Atomix?</h2>
          <div className="o-grid u-mt-8">
            <div className="o-grid__col o-grid__col--md-4">
              <div className="c-card">
                <div className="c-card__header">
                  <div className="c-card__icon">🎨</div>
                </div>
                <div className="c-card__body">
                  <h3 className="c-card__title">Design Tokens</h3>
                  <p className="c-card__text">
                    Consistent design decisions through centralized tokens for colors, spacing, typography, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="o-grid__col o-grid__col--md-4">
              <div className="c-card">
                <div className="c-card__header">
                  <div className="c-card__icon">⚛️</div>
                </div>
                <div className="c-card__body">
                  <h3 className="c-card__title">React Components</h3>
                  <p className="c-card__text">
                    Production-ready components built with TypeScript, accessibility, and performance in mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="o-grid__col o-grid__col--md-4">
              <div className="c-card">
                <div className="c-card__header">
                  <div className="c-card__icon">🛠️</div>
                </div>
                <div className="c-card__body">
                  <h3 className="c-card__title">Utility Classes</h3>
                  <p className="c-card__text">
                    Comprehensive utility system following ITCSS methodology for rapid UI development.
                  </p>
                </div>
              </div>
            </div>

            <div className="o-grid__col o-grid__col--md-4">
              <div className="c-card">
                <div className="c-card__header">
                  <div className="c-card__icon">🌙</div>
                </div>
                <div className="c-card__body">
                  <h3 className="c-card__title">Dark Mode</h3>
                  <p className="c-card__text">
                    Built-in dark mode support with seamless theme switching capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="o-grid__col o-grid__col--md-4">
              <div className="c-card">
                <div className="c-card__header">
                  <div className="c-card__icon">♿</div>
                </div>
                <div className="c-card__body">
                  <h3 className="c-card__title">Accessibility</h3>
                  <p className="c-card__text">
                    WCAG 2.1 AA compliant components with proper ARIA attributes and keyboard navigation.
                  </p>
                </div>
              </div>
            </div>

            <div className="o-grid__col o-grid__col--md-4">
              <div className="c-card">
                <div className="c-card__header">
                  <div className="c-card__icon">⚙️</div>
                </div>
                <div className="c-card__body">
                  <h3 className="c-card__title">Customizable</h3>
                  <p className="c-card__text">
                    Easy theming and customization through CSS custom properties and SCSS variables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="u-mt-20">
          <h2>Get Started in Minutes</h2>
          <div className="o-grid u-mt-8">
            <div className="o-grid__col o-grid__col--lg-6">
              <h3>Installation</h3>
              <p>Install Atomix via npm and start building immediately:</p>
              <pre className="u-bg-secondary-subtle u-p-4 u-rounded u-fs-sm">
                <code>{`npm install @atomix/react
# or
yarn add @atomix/react`}</code>
              </pre>
            </div>
            <div className="o-grid__col o-grid__col--lg-6">
              <h3>Usage</h3>
              <p>Import components and start building your UI:</p>
              <pre className="u-bg-secondary-subtle u-p-4 u-rounded u-fs-sm">
                <code>{`import { Button, Card } from '@atomix/react'

function App() {
  return (
    <Card title="Hello World">
      <Button variant="primary">
        Click me
      </Button>
    </Card>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="u-mt-20">
          <h2>Component Preview</h2>
          <p>Explore our comprehensive library of React components:</p>
          
          <div className="u-mt-8 u-p-8 u-bg-secondary-subtle u-rounded">
            <div className="u-d-flex u-d-u-flex-wrap u-gap-4 u-align-items-center u-justify-content-center">
              <button className="c-btn c-btn--primary">Primary</button>
              <button className="c-btn c-btn--secondary">Secondary</button>
              <button className="c-btn c-btn--outline-primary">Outline</button>
              <span className="c-badge c-badge--success">Success</span>
              <span className="c-badge c-badge--warning">Warning</span>
              <span className="c-badge c-badge--error">Error</span>
            </div>
          </div>

          <div className="u-d-flex u-gap-4 u-mt-4 u-justify-content-center">
            <Link href="/components/button" className="c-btn c-btn--outline-primary">
              View All Components
            </Link>
          </div>
        </section>

        {/* Design System Benefits */}
        <section className="u-mt-20">
          <h2>Built for Scale</h2>
          <div className="o-grid u-mt-8">
            <div className="o-grid__col o-grid__col--md-6">
              <h3>🎨 Design Consistency</h3>
              <p>
                Maintain visual consistency across your entire product with our 
                comprehensive design token system. Colors, spacing, typography, 
                and shadows are all systematically defined and easily customizable.
              </p>
            </div>
            <div className="o-grid__col o-grid__col--md-6">
              <h3>⚡ Developer Experience</h3>
              <p>
                Built with TypeScript for excellent IntelliSense support. 
                Comprehensive documentation, live examples, and clear API 
                references help you build faster.
              </p>
            </div>
            <div className="o-grid__col o-grid__col--md-6">
              <h3>♿ Accessibility First</h3>
              <p>
                Every component is built with accessibility in mind. Proper 
                ARIA attributes, keyboard navigation, focus management, and 
                screen reader support come out of the box.
              </p>
            </div>
            <div className="o-grid__col o-grid__col--md-6">
              <h3>🔧 Easy Integration</h3>
              <p>
                Drop into any React project with minimal setup. Works with 
                Next.js, Create React App, Vite, and any other React environment.
              </p>
            </div>
          </div>
        </section>

        {/* Community and Support */}
        <section className="u-mt-20 u-mb-20">
          <h2>Community & Support</h2>
          <p>Get help and connect with the Atomix community:</p>
          
          <div className="u-d-flex u-d-u-flex-wrap u-gap-4 u-mt-8">
            <a
              href="https://github.com/atomixdesign/atomix/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="c-btn c-btn--outline-primary"
            >
              <span className="c-btn__icon">💬</span>
              Discussions
            </a>
            <a
              href="https://github.com/atomixdesign/atomix/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="c-btn c-btn--outline-primary"
            >
              <span className="c-btn__icon">🐛</span>
              Report Issues
            </a>
            <a
              href="https://twitter.com/atomixdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="c-btn c-btn--outline-primary"
            >
              <span className="c-btn__icon">🐦</span>
              Follow Updates
            </a>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}