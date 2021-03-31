import React from 'react';

import { fireEvent, render } from 'tests';

import { AgendaSection } from './AgendaSection';

describe('AgendaSection', () => {
  test('renders correctly', () => {
    const onMoreClick = jest.fn();
    const onAddClick = jest.fn();

    const laterToday = new Date();
    laterToday.setHours(laterToday.getHours() + 2);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const future = new Date();
    future.setDate(future.getDate() + 2);
    const agendaItems = [
      {
        isAllDay: false,
        startDate: future.toISOString(),
        endDate: future.toISOString(),
        title: 'My Future appointment',
      },
      {
        isAllDay: false,
        startDate: new Date().toISOString(),
        endDate: laterToday.toISOString(),
        title: 'My Today appointment',
      },
      {
        isAllDay: false,
        startDate: new Date().toISOString(),
        endDate: laterToday.toISOString(),
        title: 'My Second Today appointment',
      },
      {
        isAllDay: false,
        startDate: new Date().toISOString(),
        endDate: laterToday.toISOString(),
        title: 'My Thirth Today appointment',
      },
      {
        isAllDay: false,
        startDate: tomorrow.toISOString(),
        endDate: tomorrow.toISOString(),
        title: 'My Tomorrow appointment',
      },
      {
        isAllDay: false,
        startDate: tomorrow.toISOString(),
        endDate: tomorrow.toISOString(),
        title: 'My Tomorrow appointment 2',
      },
    ];

    const { queryByText, container } = render(
      <AgendaSection data={agendaItems} onMoreClick={onMoreClick} onAddClick={onAddClick} />,
    );

    expect(queryByText('My Future appointment')).toBeInTheDocument();
    expect(queryByText('My Today appointment')).toBeInTheDocument();
    expect(queryByText('My Second Today appointment')).toBeInTheDocument();
    expect(queryByText('My Thirth Today appointment')).toBeInTheDocument();
    expect(queryByText('My Tomorrow appointment')).toBeInTheDocument();
    expect(queryByText('My Tomorrow appointment 2')).toBeInTheDocument();

    fireEvent.click(queryByText('date.view_more')!);

    expect(onMoreClick).toBeCalled();

    fireEvent.click(container.querySelector('svg')!);

    expect(onAddClick).toBeCalled();
  });
});
