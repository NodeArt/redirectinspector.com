// import adapter from '@sveltejs/adapter-cloudflare';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: {
				plugins: [autoprefixer]
			},

			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	},

	prerender: false,

	ssr: false
};

export default config;
