import React from 'react';

import { SquareIcon } from 'ui/atoms/icons';

export const progressTypes = ['Concept', 'InPreparation', 'InPresale', 'InProgress', 'Delivered'].map(type => ({
  label: `dictionaries.project_general.progress.${type}`,
  icon: <SquareIcon color="inherit" />,
  value: type,
}));

export const riskTypes = ['Low', 'Middle', 'High'].map(type => ({
  label: `dictionaries.project_general.risk.${type}`,
  icon: <SquareIcon color="inherit" />,
  value: type,
}));
