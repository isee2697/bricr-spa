import React from 'react';

import { act, fireEvent, render, wait } from 'tests';

import { ResetPassword } from './ResetPassword';

describe('ResetPasssword', () => {
  test('calls onSubmit prop with username', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));

    const { getByLabelText, getByRole } = render(<ResetPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('reset_password.new_password'), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.change(getByLabelText('reset_password.repeat_password'), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.click(getByRole('button'));
    });

    await wait(() => {
      expect(onSubmit).toBeCalledWith({
        password: 'foo',
        passwordRepeat: 'foo',
      });
    });
  });

  test('displays an error if reset password failed', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(false));
    const { getByText, getByLabelText, getByRole } = render(<ResetPassword onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('reset_password.new_password'), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.change(getByLabelText('reset_password.repeat_password'), {
        target: {
          value: 'foo',
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
          value: 'foo',
        },
      });
      fireEvent.change(getByLabelText('reset_password.repeat_password'), {
        target: {
          value: 'foo',
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
