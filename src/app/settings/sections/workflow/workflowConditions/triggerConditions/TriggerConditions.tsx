import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Chip } from '@material-ui/core';

import { Box, Grid, Alert, DialogContent, DialogActions } from 'ui/atoms';
import { Modal, CancelButton, SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks';
import { CheckboxGroupField, RadioGroupField } from 'form/fields';

import { ConditionSideMenu } from './conditionSideMenu/ConditionSideMenu';
import { Range } from './range/Range';
import { TriggerConditionsProps, TriggerConditionValuesType, Types } from './TriggerConditions.types';
import { ConditionTabPanel } from './conditionTabPanel/ConditionTabPanel';
import { useStyles } from './TriggerConditions.styles';
import { Criteria } from './criteria/Criteria';

export const TriggerConditions = ({
  title,
  data,
  isOpened,
  onClose,
  onSubmit,
  onTabChange,
  activeTab,
  conditionsTypes,
}: TriggerConditionsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const handleSubmit = (conditions: TriggerConditionValuesType) => {
    onSubmit(conditions);
  };

  return (
    <Modal
      fullWidth
      onClose={onClose}
      title={
        <span>
          {title ??
            formatMessage({
              id: 'settings.workflow.trigger_condition.title',
            })}{' '}
          <Chip label={Object.keys(data || {}).length} size="small" color="primary" className={classes.titleBadge} />
        </span>
      }
      isOpened={isOpened}
    >
      <Form onSubmit={handleSubmit} initialValues={data} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">
                  {formatMessage({
                    id: 'settings.workflow.trigger_condition.error.unknown',
                  })}
                </Alert>
              </DialogContent>
            )}
            <Grid container spacing={0} className={classes.condition}>
              <Grid item xs={4} className={classes.conditionSider}>
                <ConditionSideMenu selectedConditions={data} conditions={conditionsTypes} onChange={onTabChange} />
              </Grid>
              <Grid item xs={8}>
                <Box p={3}>
                  {conditionsTypes.map((condition, i) => {
                    if (condition.type === Types.Criteria && condition.options) {
                      return (
                        <ConditionTabPanel
                          conditionType={condition.type}
                          key={condition.key}
                          activeTab={activeTab}
                          id={i}
                        >
                          <>
                            <Criteria
                              name={condition.key}
                              label={`settings.workflow.trigger_condition.${condition.key}.dropdown_label`}
                              options={condition.options.map(option => ({
                                label: formatMessage({
                                  id: `settings.workflow.trigger_condition.${condition.key}.${option.label}`,
                                }),
                                value: option.value,
                              }))}
                            />
                          </>
                        </ConditionTabPanel>
                      );
                    } else if (condition.type === Types.Range && condition.options) {
                      return (
                        <ConditionTabPanel
                          conditionType={condition.type}
                          key={condition.key}
                          activeTab={activeTab}
                          id={i}
                        >
                          <>
                            <Range name={condition.key} options={condition.options} suffix={'€'} />
                          </>
                        </ConditionTabPanel>
                      );
                    } else if (condition.type === Types.Checkbox && condition.options && condition.size) {
                      return (
                        <ConditionTabPanel
                          conditionType={condition.type}
                          key={condition.key}
                          activeTab={activeTab}
                          id={i}
                        >
                          <>
                            <CheckboxGroupField
                              options={condition.options}
                              name={condition.key}
                              orientation="horizontal"
                              xs={condition.size}
                            />
                          </>
                        </ConditionTabPanel>
                      );
                    } else if (condition.type === Types.RadioButton && condition.options && condition.size) {
                      return (
                        <ConditionTabPanel
                          conditionType={condition.type}
                          key={condition.key}
                          activeTab={activeTab}
                          id={i}
                        >
                          <>
                            <RadioGroupField options={condition.options} name={condition.key} xs={condition.size} />
                          </>
                        </ConditionTabPanel>
                      );
                    }

                    return null;
                  })}
                </Box>
                <Grid item xs={12} className={classes.modalFooter}>
                  <DialogActions>
                    <CancelButton variant="outlined" size="large" onClick={onClose}>
                      {formatMessage({ id: 'common.cancel' })}
                    </CancelButton>
                    <SubmitButton
                      type="submit"
                      size="large"
                      color="primary"
                      variant="contained"
                      onClick={handleSubmit}
                      isLoading={submitting}
                      disabled={!valid}
                    >
                      {formatMessage({
                        id: 'settings.workflow.trigger_condition.submit',
                      })}
                    </SubmitButton>
                  </DialogActions>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </Modal>
  );
};
