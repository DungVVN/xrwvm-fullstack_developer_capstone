export default [{
  files: ["server/frontend/src/**/*.js", "server/frontend/src/**/*.jsx"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
    globals: { alert: "readonly" }
  },
  rules: { "no-undef": "error", "no-dupe-args": "error", "no-dupe-keys": "error" }
}];
