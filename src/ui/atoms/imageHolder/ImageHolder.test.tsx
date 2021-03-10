import React from 'react';

import { render } from 'tests';
import { palette } from 'theme/palette';

import { ImageHolder } from './ImageHolder';

describe('ImageHolder', () => {
  it('render correctly', () => {
    const image = 'https://source.unsplash.com/featured/?building';

    const { container } = render(<ImageHolder src={image} />);

    expect(container.getElementsByClassName('MuiGrid-root').length).toEqual(1);
  });

  it('render with border', () => {
    const image = 'https://source.unsplash.com/featured/?building';

    const { container } = render(<ImageHolder src={image} withBorder />);

    const elements = container.getElementsByClassName('MuiGrid-root');

    expect(elements[0]).toHaveStyle(`border: 1px ${palette.gray.main} solid`);
  });

  it('render without uri', () => {
    const { container } = render(<ImageHolder src={''} withBorder />);

    const element = container.querySelector('.MuiGrid-root');

    expect(element).toHaveStyle(`background-image: url("undefined")`);
  });
});
