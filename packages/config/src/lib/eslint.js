import appConfig from "../app/eslint.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...appConfig,
  {
    name: "xebec/lib",
    rules: {
      // Future-proof: If you ever need to disable specific App rules
      // for libraries, you can do it here.
      // Example: "react-refresh/only-export-components": "off"
    },
  },
];