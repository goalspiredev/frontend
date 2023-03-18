import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export function timeFormat(date: string) {
	dayjs.extend(relativeTime);
	let timeDataString = dayjs(date).fromNow();
	return `${timeDataString.includes('ago') ? 'ended ' : 'ends '}` + timeDataString;
}
