import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});


const configs = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  
  ]

// const eslintConfig = [
//   ...compat.config({
//     extends: ["next/core-web-vitals"],
//     extends: [],
//     rules: {
//       "@next/next/no-img-element": "off",
//     },
//   }),
//   {
//     files: ["**/*.js", "**/*.jsx"], // Targeting JavaScript files
//     languageOptions: {
//       parser: {
//         // Incorrectly defining parser as an object with a parse function
//         parse: (code, options) => {
//           // Custom parsing logic (THIS IS THE PROBLEM)
//           return someCustomParsing(code, options);
//         },
//       },
//     },
//   },
  
// ];

export default configs;
