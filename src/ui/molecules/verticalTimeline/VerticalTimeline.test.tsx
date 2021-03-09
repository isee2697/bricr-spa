import React from 'react';

import { render } from 'tests';
import { HomeIcon } from 'ui/atoms/icons';

import { VerticalTimeline } from './VerticalTimeline';
import { VerticalTimelineItem } from './VerticalTimeline.types';

const items: VerticalTimelineItem[] = [
  {
    title: 'Step 1',
    icon: <HomeIcon />,
    children: <>Step 1 children</>,
  },
  {
    title: 'Step 2',
    icon: <HomeIcon />,
    children: <>Step 2 children</>,
  },
];

describe('VerticalTimeline', () => {
  test('render correctly', () => {
    const { getByText } = render(<VerticalTimeline items={items} />);

    items.forEach(item => {
      expect(getByText(`${item.title} children`)).toBeInTheDocument();
    });
  });
});
