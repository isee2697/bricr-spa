import React from 'react';

import { render, fireEvent, act, wait } from 'tests';
import { ModalContext } from 'context/modal/modalContext/ModalContext';

import { AddPimModal } from './AddPimModal';

describe('AddPimModal', () => {
  const modalsState = [{ id: 'add-new-pim', isOpen: true }];
  const setModalsState = jest.fn();

  test('add pim wizard', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(undefined));

    const { getByText, getByLabelText, getByRole } = render(
      <ModalContext.Provider value={{ modalsState, setModalsState }}>
        <AddPimModal onSubmit={onSubmit} />,
      </ModalContext.Provider>,
    );

    // Property type
    fireEvent.click(getByText('property_categories.property'));
    fireEvent.click(getByText('property_types.House'));
    fireEvent.click(getByText('common.next'));

    // Address
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

    const { getByText, getByLabelText, getByRole } = render(
      <ModalContext.Provider value={{ modalsState, setModalsState }}>
        <AddPimModal onSubmit={onSubmit} />
      </ModalContext.Provider>,
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

    const { getByText, getByLabelText, getByRole } = render(
      <ModalContext.Provider value={{ modalsState, setModalsState }}>
        <AddPimModal onSubmit={onSubmit} />
      </ModalContext.Provider>,
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
