import React from 'react';

import { render } from 'tests';

import { InfoSection } from './InfoSection';

describe('InfoSection', () => {
  test('renders correctly', () => {
    const { getByText, getByAltText } = render(<InfoSection emoji="🤔">Test InfoSection</InfoSection>);

    expect(getByText('Test InfoSection')).toBeInTheDocument();
    expect(getByAltText('🤔')).toBeInTheDocument();
  });

  test('without emoji', () => {
    const { container } = render(<InfoSection>Without Emoji</InfoSection>);

    expect(container.querySelectorAll('img').length).toEqual(0);
  });

  test('passed className', () => {
    const { container } = render(
      <InfoSection emoji="🤔" className={'passed-classname'}>
        Test InfoSection
      </InfoSection>,
    );

    expect(container.querySelector(`.passed-classname`)).toBeInTheDocument();
  });

  test('have emojiClassName', () => {
    const { getByAltText } = render(
      <InfoSection emoji="🤔" emojiClassName={'passed-classname'}>
        Test InfoSection
      </InfoSection>,
    );

    expect(getByAltText('🤔').parentElement).toHaveClass('passed-classname');
  });

  test('noPadding true', () => {
    const { container } = render(
      <InfoSection emoji="🤔" noPadding>
        Test InfoSection
      </InfoSection>,
    );

    expect(container.querySelector(`.noPadding`)).toBeInTheDocument();
  });
});
