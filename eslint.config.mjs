import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ['**/*.js', '**/*.jsx'], // Targeting JavaScript files
    languageOptions: {
      parser: { // Incorrectly defining parser as an object with a parse function
        parse: (code, options) => {
          // Custom parsing logic (THIS IS THE PROBLEM)
          return someCustomParsing(code, options);
        },
      },
    },
  },
  
];

export default eslintConfig;
