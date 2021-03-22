import React from 'react';

import { fireEvent, render, act, wait } from 'tests';
import { palette } from 'theme/palette';
import { HomeIcon } from 'ui/atoms/icons';

import { AdvancedSearch } from './AdvancedSearch';
import { AdvancedSearchItem } from './AdvancedSearch.types';

describe('AdvancedSearch', () => {
  test('renders placeholder', () => {
    const searchItems: AdvancedSearchItem[] = [
      {
        label: 'search.first_item',
        value: 'firstItem',
      },
      {
        label: 'search.second_item',
        value: 'secondItem',
      },
    ];

    const { getByText } = render(
      <AdvancedSearch items={searchItems} placeholder={'test.search_placeholder'} align="left" onChange={() => {}} />,
    );

    expect(getByText('test.search_placeholder')).toBeInTheDocument();
  });

  test('renders selected item', () => {
    const searchItems: AdvancedSearchItem[] = [
      {
        label: 'search.first_item',
        value: 'firstItem',
      },
      {
        label: 'search.second_item',
        value: 'secondItem',
      },
    ];

    const { container } = render(
      <AdvancedSearch
        items={searchItems}
        placeholder={'test.search_placeholder'}
        align="left"
        onChange={() => {}}
        value={searchItems[0].value as string}
      />,
    );

    expect(container.textContent).toContain(searchItems[0].label);
  });

  test('renders selected item', () => {
    const searchItems: AdvancedSearchItem[] = [
      {
        label: 'search.first_item',
        value: 'firstItem',
      },
      {
        label: 'search.second_item',
        value: 'secondItem',
      },
    ];

    const { container } = render(
      <AdvancedSearch
        items={searchItems}
        placeholder={'test.search_placeholder'}
        align="left"
        onChange={() => {}}
        value={searchItems[0].value as string}
      />,
    );

    expect(container.textContent).toContain(searchItems[0].label);
  });

  test('renders all items correctly', () => {
    const searchItems: AdvancedSearchItem[] = [
      {
        label: 'search.first_item',
        value: 'firstItem',
      },
      {
        label: 'search.second_item',
        value: 'secondItem',
      },
    ];

    const { getByText } = render(
      <AdvancedSearch items={searchItems} placeholder={'test.search_placeholder'} align="left" onChange={() => {}} />,
    );

    const placeholder = getByText('test.search_placeholder');

    expect(placeholder).toBeInTheDocument();

    act(() => {
      fireEvent.click(placeholder);
    });

    wait(() => {
      expect(getByText('search.first_item')).toBeInTheDocument();
      expect(getByText('search.second_item')).toBeInTheDocument();
    });
  });

  test('renders icons correctly', () => {
    const searchItems: AdvancedSearchItem[] = [
      {
        label: 'search.first_item',
        value: 'firstItem',
        icon: <HomeIcon />,
      },
      {
        label: 'search.second_item',
        value: 'secondItem',
        icon: <HomeIcon />,
      },
    ];

    const { getByText, container } = render(
      <AdvancedSearch items={searchItems} placeholder={'test.search_placeholder'} align="left" onChange={() => {}} />,
    );

    const placeholder = getByText('test.search_placeholder');

    expect(placeholder).toBeInTheDocument();

    act(() => {
      fireEvent.click(placeholder);
    });

    wait(() => {
      expect(getByText('search.first_item')).toBeInTheDocument();
      expect(getByText('search.second_item')).toBeInTheDocument();
      const icon = container.querySelector('svg');
      expect(icon).toBeInTheDocument();

      const input = container.querySelector('input');

      expect(input).toBeInTheDocument();
    });

    act(() => {
      const input = container.querySelector('input');
      fireEvent.change(input!, { target: { value: 'search' } });
    });

    wait(() => {
      expect(getByText('search.first_item')).toBeInTheDocument();
      expect(getByText('search.first_item')).toHaveStyle(`color: ${palette.red.main}`);
      expect(getByText('search.second_item')).toHaveStyle(`color: ${palette.red.main}`);
    });
  });
});
