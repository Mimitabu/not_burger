import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{ files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			"no-unused-vars": "warn",
			"@typescript-eslint/no-unused-vars": "warn",
			"no-undef": "warn",
			"react/react-in-jsx-scope": "off",
			"react/no-deprecated": "warn",
			"@typescript-eslint/ban-ts-comment": "off",
			"object-curly-spacing": ["error", "always"],
		},
	},
]);
