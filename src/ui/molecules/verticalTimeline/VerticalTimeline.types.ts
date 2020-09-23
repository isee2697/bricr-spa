import { ReactElement } from 'react';

export type VerticalTimelineItem = {
  title: string;
  icon: ReactElement;
  children: ReactElement;
};

export type VerticalTimelineProps = {
  items: VerticalTimelineItem[];
};
