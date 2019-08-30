import {light as lightTheme} from '@eva-design/eva';
export const theme = {
  ...lightTheme,
  'color-primary-100': '#faf7ff', // <- new primary color
  'color-primary-200': '#ece3ff',
  'color-primary-300': '#d5bfff',
  'color-primary-400': '#b18aff',
  'color-primary-500': '#a16eff',
  'color-primary-600': '#7b51db',
  'color-primary-700': '#5a37b8',
  'color-primary-800': '#3e2494',
  'color-primary-900': '#29157a',

  'text-basic-color': '$color-basic-800', // <- we setting color-basic-800 instead of color-basic-1000
  'text-disabled-color': '$color-basic-600', // <- and color-basic-600 as instead of color-basic-500
};
