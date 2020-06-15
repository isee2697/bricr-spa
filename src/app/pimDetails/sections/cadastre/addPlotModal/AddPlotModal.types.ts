export type AddPlotModalProps = {
  handleAddPlot: () => Promise<undefined | { error: boolean }>;
  isModalOpened: boolean;
  onModalClose: () => void;
  loading: boolean;
};

export type AddPlotModalContainerProps = {
  isModalOpened: boolean;
  onModalClose: () => void;
};
