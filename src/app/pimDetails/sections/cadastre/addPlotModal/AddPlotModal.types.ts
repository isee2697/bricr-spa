import { Pim } from 'api/types';

export type AddPlotModalProps = {
  handleAddPlot: () => Promise<undefined | { error: boolean }>;
  isModalOpened: boolean;
  onModalClose: () => void;
  loading: boolean;
};

export type AddPlotModalContainerProps = {
  pim: Pim;
  isModalOpened: boolean;
  onModalClose: () => void;
};
