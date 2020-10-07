import React from 'react';

import { render, fireEvent, act, wait } from 'tests';

import { AddNewFloorModal } from './AddNewFloorModal';

describe('AddNewFloorModal', () => {
  test('add new floor', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(undefined));

    const { getByText, getByLabelText, getByRole } = render(
      <AddNewFloorModal isOpened={true} onClose={jest.fn()} onSubmit={onSubmit} />,
    );

    // Floor type
    fireEvent.click(getByText('dictionaries.floor_type.Floor'));

    // Description
    act(() => {
      fireEvent.change(getByLabelText('pim_details.inside.add_floor.description'), {
        target: {
          value: 'foo',
        },
      });
    });

    // Submit
    act(() => {
      fireEvent.submit(getByRole('button', { name: 'pim_details.add_new_floor' }));
    });

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  test('shows error message on fail', async () => {
    const onSubmit = jest.fn(() => Promise.resolve({ error: true }));

    const { getByText, getByLabelText, getByRole } = render(
      <AddNewFloorModal isOpened={true} onClose={jest.fn()} onSubmit={onSubmit} />,
    );

    // Floor type
    fireEvent.click(getByText('dictionaries.floor_type.Floor'));

    // Description
    act(() => {
      fireEvent.change(getByLabelText('pim_details.inside.add_floor.description'), {
        target: {
          value: 'foo',
        },
      });
    });

    // Submit
    act(() => {
      fireEvent.submit(getByRole('button', { name: 'pim_details.add_new_floor' }));
    });

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled();
    });

    expect(getByText('add_pim.error.unknown')).toBeInTheDocument();
  });
});
