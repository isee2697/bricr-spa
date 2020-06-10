import React from 'react';

import { FormSection, FormSubSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { Box } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { InspectionTypes } from '../inspectionType/InspectionType.types';

import { useStyles } from './InspectionInformation.styles';
import { InspectionInformationProps } from './InspectionInformation.types';

const MOCKED_BADGE = 3;

const MOCKED_TANK_DATA = [
  {
    titleId: 'dictionaries.inspection_tank.Septic',
    id: 'Septic',
  },
  {
    titleId: 'dictionaries.inspection_tank.Oil',
    id: 'Oil',
  },
  {
    titleId: 'dictionaries.inspection_tank.Underground',
    id: 'Underground',
  },
];

const MOCKED_POLLUTION_DATA = [
  {
    titleId: 'dictionaries.inspection_pollution.Asbestos',
    id: 'Asbestos',
  },
  {
    titleId: 'dictionaries.inspection_pollution.Soil',
    id: 'Soil',
  },
];

const MOCKED_MAINTENANCE_DATA = [
  {
    titleId: 'dictionaries.inspection_maintenance.Paintwork',
    id: 'Paintwork',
  },
  {
    titleId: 'dictionaries.inspection_maintenance.ElectricityConnections',
    id: 'ElectricityConnections',
  },
  {
    titleId: 'dictionaries.inspection_maintenance.WindowFrames',
    id: 'WindowFrames',
  },
];

const getMockedData = (type: InspectionTypes) => {
  switch (type) {
    case 'Tank':
      return MOCKED_TANK_DATA;
    case 'Pollution':
      return MOCKED_POLLUTION_DATA;
    case 'Maintenance':
      return MOCKED_MAINTENANCE_DATA;
  }
};

export const InspectionInformation = ({ type, onOpenInspectionModal }: InspectionInformationProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FormSection
        title={formatMessage({ id: `pim_details.specification.inspection.type_${type.toLowerCase()}` })}
        onAdd={onOpenInspectionModal}
        titleBadge={MOCKED_BADGE}
      >
        {isEditable =>
          getMockedData(type).map((item, index) => (
            <Box className={classes.collapse}>
              <FormSubSection counter={index + 1} onOptionsClick={() => {}} title={formatMessage({ id: item.titleId })}>
                <GenericField
                  name={`${type}.${item.id}.description`}
                  label={formatMessage({ id: 'pim_details.specification.inspection.title' })}
                  placeholder={`${formatMessage({
                    id: 'pim_details.specification.inspection.info_placeholder',
                  })} ${formatMessage({ id: item.titleId })}`}
                  disabled={isEditable}
                />
              </FormSubSection>
            </Box>
          ))
        }
      </FormSection>
    </Box>
  );
};
