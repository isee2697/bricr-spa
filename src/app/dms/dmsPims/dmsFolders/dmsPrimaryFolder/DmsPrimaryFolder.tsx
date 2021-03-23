import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { ListPimsFilters } from 'api/types';
import { Box, Grid, IconButton, ClickAwayListener, Select, MenuItem, Pagination } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CardWithBody } from 'ui/templates';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { PropertyItemPlaceholder, Search } from 'ui/molecules';
import { FolderContainer } from 'ui/molecules/folder/FolderContainer';
import { AppRoute } from 'routing/AppRoute.enum';
import { SearchIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { SortOption } from 'ui/molecules/list/List.types';
import { EmptyStateFilter } from 'ui/organisms/emptyStateFilter/EmptyStateFilter';

import { useStyles } from './DmsPrimaryFolder.styles';
import { DmsPrimaryFolderProps } from './DmsPrimaryFolder.types';
import { DmsPrimaryFolderFilters } from './dictionaries';

const primaryFolderOptions = [
  { title: 'Adriaan van Bergenstraat', type: '', value: 'Adriaan van Bergenstraat', icon: 'CH' },
  { title: 'Adriaan van Hils', type: '', value: 'Adriaan van Hils', icon: 'CH' },
  { title: 'Adriaan van Bils', type: '', value: 'Adriaan van Bils', icon: 'CH' },
  { title: 'adriaanse', type: '', value: 'adriaanse', icon: 'CH' },
];

export const DmsPrimaryFolder = ({
  id,
  name,
  activeFilters,
  onFilter,
  foldersData,
  isLoading,
  type,
  category,
  onSort,
}: DmsPrimaryFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const [showSearchBar, setShowSearchBar] = useState(false);

  const sortOptions: SortOption[] = [
    {
      key: 'newest',
      name: formatMessage({ id: 'common.sort_option.newest' }),
    },
    { key: 'oldest', name: formatMessage({ id: 'common.sort_option.oldest' }) },
    { key: 'alphabeticalUp', name: formatMessage({ id: 'common.sort_option.alphabetical_up' }) },
    { key: 'alphabeticalDown', name: formatMessage({ id: 'common.sort_option.alphabetical_down' }) },
    { key: 'mostFiles', name: formatMessage({ id: 'common.sort_option.most_files' }) },
    { key: 'lessFiles', name: formatMessage({ id: 'common.sort_option.less_files' }) },
  ];

  const [sorting, setSorting] = useState(sortOptions.length > 0 ? sortOptions[0].key : '');

  return (
    <Page
      showHeader
      withoutHeader
      title={formatMessage({ id: `dms.folders.${type}` })}
      titleActions={[]}
      classes={{ container: classes.page }}
    >
      <Grid item xs={12}>
        <CardWithBody
          title={[formatMessage({ id: 'dms.documents.pim' }), formatMessage({ id: `dms.documents.${type}` })].join(' ')}
          titleActions={
            <Box display="flex">
              <Box mr={3} className={classes.searchBoxWrapper}>
                <ClickAwayListener
                  onClickAway={() => {
                    setShowSearchBar(false);
                  }}
                >
                  {showSearchBar ? (
                    <Search
                      options={primaryFolderOptions}
                      endAdornment={<></>}
                      classes={{
                        root: classes.searchBox,
                        input: classes.searchBox,
                      }}
                    />
                  ) : (
                    <IconButton
                      size="small"
                      variant="roundedContained"
                      onClick={() => setShowSearchBar(!showSearchBar)}
                    >
                      <SearchIcon />
                    </IconButton>
                  )}
                </ClickAwayListener>
              </Box>
              <Box mr={3}>
                <FiltersButton data={activeFilters} getActiveFilters={onFilter} filters={DmsPrimaryFolderFilters} />
              </Box>
            </Box>
          }
        >
          {Object.keys(activeFilters).length > 0 && (
            <Box ml={-2} mr={-2}>
              <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
            </Box>
          )}
          <Box my={2}>
            <Grid container>
              {isLoading ? (
                <Grid item xs={12}>
                  <PropertyItemPlaceholder />
                </Grid>
              ) : foldersData?.length ? (
                <Grid item xs={12}>
                  <Box width="100%" textAlign="right" mb={4} pr={4}>
                    <Select
                      className={classNames(classes.sorting, 'sort-select')}
                      variant="outlined"
                      value={sorting}
                      onChange={event => {
                        const value = event?.target.value as string;
                        setSorting(value);

                        if (onSort) onSort(value);
                      }}
                    >
                      {sortOptions.map(({ key, name }) => (
                        <MenuItem key={key} value={key}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Grid container>
                    {foldersData.map((item, index) => (
                      <Grid item key={index} className={classes.listItem} xs={6} sm={4} lg={2}>
                        <FolderContainer
                          id={item.id}
                          name={item.name}
                          type={'main'}
                          onClick={() => {
                            push(`${AppRoute.dms}/${category}/${type}/${item.id}`);
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Box mt={7}>
                    <Pagination />
                  </Box>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <EmptyStateFilter type="documents" isFiltered={Object.keys(activeFilters).length > 0} />
                </Grid>
              )}
            </Grid>
          </Box>
        </CardWithBody>
      </Grid>
    </Page>
  );
};
