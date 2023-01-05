export function timeFormat(date: string) {
    const dateObj = new Date(date);
    const diff = dateObj.getTime() - new Date().getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays < 7) {
        return `in ${diffDays} days`;
    }
    if (diffDays < 30) {
        return `in ${Math.ceil(diffDays / 7)} weeks`;
    }
    if (diffDays < 365) {
        return `in ${Math.ceil(diffDays / 30)} months`;
    }
    return `in ${Math.ceil(diffDays / 365)} years`;
}