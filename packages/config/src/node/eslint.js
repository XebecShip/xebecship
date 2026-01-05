import globals from "globals";
import baseConfig from "../shared/eslint.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {
    name: "xebec/node",
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];