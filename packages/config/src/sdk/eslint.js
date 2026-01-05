import globals from "globals";
import baseConfig from "../shared/eslint.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {
    name: "xebec/sdk",
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["src/*"],
              message:
                "Please use relative imports in SDKs to ensure correct bundling.",
            },
          ],
        },
      ],
    },
  },
];