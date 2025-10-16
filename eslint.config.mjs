import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: [
      "node_modules/**",
      "emoji/Lib/**",
      "unit-tests/**",
      "server/static/test_utils/**",
      "**/__pycache__/**",
      "**/debug/**"
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
