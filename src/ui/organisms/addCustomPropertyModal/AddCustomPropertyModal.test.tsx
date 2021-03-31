import React from 'react';

import { fireEvent, render } from 'tests';

import { AddCustomPropertyModal } from './AddCustomPropertyModal';

describe('AddCustomPropertyModal', () => {
  test('render correctly', () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();

    const { queryByText, queryAllByText } = render(
      <AddCustomPropertyModal
        onClose={onClose}
        isOpened
        labelId="test_label"
        placeholderId="test_placeholder"
        title="test_title"
        addText="test_add_text"
        onSubmit={onAdd}
      />,
    );

    expect(queryAllByText('test_label').length).toBeGreaterThanOrEqual(1);
    expect(queryByText('test_title')).toBeInTheDocument();
    expect(queryByText('test_add_text')).toBeInTheDocument();

    fireEvent.click(queryByText('common.cancel')!);
    expect(onClose).toBeCalled();
  });
});
