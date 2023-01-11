export function timeFormat(date: string) {
	//TODO: When there is like 1 hour ago, it shows yesterday, we need to fix this, also years seem to be scuffed
	const dateObj = new Date(date);
	const currentDate = new Date();
	const diff = dateObj.getTime() - currentDate.getTime();

	// If the date is in the past, return the appropriate message
	if (diff < 0) {
		const diffDays = Math.ceil(-diff / (1000 * 3600 * 24));
		if (diffDays === 0) {
			return 'today';
		} else if (diffDays === 1) {
			return 'yesterday';
		} else {
			return `${diffDays} days ago`;
		}
	}

	// If the date is today, return 'today'
	if (
		dateObj.getFullYear() === currentDate.getFullYear() &&
		dateObj.getMonth() === currentDate.getMonth() &&
		dateObj.getDate() === currentDate.getDate()
	) {
		return 'today';
	}

	// If the date is tomorrow, return 'tomorrow'
	const tomorrow = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
	if (
		dateObj.getFullYear() === tomorrow.getFullYear() &&
		dateObj.getMonth() === tomorrow.getMonth() &&
		dateObj.getDate() === tomorrow.getDate()
	) {
		return 'tomorrow';
	}

	// Otherwise, return the number of days until the date
	const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
	if (diffDays < 7) {
		return `in ${diffDays} days`;
	} else if (diffDays < 30) {
		return `in ${Math.ceil(diffDays / 7)} weeks`;
	} else if (diffDays < 365) {
		return `in ${Math.ceil(diffDays / 30)} months`;
	} else {
		return `in ${Math.ceil(diffDays / 365)} years`;
	}
}
