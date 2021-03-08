import { DateTime } from 'luxon';
import React from 'react';

import { render } from 'tests';

import { LastUpdated } from './LastUpdated';

describe('LastUpdated', () => {
  it('renders correctly', () => {
    const { getByText, container } = render(<LastUpdated />);

    const element = getByText('common.never_updated');

    expect(element).toBeTruthy();

    const svgIcons = container.querySelector('.MuiSvgIcon-root');

    expect(svgIcons).toBeFalsy();
  });

  it('with date updated', () => {
    const dateUpdated = '2020-04-28T07:30:18.162';

    const { getByText } = render(<LastUpdated dateUpdated={dateUpdated} />);

    const element = getByText(DateTime.fromISO(dateUpdated).toFormat('dd-LL-yyyy, HH:mm'));

    expect(element).toBeTruthy();
  });

  it('with updated by', () => {
    const user = {
      id: '0001',
      firstName: 'Christian',
      lastName: 'Gils',
    };

    const { container } = render(<LastUpdated updatedBy={user} />);

    const elements = container.querySelectorAll('.MuiTypography-root');

    expect(elements[2].textContent).toContain(user.firstName);
  });

  it('with icon', () => {
    const { container } = render(<LastUpdated withIcon />);

    const svgIcons = container.querySelector('.MuiSvgIcon-root');

    expect(svgIcons).toBeTruthy();
  });
});
