# **@xebecship/ui**

A high-performance, tree-shakable component library built on top of **Shadcn UI** and **Base UI**, powered by **Tailwind CSS v4** and **React 19**.

> [!WARNING]
> **Alpha Release:** This package is currently in active development. Components, hooks and APIs are subject to breaking changes until version `1.0.0`. Use with caution in production environments.

## **Features**

- **Tree-shakable**: Import only what you use.
- **Tailwind v4**: Built with the latest CSS-first engine.
- **Custom Branded**: Pre-configured with Xebec brand identity and themes.
- **Accessible**: Built on Radix UI and Base UI primitives.
- **Type Safe**: First-class TypeScript support.

## **Installation**

```bash
npm install @xebecship/ui

pnpm add @xebecship/ui

yarn add @xebecship/ui
```

### **Peer Dependencies**

Ensure your project has the following peer dependencies installed:

```json
{
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

## **Setup**

### **1. Import Styles**

Import the library's CSS at the root of your application (e.g., main.tsx or \_app.tsx). This includes the Xebec brand theme and Tailwind variables.

TypeScript

import "@xebecship/ui/theme.css";

### **2. Configure Tailwind v4**

Since @xebecship/ui uses Tailwind CSS v4, ensure your tailwind.config or CSS entry point is set up to process the components. In v4, you can simply import the library's theme variables into your main CSS file:

```css
@import "tailwindcss";
// @import "tw-animate-css"; // If you're using tailwind animate
@import "@xebecship/ui/theme.css";
```

## **Usage**

You can import components directly from the package. Thanks to ESM and preserved modules, your bundler will automatically tree-shake unused components.

```jsx
import { Button, Card, CardHeader, CardTitle } from "@xebecship/ui";

export default function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Xebec Component</CardTitle>
      </CardHeader>
      <Button variant="default" onClick={() => console.log("Clicked!")}>
        Ship It
      </Button>
    </Card>
  );
}
```

## **Available Components**

This library exports a wide range of customized Shadcn components, including:

- **Inputs**: Input, Select, Checkbox, InputOTP
- **Layout**: Card, Resizable, Accordion, Tabs
- **Feedback**: Sonner (Toaster), Vaul (Drawers)
- **Data**: Recharts wrappers, Table, Calendar
- **Icons**: Pre-configured @tabler/icons-react integration

## **Theme Customization**

The library uses CSS variables for theming. You can override the Xebec brand colors by redefining these variables in your local CSS:

```css
:root {
 --primary: 210 100% 50%; /_ Your custom primary color _/
 --radius: 0.75rem;
}
```

## **License**

MIT © Xebec Ship
