import React from 'react';

import { AppLocale } from 'context/locale/AppLocale.enum';
import { render } from 'tests';
import { Scheduler } from 'ui/organisms';

import { DateView } from './Calandar.types';
import { Calendar } from './Calendar';

describe('Calendar', () => {
  test('render correctly', () => {
    const currentDate = new Date();

    const { getByText } = render(<Calendar view={DateView.Day} currentDate={currentDate} data={[]} />);

    expect(getByText('All Day')).toBeInTheDocument();
  });

  test('render week view', () => {
    const currentDate = new Date();

    const { getByText } = render(<Calendar view={DateView.Week} currentDate={currentDate} data={[]} />);

    expect(getByText('All Day')).toBeInTheDocument();
    expect(getByText('Mon')).toBeInTheDocument();
    expect(getByText('Tue')).toBeInTheDocument();
    expect(getByText('Wed')).toBeInTheDocument();
    expect(getByText('Thu')).toBeInTheDocument();
    expect(getByText('Thu')).toBeInTheDocument();
    expect(getByText('Fri')).toBeInTheDocument();
    expect(getByText('Sat')).toBeInTheDocument();
    expect(getByText('Sun')).toBeInTheDocument();
  });

  test('render month view', () => {
    const currentDate = new Date();

    const { queryByText, getByText } = render(<Calendar view={DateView.Month} currentDate={currentDate} data={[]} />);

    expect(queryByText('All Day')).not.toBeInTheDocument();
    expect(getByText('Mon')).toBeInTheDocument();
    expect(getByText('Tue')).toBeInTheDocument();
    expect(getByText('Wed')).toBeInTheDocument();
    expect(getByText('Thu')).toBeInTheDocument();
    expect(getByText('Thu')).toBeInTheDocument();
    expect(getByText('Fri')).toBeInTheDocument();
    expect(getByText('Sat')).toBeInTheDocument();
    expect(getByText('Sun')).toBeInTheDocument();
  });
});
