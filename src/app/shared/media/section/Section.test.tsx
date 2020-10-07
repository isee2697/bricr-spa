import React from 'react';

import { render } from 'tests';

import { Section } from './Section';

describe('Section', () => {
  test('renders empty component', () => {
    const { getByText } = render(
      <Section
        count={0}
        onAdd={() => {}}
        emptyLineFirst="empty line 1"
        emptyLineSecond="empty line 2"
        icon="💼"
        title="title"
      />,
    );

    const title = getByText('title');
    const emptyLine1 = getByText('empty line 1');
    const emptyLine2 = getByText('empty line 2');

    expect(title).toBeInTheDocument();
    expect(emptyLine1).toBeInTheDocument();
    expect(emptyLine2).toBeInTheDocument();
  });

  test('renders child component', () => {
    const { getByText, queryByText } = render(
      <Section
        count={1}
        onAdd={() => {}}
        emptyLineFirst="empty line 1"
        emptyLineSecond="empty line 2"
        icon="💼"
        title="title"
      >
        {() => <div>child component</div>}
      </Section>,
    );

    const title = getByText('title');
    const emptyLine1 = queryByText('empty line 1');
    const emptyLine2 = queryByText('empty line 2');
    const child = getByText('child component');

    expect(title).toBeInTheDocument();
    expect(emptyLine1).not.toBeInTheDocument();
    expect(emptyLine2).not.toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });

  test('renders empty component if count is 0', () => {
    const { getByText, queryByText } = render(
      <Section
        count={0}
        onAdd={() => {}}
        emptyLineFirst="empty line 1"
        emptyLineSecond="empty line 2"
        icon="💼"
        title="title"
      >
        {() => <div>child component</div>}
      </Section>,
    );

    const title = getByText('title');
    const emptyLine1 = getByText('empty line 1');
    const emptyLine2 = getByText('empty line 2');
    const child = queryByText('child component');

    expect(title).toBeInTheDocument();
    expect(emptyLine1).toBeInTheDocument();
    expect(emptyLine2).toBeInTheDocument();
    expect(child).not.toBeInTheDocument();
  });
});
