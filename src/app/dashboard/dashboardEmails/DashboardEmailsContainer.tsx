import React from 'react';

import { Emails } from 'ui/organisms/emails/Emails';

// @TODO - replace with real data
const mockData = [
  {
    name: 'Mariusz Nowak',
    avatar: '',
    title: 'Overview of Recent Updates',
    children:
      'Consectetur adipisicing elit. Ad assumenda blanditiis consequatur culpa cum dolore, earum esse fugiat ipsa magni mollitia nobis officia omnis quam quia quisquam rerum saepe tempore tenetur vero voluptate voluptatem voluptatum? Beatae dicta dolorum modi nobis!',
    date: new Date(),
    open: false,
    id: 'id1234',
  },
  {
    name: 'Gerbert Oude Velthuis',
    avatar: '',
    title: 'Branding information',
    children:
      'Good morning Mariusz, Thank you for your feedback. You asked for information, you get information good morning Mariusz, Thank you for your feedback. You asked for information, you get information',
    date: new Date(),
    open: false,
    id: 'id1235',
  },
  {
    name: 'Rens van Gils, Marek Gajda',
    avatar: '',
    title: 'Agenda Bricr UI/UX workshop',
    children:
      'As Eric shared last week, our commitment to strengthening and improving Zoom is our number one as Eric shared last week, our commitment to strengthening and improving Zoom is our number one',
    date: new Date(),
    open: true,
    id: 'id1236',
  },
];

export const DashboardEmailsContainer = () => (
  <Emails data={mockData} count={50} onAddClick={() => {}} onMoreClick={() => {}} onEmailClick={() => {}} />
);
