import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
