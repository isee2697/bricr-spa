import React from 'react';

import { Questionaire } from 'api/types';
import { render } from 'tests';

import { Security } from './Security';

describe('Security', () => {
  test('renders correctly', () => {
    const onSave = jest.fn(async () => Promise.resolve(undefined));
    const securityData: Questionaire = {
      id: '0001',
      meta: {
        createdAt: new Date().toISOString(),
      },
      permissions: [
        {
          name: 'Test security 1',
        },
      ],
    };

    const { getByText } = render(<Security title={'Security Test Title'} onSave={onSave} data={securityData} />);

    expect(getByText('Security Test Title')).toBeInTheDocument();
    securityData.permissions?.forEach(security => {
      expect(getByText(security.name)).toBeInTheDocument();
    });
  });
});
