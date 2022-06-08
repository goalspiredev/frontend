import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],

	kit: {
		adapter: adapter(),

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			},
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@lib': path.resolve('./src/lib'),
					'@components': path.resolve('./src/lib/components'),
					'@data': path.resolve('./src/lib/data'),
					'@functions': path.resolve('./src/lib/functions')
				}
			}
		}
	}
};

export default config;
