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

    const { getByText, getByPlaceholderText } = render(
      <Form onSubmit={() => {}} mutators={{ ...arrayMutators }} subscription={{}}>
        {() => <Space space={space} isEditMode index={SPACE_INDEX} isExpanded={true} onExpand={() => {}} />}
      </Form>,
    );

    expect(getByText(`dictionaries.space_type.Kitchen ${SPACE_INDEX + 1}`)).toBeInTheDocument();
    expect(getByPlaceholderText('pim_details.inside.year_of_construction_placeholder')).toBeInTheDocument();
    expect(getByPlaceholderText('pim_details.inside.space_notes_placeholder')).toBeInTheDocument();
    expect(getByText('pim_details.inside.type_of_kitchen')).toBeInTheDocument();
    expect(getByText('pim_details.inside.type_of_construction')).toBeInTheDocument();
    expect(getByText('pim_details.inside.services')).toBeInTheDocument();
    expect(getByText('pim_details.inside.built_in_appliances')).toBeInTheDocument();
    expect(getByText('pim_details.inside.hob')).toBeInTheDocument();
    expect(getByText('pim_details.inside.shape')).toBeInTheDocument();
    expect(getByText('pim_details.inside.measurements')).toBeInTheDocument();
    expect(getByText('pim_details.inside.service_heating')).toBeInTheDocument();
  });
});
