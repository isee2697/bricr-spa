import React from 'react';

import { act, fireEvent, render, wait } from 'tests';

import { ForgotPassword } from './ForgotPassword';

describe('ForgotPassword', () => {
  test('calls onSubmit prop with username', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));

    const { getByLabelText, getByRole } = render(<ForgotPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('forgot_password.username'), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.click(getByRole('button'));
    });

    await wait(() => {
      expect(onSubmit).toBeCalledWith({
        username: 'foo',
      });
    });
  });

  test('displays an error if forgot password failed', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(false));
    const { getByText, getByLabelText, getByRole } = render(<ForgotPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('forgot_password.username'), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.submit(getByRole('button'));
    });

    await wait(() => {
      expect(getByText('forgot_password.wrong_username')).toBeTruthy();
    });
  });

  test('displays success message if forgot password succeded', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));
    const { getByText, getByLabelText, getByRole } = render(<ForgotPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('forgot_password.username'), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.submit(getByRole('button'));
    });

    await wait(() => {
      expect(getByText('forgot_password.success')).toBeTruthy();
    });
  });

  test('displays validation errors', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));
    const { getAllByText, getByRole } = render(<ForgotPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.submit(getByRole('button'));
    });

    await wait(() => {
      expect(getAllByText('validation.required').length).toBe(1);
    });
  });
});
