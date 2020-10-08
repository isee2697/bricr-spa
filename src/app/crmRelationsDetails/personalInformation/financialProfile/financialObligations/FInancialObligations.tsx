import React, { useState } from 'react';
import { useLocale, useModalDispatch, useModalState } from 'hooks';

import { useStyles } from './FinancialObligations.styles';

export const FinancialObligations = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-new-address');

  return <></>;
};
