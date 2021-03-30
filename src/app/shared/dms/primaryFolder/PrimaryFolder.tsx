import React from 'react';
import { useHistory } from 'react-router-dom';

import { ListPimsFilters } from 'api/types';
import { Box, Grid, MenuItem, Pagination, Select } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CardWithBody } from 'ui/templates';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { PropertyItemPlaceholder } from 'ui/molecules';
import { FolderContainer } from 'ui/molecules/folder/FolderContainer';
import { AppRoute } from 'routing/AppRoute.enum';
import { Page } from 'ui/templates';
import { EmptyStateFilter } from 'ui/organisms/emptyStateFilter/EmptyStateFilter';

import { useStyles } from './PrimaryFolder.styles';
import { PrimaryFolderProps } from './PrimaryFolder.types';
import { PrimaryFolderFilters } from './dictionaries';

export const PrimaryFolder = ({
  activeFilters,
  onFilter,
  isLoading,
  type,
  entityType,
  entityItems,
  pagination,
}: PrimaryFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const sortOptions = ['last_edited'];

  return (
    <Page
      showHeader
      title={formatMessage({ id: 'dms.folders.title' })}
      titleActions={[]}
      classes={{ container: classes.page }}
    >
      <Grid item xs={12}>
        <CardWithBody
          title={[
            formatMessage({ id: `dms.documents.${entityType}` }),
            formatMessage({ id: `dms.documents.${type}` }),
          ].join(' ')}
          titleActions={
            <FiltersButton data={activeFilters} getActiveFilters={onFilter} filters={PrimaryFolderFilters} />
          }
          titleAmount={24}
        >
          {Object.keys(activeFilters).length > 0 && Object.values(activeFilters).filter(value => !!value).length > 0 && (
            <Box ml={-2} mr={-2}>
              <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
            </Box>
          )}
          <Box p={2}>
            <Grid container>
              {isLoading ? (
                <Grid item xs={12}>
                  <PropertyItemPlaceholder />
                </Grid>
              ) : entityItems.length ? (
                <Grid item xs={12}>
                  <Box textAlign="right" mb={4}>
                    <Select variant="outlined" value={sortOptions[0]} className={classes.sort}>
                      {sortOptions.map(option => (
                        <MenuItem key={option} value={option}>
                          {formatMessage({ id: `common.sort_options.${option}` })}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Grid container>
                    {entityItems.map((item, index) => (
                      <Grid item key={index} className={classes.listItem} xs={6} sm={4} lg={2}>
                        <FolderContainer
                          id={item.id}
                          name={item.name}
                          type={'main'}
                          onClick={() => {
                            push(`${AppRoute.dms}/${entityType}/${type}/${item.id}`);
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Box mt={6}>
                    <Pagination {...pagination} />
                  </Box>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <EmptyStateFilter
                    type={type}
                    isFiltered={
                      Object.keys(activeFilters).length > 0 &&
                      Object.values(activeFilters).filter(value => !!value).length > 0
                    }
                  />
                </Grid>
              )}
            </Grid>
          </Box>
        </CardWithBody>
      </Grid>
    </Page>
  );
};
