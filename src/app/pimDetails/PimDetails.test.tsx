import React from 'react';
import { ApolloError } from '@apollo/client';

import { render } from 'tests';
import { PIM_1 } from 'api/mocks/pim';

import { PimDetails } from './PimDetails';

describe('PimDetails', () => {
  test('renders correctly with error message', () => {
    const error = new ApolloError({ errorMessage: 'test' });

    const { getByText } = render(<PimDetails error={error} loading={false} data={undefined} />);
    expect(getByText('common.error')).toBeInTheDocument();
  });

  test('renders correctly with data', () => {
    const { getAllByText } = render(
      <PimDetails
        error={undefined}
        loading={false}
        data={{
          getPim: PIM_1,
        }}
      />,
    );
    expect(getAllByText('Isenburgstraat 36 4813 NC Breda NL').length).toEqual(2);
  });
});
