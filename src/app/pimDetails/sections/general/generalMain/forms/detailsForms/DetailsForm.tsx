import React from 'react';
import { FormSection } from 'ui/organisms';
import { PropertyType } from 'api/types';

import { BogPropertyDetailsForm } from './commercial/BogPropertyDetailsForm';
import { DetailsFormContainerProps } from './DetailsForm.types';
import { BuildingPlotPropertyDetailsForm } from './plot/BuildingPlotPropertyDetailsForm';
import { AgriculturalDetailsForm } from './agricultural/AgriculturalDetailsForm';
import { PropertyDetailsForm } from './property/PropertyDetailsForm';
import { ApartmentPropertyDetailsForm } from './apartment/ApartmentPropertyDetailsForm';
import { ParkingForm } from './parking/ParkingForm';

export const DetailsForm = ({ type, title }: DetailsFormContainerProps) => {
  if (!type) {
    return null;
  }

  return (
    <>
      <FormSection title={title} isExpandable>
        {editing => {
          switch (type) {
            case PropertyType.Agricultural:
              return <AgriculturalDetailsForm editing={editing} />;
            case PropertyType.BuildingPlot:
              return <BuildingPlotPropertyDetailsForm editing={editing} />;
            case PropertyType.ParkingLot:
              return <ParkingForm editing={editing} />;
            case PropertyType.Apartment:
              return <ApartmentPropertyDetailsForm editing={editing} />;
            case PropertyType.House:
              return <PropertyDetailsForm editing={editing} />;
            case PropertyType.Commercial:
              return <BogPropertyDetailsForm editing={editing} />;
          }
        }}
      </FormSection>
    </>
  );
};
