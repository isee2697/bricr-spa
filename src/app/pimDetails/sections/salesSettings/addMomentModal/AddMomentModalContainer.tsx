import React from 'react';

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

export const AddMomentmodalContainer = ({
  isOpened,
  onClose,
  onAddMoment,
  type,
  currentModalIndex,
}: AddMomentModalContainerProps) => {
  const handleSubmit: AddMomentSubmit = async body => {
    const personsMapped: LinkedPersonType[] = body.linked_managers.map((id: string) => ({
      name: 'Victor Martin Brochner ' + id,
      avatar: 'https://source.unsplash.com/featured/?person',
      office: 'Vesteging Weert',
      company: 'Hendriks Makelaardij',
      phone: '06-48764044',
      email: 'christian@cubiceyes.com',
    }));

    try {
      onAddMoment(currentModalIndex, personsMapped);

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
