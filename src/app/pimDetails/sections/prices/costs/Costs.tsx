import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Avatar, Grid, Typography } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Page } from 'ui/templates';

import { useStyles } from './Costs.styles';
import { AddCostModalContainer } from './addCostModal/AddCostModalContainer';
import { CostsProps } from './Costs.types';
import { CostsForm } from './costsForm/CostsForm';

export const Costs = ({ costs, onSave, title, isSidebarVisible, onOpenSidebar }: CostsProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const [isModalOpen, setModalOpen] = useState(false);
  const styles = useStyles();

  const renderCosts = (editing: boolean) => (
    <>
      {costs.map(cost => (
        <CostsForm cost={cost} editing={editing} onSave={onSave} key={cost.id} />
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

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />

      <Page
        title={formatMessage({ id: 'pim_details.prices.costs.title' })}
        placeholder="pim_details.prices.description_placeholder"
        name="description"
        onSave={() => Promise.resolve({ error: false })}
      >
        <Grid item xs={12}>
          <FormSection
            title={renderHeader()}
            isEditable={costs.length > 0}
            onAdd={() => setModalOpen(true)}
            className={styles.container}
          >
            {editing => (costs.length > 0 ? renderCosts(editing) : renderEmpty())}
          </FormSection>
        </Grid>
      </Page>

      {isModalOpen && (
        <AddCostModalContainer isModalOpened={isModalOpen} onModalClose={() => setModalOpen(false)} pimId={id} />
      )}
    </>
  );
};
