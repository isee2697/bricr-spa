import { MutableState, Tools } from 'final-form';

import { SpaceConfiguration, Space, OutsideFeature, CuboidMeasurement } from 'api/types';

export const calculateSurface = (state: MutableState<CuboidMeasurement>, utils: Tools<CuboidMeasurement>) => {
  const length = ((state.formState.values as Space | OutsideFeature)?.configuration as SpaceConfiguration)?.measurement
    ?.length;
  const width = ((state.formState.values as Space | OutsideFeature)?.configuration as SpaceConfiguration)?.measurement
    ?.width;

  if (!!length && !!width) {
    utils.changeValue(state, 'configuration.measurement.surface', () => (length * width).toFixed(2));
  } else {
    utils.changeValue(state, 'configuration.measurement.surface', () => undefined);
  }
};

export const calculateVolume = (state: MutableState<CuboidMeasurement>, utils: Tools<CuboidMeasurement>) => {
  const length = ((state.formState.values as Space | OutsideFeature)?.configuration as SpaceConfiguration)?.measurement
    ?.length;
  const width = ((state.formState.values as Space | OutsideFeature)?.configuration as SpaceConfiguration)?.measurement
    ?.width;
  const height = ((state.formState.values as Space | OutsideFeature)?.configuration as SpaceConfiguration)?.measurement
    ?.height;

  if (!!length && !!width && !!height) {
    utils.changeValue(state, 'configuration.measurement.volume', () => (length * height * width).toFixed(2));
  } else {
    utils.changeValue(state, 'configuration.measurement.volume', () => undefined);
  }
};
