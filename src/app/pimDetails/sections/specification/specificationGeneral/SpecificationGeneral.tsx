import React, { useState } from 'react';

import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddCustomPropertyModalContainer } from 'ui/organisms';
import { LabelProperty } from 'api/types';
import { Page } from 'ui/templates';
import { EnergyForm } from 'app/shared/energy/EnergyForm';
import { useStyles } from '../Specification.styles';

import { SpecificationGeneralProps } from './SpecificationGeneral.types';
import { ApprovalsForm } from './forms/ApprovalsForm';
import { ObligationForm } from './forms/ObligationForm';

export const SpecificationGeneral = ({ dateUpdated, updatedBy }: SpecificationGeneralProps) => {
  const { formatMessage } = useLocale();

  const [isModalOpened, setModalOpened] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Page
        title={formatMessage({ id: 'pim_details.specification.title' })}
        placeholder="pim_details.specification.description_placeholder"
        name="specification.description"
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
      >
        <Grid item xs={12}>
          <EnergyForm namePrefix="specification.energy" classNames={classes.root} isInitExpanded />
        </Grid>
        <Grid item xs={12}>
          <ApprovalsForm />
        </Grid>
        <Grid item xs={12}>
          <ObligationForm onAddPropertyClick={() => setModalOpened(true)} />
        </Grid>
      </Page>
      {isModalOpened && (
        <AddCustomPropertyModalContainer
          property={LabelProperty.ObligationToProvideInformation}
          isOpened={isModalOpened}
          onClose={() => setModalOpened(false)}
        />
      )}
    </>
  );
};
