import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: '@import "src/assets/scss/_breakpoints.scss";'
			}
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/lib/components/*',
			$lib: './src/lib/*',
			$routes: './src/routes/*',
			$store: './src/store/*',
			$utils: './src/utils/*',
			$icons: './src/assets/icons/*',
			$scss: './src/assets/scss/*',
			$assets: './src/assets/*'
		}
	}
};

export default config;
