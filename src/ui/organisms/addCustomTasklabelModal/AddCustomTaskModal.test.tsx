import React from 'react';

import { fireEvent, render } from 'tests';

import { AddCustomTaskModal } from './AddCustomTaskModal';

describe('AddCustomTaskModal', () => {
  test('render correctly', () => {
    const onClose = jest.fn();
    const onSubmit = jest.fn();

    const { queryByText, queryAllByText, container } = render(
      <AddCustomTaskModal
        isOpened={true}
        onClose={onClose}
        onSubmit={onSubmit}
        title={'custom_task_modal.title'}
        labelId={'custom_task_modal.label'}
      />,
    );

    expect(queryByText('custom_task_modal.title')).toBeInTheDocument();
    expect(queryAllByText('custom_task_modal.label').length).toBeGreaterThanOrEqual(1);

    fireEvent.click(queryByText('common.cancel')!);

    expect(onClose).toBeCalled();
  });
});
