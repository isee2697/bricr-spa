import React from 'react';
import { ApolloError } from '@apollo/client';
import { MemoryRouter as Router } from 'react-router-dom';

import '@babel/polyfill';
import { PIM_CADASTRE_1 } from 'api/mocks/pim-cadastre';
import { render } from 'tests';
import { PIM_DETAILS_1, PIM_SERVICES } from 'api/mocks/pim';

import { PimDetails } from './PimDetails';

describe('PimDetails', () => {
  test('renders correctly with error message', () => {
    const error = new ApolloError({ errorMessage: 'test' });

    const { getByText } = render(
      <Router initialEntries={['/pim/test/general']} initialIndex={0}>
        <PimDetails error={error} loading={false} data={undefined} />
      </Router>,
    );
    expect(getByText('common.error')).toBeInTheDocument();
  });
});
