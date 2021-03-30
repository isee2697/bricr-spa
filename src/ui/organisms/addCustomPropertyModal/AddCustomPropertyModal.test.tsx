import React from 'react';

import { act, fireEvent, render, wait } from 'tests';
import { palette } from 'theme/palette';

import { AddCustomPropertyModal } from './AddCustomPropertyModal';

describe('AddCustomPropertyModal', () => {
  test('render correctly', () => {
    const onClose = jest.fn();
    const onAdd = jest.fn();

    const { queryByText, queryAllByText, container } = render(
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

    const iconsList = container.querySelectorAll('svg');

    act(() => {
      fireEvent.change(container.querySelector('input')!, { target: { value: 'test value' } });
      fireEvent.click(iconsList[1]);
      fireEvent.click(queryByText('test_add_text')!);
    });

    wait(() => {
      expect(iconsList[1].parentElement?.parentElement).toHaveStyle(`border: 1px solid ${palette.blue.main}`);
      expect(onAdd).toBeCalledWith({
        icon: 'add',
      });
    });
  });
});
