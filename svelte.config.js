import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@import "src/assets/style/_breakpoints.scss";'
			}
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$goalspire: './src/@goalspire/*',
			$components: './src/lib/components/*',
			$lib: './src/lib/*',
			$routes: './src/routes/*',
			$store: './src/store/*',
			$utils: './src/utils/*',
			$icons: './src/assets/icons/*',
			$style: './src/assets/style/*',
			$assets: './src/assets/*',
			$stores: './src/stores/*'
		}
	}
};

export default config;
