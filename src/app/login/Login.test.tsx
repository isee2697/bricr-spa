import React from 'react';

import { act, fireEvent, render, wait } from 'tests';

import { Login } from './Login';

describe('Login', () => {
  test('calls onSubmit prop with username and password', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));

    const { getByLabelText, getByRole } = render(<Login onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText(/Username/), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.change(getByLabelText(/Password/), {
        target: {
          value: 'bar',
        },
      });
      fireEvent.click(getByRole('button'));
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
    const { getByText, getByLabelText, getByRole } = render(<Login onSubmit={onSubmit} />);

    act(() => {
      fireEvent.change(getByLabelText(/Username/), {
        target: {
          value: 'foo',
        },
      });
      fireEvent.change(getByLabelText(/Password/), {
        target: {
          value: 'bar',
        },
      });
      fireEvent.submit(getByRole('button'));
    });

    await wait(() => {
      expect(getByText('Invalid username and/or password')).toBeTruthy();
    });
  });

  test('displays validation errors', async () => {
    const onSubmit = jest.fn(() => Promise.resolve(true));
    const { getAllByText, getByRole } = render(<Login onSubmit={onSubmit} />);

    act(() => {
      fireEvent.submit(getByRole('button'));
    });

    await wait(() => {
      expect(getAllByText('This field is required').length).toBe(2);
    });
  });
});
