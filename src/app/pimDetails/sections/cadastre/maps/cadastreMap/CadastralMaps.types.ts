import { ReactNode } from 'react';

import { CadastreMap } from 'api/types';

export type CadastreMapProps = {
  title: ReactNode;
  cadastreMap: CadastreMap;
  isEditMode: boolean;
  toggled: boolean;
  onToggleClick: VoidFunction;
  onAddCustomType: VoidFunction;
};

export type CadastreMapContainerProps = CadastreMapProps & {
  cadastreId: string;
};
