import React from 'react';
import arrayMutators from 'final-form-arrays';
import { DateTime } from 'luxon';

import { Grid, Box, Typography, Card, CardContent, Tabs, Tab, Loader } from 'ui/atoms';
import { Page } from 'ui/templates';
import { AutosaveForm } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks';
import { AllocateInput } from 'api/types';

import { CriteriaTypeForm } from './criteriaTypeForm/CriteriaTypeForm';
import { SegmentationFrom } from './segmentationForm/SegmentationForm';
import { PeopleForm } from './peopleForm/PeopleForm';
import { useStyles } from './AllocationMain.styles';
import { AllocationMainProps } from './AllocationMain.types';

export const AllocationMain = ({
  title,
  criterias,
  selectedCriteria,
  loadingList,
  loadingAllocate,
  onSubmit,
  onDelete,
  onChangeTab,
}: AllocationMainProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const onSave = async (values: AllocateInput) => {
    try {
      await onSubmit(selectedCriteria?.id!, values);

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  const handleDelete = async () => {
    try {
      if (!!selectedCriteria?.id) {
        await onDelete(selectedCriteria?.id);
      }

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  const initialValues = {
    ...selectedCriteria,
    id: null,
    companyId: null,
    objectId: null,
    name: null,
    version: null,
  };

  if (loadingList) {
    return <Loader />;
  }

  return criterias?.length ? (
    <Page title={title} titleActions={[]} placeholder="pim_details.allocation_criteria.description_placeholder">
      <Grid item xs={12}>
        <Card className={classes.tabs}>
          <Tabs value={selectedCriteria?.id} onChange={(event, value) => onChangeTab(value)} indicatorColor="primary">
            {criterias.map(item => (
              <Tab
                className={classes.tabItem}
                key={item.id}
                value={item.id}
                label={
                  <Box>
                    <Typography variant="h5" className={classes.fontWeightBold}>
                      {item.name}
                    </Typography>
                    <Typography variant="h5" className={classes.fontWeightBold}>
                      {DateTime.fromISO(item.version).toFormat('dd-MM-yyyy')}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </Tabs>
          {!selectedCriteria && (
            <CardContent>
              <Loader />
            </CardContent>
          )}
        </Card>
        {!loadingAllocate && !!selectedCriteria && (
          <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave} initialValues={initialValues}>
            <CriteriaTypeForm formClassName={classes.criteriaTypeForm} onDelete={handleDelete} />
            <Box mt={3} />
            <PeopleForm />
            <Box mt={3} />
            <SegmentationFrom />
          </AutosaveForm>
        )}
      </Grid>
    </Page>
  ) : (
    <Page withoutHeader>
      <Card>
        <CardContent>
          <InfoSection emoji="🤔">
            <Typography variant="h3">
              {formatMessage({ id: 'project.details.allocate_criteria.empty_title' })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({ id: 'project.details.allocate_criteria.empty_description' })}
            </Typography>
          </InfoSection>
        </CardContent>
      </Card>
    </Page>
  );
};
