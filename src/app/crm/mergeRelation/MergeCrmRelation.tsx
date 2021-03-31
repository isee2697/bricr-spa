import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useLocale } from 'hooks';
import { Grid, Box, IconButton, NavBreadcrumb, NavBreadcrumbs } from 'ui/atoms';
import { ExitIcon, HideIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';

import { MergeCrmRelationProps } from './MergeCrmRelation.types';
import { SelectRelationsStep } from './selectRelationsStep/SelectRelationsStep';
import { SelectDataStep } from './selectDataStep/SelectDataStep';
import { SelectMatchStep } from './selectMatchStep/SelectMatchStep';
import { useStyles } from './MergeCrmRelation.styles';
import { StepBar } from './stepsBar/StepsBar';
import { RelationCard } from './relationCard/RelationCard';
import { ObjectType } from './MergeCrmRelation.types';
import { ResultStep } from './resultStep/ResultStep';

const steps = [
  {
    name: 'select',
    optional: 'relations',
    component: SelectRelationsStep,
  },
  {
    name: 'select',
    optional: 'data',
    component: SelectDataStep,
  },
  {
    name: 'merge',
    optional: 'data',
    component: SelectMatchStep,
  },
];

export const MergeCrmRelation = ({
  onSubmit,
  isSidebarVisible,
  onSidebarOpen,
  crm,
  matches,
}: MergeCrmRelationProps) => {
  const { push } = useHistory();
  const [results, setResults] = useState<ObjectType>({ crm, matches });
  const [step, setStep] = useState(0);
  const currentStep = steps[step];
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const handleNext = () => {
    if (step === steps.length) {
      onSubmit(results);
    } else {
      setStep(i => i + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(i => i - 1);
    }
  };

  const handleUpdate = async (result: ObjectType) => {
    setResults(result);
  };

  const goBack = () => {
    push(`${AppRoute.crm}/relations`);
  };

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'crm.merge_relation' })} />
      <Grid container xs={12} item justify="space-between">
        <Box display="flex" alignItems="center">
          {!isSidebarVisible && (
            <IconButton
              className={classes.hideSidebarButton}
              onClick={onSidebarOpen}
              size="small"
              variant="roundedContained"
            >
              <HideIcon />
            </IconButton>
          )}
          <NavBreadcrumbs />
        </Box>
        <IconButton size="small" variant="roundedContained" onClick={goBack}>
          <ExitIcon />
        </IconButton>
      </Grid>
      <Page
        title={formatMessage({
          id: step === steps.length ? 'crm.merge_relation.merge_result' : 'crm.merge_relation.title',
        })}
        titleActions={[]}
      >
        {step === steps.length ? (
          <>
            <ResultStep
              onNext={handleNext}
              onPrev={handlePrev}
              onUpdate={handleUpdate}
              objects={{ crm, matches }}
              results={results}
            />
          </>
        ) : (
          <>
            <RelationCard crm={crm} title={formatMessage({ id: 'crm.merge_relation.source_relation' })} />

            <StepBar steps={steps} step={step} onNavigateStep={step => setStep(step)} />

            <Box mt={2} width="100%">
              {step < steps.length
                ? React.createElement(currentStep.component, {
                    onNext: handleNext,
                    onPrev: handlePrev,
                    onUpdate: handleUpdate,
                    objects: { crm, matches },
                    results: results,
                  })
                : null}
            </Box>
          </>
        )}
      </Page>
    </>
  );
};
