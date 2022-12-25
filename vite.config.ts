import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

/** @type {import('vite').UserConfig} */
const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: 'http://api.goalspire.net/v1',
				changeOrigin: true,
				secure: false,
				ws: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
};

export default config;
