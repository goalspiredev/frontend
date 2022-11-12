import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components/*',
			$lib: './src/lib/*',
			$routes: './src/routes/*',
			$stores: './src/stores/*',
			$utils: './src/utils/*',
			$icons: './src/icons/*',
			$assets: './src/assets/*',
		},
	}
};

export default config;
