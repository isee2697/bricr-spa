import React from 'react';

import { fireEvent, render } from 'tests';

import { Security } from './Security';

describe('Security', () => {
  test('renders correctly', () => {
    const onSave = jest.fn(async () => Promise.resolve(undefined));
    const securityData = {
      documentRights: [
        {
          id: '0001',
          name: 'Match',
          permissions: {
            create: false,
            read: true,
            update: false,
            delete: true,
          },
        },
      ],
    };

    const { getByText } = render(<Security title={'Security Test Title'} onSave={onSave} data={securityData} />);

    expect(getByText('Security Test Title')).toBeInTheDocument();
    securityData.documentRights.forEach(right => {
      expect(getByText(right.name)).toBeInTheDocument();
    });
  });

  test('save on click checkbox', () => {
    const onSave = jest.fn(async () => Promise.resolve(undefined));
    const securityData = {
      documentRights: [
        {
          id: '0001',
          name: 'Match',
          permissions: {
            create: false,
            read: true,
            update: false,
            delete: true,
          },
        },
      ],
    };

    const { container } = render(<Security title={'Security Test Title'} onSave={onSave} data={securityData} />);

    const editSwitcher = container.querySelector('.MuiSwitch-root');

    expect(editSwitcher).toBeInTheDocument();

    fireEvent.click(editSwitcher!);

    const createElement = container.querySelector('label.MuiFormControlLabel-root');

    expect(createElement).toBeInTheDocument();

    fireEvent.click(createElement!);

    expect(onSave).toBeCalled();
  });

  test('save disabled when edit off', () => {
    const onSave = jest.fn(async () => Promise.resolve(undefined));
    const securityData = {
      documentRights: [
        {
          id: '0001',
          name: 'Match',
          permissions: {
            create: false,
            read: true,
            update: false,
            delete: true,
          },
        },
      ],
    };

    const { container } = render(<Security title={'Security Test Title'} onSave={onSave} data={securityData} />);

    const createElement = container.querySelector('label.MuiFormControlLabel-root');

    expect(createElement).toBeInTheDocument();

    fireEvent.click(createElement!);

    expect(onSave).not.toBeCalled();
  });
});
