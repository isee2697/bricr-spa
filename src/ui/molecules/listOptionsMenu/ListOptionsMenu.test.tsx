import React from 'react';

import { render, fireEvent } from 'tests';

import { ListOptionsMenu } from './ListOptionsMenu';

describe('ListOptionsMenu', () => {
  test('render correctly', () => {
    const onEditClick = jest.fn();
    const onDeleteClick = jest.fn();
    const { getByTestId } = render(
      <ListOptionsMenu id="test-list-options-menu" onEditClick={onEditClick} onDeleteClick={onDeleteClick} />,
    );

    const button = getByTestId('open-options-menu');

    fireEvent.click(button);

    const editButton = getByTestId('edit-option-button');
    const deleteButton = getByTestId('delete-option-button');
    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(editButton);

    expect(onEditClick).toBeCalled();

    fireEvent.click(deleteButton);

    expect(onDeleteClick).toBeCalled();
  });

  test('render edit and delete disabled when function not provided', () => {
    const { getByTestId } = render(<ListOptionsMenu id="test-list-options-menu" />);

    const button = getByTestId('open-options-menu');

    fireEvent.click(button);

    const editButton = getByTestId('edit-option-button');
    const deleteButton = getByTestId('delete-option-button');

    expect(editButton.classList).toContain('Mui-disabled');
    expect(deleteButton.classList).toContain('Mui-disabled');
  });
});
