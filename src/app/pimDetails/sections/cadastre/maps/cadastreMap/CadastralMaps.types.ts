import { ReactNode } from 'react';
import { CadastreMap, File } from 'api/types';

type CadastreMapCommonProps = {
  title: ReactNode;
  cadastreMap: CadastreMap;
  isEditMode: boolean;
  toggled: boolean;
  onToggleClick: VoidFunction;
  onAddCustomType: VoidFunction;
};

export type CadastreMapContainerProps = CadastreMapCommonProps & {
  cadastreId: string;
};

export type CadastreMapProps = CadastreMapCommonProps & {
  mapFile: File | undefined;
};
