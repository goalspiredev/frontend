export type ColorName = 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple' | 'pink' | 'brown' | 'grey' | 'black' | 'white' | 'transparent';

export class Color {
  constructor(public name: ColorName, public value: string) {
    this.name = name
    this.value = value
  }
}