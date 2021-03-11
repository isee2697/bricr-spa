import React from 'react';

import { render } from 'tests';

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
});
