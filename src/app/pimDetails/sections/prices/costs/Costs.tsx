import React, { useState } from 'react';

import { Avatar, Grid, Typography } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale, useToggleOnNewlyCreatedFromArray } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { AddCostModalContainer } from 'app/shared/prices';
import { Page } from 'ui/templates';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';

import { useStyles } from './Costs.styles';
import { CostsProps } from './Costs.types';
import { CostsForm } from './costsForm/CostsForm';

export const Costs = ({
  costs,
  onSave,
  title,
  isSidebarVisible,
  onOpenSidebar,
  dateUpdated,
  updatedBy,
  description,
  onDescriptionUpdate,
}: CostsProps) => {
  const { formatMessage } = useLocale();
  const [isModalOpen, setModalOpen] = useState(false);
  const styles = useStyles();
  const formRef = React.useRef<FormSectionRef>(null);
  const [toggled, setToggled] = useState<string | undefined>();

  const renderCosts = (editing: boolean) => (
    <>
      {costs.map((cost, index) => (
        <CostsForm
          cost={cost}
          editing={editing}
          onSave={onSave}
          key={cost.id}
          toggled={toggled === cost.id}
          onCostClick={() => setToggled(toogled => (toogled !== cost.id ? cost.id : undefined))}
          counter={index + 1}
        />
      ))}
    </>
  );

  const renderEmpty = () => (
    <InfoSection emoji="🤑">
      <Typography variant="h3"> {formatMessage({ id: 'pim_details.prices.costs.empty_line_1' })}</Typography>
      <Typography variant="h3"> {formatMessage({ id: 'pim_details.prices.costs.empty_line_2' })}</Typography>
    </InfoSection>
  );

  const renderHeader = () => {
    if (costs.length > 0) {
      return (
        <>
          {formatMessage({ id: 'pim_details.prices.costs.title' })}
          <Avatar className={styles.count}>{costs.length}</Avatar>
        </>
      );
    }

    return formatMessage({ id: 'pim_details.prices.costs.add_costs' });
  };

  const handleOnAdd = () => {
    setModalOpen(false);
    formRef.current?.handleSetEdit(true);
  };

  useToggleOnNewlyCreatedFromArray(costs, setToggled);

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />

      <Page
        title={formatMessage({ id: 'pim_details.prices.costs.title' })}
        placeholder="pim_details.prices.costs.description_placeholder"
        name="description"
        initialValues={{ description }}
        onSave={onDescriptionUpdate}
        updatedBy={updatedBy}
        dateUpdated={dateUpdated}
      >
        <Grid item xs={12}>
          <FormSection
            title={renderHeader()}
            isEditable={costs.length > 0}
            onAdd={() => setModalOpen(true)}
            className={styles.container}
            ref={formRef}
          >
            {editing => (costs.length > 0 ? renderCosts(editing) : renderEmpty())}
          </FormSection>
        </Grid>
      </Page>

      {isModalOpen && (
        <AddCostModalContainer
          isModalOpened={isModalOpen}
          onModalClose={() => setModalOpen(false)}
          onAdd={handleOnAdd}
        />
      )}
    </>
  );
};
