# @xebecship/config

The official engineering logistics toolkit for **XebecShip**. This package provides unified, high-performance linting, formatting, and TypeScript configurations to ensure code quality and consistency across all agency projects.

> [!WARNING]
> **Alpha Release:** This package is currently in active development. APIs and configurations are subject to breaking changes until version `2.0.0`. Use with caution in production environments.

---

## 📦 What's Included?

This is a **Logistics-Only** package. It manages the "rules of the road" while leaving the design and styling to the specific project needs.

- **TypeScript Presets:** Optimized strict configurations for Node.js (ESM) and Vite (Frontend).
- **ESLint 9 (Flat Config):** Modern, high-speed linting using the latest flat configuration standards.
- **Prettier:** Unified formatting rules with automatic Tailwind CSS class sorting (via plugin).
- **Engineering Standards:** Built-in enforcement of `import type`, clean consoles, and debugger prevention.

---

## 🚀 Getting Started

Install the toolkit as a development dependency:

```bash
pnpm add -D @xebecship/config
```

### **1. TypeScript Setup**

Extend the relevant preset in your tsconfig.json:

```json
{
  "extends": "@xebecship/config/<target>/tsconfig", // <target> = app | lib | node | sdk
  "compilerOptions": {
    "baseUrl": ".",
    // Project-specific overrides
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### **2. Linting Setup (ESLint 9)**

Create an eslint.config.js in your project root:

```javascript
export { default } from "@xebecship/config/<target>/eslint"; // <target> = app | lib | node | sdk
```

### **3. Formatting Setup (Prettier)**

Create a prettier.config.js in your project root:

```javascript
export { default } from "@xebecship/config/<target>/prettier"; // <target> = app | lib | node | sdk
```

### **4. Pnpm Configuration (Required)**

Create an .npmrc in your project root:

```ini
# Lift the CLI engines to the top level so they are executable
# Hoists all ESLint core, plugins, and parsers
public-hoist-pattern[]=*eslint*

# Hoists Prettier core and the Tailwind plugin
public-hoist-pattern[]=*prettier*
public-hoist-pattern[]=*prettier-plugin-tailwindcss*

# Hoists TypeScript for the IDE
public-hoist-pattern[]=*typescript*

# Ensures peer dependencies (required by React plugins) are auto-installed
auto-install-peers=true
```

##

**⚖️ License**

Proprietary to **XebecShip**. All rights reserved.
