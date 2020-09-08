import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useQueryParam } from 'use-query-params';
import classNames from 'classnames';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { Box, Typography } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { BackIcon } from 'ui/atoms/icons';

import { useStyles } from './Setup.styles';
import { SetupStepOne } from './StepOne';
import { SetupStepTwo } from './StepTwo';
import { SetupSteps, StepData } from './Setup.types';

export const Setup = () => {
  const [name] = useQueryParam<string>('name');
  const [fullName, setFulleName] = useState<string>();
  const { pathname } = useLocation();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();

  const isStepOne = !pathname.includes('properties');

  if (name && !fullName) {
    //redirect if ugly queryparam
    setFulleName(name);
    push(AppRoute.setup);
  } else if (!name && !fullName) {
    push(AppRoute.login);
  }

  const onSubmit = async (data: StepData) => {
    if (isStepOne) {
      push(AppRoute.propertiesSetup);
    }

    if (data.clientTypes && data.propertyTypes) {
      push(AppRoute.login);
    }

    return undefined;
  };

  const changeStep = (step: SetupSteps) => {
    if (isStepOne && step === SetupSteps.PropertyTypes) {
      push(AppRoute.propertiesSetup);
    } else if (!isStepOne && step === SetupSteps.ClientType) {
      push(AppRoute.setup);
    }
  };

  return (
    <>
      {!isStepOne && (
        <Box className={classes.back} onClick={() => changeStep(SetupSteps.ClientType)}>
          <BackIcon />
          {formatMessage({ id: 'setup.back' })}
        </Box>
      )}
      <Typography className={classes.title} variant="h1">
        {formatMessage({ id: 'setup.title' })}
      </Typography>
      <Typography className={classes.name} variant="h1">
        {fullName}
      </Typography>
      <Box mb={4} />

      <Typography>
        <span dangerouslySetInnerHTML={{ __html: formatMessage({ id: 'setup.content' }) }} />
      </Typography>
      <Box mb={4} />

      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {props => (
          <form className={classes.form} onSubmit={props.handleSubmit}>
            <Switch>
              <Route exact path={`${AppRoute.setup}`} render={() => <SetupStepOne />} />
              <Route exact path={`${AppRoute.setup}/properties`} render={() => <SetupStepTwo />} />
              <Redirect to={`${AppRoute.setup}`} />
            </Switch>

            <Box className={classes.steps}>
              <span
                onClick={() => changeStep(SetupSteps.ClientType)}
                className={classNames(classes.step, isStepOne ? classes.active : '')}
              />
              <span
                onClick={() => changeStep(SetupSteps.PropertyTypes)}
                className={classNames(classes.step, !isStepOne ? classes.active : '')}
              />
            </Box>
          </form>
        )}
      </Form>
    </>
  );
};
