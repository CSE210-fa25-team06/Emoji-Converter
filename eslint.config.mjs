import js from "@eslint/js";

export default [

  {
    ignores: [
      "emoji/**",
      "unit-tests/**",
      "node_modules/**",
      "**/__pycache__/**",
      "**/debug/**"
    ],
  },
  js.configs.recommended,
  {
    files: ["server/**/*.js", "server/**/*.mjs", "server/**/*.cjs"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        fetch: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        requestAnimationFrame: "readonly"
      },
      sourceType: "module",
      ecmaVersion: "latest",
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
      "no-console": "off"
    },
  },
];
