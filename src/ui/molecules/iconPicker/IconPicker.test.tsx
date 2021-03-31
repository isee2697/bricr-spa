import React from 'react';
import { Form } from 'react-final-form';
import { act } from 'react-test-renderer';

import { fireEvent, render, wait } from 'tests';
import { palette } from 'theme/palette';
import {
  AddIcon,
  BellIcon,
  BuildingIcon,
  DocIcon,
  EditIcon,
  FilesIcon,
  FilterIcon,
  GraphArrowIcon,
  HomeIcon,
  LinkIcon,
  MailIcon,
  PinIcon,
  SquareIcon,
  TasksIcon,
} from 'ui/atoms/icons';
import { SubmitButton } from '../submitButton/SubmitButton';

import { IconPicker } from './IconPicker';

describe('IconPicker', () => {
  test('render correctly', () => {
    const onSubmit = jest.fn();
    const icons = [
      {
        icon: <AddIcon color="inherit" />,
        name: 'add',
      },
      {
        icon: <BellIcon color="inherit" />,
        name: 'bell',
      },
      {
        icon: <BuildingIcon color="inherit" />,
        name: 'building',
      },
      {
        icon: <DocIcon color="inherit" />,
        name: 'doc',
      },
      {
        icon: <FilesIcon color="inherit" />,
        name: 'files',
      },
      {
        icon: <GraphArrowIcon color="inherit" />,
        name: 'graph-arrow',
      },
      {
        icon: <HomeIcon color="inherit" />,
        name: 'home',
      },
      {
        icon: <LinkIcon color="inherit" />,
        name: 'link',
      },
      {
        icon: <MailIcon color="inherit" />,
        name: 'mail',
      },
      {
        icon: <PinIcon color="inherit" />,
        name: 'pin',
      },
      {
        icon: <TasksIcon color="inherit" />,
        name: 'tasks',
      },
      {
        icon: <FilterIcon color="inherit" />,
        name: 'filter',
      },
      {
        icon: <EditIcon color="inherit" />,
        name: 'edit',
      },
      {
        icon: <SquareIcon color="inherit" />,
        name: 'square',
      },
    ];

    const { container, getByRole } = render(
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <IconPicker name="icon" iconList={icons} />
            <SubmitButton
              type="submit"
              startIcon={<AddIcon color="inherit" />}
              size="large"
              color="primary"
              variant="contained"
              role="submit"
            >
              Submit
            </SubmitButton>
          </form>
        )}
      </Form>,
    );

    const iconsList = container.querySelectorAll('svg');
    const submitButton = getByRole('submit');

    expect(iconsList.length).toEqual(icons.length + 1);

    act(() => {
      fireEvent.click(iconsList[0]);
      fireEvent.click(submitButton);
    });

    wait(() => {
      expect(iconsList[0].parentElement?.parentElement).toHaveStyle(`border: 1px solid ${palette.blue.main}`);
      expect(onSubmit).toBeCalledWith({
        icon: 'add',
      });
    });
  });
});
