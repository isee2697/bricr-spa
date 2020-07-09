import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Grid, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { Page } from 'ui/templates';
import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { AddCostModal } from 'app/shared/prices';

import { CostsProps } from './Costs.types';
import { CostItem } from './costItem/CostItem';

export const Costs = ({ costs, onAddCost }: CostsProps) => {
  const { formatMessage } = useLocale();

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <ProjectDetailsHeader />
      <Page
        title={formatMessage({ id: 'pim_details.prices.costs.title' })}
        name="description"
        placeholder="pim_details.prices.costs.description_placeholder"
      >
        <Grid item xs={12}>
          <FormSection
            title={formatMessage({ id: `pim_details.prices.costs.${costs.length ? 'title' : 'add_costs'}` })}
            isEditable={!!costs.length}
            titleBadge={!!costs.length ? costs.length : undefined}
            onAdd={() => setModalOpened(true)}
          >
            {inEditMode => (
              <>
                {!costs.length && (
                  <InfoSection emoji="🤑">
                    <Typography variant="h3">
                      {formatMessage({ id: 'pim_details.prices.costs.empty_line_1' })}
                    </Typography>
                    <Typography variant="h3">
                      {formatMessage({ id: 'pim_details.prices.costs.empty_line_2' })}
                    </Typography>
                  </InfoSection>
                )}
                {costs.map((cost, index) => (
                  <CostItem key={`${cost.type}_${index}`} cost={cost} index={index + 1} inEditMode={inEditMode} />
                ))}
              </>
            )}
          </FormSection>
        </Grid>
      </Page>

      {modalOpened && (
        <AddCostModal
          isModalOpened
          onModalClose={() => setModalOpened(false)}
          onAddCost={async values => {
            const result = await onAddCost(values);

            if (!result) setModalOpened(false);

            return result;
          }}
        />
      )}
    </>
  );
};
