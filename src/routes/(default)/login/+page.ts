import { useGoalspire } from '$goalspire/useGoalspire';
import { redirect } from '@sveltejs/kit';

const { isLoggedIn } = useGoalspire;

/** @type {import('./$types').PageLoad} */
export async function load() {
	if (await isLoggedIn()) {
		throw redirect(307, '/dashboard');
	}
}
