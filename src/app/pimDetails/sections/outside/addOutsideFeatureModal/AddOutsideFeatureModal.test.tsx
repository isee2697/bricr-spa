import React from 'react';
import { render, fireEvent, act, wait } from 'tests';

import { AddOutsideFeatureModal } from './AddOutsideFeatureModal';

describe('AddOutsideFeatureModal', () => {
  test('add new floor', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(undefined));

    const { getByText, getByRole } = render(
      <AddOutsideFeatureModal isOpened={true} onClose={jest.fn()} onSubmit={onSubmit} />,
    );

    // Outside feature type
    fireEvent.click(getByText('dictionaries.outside_type.Garden'));

    // Submit
    act(() => {
      fireEvent.submit(getByRole('button', { name: 'pim_details.outside.add_new_feature' }));
    });

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  test('shows error message on fail', async () => {
    const onSubmit = jest.fn(() => Promise.resolve({ error: true }));

    const { getByText, getByRole } = render(
      <AddOutsideFeatureModal isOpened={true} onClose={jest.fn()} onSubmit={onSubmit} />,
    );

    // Floor type
    fireEvent.click(getByText('dictionaries.outside_type.Garage'));

    // Submit
    act(() => {
      fireEvent.submit(getByRole('button', { name: 'pim_details.outside.add_new_feature' }));
    });

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled();
    });

    expect(getByText('add_pim.error.unknown')).toBeInTheDocument();
  });
});
