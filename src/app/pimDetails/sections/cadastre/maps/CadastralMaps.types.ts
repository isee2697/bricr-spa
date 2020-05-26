import { ReactNode } from 'react';

import { CadastreMap } from 'api/types';

export type MapsProps = {
  cadstralMaps: CadastreMap[];
};

export type MapProps = {
  title: ReactNode;
  cadastreMap: CadastreMap;
  isEditMode: boolean;
  toggled: boolean;
  onToggleClick: VoidFunction;
};
