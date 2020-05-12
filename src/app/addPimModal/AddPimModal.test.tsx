import React from 'react';

import { render, fireEvent, act, wait } from 'tests';

import { AddPimModal } from './AddPimModal';

describe('AddPimModal', () => {
  test('add pim wizard', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(undefined));
    const onClose = jest.fn();

    const { getByText, getByLabelText, getByRole } = render(
      <AddPimModal onSubmit={onSubmit} onClose={onClose} isOpened={true} />,
    );

    // Property type
    fireEvent.click(getByText('property_categories.property'));
    fireEvent.click(getByText('property_types.House'));
    fireEvent.click(getByText('common.next'));

    // Addess
    act(() => {
      fireEvent.change(getByLabelText('add_pim.address.street'), {
        target: {
          value: 'foo',
        },
      });

      fireEvent.change(getByLabelText('add_pim.address.city'), {
        target: {
          value: 'foo',
        },
      });

      fireEvent.change(getByLabelText('add_pim.address.house_number'), {
        target: {
          value: 'foo',
        },
      });

      fireEvent.change(getByLabelText('add_pim.address.postal_code'), {
        target: {
          value: 'foo',
        },
      });
    });

    // Add pim submit
    act(() => {
      fireEvent.submit(getByRole('button', { name: 'pim.add' }));
    });

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  test('show conflict page when pim with that address exists', async () => {
    const onSubmit = jest.fn(() =>
      Promise.resolve({
        error: 'conflict',
        conflictCount: 3,
      } as const),
    );

    const onClose = jest.fn();

    const { getByText, getByLabelText, getByRole } = render(
      <AddPimModal onSubmit={onSubmit} onClose={onClose} isOpened={true} />,
    );

    // Property type
    fireEvent.click(getByText('property_categories.property'));
    fireEvent.click(getByText('property_types.House'));
    fireEvent.click(getByText('common.next'));

    // Addess
    act(() => {
      fireEvent.change(getByLabelText('add_pim.address.street'), {
        target: {
          value: 'foo',
        },
      });

      fireEvent.change(getByLabelText('add_pim.address.city'), {
        target: {
          value: 'foo',
        },
      });

      fireEvent.change(getByLabelText('add_pim.address.house_number'), {
        target: {
          value: 'foo',
        },
      });

      fireEvent.change(getByLabelText('add_pim.address.postal_code'), {
        target: {
          value: 'foo',
        },
      });
    });

    // Add pim submit
    act(() => {
      fireEvent.submit(getByRole('button', { name: 'pim.add' }));
    });

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled();
    });

    expect(getByText('add_pim.conflict.properties_exists')).toBeInTheDocument();
  });

  test('show error info when API returns unknown error', async () => {
    const onSubmit = jest.fn(() =>
      Promise.resolve({
        error: 'unknown',
      } as const),
    );

    const onClose = jest.fn();

    const { getByText, getByLabelText, getByRole } = render(
      <AddPimModal onSubmit={onSubmit} onClose={onClose} isOpened={true} />,
    );

    // Property type
    fireEvent.click(getByText('property_categories.property'));
    fireEvent.click(getByText('property_types.House'));
    fireEvent.click(getByText('common.next'));

    // Addess
    act(() => {
      fireEvent.change(getByLabelText('add_pim.address.street'), {
        target: {
          value: 'foo',
        },
      });

      fireEvent.change(getByLabelText('add_pim.address.city'), {
        target: {
          value: 'foo',
        },
      });

      fireEvent.change(getByLabelText('add_pim.address.house_number'), {
        target: {
          value: 'foo',
        },
      });

      fireEvent.change(getByLabelText('add_pim.address.postal_code'), {
        target: {
          value: 'foo',
        },
      });
    });

    // Add pim submit
    act(() => {
      fireEvent.submit(getByRole('button', { name: 'pim.add' }));
    });

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled();
    });

    expect(getByText('add_pim.error.unknown')).toBeInTheDocument();
  });
});
