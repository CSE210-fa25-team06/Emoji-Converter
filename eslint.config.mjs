import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: [
      "server/static/test_utils/**",
      "node_modules/**",
      "tests/**"
    ],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        fetch: "readonly",
      },
      sourceType: "module",
      ecmaVersion: "latest",
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
