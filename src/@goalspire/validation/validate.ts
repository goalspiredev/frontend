export function validateEmail(email: string): boolean {
	if (!email) {
		return false;
	}
	// classic email pattern: xxx@yyy.zzz
	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
	return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
	if (!password) {
		return false;
	}

	// 9 chars, 1 capital, 1 number
	const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{9,}$/;
	return passwordRegex.test(password);
}

export function validateUsername(username: string): boolean {
	const usernameRegex = /^[a-zA-Z0-9_]{4,}$/;
	return usernameRegex.test(username);
}
