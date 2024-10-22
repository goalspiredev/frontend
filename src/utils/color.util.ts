export function TranslateColor(color: string): string {
	return colors.find((c) => c.name === color)?.value || '#000000';
}

export class Color {
	constructor(public name: string, public value: string) {
		this.name = name;
		this.value = value;
	}
}

const colors = [
	new Color('red', '#eb4f4f'),
	new Color('green', '#4caf50'),
	new Color('blue', '#2196f3'),
	new Color('yellow', '#ffeb3b'),
	new Color('orange', '#ff9800'),
	new Color('purple', '#9c27b0'),
	new Color('pink', '#e91e63'),
	new Color('brown', '#795548'),
	new Color('gray', '#454545'),
	new Color('black', '#000000'),
	new Color('white', '#fafafa'),
	new Color('transparent', 'transparent')
];
