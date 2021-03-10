import React from 'react';

import { render } from 'tests';

import { UserAvatar } from './UserAvatar';

describe('UserAvatar', () => {
  it('render correctly', () => {
    const { getByText } = render(<UserAvatar name={'Christian van Gils'} />);

    expect(getByText('C')).toBeInTheDocument();
  });

  it('image', () => {
    const { container } = render(
      <UserAvatar name={'Christian van Gils'} avatar={'https://source.unsplash.com/featured/?building'} />,
    );

    const element = container.querySelector('.MuiAvatar-img');

    expect(element).toHaveAttribute('src', 'https://source.unsplash.com/featured/?building');
  });
});
