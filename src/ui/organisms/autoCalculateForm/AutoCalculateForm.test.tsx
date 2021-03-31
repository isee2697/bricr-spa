import React from 'react';
import { Form } from 'react-final-form';

import { act, fireEvent, render, wait } from 'tests';
import { Box } from 'ui/atoms';

import { AutoCalculateForm } from './AutoCalculateForm';

describe('AutoCalculateForm', () => {
  test('renders correctly', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));

    const { queryByText, getByLabelText } = render(
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <AutoCalculateForm name="tax" label="example.tax.label" disabled={false}>
              {isCalculated => <Box>Children</Box>}
            </AutoCalculateForm>
          </form>
        )}
      </Form>,
    );

    expect(queryByText('Children')).toBeInTheDocument();
    expect(queryByText('example.tax.label')).toBeInTheDocument();
    expect(getByLabelText('example.tax.label')).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByLabelText('example.tax.label')!);
    });

    await wait(() => {
      expect(queryByText('project_details.general.address.auto_title'));
    });

    act(() => {
      fireEvent.click(queryByText('common.yes_i_want')!);
    });

    await wait(() => {
      expect(queryByText('project_details.general.address.auto_title')).not.toBeInTheDocument();
    });
  });
});
