import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import Axios from 'axios';

const logger: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	Axios.post('https://portfolio-api-9e7f.onrender.com/count/plus/goalspire');

	return response;
};

export const handle: Handle = sequence(logger);
