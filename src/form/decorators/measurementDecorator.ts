import createDecorator from 'final-form-calculate';

import { Space, SpaceConfiguration } from 'api/types';

const calculateSurface = (configuration: SpaceConfiguration | null | undefined) => {
  if (!!configuration?.measurement?.length && !!configuration?.measurement?.width) {
    return (configuration?.measurement?.length * configuration?.measurement?.width).toFixed(2);
  }
};

const calculateVolume = (configuration: SpaceConfiguration | null | undefined) => {
  if (
    !!configuration?.measurement?.length &&
    !!configuration?.measurement?.width &&
    !!configuration?.measurement?.height
  ) {
    return configuration?.measurement?.length * configuration?.measurement?.width * configuration?.measurement?.height;
  }
};

export const measurementDecorator = createDecorator(
  {
    field: 'configuration.measurement.length',
    updates: {
      'configuration.measurement.surface': (value, allValues) => calculateSurface((allValues as Space).configuration),
      'configuration.measurement.volume': (value, allValues) => calculateVolume((allValues as Space).configuration),
    },
  },
  {
    field: 'configuration.measurement.width',
    updates: {
      'configuration.measurement.surface': (value, allValues) => calculateSurface((allValues as Space).configuration),
      'configuration.measurement.volume': (value, allValues) => calculateVolume((allValues as Space).configuration),
    },
  },
  {
    field: 'configuration.measurement.height',
    updates: {
      'configuration.measurement.volume': (value, allValues) => calculateVolume((allValues as Space).configuration),
    },
  },
);
