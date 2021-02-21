import React, { useEffect, useState } from 'react';
import arrayMutators from 'final-form-arrays';
import { DateTime } from 'luxon';

import { Grid, Box, Typography, Card, CardContent, Tabs, Tab } from 'ui/atoms';
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

export const AllocationMain = ({ title, criterias, onSubmit }: AllocationMainProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  const onSave = async (values: AllocateInput) => {
    try {
      await onSubmit(activeTab!, values);

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  useEffect(() => {
    if (criterias.length) {
      setActiveTab(criterias[criterias.length - 1].id);
      setIsDirty(true);
    }
  }, [criterias, criterias.length]);

  const activeCriteria = criterias.find(criteria => criteria.id === activeTab);

  const initialValues: AllocateInput = {
    note: activeCriteria?.note,
    criteria: activeCriteria?.criteria,
    assignToRole: activeCriteria?.assignToRole,
    home: activeCriteria?.home,
    people: activeCriteria?.people,
  };

  return criterias?.length && !!activeTab ? (
    <AutosaveForm
      mutators={{ ...arrayMutators }}
      onSave={onSave}
      initialValues={initialValues}
      keepDirtyOnReinitialize
      initialValuesEqual={() => {
        if (isDirty) {
          setIsDirty(false);

          return false;
        }

        return true;
      }}
    >
      <Page
        title={title}
        titleActions={[]}
        placeholder="pim_details.allocation_criteria.description_placeholder"
        name="description"
      >
        <Grid item xs={12}>
          <Card className={classes.tabs}>
            <Tabs value={activeTab} onChange={(event, value) => setActiveTab(value)} indicatorColor="primary">
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
          </Card>
          <CriteriaTypeForm formClassName={classes.criteriaTypeForm} />
        </Grid>

        <Grid item xs={12}>
          <PeopleForm />
        </Grid>

        <Grid item xs={12}>
          <SegmentationFrom />
        </Grid>
      </Page>
    </AutosaveForm>
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
