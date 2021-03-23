import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ListPimsFilters } from 'api/types';
import { Box, Grid, Typography, IconButton, ClickAwayListener } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CardWithBody } from 'ui/templates';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { PropertyItemPlaceholder, Search, InfoSection } from 'ui/molecules';
import { FolderContainer } from 'ui/molecules/folder/FolderContainer';
import { AppRoute } from 'routing/AppRoute.enum';
import { SearchIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

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
  entityType,
}: DmsPrimaryFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const [showSearchBar, setShowSearchBar] = useState(false);

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
            <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
          )}
          <Box my={2} p={4}>
            <Grid container>
              {isLoading ? (
                <Grid item xs={12}>
                  <PropertyItemPlaceholder />
                </Grid>
              ) : foldersData?.length ? (
                foldersData.map((item, index) => (
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
                ))
              ) : (
                <Grid item xs={12}>
                  <InfoSection emoji="🤔">
                    <Typography variant="h3">{formatMessage({ id: 'dms.documents.primary.empty.title' })}</Typography>
                    <Typography variant="h3">
                      {formatMessage({ id: 'dms.documents.primary.empty.description' })}
                    </Typography>
                  </InfoSection>
                </Grid>
              )}
            </Grid>
          </Box>
        </CardWithBody>
      </Grid>
    </Page>
  );
};
