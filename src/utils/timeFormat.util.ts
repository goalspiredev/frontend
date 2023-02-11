import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime' // import plugin

export function timeFormat(date: string) {
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
}
