import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/dom';

import { render, waitForElement } from 'tests';

import { PreviewIcon } from './PreviewIcon';

describe('PreviewIcon', () => {
  const fakeUri = 'http://test.picture.com/myImage.png';

  it('renders icon and is clickable', async () => {
    const clickFn = jest.fn();

    const { getByTestId } = render(<PreviewIcon onClick={clickFn} uri={fakeUri} />);

    expect(getByTestId('hover-view-icon')).toBeInTheDocument();

    await fireEvent.click(getByTestId('hover-view-icon'));
    expect(clickFn).toHaveBeenCalled();
  });
});
