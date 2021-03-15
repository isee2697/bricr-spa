import React, { useCallback } from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { TileButton } from 'ui/molecules';
import { AddCustomPropertyModal } from '../addCustomPropertyModal/AddCustomPropertyModal';
import { LabelInput } from 'api/types';

import { AddCustomDataButtonProps } from './AddCustomDataButton.types';

export const AddCustomDataButton = ({ type, title, labelId, disabled = false, onAdd }: AddCustomDataButtonProps) => {
  const { open, close } = useModalDispatch();
  const { isOpen } = useModalState(`${type}-add-custom-property`);

  const handleAdd = useCallback(
    async (input: Pick<LabelInput, 'text' | 'icon'>) => {
      onAdd(input);
    },
    [onAdd],
  );

  return (
    <>
      <TileButton isDisabled={disabled} onClick={() => open(`${type}-add-custom-property`)} />
      <AddCustomPropertyModal
        isOpened={isOpen}
        onClose={() => close(`${type}-add-custom-property`)}
        onSubmit={handleAdd}
        title={title}
        labelId={labelId}
        addText={`common.add_property_button.${type}`}
      />
    </>
  );
};
