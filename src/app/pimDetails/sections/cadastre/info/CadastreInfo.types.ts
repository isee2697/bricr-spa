import { Cadastre } from 'api/types';

export type CadastreInfoContainerProps = {
  hasPlots: boolean;
  cadastreItem?: Cadastre;
};

export type CadastreInfoProps = {
  onSave: (body: Cadastre) => Promise<undefined | { error: boolean }>;
  cadastreItem: Cadastre;
  hasPlots: boolean;
};
