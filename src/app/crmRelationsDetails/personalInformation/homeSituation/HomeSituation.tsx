import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-final-form';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';
import { Grid, NavBreadcrumb, Typography, Box } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Page } from 'ui/templates';
import { GenericField } from 'form/fields';

import { useStyles } from './HomeSituation.styles';
import { CurrentSituation } from './currentSituation/CurrentSituation';
import { HomeSituationProps } from './HomeSituation.types';

export const HomeSituation = ({ data, onSave }: HomeSituationProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  const [aboutRelation, setAboutRelation] = useState<string>(localStorage.getItem('aboutRelation') || '');

  const handleChangeAboutRelation = (text: string) => {
    localStorage.setItem('aboutRelation', text);
    setAboutRelation(text);
  };

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.personal_information_home_situation.title' })}
        to="/personal_information_home_situation"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: 'crm.details.personal_information_home_situation.title' })}
          </Typography>
        </Grid>

        <Box width="100%">
          <Form onSubmit={() => {}}>
            {({ handleSubmit, submitErrors, values }) => (
              <form onSubmit={handleSubmit}>
                <GenericField
                  name="aboutRelation"
                  placeholder={formatMessage({ id: 'crm.details.personal_information_home_situation.placeholder' })}
                  value={aboutRelation}
                  onChange={e => handleChangeAboutRelation(e.target.value)}
                  fullWidth
                />
              </form>
            )}
          </Form>
        </Box>

        <CurrentSituation data={data} onSave={onSave} />
      </Page>
    </>
  );
};
