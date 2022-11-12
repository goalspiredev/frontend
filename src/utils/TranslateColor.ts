import { Color } from './types'

export function TranslateColor(color: string): string {
  return colors.find((c) => c.name === color)?.value || '#000000';
}

const colors = [
  new Color('red', '#f44336'),
  new Color('green', '#4caf50'),
  new Color('blue', '#2196f3'),
  new Color('yellow', '#ffeb3b'),
  new Color('orange', '#ff9800'),
  new Color('purple', '#9c27b0'),
  new Color('pink', '#e91e63'),
  new Color('brown', '#795548'),
  new Color('grey', '#9e9e9e'),
  new Color('black', '#000000'),
  new Color('white', '#ffffff'),
  new Color('transparent', 'transparent')
];