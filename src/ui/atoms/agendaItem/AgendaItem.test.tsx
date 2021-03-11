import { DateTime } from 'luxon';
import React from 'react';

import { render } from 'tests';

import { AgendaItem } from './AgendaItem';

describe('AgendaItem', () => {
  test('with all data', () => {
    const startDate = new Date().toISOString();
    const endDate = new Date().toISOString();

    const { getByText, getAllByText } = render(
      <AgendaItem title={'Agenda Test'} startDate={startDate} endDate={endDate} />,
    );

    const startTime = DateTime.fromISO(startDate).toFormat('HH:mm');
    const endTime = DateTime.fromISO(endDate).toFormat('HH:mm');

    expect(getByText('Agenda Test')).toBeInTheDocument();
    expect(getAllByText(startTime).length).toBeGreaterThanOrEqual(1);
    expect(getAllByText(endTime).length).toBeGreaterThanOrEqual(1);
  });

  test('without endDate', () => {
    const startDate = new Date().toISOString();

    const { getByText, getAllByText } = render(<AgendaItem title={'Agenda Test'} startDate={startDate} />);

    const startTime = DateTime.fromISO(startDate).toFormat('HH:mm');

    expect(getByText('Agenda Test')).toBeInTheDocument();
    expect(getAllByText(startTime).length).toEqual(1);
  });

  test('with isAllDay', () => {
    const startDate = new Date().toISOString();

    const { getByText, queryByText } = render(<AgendaItem title={'Agenda Test'} isAllDay startDate={startDate} />);

    const startTime = DateTime.fromISO(startDate).toFormat('HH:mm');

    expect(getByText('Agenda Test')).toBeInTheDocument();
    expect(queryByText(startTime)).toBeNull();
    expect(getByText('date.all_day')).toBeInTheDocument();
  });
});
