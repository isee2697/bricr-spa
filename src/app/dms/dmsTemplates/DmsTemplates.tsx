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
import { ListQuestionairesFilters, Questionaire } from 'api/types';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { AddTemplateDialog } from 'app/shared/dms/addTemplateDialog/AddTemplateDialog';
import { useDmsTemplateQueryParams } from 'app/shared/useDmsTemplateQueryParams/useDmsTemplateQueryParams';

import { DmsTemplatesProps } from './DmsTemplates.types';
import { useStyles } from './DmsTemplates.styles';
import { DmsTemplatesTabs } from './dmsTemplatesTabs/DmsTemplatesTabs';
import { DmsTemplatesItem } from './dmsTemplatesItem/DmsTemplatesItem';
import { DmsTemplatesFilters } from './dictionaries';

export const DmsTemplates = ({
  templates,
  onAdd,
  onUpdate,
  category,
  loading,
  pagination,
  amount,
}: DmsTemplatesProps) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const classes = useStyles();
  const { push } = useHistory();
  const { status, setStatus } = useDmsTemplateQueryParams();
  const { type } = useParams<{ type: string }>();
  const [activeFilters, setActiveFilters] = useState<ListQuestionairesFilters>({
    type,
  });

  const sortOptions = [
    { key: 'lastEdited', name: 'Last edited' },
    { key: 'firstEdited', name: 'First edited' },
  ];

  const [sort, setSort] = useState<string>(sortOptions[0].key);

  const handleFilterChange = (filters: ListQuestionairesFilters) => {
    setActiveFilters(filters);
  };

  const sortedItems = (items: Questionaire[]) => {
    return items.slice().sort((item1, item2) => {
      if (sort === 'lastEdited') {
        return item1.meta.createdAt < item2.meta.createdAt ? 1 : -1;
      } else if (sort === 'firstEdited') {
        return item1.meta.createdAt > item2.meta.createdAt ? 1 : -1;
      }

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
                      <ActiveFilters<ListQuestionairesFilters>
                        activeFilters={activeFilters}
                        onDelete={handleFilterChange}
                      />
                    )}
                    <Box mb={2}>
                      <DmsTemplatesTabs status={status} onStatusChange={setStatus} amounts={amount} />
                    </Box>
                    <List
                      className="dms-template-list"
                      items={sortedItems(templates)}
                      itemIndex="id"
                      sortOptions={sortOptions}
                      onSort={key => setSort(key)}
                      pagination={pagination}
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
                                if (template.isActive) {
                                  push(`${AppRoute.dms}/templates/${type}/${category}/${template.id}`, {
                                    name: template.templateName,
                                  });
                                }
                              }}
                            >
                              <DmsTemplatesItem
                                template={template}
                                onStatusChange={isActive => {
                                  onUpdate({ ...template, isActive });
                                }}
                                category={category}
                              />
                            </Box>
                          </Box>
                        </Box>
                      )}
                      loading={loading}
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
