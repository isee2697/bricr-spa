import React, { useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { Card, CardContent, Grid, Box, Typography, Badge, CardHeader, IconButton } from 'ui/atoms';
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { AddCustomPropertyModal } from 'ui/organisms';
import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';
import { WorkflowTemplateStatus } from 'api/types';

import { WorkflowTemplatesProps } from './WorkflowTemplates.types';
import { useStyles } from './WorkflowTemplates.styles';
import { WorkflowTemplatesTabs } from './workflowTemplatesTabs/WorkflowTemplatesTabs';
import { WorkflowTemplatesItem } from './workflowTemplatesItem/WorkflowTemplatesItem';

const mockData = {
  notifications: [],
};

export const WorkflowTemplates = ({
  templates: templatesPageData,
  updatedBy,
  dateUpdated,
  onAdd,
  onUpdate,
  templateType = 'bricr',
  status,
  onStatusChange,
}: WorkflowTemplatesProps) => {
  const { formatMessage } = useLocale();
  const [isModalVisible, setModalVisible] = useState(false);
  const classes = useStyles();
  const { push } = useHistory();
  const { notifications } = mockData;
  const templates = templatesPageData?.workflowTemplates || [];

  const activeTemplates = templates.filter(item => item.status === WorkflowTemplateStatus.Active);
  const inactiveTemplates = templates.filter(item => item.status === WorkflowTemplateStatus.Inactive);

  return (
    <Box flex={1}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Page
            showHeader
            headerProps={
              templateType === 'custom'
                ? {
                    actionText: formatMessage({
                      id: 'settings.workflow_templates.add_new_workflow_template',
                    }),
                    actionIcon: <AddIcon color="inherit" />,
                    onAction: () => setModalVisible(true),
                  }
                : undefined
            }
            title={formatMessage({
              id: `settings.workflow_templates.${templateType}_title`,
            })}
            titleActions={[]}
            placeholder="settings.workflow_templates.description_placeholder"
            name="description"
            dateUpdated={dateUpdated}
            updatedBy={updatedBy}
          >
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title={
                    <Typography variant="h2">
                      {formatMessage({
                        id: `settings.workflow_templates.card_${templateType}_title`,
                      })}
                    </Typography>
                  }
                  action={
                    <IconButton variant="rounded" size="small" onClick={() => {}} aria-label="adjust">
                      <Badge badgeContent={notifications?.length} color="primary">
                        <ManageIcon />
                      </Badge>
                    </IconButton>
                  }
                />
                <CardContent>
                  <Box mb={2}>
                    <WorkflowTemplatesTabs
                      status={status}
                      onStatusChange={onStatusChange}
                      amounts={{
                        active: activeTemplates?.length,
                        inactive: inactiveTemplates?.length,
                      }}
                    />
                  </Box>
                  <List
                    className="workflow-template-list"
                    items={status === WorkflowTemplateStatus.Active ? activeTemplates : inactiveTemplates}
                    itemIndex="id"
                    sortOptions={[
                      { key: 'lastEdited', name: 'Last edited' },
                      { key: 'firstEdited', name: 'First edited' },
                    ]}
                    onSort={key => alert(key)}
                    pagination={{
                      count: 8,
                      currentPerPage: 10,
                      perPageOptions: [10, 25, 'All'],
                      onPerPageChange: value => {
                        alert(value);
                      },
                    }}
                    loadingItem={<PropertyItemPlaceholder />}
                    emptyTitle={formatMessage({
                      id: 'settings.workflow_templates.empty_line_1',
                    })}
                    emptyDescription={formatMessage({
                      id: 'settings.workflow_templates.empty_line_2',
                    })}
                    renderItem={(template, checked, checkbox) => (
                      <Box
                        key={template.id}
                        className={clsx(classes.row, { [classes.rowChecked]: checked }, 'workflow-template-row')}
                      >
                        {checkbox}
                        <Box component="span" className={classes.rowItem}>
                          <Box
                            className={classes.itemButton}
                            onClick={() => {
                              if (template.status === WorkflowTemplateStatus.Active) {
                                push(AppRoute.workflow.replace(':id', template.id), {
                                  icon: template.icon,
                                  name: template.name,
                                });
                              }
                            }}
                          >
                            <WorkflowTemplatesItem
                              template={template}
                              onCopyToCustom={() => {
                                // TODO: Update again after template type introduced
                                // onUpdate({ ...template, type: 'custom' });
                              }}
                              onStatusChange={status => {
                                // TODO: Update again after template type introduced
                                // onUpdate({ ...template, status });
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    )}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Page>
        </Grid>
      </Grid>
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
    </Box>
  );
};
