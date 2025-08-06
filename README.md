# Atomix Design System

A modern, accessible design system and component library for building beautiful user interfaces. Built with React, TypeScript, and vanilla JavaScript.

[![npm version](https://badge.fury.io/js/@shohojdhara%2Fatomix.svg)](https://www.npmjs.com/package/@shohojdhara/atomix)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

## ✨ Features

- 🧩 **40+ Components** - Comprehensive UI component library
- ⚛️ **React + Vanilla JS** - Dual implementation for maximum flexibility
- 🎨 **Design Tokens** - Consistent colors, spacing, typography
- ♿ **Accessibility First** - WCAG 2.1 AA compliant
- 🎯 **TypeScript** - Full type safety and IntelliSense
- 📱 **Responsive** - Mobile-first design approach
- 🌙 **Dark Mode** - Built-in theme switching
- 🚀 **Performance** - Tree-shakeable, optimized bundles

## 🚀 Quick Start

### Installation

```bash
npm install @shohojdhara/atomix
# or
yarn add @shohojdhara/atomix
```

### React Usage

```jsx
import { Button, Card, Badge } from '@shohojdhara/atomix';
import '@shohojdhara/atomix/css';

function App() {
  return (
    <Card>
      <Card.Header>
        <h3>Welcome to Atomix</h3>
        <Badge variant="primary">New</Badge>
      </Card.Header>
      <Card.Body>
        <p>Build amazing interfaces with our design system.</p>
        <Button variant="primary">Get Started</Button>
      </Card.Body>
    </Card>
  );
}
```

### Vanilla JavaScript

```html
<link rel="stylesheet" href="https://unpkg.com/@shohojdhara/atomix/css">
<script src="https://unpkg.com/@shohojdhara/atomix/js"></script>

<div class="c-card">
  <div class="c-card__header">
    <h3>Welcome to Atomix</h3>
    <span class="c-badge c-badge--primary">New</span>
  </div>
  <div class="c-card__body">
    <p>Build amazing interfaces with our design system.</p>
    <button class="c-btn c-btn--primary">Get Started</button>
  </div>
</div>

<script>Atomix.init();</script>
```

## � Documentation

**[📖 Complete Documentation →](./docs/README.md)**

### Quick Links

- **[🏁 Getting Started](./docs/getting-started/README.md)** - Installation, setup, and first steps
- **[🧩 Components](./docs/components/README.md)** - Complete component library
- **[🎨 Design Tokens](./docs/design-tokens/README.md)** - Colors, spacing, typography
- **[🏗️ Styles](./docs/styles/README.md)** - CSS architecture and utilities
- **[📚 Guides](./docs/guides/README.md)** - Theming, responsive design, performance
- **[🎯 Examples](./docs/examples/README.md)** - Real-world usage patterns
- **[📖 API Reference](./docs/api/README.md)** - Complete API documentation

### Learning Paths

**👶 Beginner**: [Installation](./docs/getting-started/installation.md) → [Quick Start](./docs/getting-started/quick-start.md) → [Components](./docs/components/README.md)

**🧑‍💻 Intermediate**: [Design Tokens](./docs/design-tokens/README.md) → [Theming](./docs/guides/theming.md) → [Examples](./docs/examples/README.md)

**🚀 Advanced**: [Architecture](./docs/styles/architecture.md) → [Customization](./docs/styles/customization.md) → [Contributing](./docs/resources/contributing.md)

## 🧩 Components

**40+ Production-Ready Components**

| Category | Components |
|----------|------------|
| **Basic** | Button, Badge, Icon, Spinner |
| **Layout** | Card, Container, Grid, Hero |
| **Forms** | Input, Select, Checkbox, Radio, Textarea |
| **Navigation** | Navbar, Breadcrumb, Pagination, Tabs |
| **Data Display** | Avatar, DataTable, List, Progress |
| **Feedback** | Modal, Tooltip, Alert, Notification |
| **Interactive** | Accordion, Dropdown, DatePicker |

**[→ View All Components](./docs/components/README.md)**

## 🛠️ Development

```bash
# Clone and setup
git clone https://github.com/shohojdhara/atomix.git
cd atomix
npm install

# Development
npm run dev          # Start dev server
npm run storybook    # Component playground
npm test             # Run tests
npm run build        # Build for production
```

**[→ Full Development Guide](./docs/resources/contributing.md)**
 88+ |

## 👥 Contributors

Thanks to these amazing people who have contributed to Atomix:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shohojdhara"><img src="https://avatars.githubusercontent.com/u/shohojdhara?v=4?s=100" width="100px;" alt="Shohojdhara"/><br /><sub><b>Shohojdhara</b></sub></a><br /><a href="https://github.com/shohojdhara/atomix/commits?author=shohojdhara" title="Code">💻</a> <a href="#design-shohojdhara" title="Design">🎨</a> <a href="https://github.com/shohojdhara/atomix/commits?author=shohojdhara" title="Documentation">📖</a> <a href="#ideas-shohojdhara" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](./docs/resources/contributing.md) for details on:

- Code standards and guidelines
- Development workflow
- Testing requirements
- Pull request process

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

All contributors will be automatically added to this list using [All Contributors](https://allcontributors.org/).

## 📄 License

Apache License 2.0 - see [LICENSE](./LICENSE) for details.

## 🔗 Links

- **[📖 Documentation](./docs/README.md)** - Complete documentation
- **[🎨 Storybook](https://storybook.atomix.design)** - Interactive examples
- **[📦 NPM](https://www.npmjs.com/package/@shohojdhara/atomix)** - Package info
- **[🐛 Issues](https://github.com/shohojdhara/atomix/issues)** - Bug reports
- **[💬 Discussions](https://github.com/shohojdhara/atomix/discussions)** - Community

---

**Built with ❤️ by the Shohojdhara Atomix team**
