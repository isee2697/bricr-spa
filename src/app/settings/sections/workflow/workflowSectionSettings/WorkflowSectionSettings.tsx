import React, { useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { RadioGroup } from '@material-ui/core';
import { useLocale } from 'hooks';
import { Modal, SubmitButton, CancelButton } from 'ui/molecules';
import { DialogContent, DialogActions, Box, Typography, Radio, Dropdown } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { WorkflowSection, StartPointType, EndPointType } from '../workflowSection/WorkflowSection.types';
import {
  StartPointStart,
  StartPointOutside,
  StartPointPrevious,
  EndPointEnd,
  EndPointOutside,
  EndPointNext,
} from '../GeneralTriggerTypes';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';

import { useStyles } from './WorkflowSectionSettings.styles';
import { WorkflowSectionSettingsProps } from './WorkflowSectionSettings.types';

export const WorkflowSectionSettings = ({
  isOpened,
  onClose,
  onSubmit,
  workflowSection: defaultWorkflowSection,
}: WorkflowSectionSettingsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const workflowOptions: DropdownItem[] = [];

  const [workflowSection, setWorkflowSection] = useState<WorkflowSection>(
    defaultWorkflowSection || {
      id: '',
      title: '',
      startpoint: 'start',
      endpoint: 'end',
    },
  );

  const handleChangeStartpoint = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkflowSection({
      ...workflowSection,
      startpoint: (event.target as HTMLInputElement).value as StartPointType,
    });
  };

  const handleChangeEndpoint = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkflowSection({
      ...workflowSection,
      endpoint: (event.target as HTMLInputElement).value as EndPointType,
    });
  };

  const handleChangeStartpointOutside = (value: string | number) => {
    setWorkflowSection({
      ...workflowSection,
      startpointOutside: String(value),
    });
  };

  const handleChangeEndpointOutside = (value: string | number) => {
    setWorkflowSection({
      ...workflowSection,
      endpointOutside: String(value),
    });
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={
        workflowSection.id ? (
          <>
            <span style={{ fontWeight: 'bold' }}>{formatMessage({ id: 'settings.workflow.settings' })}</span>
            {formatMessage({ id: 'settings.workflow.for_workflow_section' })}
            <span style={{ fontWeight: 'bold' }}>{workflowSection.title}</span>
          </>
        ) : (
          formatMessage({ id: 'settings.workflow.new_workflow_section' })
        )
      }
    >
      <Form
        onSubmit={onSubmit}
        initialValues={workflowSection}
        mutators={{ ...arrayMutators }}
        initialValuesEqual={() => true}
      >
        {({ handleSubmit, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Typography>
                  {formatMessage({
                    id: 'settings.workflow.name_workflow_section',
                  })}
                </Typography>
                <GenericField
                  name="title"
                  placeholder="settings.workflow.name_workflow_section.placeholder"
                  className={classes.title}
                />
                <Box mt={4.5} width="100%">
                  <Typography>
                    {formatMessage({
                      id: 'settings.workflow.startpoint_workflow',
                    })}
                  </Typography>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={workflowSection.startpoint}
                    onChange={handleChangeStartpoint}
                  >
                    <Box mt={2} display="flex" alignItems="center">
                      <Radio value="start" color="primary" />
                      <Box className={classes.pointTypeItem} p={0.75} pl={5}>
                        <StartPointStart />
                      </Box>
                    </Box>
                    <Box mt={2} display="flex" alignItems="center">
                      <Radio value="outside" color="primary" />
                      <Box className={classes.pointTypeItem} p={0.75} mr={2}>
                        <StartPointOutside />
                      </Box>
                      <Box flex={1}>
                        <Dropdown
                          items={workflowOptions}
                          placeholder={formatMessage({
                            id: 'settings.workflow.startpoint_workflow.placeholder',
                          })}
                          value={workflowSection.startpointOutside}
                          onChange={handleChangeStartpointOutside}
                        />
                      </Box>
                    </Box>
                    <Box mt={2} display="flex" alignItems="center">
                      <Radio value="previous" color="primary" />
                      <Box className={classes.pointTypeItem} p={0.75}>
                        <StartPointPrevious />
                      </Box>
                    </Box>
                  </RadioGroup>
                </Box>
                <Box mt={4} className={classes.divider} />
                <Box mt={2} width="100%">
                  <Typography>
                    {formatMessage({
                      id: 'settings.workflow.endpoint_workflow',
                    })}
                  </Typography>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={workflowSection.endpoint}
                    onChange={handleChangeEndpoint}
                  >
                    <Box mt={2} display="flex" alignItems="center">
                      <Radio value="end" color="primary" />
                      <Box className={classes.pointTypeItem} p={0.75} pr={5}>
                        <EndPointEnd />
                      </Box>
                    </Box>
                    <Box mt={2} display="flex" alignItems="center">
                      <Radio value="outside" color="primary" />
                      <Box className={classes.pointTypeItem} p={0.75} mr={2}>
                        <EndPointOutside />
                      </Box>
                      <Box flex={1}>
                        <Dropdown
                          items={workflowOptions}
                          placeholder={formatMessage({
                            id: 'settings.workflow.endpoint_workflow.placeholder',
                          })}
                          value={workflowSection.endpointOutside}
                          onChange={handleChangeEndpointOutside}
                        />
                      </Box>
                    </Box>
                    <Box mt={2} display="flex" alignItems="center">
                      <Radio value="next" color="primary" />
                      <Box className={classes.pointTypeItem} p={0.75}>
                        <EndPointNext />
                      </Box>
                    </Box>
                  </RadioGroup>
                </Box>
                <Box mt={3} className={classes.divider} />
              </Box>
            </DialogContent>

            <DialogActions>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({
                  id: workflowSection.id ? 'settings.workflow.set_settings' : 'settings.workflow.set_workflow_section',
                })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
