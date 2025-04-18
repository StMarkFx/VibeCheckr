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
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ),
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React in scope
      "tailwindcss/no-custom-classname": "off", // Disable if custom classnames are used
    },
  },
];

export default eslintConfig;
