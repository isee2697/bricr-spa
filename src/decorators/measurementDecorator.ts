import createDecorator from 'final-form-calculate';

import { Space } from '../api/types';

const calculateSurface = ({ configuration }: Space) => {
  if (!!configuration?.measurement?.length && !!configuration?.measurement?.width) {
    return configuration?.measurement?.length * configuration?.measurement?.width;
  }
};

const calculateVolume = ({ configuration }: Space) => {
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
      'configuration.measurement.surface': (value, allValues) => calculateSurface(allValues as Space),
      'configuration.measurement.volume': (value, allValues) => calculateVolume(allValues as Space),
    },
  },
  {
    field: 'configuration.measurement.width',
    updates: {
      'configuration.measurement.surface': (value, allValues) => calculateSurface(allValues as Space),
      'configuration.measurement.volume': (value, allValues) => calculateVolume(allValues as Space),
    },
  },
  {
    field: 'configuration.measurement.height',
    updates: {
      'configuration.measurement.volume': (value, allValues) => calculateVolume(allValues as Space),
    },
  },
);
