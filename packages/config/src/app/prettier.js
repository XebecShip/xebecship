import baseConfig from "../shared/prettier.js";

/** @type {import("prettier").Config} */
export default {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwindcss"],
};