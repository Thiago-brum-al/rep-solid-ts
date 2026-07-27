// eslint.config.js com Prettier
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ["src/**/*.ts", "src/**/*.tsx"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": ["error", {
                argsIgnorePattern: "^_",
            }],
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/await-thenable": "error",
        },
    },

    // Prettier SEMPRE por último (desliga regras de formatação)
    prettier,

    { ignores: ["node_modules/", "dist/", "coverage/"] },
);