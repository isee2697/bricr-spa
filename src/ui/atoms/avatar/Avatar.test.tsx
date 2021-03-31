import React from 'react';

import { render } from 'tests';
import { palette } from 'theme/palette';
import { UserIcon } from '../icons';

import { Avatar } from './Avatar';

import { Box } from '..';

describe('Avatar', () => {
  test('without image', () => {
    const { container } = render(<Avatar />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('with image', () => {
    const { container } = render(<Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />);

    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute('src', 'https://material-ui.com/static/images/avatar/1.jpg');
  });

  test('with background color', () => {
    const { container } = render(
      <Avatar bgcolor={palette.orange.light}>
        <Box color={palette.orange.main}>
          <UserIcon color="inherit" />
        </Box>
      </Avatar>,
    );

    expect(container.querySelector('.MuiAvatar-root')).toHaveStyle(`background: ${palette.orange.light}`);
  });

  test('with size', () => {
    const { container } = render(<Avatar />);

    expect(container.querySelector('.MuiAvatar-root')).toHaveStyle(`width: 32px`);
  });
});
