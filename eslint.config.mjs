import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier"
  ),
  {
    plugins: {
      "unused-imports": require("eslint-plugin-unused-imports"),
      "import": require("eslint-plugin-import"),
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "import/order": ["error", { "newlines-between": "always" }],
    },
  },
];

export default eslintConfig;

