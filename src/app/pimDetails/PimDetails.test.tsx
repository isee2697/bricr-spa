import React from 'react';
import { ApolloError } from '@apollo/client';
import { MemoryRouter as Router } from 'react-router-dom';
import '@babel/polyfill';
import { render } from 'tests';
import { EntityType } from '../shared/entityType';

import { PimDetails } from './PimDetails';

describe('PimDetails', () => {
  test('renders correctly with error message', () => {
    const error = new ApolloError({ errorMessage: 'test' });

    const { getByText } = render(
      <Router initialEntries={['/pim/test/general']} initialIndex={0}>
        <PimDetails
          error={error}
          loading={false}
          data={undefined}
          entityType={EntityType.Property}
          breadcrumbs={<></>}
          path={''}
        />
      </Router>,
    );
    expect(getByText('common.error')).toBeInTheDocument();
  });
});
