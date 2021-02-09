import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ListPimsFilters } from 'api/types';
import { Box, Grid, Card, CardHeader, CardContent, Typography, IconButton, ClickAwayListener } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { PropertyItemPlaceholder, Search, InfoSection } from 'ui/molecules';
import { DmsFolderIcon } from '../dmsFolderIcon/DmsFolderIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { SearchIcon } from 'ui/atoms/icons';

import { useStyles } from './DmsPrimaryFolder.styles';
import { DmsPrimaryFolderProps } from './DmsPrimaryFolder.types';

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
}: DmsPrimaryFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardHeader
          className="dms-primary-folder-header"
          title={[formatMessage({ id: 'dms.documents.pim' }), formatMessage({ id: `dms.documents.${type}` })].join(' ')}
          action={
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
                <FiltersButton data={activeFilters} getActiveFilters={onFilter} />
              </Box>
            </Box>
          }
        />
        <CardContent>
          <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
          <Box my={2} p={4}>
            <Grid container>
              {isLoading ? (
                <Grid item xs={12}>
                  <PropertyItemPlaceholder />
                </Grid>
              ) : foldersData?.length ? (
                foldersData.map((item, index) => (
                  <Grid item key={index} className={classes.listItem} xs={6} sm={4} lg={2}>
                    <DmsFolderIcon
                      id={item.id}
                      name={item.name}
                      childCount={item.folders?.length || 0}
                      type="primary"
                      onClick={() => {
                        push(`${AppRoute.dms}/pim/${type}/${item.id}`);
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
        </CardContent>
      </Card>
    </Grid>
  );
};