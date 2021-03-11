import { SimplePaletteColorOptions } from '@material-ui/core';
import React from 'react';

import { render } from 'tests';
import { palette } from 'theme/palette';

import { Chip } from './Chip';

describe('Chip', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Chip label={'Chip content'} />);

    const element = getByText('Chip content');

    expect(element).toBeInTheDocument();
  });

  test('render secondary color correctly', () => {
    const { getByText } = render(
      <Chip
        variant="outlined"
        fontcolor={(palette.secondary as SimplePaletteColorOptions).main}
        bgcolor={(palette.secondary as SimplePaletteColorOptions).light}
        color="secondary"
        label={'Chip content'}
      />,
    );

    const element = getByText('Chip content');

    expect(element.parentElement).toHaveStyle(`color: ${(palette.secondary as SimplePaletteColorOptions)?.main}`);
  });

  test('render primary color correctly', () => {
    const { getByText } = render(
      <Chip
        variant="outlined"
        fontcolor={(palette.primary as SimplePaletteColorOptions).main}
        bgcolor={(palette.primary as SimplePaletteColorOptions).light}
        color="primary"
        label={'Chip content'}
      />,
    );

    const element = getByText('Chip content');

    expect(element.parentElement).toHaveStyle(`color: ${(palette.primary as SimplePaletteColorOptions)?.main}`);
  });
});
