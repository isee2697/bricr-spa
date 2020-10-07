import React, { useState } from 'react';

import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { Card, CardContent, Grid, Typography } from 'ui/atoms';
import { AddIcon, HelpIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { CheckboxField } from 'form/fields';
import { AddCustomPropertyModal } from 'ui/organisms';
import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';

import { WorkflowBluePrints, WorkflowTemplatesProps } from './WorkflowTemplates.types';
import { useStyles } from './WorkflowTemplates.styles';

export const WorkflowTemplates = ({ updatedBy, dateUpdated, onAdd }: WorkflowTemplatesProps) => {
  const { formatMessage } = useLocale();
  const [isModalVisible, setModalVisible] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Page
        showHeader
        headerProps={{
          actionText: formatMessage({ id: 'settings.workflow_templates.add_new_workflow_template' }),
          actionIcon: <AddIcon color="inherit" />,
          onAction: () => setModalVisible(true),
        }}
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
                <CheckboxField
                  key={key}
                  label={`dictionaries.workflow_blueprint.${key}`}
                  name={key}
                  containerClassName={classes.blueprintCheckbox}
                />
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
      {isModalVisible && (
        <AddCustomPropertyModal
          onClose={() => setModalVisible(false)}
          isOpened={isModalVisible}
          labelId="settings.new_workflow_template.label"
          placeholderId="settings.new_workflow_template.placeholder"
          title={formatMessage({ id: 'settings.new_workflow_template.title' })}
          addText={formatMessage({ id: 'settings.new_workflow_template.add' })}
          iconPickerSelectedTheme={IconSelectedTheme.ORANGE}
          onSubmit={onAdd}
        />
      )}
    </>
  );
};
