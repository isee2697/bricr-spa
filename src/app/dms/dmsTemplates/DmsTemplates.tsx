import React, { useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { Card, CardContent, Grid, Box, Typography, CardHeader, IconButton } from 'ui/atoms';
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { List, PropertyItemPlaceholder } from 'ui/molecules';

import { ActiveTabStatus, DmsTemplatesProps } from './DmsTemplates.types';
import { useStyles } from './DmsTemplates.styles';
import { DmsTemplatesTabs } from './dmsTemplatesTabs/DmsTemplatesTabs';
import { DmsTemplatesItem } from './dmsTemplatesItem/DmsTemplatesItem';
import { DmsAddTemplateDialog } from './dmsAddTemplateDialog/DmsAddTemplateDialog';

export const DmsTemplates = ({ templates, onAdd, onUpdate }: DmsTemplatesProps) => {
  const { formatMessage } = useLocale();
  const [isModalVisible, setModalVisible] = useState(false);
  const classes = useStyles();
  const { push } = useHistory();
  const [status, setStatus] = useState<ActiveTabStatus>('active');

  const activeTemplates = templates.filter(item => item.status === 'active');
  const inactiveTemplates = templates.filter(item => item.status === 'inactive');

  return (
    <Box flex={1}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Page
            showHeader
            headerProps={{
              actionText: formatMessage({
                id: 'dms.templates.create_template',
              }),
              actionIcon: <AddIcon color="inherit" />,
              onAction: () => setModalVisible(true),
            }}
            title={formatMessage({
              id: `dms.templates.title`,
            })}
            titleActions={[]}
          >
            <Grid item xs={12}>
              <Box mt={1}>
                <Card>
                  <CardHeader
                    title={<Typography variant="h2"></Typography>}
                    action={
                      <IconButton variant="rounded" size="small" onClick={() => {}} aria-label="adjust">
                        <ManageIcon />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <Box mb={2}>
                      <DmsTemplatesTabs
                        status={status}
                        onStatusChange={setStatus}
                        amounts={{
                          active: activeTemplates?.length,
                          inactive: inactiveTemplates?.length,
                        }}
                      />
                    </Box>
                    <List
                      className="dms-template-list"
                      items={status === 'active' ? activeTemplates : inactiveTemplates}
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
                        id: 'dms.templates.empty_line_1',
                      })}
                      emptyDescription={formatMessage({
                        id: 'dms.templates.empty_line_2',
                      })}
                      renderItem={(template, checked, checkbox) => (
                        <Box
                          key={template.id}
                          className={clsx(classes.row, { [classes.rowChecked]: checked }, 'dms-template-row')}
                        >
                          {checkbox}
                          <Box component="span" className={classes.rowItem}>
                            <Box
                              className={classes.itemButton}
                              onClick={() => {
                                if (template.status === 'active') {
                                  push(AppRoute.dms + '/templates/' + template.id, {
                                    name: template.name,
                                  });
                                }
                              }}
                            >
                              <DmsTemplatesItem
                                template={template}
                                onStatusChange={status => {
                                  onUpdate({ ...template, status });
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      )}
                    />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Page>
        </Grid>
      </Grid>
      {isModalVisible && (
        <DmsAddTemplateDialog isOpened={isModalVisible} onClose={() => setModalVisible(false)} onSubmit={onAdd} />
      )}
    </Box>
  );
};
