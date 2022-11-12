# Documentation about the icons directory

### Quick navigation
- [Flag Icon Component](#flag)

---
## <a name="flag"></a> Flag Icon Component
- ### Optional parameter: color (default is red) type string
- ### Optional parameter: size (default is 16px) type number

- ### Colors you can use are:
  ```ts
  export type ColorName = 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple' | 'pink' | 'brown' | 'grey' | 'black' | 'white' | 'transparent';
  ```
  (taken from the utils/types.ts where all the custom data types are stored)

- ### Use case:
  ```html
    <script>
      import Flag from "$icons/Flag.svelte";
    </script>

    <Flag color="red" size="{24}" />
  ```
---