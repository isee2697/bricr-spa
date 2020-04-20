import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    green: createPalette.SimplePaletteColorOptions;
    red: createPalette.SimplePaletteColorOptions;
    black: createPalette.SimplePaletteColorOptions;
    white: createPalette.SimplePaletteColorOptions;
    gray: createPalette.SimplePaletteColorOptions;
    orange: createPalette.SimplePaletteColorOptions;
    yellow: createPalette.SimplePaletteColorOptions;
    blue: createPalette.SimplePaletteColorOptions;
    purple: createPalette.SimplePaletteColorOptions;
  }
}
