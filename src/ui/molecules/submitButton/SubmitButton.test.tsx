import React from 'react';

import { fireEvent, render } from 'tests';

import { SubmitButton } from './SubmitButton';

describe('SubmitButton', () => {
  test('render correctly', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <SubmitButton spinnerColor="inherit" isLoading={false} variant="contained" color="primary" onClick={onClick}>
        Submit
      </SubmitButton>,
    );

    expect(getByText('Submit')).toBeInTheDocument();

    fireEvent.click(getByText('Submit'));

    expect(onClick).toBeCalled();
  });

  test('render loading', () => {
    const onClick = jest.fn();

    const { container } = render(
      <SubmitButton spinnerColor="inherit" isLoading variant="contained" color="primary" onClick={onClick}>
        Submit
      </SubmitButton>,
    );

    const loader = container.querySelector('.spinner');

    expect(loader).toBeInTheDocument();

    fireEvent.click(loader!);

    expect(onClick).not.toBeCalled();
  });

  test('render disabled', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <SubmitButton disabled spinnerColor="inherit" isLoading variant="contained" color="primary" onClick={onClick}>
        Submit
      </SubmitButton>,
    );

    fireEvent.click(getByText('Submit'));

    expect(onClick).not.toBeCalled();
  });
});
