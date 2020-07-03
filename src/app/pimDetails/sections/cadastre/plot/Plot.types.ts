import { Cadastre } from 'api/types';

export type PlotProps = {
  index: string;
  cadastre?: Cadastre;
  onOwnershipChange: VoidFunction;
};
