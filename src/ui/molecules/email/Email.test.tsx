import React from 'react';

import { render, fireEvent, act, wait } from 'tests';
import { palette } from 'theme/palette';

import { Email } from './Email';

describe('Email', () => {
  test('renders correctly', () => {
    const data = {
      name: 'Mariusz Nowak',
      avatar: '',
      title: 'Overview of Recent Updates',
      content:
        'Consectetur adipisicing elit. Ad assumenda blanditiis consequatur culpa cum dolore, earum esse fugiat ipsa magni mollitia nobis officia omnis quam quia quisquam rerum saepe tempore tenetur vero voluptate voluptatem voluptatum? Beatae dicta dolorum modi nobis!',
      date: new Date(),
      open: false,
      id: 'id1233',
    };

    const { getByText } = render(
      <Email
        name={data.name}
        avatar={data.avatar}
        title={data.title}
        date={data.date}
        open={data.open}
        onClick={() => {}}
        id={data.id}
      >
        {data.content}
      </Email>,
    );

    expect(getByText(data.name)).toBeInTheDocument();
    expect(getByText(data.title)).toBeInTheDocument();
    expect(getByText(data.date.toTimeString().substr(0, 5))).toBeInTheDocument();
    expect(getByText(data.name)).toHaveStyle(`color: ${palette.black.main}`);
  });

  test('open true', () => {
    const data = {
      name: 'Mariusz Nowak',
      avatar: '',
      title: 'Overview of Recent Updates',
      content:
        'Consectetur adipisicing elit. Ad assumenda blanditiis consequatur culpa cum dolore, earum esse fugiat ipsa magni mollitia nobis officia omnis quam quia quisquam rerum saepe tempore tenetur vero voluptate voluptatem voluptatum? Beatae dicta dolorum modi nobis!',
      date: new Date(),
      open: true,
      id: 'id1233',
    };

    const { getByText } = render(
      <Email
        name={data.name}
        avatar={data.avatar}
        title={data.title}
        date={data.date}
        open={data.open}
        onClick={() => {}}
        id={data.id}
      >
        {data.content}
      </Email>,
    );

    expect(getByText(data.name)).toHaveStyle(`color: ${palette.gray.main}`);
  });

  test('on click', () => {
    const data = {
      name: 'Mariusz Nowak',
      avatar: '',
      title: 'Overview of Recent Updates',
      content:
        'Consectetur adipisicing elit. Ad assumenda blanditiis consequatur culpa cum dolore, earum esse fugiat ipsa magni mollitia nobis officia omnis quam quia quisquam rerum saepe tempore tenetur vero voluptate voluptatem voluptatum? Beatae dicta dolorum modi nobis!',
      date: new Date(),
      open: true,
      id: 'id1233',
    };

    const onClick = jest.fn();

    const { getByText } = render(
      <Email
        name={data.name}
        avatar={data.avatar}
        title={data.title}
        date={data.date}
        open={data.open}
        onClick={onClick}
        id={data.id}
      >
        {data.content}
      </Email>,
    );

    act(() => {
      fireEvent.click(getByText(data.name));
    });

    wait(() => {
      expect(onClick).toBeCalled();
    });
  });
});
