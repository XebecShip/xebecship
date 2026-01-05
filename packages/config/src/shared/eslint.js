import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. Global Ignores
  {
    ignores: ["dist/**", ".next/**", "node_modules/**", "out/**", "coverage/**"],
  },

  // 2. Standard Recommended Configs
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. Parser Options (Universal)
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },

  // 4. Xebec Ship Engineering Standards
  {
    name: "xebec/engineering-standards",
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
    },
  },

  // 5. Prettier (Always last)
  prettierConfig,
];