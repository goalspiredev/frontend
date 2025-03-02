import { useGoalspire } from '$goalspire/useGoalspire';

const { verifyUser } = useGoalspire;

/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function load({ url }: any) {
	const code = url.searchParams.get('code');
	const email = url.searchParams.get('email');

	if (!code || !email) {
		return {
			success: false
		};
	}

	const verified = await verifyUser(code, email);

	console.log(verified);

	if (!verified) {
		return {
			success: false
		};
	}

	return {
		success: true
	};
}
