// @ts-check
import {defineConfig} from "astro/config";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always", // Use 'always' to bundle all CSS into a single file
	},
	vite: {
		build: {
			minify: true, // Enable minification for all assets
		},
	},
});
