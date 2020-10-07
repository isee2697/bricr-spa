import React from 'react';

import { act, fireEvent, render, wait } from 'tests';

import { ResetPassword } from './ResetPassword';

describe('ResetPasssword', () => {
  test('calls onSubmit prop with new password', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));

    const { getByLabelText, getByRole } = render(<ResetPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('reset_password.new_password'), {
        target: {
          value: 'fooBarBaz',
        },
      });
      fireEvent.change(getByLabelText('reset_password.repeat_password'), {
        target: {
          value: 'fooBarBaz',
        },
      });
      fireEvent.click(getByRole('button'));
    });

    await wait(() => {
      expect(onSubmit).toBeCalledWith({
        password: 'fooBarBaz',
        passwordRepeat: 'fooBarBaz',
      });
    });
  });

  test('displays an error if reset password failed', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(false));
    const { getByText, getByLabelText, getByRole } = render(<ResetPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('reset_password.new_password'), {
        target: {
          value: 'fooBarBaz',
        },
      });
      fireEvent.change(getByLabelText('reset_password.repeat_password'), {
        target: {
          value: 'fooBarBaz',
        },
      });
      fireEvent.click(getByRole('button'));
    });

    await wait(() => {
      expect(getByText('reset_password.wrong_data')).toBeTruthy();
    });
  });

  test('displays success message if reset password succeded', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));
    const { getByText, getByLabelText, getByRole } = render(<ResetPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('reset_password.new_password'), {
        target: {
          value: 'fooBarBaz',
        },
      });
      fireEvent.change(getByLabelText('reset_password.repeat_password'), {
        target: {
          value: 'fooBarBaz',
        },
      });
      fireEvent.submit(getByRole('button'));
    });

    await wait(() => {
      expect(getByText('reset_password.success')).toBeTruthy();
    });
  });

  test('displays validation errors', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));
    const { getAllByText, getByRole } = render(<ResetPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.submit(getByRole('button'));
    });

    await wait(() => {
      expect(getAllByText('validation.required').length).toBe(2);
    });
  });
});
