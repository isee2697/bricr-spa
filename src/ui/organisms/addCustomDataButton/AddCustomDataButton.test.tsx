import React from 'react';

import { fireEvent, render } from 'tests';

import { AddCustomDataButton } from './AddCustomDataButton';

describe('AddCustomDataButton', () => {
  test('renders correctly', () => {
    const onAdd = jest.fn();

    const { container, queryByText, getByLabelText } = render(
      <AddCustomDataButton
        type={'test'}
        onAdd={onAdd}
        title={'Add test property modal title'}
        labelId={'test-name-label'}
      />,
    );

    const addCustomPropertyButton = container.querySelector('svg')?.parentElement?.parentElement?.parentElement;

    expect(queryByText('Add test property modal title')).toBeNull();
    fireEvent.click(addCustomPropertyButton!);
    expect(queryByText('Add test property modal title')).toBeInTheDocument();

    const inputElement = getByLabelText('test-name-label');

    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement!, { target: { value: 'TestValue' } });

    const submitButton = queryByText(`common.add_property_button.test`);

    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton?.parentElement?.parentElement!);

    expect(onAdd).toBeCalledWith({
      text: 'TestValue',
    });
  });
});
