import React from 'react';
import arrayMutators from 'final-form-arrays';
import { Form } from 'react-final-form';

import { render } from 'tests';
import { SpaceType } from 'api/types';

import { Space } from './Space';

const space = {
  id: 'space1',
  spaceType: SpaceType.Kitchen,
  spaceName: undefined,
  extraRoomPossibility: false,
  configuration: undefined,
};

describe('Space form', () => {
  test('form rendered correctly', () => {
    const SPACE_INDEX = 0;

    const { getByTestId } = render(
      <Form onSubmit={() => {}} mutators={{ ...arrayMutators }} subscription={{}}>
        {() => (
          <Space
            space={space}
            isEditMode
            index={SPACE_INDEX}
            isExpanded={true}
            onExpand={() => {}}
            onDimensionChange={(field: string) => {}}
          />
        )}
      </Form>,
    );

    expect(getByTestId('space-title')).toBeInTheDocument();
    expect(getByTestId('inside-year_of_construction_placeholder')).toBeInTheDocument();
    expect(getByTestId('kitchen-notes')).toBeInTheDocument();
    expect(getByTestId('configuration.type')).toBeInTheDocument();
    expect(getByTestId('configuration.constructionType')).toBeInTheDocument();
    expect(getByTestId('configuration.services')).toBeInTheDocument();
    expect(getByTestId('configuration.appliances')).toBeInTheDocument();
    expect(getByTestId('configuration.hob')).toBeInTheDocument();
    expect(getByTestId('configuration.shape')).toBeInTheDocument();
    expect(getByTestId('space-width')).toBeInTheDocument();
    expect(getByTestId('space-length')).toBeInTheDocument();
    expect(getByTestId('space-height')).toBeInTheDocument();
    expect(getByTestId('space-surface')).toBeInTheDocument();
    expect(getByTestId('space-volume')).toBeInTheDocument();
    expect(getByTestId('configuration.serviceHeating')).toBeInTheDocument();
    expect(getByTestId('configuration.images')).toBeInTheDocument();
  });
});
