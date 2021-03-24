import React, { useState } from 'react';
import clsx from 'classnames';
import { useHistory, useParams } from 'react-router-dom';

import { Page } from 'ui/templates';
import { useLocale, useModalDispatch } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { Card, CardContent, Grid, Box, Typography, CardHeader } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ListPimsFilters } from 'api/types';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { AddTemplateDialog } from 'app/shared/dms/addTemplateDialog/AddTemplateDialog';

import { ActiveTabStatus, DmsTemplatesProps } from './DmsTemplates.types';
import { useStyles } from './DmsTemplates.styles';
import { DmsTemplatesTabs } from './dmsTemplatesTabs/DmsTemplatesTabs';
import { DmsTemplatesItem } from './dmsTemplatesItem/DmsTemplatesItem';
import { DmsTemplatesFilters } from './dictionaries';
import { TemplateItem } from '../dmsTemplateDetails/dmsTemplateConfigureSettingsDetails/DmsTemplateConfigureSettingsDetails.types';

export const DmsTemplates = ({ templates, onAdd, onUpdate, category }: DmsTemplatesProps) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const classes = useStyles();
  const { push } = useHistory();
  const [status, setStatus] = useState<ActiveTabStatus>('active');
  const { type } = useParams<{ type: string }>();
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});

  const sortOptions = [
    { key: 'lastEdited', name: 'Last edited' },
    { key: 'firstEdited', name: 'First edited' },
  ];

  const [sort, setSort] = useState<string>(sortOptions[0].key);

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  const activeTemplates = templates.filter(item => !!item.published);
  const inactiveTemplates = templates.filter(item => !item.published);

  const sortedItems = (items: TemplateItem[]) => {
    console.log("item")
    console.log(items)
    return items.sort((item1, item2) => {
      // if (item1.questionaireName === 'lastEdited') {
      //   return item1.questionaireName < item2.questionaireName ? 1 : -1;
      // } else if (sort === 'firstEdited') {
      //   return item1.createdAt > item2.createdAt ? 1 : -1;
      // }

      return 1;
    });
  };

  return (
    <Box flex={1}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Page
            showHeader
            headerProps={
              category === 'custom'
                ? {
                    actionText: formatMessage({
                      id: 'dms.templates.create_template',
                    }),
                    actionIcon: <AddIcon color="inherit" />,
                    onAction: () => open('dms-add-template'),
                  }
                : undefined
            }
            title={formatMessage(
              {
                id: `dms.templates.title`,
              },
              { type: formatMessage({ id: `dms.templates.type.${type}` }) },
            )}
            titleActions={[]}
          >
            <Grid item xs={12}>
              <Box mt={1}>
                <Card>
                  <CardHeader
                    title={
                      <Typography variant="h2">
                        {formatMessage({ id: `dms.templates.subtitle` }, { category })}
                      </Typography>
                    }
                    action={
                      <FiltersButton
                        color="primary"
                        data={activeFilters}
                        getActiveFilters={handleFilterChange}
                        filters={DmsTemplatesFilters}
                      />
                    }
                  />
                  <CardContent>
                    {Object.keys(activeFilters).length > 0 && (
                      <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={handleFilterChange} />
                    )}
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
                      items={sortedItems(status === 'active' ? activeTemplates : inactiveTemplates)}
                      itemIndex="id"
                      sortOptions={sortOptions}
                      onSort={key => setSort(key)}
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
                                if (template.published) {
                                  push(`${AppRoute.dms}/templates/${type}/${category}/${template.id}`, {
                                    name: template.id,
                                  });
                                }
                              }}
                            >
                              <DmsTemplatesItem
                                template={template}
                                onStatusChange={status => {
                                  onUpdate({ ...template, published: status === 'active' });
                                }}
                                category={category}
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
      <AddTemplateDialog onSubmit={onAdd} />
    </Box>
  );
};
