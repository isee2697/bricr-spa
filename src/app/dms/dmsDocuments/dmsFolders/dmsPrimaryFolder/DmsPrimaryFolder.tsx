import React from 'react';
import { useHistory } from 'react-router-dom';

import { ListPimsFilters } from 'api/types';
import { Box, Grid, Card, CardHeader, CardContent, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { PropertyItemPlaceholder, Search, InfoSection } from 'ui/molecules';
import { DmsFolderIcon } from '../dmsFolderIcon/DmsFolderIcon';
import { AppRoute } from 'routing/AppRoute.enum';

import { DmsFolderTabs } from './dmsFolderTabs/DmsFolderTabs';
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
  status,
  onStatusChange,
  activeFilters,
  onFilter,
  foldersData,
  isLoading,
}: DmsPrimaryFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardHeader
          className="dms-primary-folder-header"
          title={[formatMessage({ id: 'dms.documents' }), name].join(' ')}
          action={
            <Box display="flex">
              <Box mr={3} className={classes.searchBoxWrapper}>
                <Search
                  options={primaryFolderOptions}
                  endAdornment={<></>}
                  classes={{
                    root: classes.searchBox,
                    input: classes.searchBox,
                  }}
                />
              </Box>
              <Box mr={3}>
                <FiltersButton data={activeFilters} getActiveFilters={onFilter} />
              </Box>
            </Box>
          }
        />
        <CardContent>
          <Box>
            <DmsFolderTabs status={status} onStatusChange={onStatusChange} />
          </Box>
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
                      name={item.name}
                      childCount={item.folders?.length || 0}
                      type="primary"
                      onClick={() => {
                        push(`${AppRoute.dms}/documents/${id}/${item.id}`);
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
