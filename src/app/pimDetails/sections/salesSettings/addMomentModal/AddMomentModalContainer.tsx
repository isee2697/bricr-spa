import React, { useState } from 'react';
import { UserIcon } from 'ui/atoms/icons';

import { AddMomentModal } from './AddMomentModal';
import { AddMomentModalContainerProps, AddMomentSubmit, LinkedPersonType } from './AddMomentModal.types';

const personsList = [
  {
    label: 'Victor Martin Brochner',
    value: '1',
    icon: <UserIcon />,
  },
  {
    label: 'Victor Martin Brochner',
    value: '2',
    icon: <UserIcon />,
  },
];

const personsArray: LinkedPersonType[] = [];

export const AddMomentmodalContainer = ({
  isOpened,
  onClose,
  onAddMoment,
  type,
  currentModalIndex,
}: AddMomentModalContainerProps) => {
  const [persons, updatePersons] = useState(personsArray);

  const handleSubmit: AddMomentSubmit = async body => {
    const person: LinkedPersonType = {
      name: 'Victor Martin Brochner',
      avatar: 'https://source.unsplash.com/featured/?person',
      office: 'Vesteging Weert',
      company: 'Hendriks Makelaardij',
      phone: '06-48764044',
      email: 'christian@cubiceyes.com',
    };

    try {
      updatePersons([...persons, person]);
      onAddMoment(currentModalIndex, [...persons, person]);

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return (
    <AddMomentModal
      title={`pim_details.sales_settings.sales_settings_modal_title`}
      nameLabel={`pim_details.sales_settings.${type.toLowerCase()}_name_label`}
      persons={personsList}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
