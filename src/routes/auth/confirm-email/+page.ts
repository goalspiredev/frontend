import { useGoalspire } from '$goalspire/useGoalspire';

const { verifyUser } = useGoalspire;

/** @type {import('./$types').PageLoad} */
export async function load({ url }: any) {
	const code = url.searchParams.get('code');
	const email = url.searchParams.get('email');

	if (!code || !email) {
		return {
			success: false
		};
	}

	const verified = await verifyUser(code, email);

	if (!verified) {
		return {
			success: false
		};
	}

	return {
		success: true
	};
}
