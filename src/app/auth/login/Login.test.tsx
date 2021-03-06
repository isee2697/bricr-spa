import React from 'react';

import { act, fireEvent, render, wait } from 'tests';

import { Login } from './Login';

describe('Login', () => {
  test('calls onSubmit prop with username and password', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));

    const { getByLabelText, getByPlaceholderText, getByRole } = render(<Login onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('login.username'), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.change(getByPlaceholderText('login.password_placeholder'), {
        target: {
          value: 'bar',
        },
      });
      fireEvent.click(getByRole('loginButton'));
    });

    await wait(() => {
      expect(onSubmit).toBeCalledWith({
        username: 'foo',
        password: 'bar',
      });
    });
  });

  test('displays an error if login failed', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(false));
    const { getByText, getByPlaceholderText, getByLabelText, getByRole } = render(<Login onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText('login.username'), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.change(getByPlaceholderText('login.password_placeholder'), {
        target: {
          value: 'bar',
        },
      });
      fireEvent.submit(getByRole('loginButton'));
    });

    await wait(() => {
      expect(getByText('login.wrong_credentials')).toBeTruthy();
    });
  });

  test('displays validation errors', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));
    const { getAllByText, getByRole } = render(<Login onSubmit={onSubmit} />);

    act(() => {
      fireEvent.submit(getByRole('loginButton'));
    });

    await wait(() => {
      expect(getAllByText('validation.required').length).toBe(2);
    });
  });
});
