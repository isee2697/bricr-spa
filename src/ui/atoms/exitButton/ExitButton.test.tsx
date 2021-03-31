import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';

import { render, act, fireEvent, wait } from 'tests';

import { ExitButton } from './ExitButton';

describe('ExitButton', () => {
  it('render correctly', () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Route exact path="/">
          <ExitButton to="/other" />
        </Route>
        <Route exact path="/other">
          <div>Other content</div>
        </Route>
      </MemoryRouter>,
    );

    expect(getByLabelText('back')).toBeTruthy();

    act(() => {
      fireEvent.click(getByLabelText('back'));
    });

    wait(() => {
      expect(getByText('Other content')).toBeInTheDocument();
    });
  });
});
