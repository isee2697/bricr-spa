import React from 'react';

import { ProgressStatus, ProjectRisk } from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';

export const progressTypes = Object.keys(ProgressStatus).map(type => ({
  label: `dictionaries.project_general.progress.${type}`,
  icon: <SquareIcon color="inherit" />,
  value: type,
}));

export const riskTypes = Object.keys(ProjectRisk).map(type => ({
  label: `dictionaries.project_general.risk.${type}`,
  icon: <SquareIcon color="inherit" />,
  value: type,
}));
