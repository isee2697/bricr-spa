import React, { useEffect, useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { Grid, Box, Typography, Card, CardContent, Tabs, Tab } from 'ui/atoms';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Page } from 'ui/templates';
import { AutosaveForm } from 'ui/organisms';
import { AllocateCriteriaDetailsType } from '../SalesSettings.types';
import { InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks';

import { CriteriaTypeForm } from './criteriaTypeForm/CriteriaTypeForm';
import { SegmentationFrom } from './segmentationForm/SegmentationForm';
import { PeopleForm } from './peopleForm/PeopleForm';
import { useStyles } from './AllocationMain.styles';

export const AllocationMain = ({
  title,
  isSidebarVisible,
  onSidebarOpen,
  criterias,
}: PimDetailsSectionProps & { criterias: AllocateCriteriaDetailsType[] }) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const onSave = async () => {
    try {
      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  useEffect(() => {
    if (criterias.length) {
      setActiveTab(criterias[criterias.length - 1].criteriaName);
    }
  }, [criterias, criterias.length]);

  return criterias?.length ? (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
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
                  key={item.criteriaName}
                  value={item.criteriaName}
                  label={
                    <Box>
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {item.criteriaName}
                      </Typography>
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {item.createdDate.toFormat('dd-MM-yyyy')}
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
