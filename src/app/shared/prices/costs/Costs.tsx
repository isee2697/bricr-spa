import React, { useState, useRef } from 'react';

import { useLocale, useToggleOnNewlyCreatedFromArray } from 'hooks';
import { Grid, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { FormSection, AutosaveForm } from 'ui/organisms';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';
import { Page } from 'ui/templates';
import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { AddCostModalContainer } from 'app/shared/prices';

import { CostsProps } from './Costs.types';
import { CostItem } from './costItem/CostItem';

export const Costs = ({ data, onDescriptionSave, onUpdateCost, onSidebarOpen, isSidebarVisible }: CostsProps) => {
  const { formatMessage } = useLocale();

  const formRef = useRef<FormSectionRef>(null);
  const [expandedItem, setExpandedItem] = useState<string>();
  const [modalOpened, setModalOpened] = useState(false);

  useToggleOnNewlyCreatedFromArray(data.costs, setExpandedItem);

  return (
    <>
      <ProjectDetailsHeader isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Page
        title={formatMessage({ id: 'pim_details.prices.costs.title' })}
        name="description"
        placeholder="pim_details.prices.costs.description_placeholder"
        initialValues={{ description: data.description }}
        onSave={onDescriptionSave}
        dateUpdated={data.dateUpdated}
        updatedBy={data.lastEditedBy}
      >
        <Grid item xs={12}>
          <FormSection
            title={formatMessage({ id: `pim_details.prices.costs.${data.costs?.length ? 'title' : 'add_costs'}` })}
            isEditable={!!data.costs?.length}
            titleBadge={!!data.costs && !!data.costs.length ? data.costs.length : undefined}
            onAdd={() => setModalOpened(true)}
            ref={formRef}
          >
            {inEditMode => (
              <>
                {!data.costs?.length && (
                  <InfoSection emoji="🤑">
                    <Typography variant="h3">
                      {formatMessage({ id: 'pim_details.prices.costs.empty_line_1' })}
                    </Typography>
                    <Typography variant="h3">
                      {formatMessage({ id: 'pim_details.prices.costs.empty_line_2' })}
                    </Typography>
                  </InfoSection>
                )}

                {!!data.costs?.length &&
                  data.costs?.map((cost, index) => (
                    <AutosaveForm key={`${cost.type}_${index}`} initialValues={cost} onSave={onUpdateCost}>
                      <CostItem
                        cost={cost}
                        index={index + 1}
                        inEditMode={inEditMode}
                        isExpanded={expandedItem === cost.id}
                        onExpand={() => setExpandedItem(expandedItem !== cost.id ? cost.id : undefined)}
                      />
                    </AutosaveForm>
                  ))}
              </>
            )}
          </FormSection>
        </Grid>
      </Page>

      {modalOpened && (
        <AddCostModalContainer
          isModalOpened
          onModalClose={() => setModalOpened(false)}
          onAdd={() => {
            formRef.current?.handleSetEdit(true);
            setModalOpened(false);
          }}
        />
      )}
    </>
  );
};
