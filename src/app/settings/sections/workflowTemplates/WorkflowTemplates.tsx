import React from 'react';

import { Page } from 'ui/templates';
import { SettingsHeader } from 'app/settings/settingsHeader/SettingsHeader';
import { useLocale } from 'hooks';
import { Button, Card, CardContent, Grid, Typography } from 'ui/atoms';
import { AddIcon, HelpIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { CheckboxField } from 'form/fields';

import { WorkflowBluePrints, WorkflowTemplatesProps } from './WorkflowTemplates.types';
import { useStyles } from './WorkflowTemplates.styles';

export const WorkflowTemplates = ({
  isSidebarVisible,
  onSidebarOpen,
  updatedBy,
  dateUpdated,
}: WorkflowTemplatesProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <SettingsHeader
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={() => {}}
            size="small"
          >
            {formatMessage({ id: 'settings.workflow_templates.add_new_workflow_template' })}
          </Button>
        }
      />
      <Page
        title={formatMessage({ id: 'settings.workflow_templates.title' })}
        placeholder="settings.workflow_templates.description_placeholder"
        name="description"
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
        titleActions={
          <Grid item className={classes.infoContainer}>
            <HelpIcon color="primary" />
            <Typography variant="h5" className={classes.info}>
              {formatMessage({ id: 'settings.workflow_templates.see_blue_pint_workflow' })}
            </Typography>
          </Grid>
        }
      >
        <Grid item xs={12}>
          <Card>
            <div className={classes.blueprintCheckboxContainer}>
              {Object.keys(WorkflowBluePrints).map(key => (
                <>
                  <CheckboxField
                    label={`dictionaries.workflow_blueprint.${key}`}
                    name={key}
                    containerClassName={classes.blueprintCheckbox}
                  />
                </>
              ))}
            </div>
            <CardContent>
              <InfoSection emoji="🤔">
                <Typography variant="h3">
                  {formatMessage({ id: 'settings.workflow_templates.empty_line_1' })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({ id: 'settings.workflow_templates.empty_line_2' })}
                </Typography>
              </InfoSection>
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
