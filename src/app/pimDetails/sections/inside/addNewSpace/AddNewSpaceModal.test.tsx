import React from 'react';

import { render, fireEvent, act, wait } from 'tests';

import { AddNewSpaceModal } from './AddNewSpaceModal';

describe('AddNewSpaceModal', () => {
  test('add new floor', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(undefined));

    const { getByText, getByLabelText, getByRole } = render(
      <AddNewSpaceModal isOpened={true} onClose={jest.fn()} onSubmit={onSubmit} />,
    );

    // Description
    act(() => {
      fireEvent.change(getByLabelText('pim_details.inside.add_floor.description'), {
        target: {
          value: 'foo',
        },
      });
    });

    // Space type
    fireEvent.click(getByText('pim_details.inside.space_type.kitchen'));

    // Submit
    act(() => {
      fireEvent.submit(getByRole('button', { name: 'pim_details.inside.add_space.label' }));
    });

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  test('shows error message on fail', async () => {
    const onSubmit = jest.fn(() => Promise.resolve({ error: true }));

    const { getByText, getByLabelText, getByRole } = render(
      <AddNewSpaceModal isOpened={true} onClose={jest.fn()} onSubmit={onSubmit} />,
    );

    // Description
    act(() => {
      fireEvent.change(getByLabelText('pim_details.inside.add_floor.description'), {
        target: {
          value: 'foo',
        },
      });
    });

    // Space type
    fireEvent.click(getByText('pim_details.inside.space_type.kitchen'));

    // Submit
    act(() => {
      fireEvent.submit(getByRole('button', { name: 'pim_details.inside.add_space.label' }));
    });

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled();
    });

    expect(getByText('add_pim.error.unknown')).toBeInTheDocument();
  });
});
