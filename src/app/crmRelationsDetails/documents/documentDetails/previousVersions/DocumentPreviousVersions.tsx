import React from 'react';
import { useHistory } from 'react-router';

import { Box, Card, CardContent, CardHeader, IconButton, MenuItem, Select } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ManageIcon, SearchIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { DocumentTableView } from '../../documentListView/tableView/DocumentTableView';

import { DocumentPreviousVersionsProps } from './DocumentPreviousVersions.types';
import { useStyles } from './DocumentPreviousVersions.styles';

export const DocumentPreviousVersions = ({ path, documents }: DocumentPreviousVersionsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const sortOptions = ['last_edited'];

  const handleNavigateDetail = (newDocId: string) => {
    push(`${path}/${newDocId}`);
  };

  return (
    <Page withoutHeader>
      <Card>
        <CardHeader
          title={formatMessage({ id: 'crm.details.documents.previous_versions' })}
          action={
            <Box display="flex">
              <IconButton variant="roundedContained" size="small" onClick={() => {}}>
                <ManageIcon />
              </IconButton>
              <Box mr={2} />
              <IconButton variant="roundedContained" size="small" onClick={() => {}}>
                <SearchIcon />
              </IconButton>
            </Box>
          }
        />
        <CardContent>
          <Box className={classes.subheader}>
            <Select variant="outlined" value={sortOptions[0]} className={classes.sort}>
              {sortOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {formatMessage({ id: `crm.details.versions.sort_options.${option}` })}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box mt={4}>
            <DocumentTableView
              documents={documents || []}
              onClick={handleNavigateDetail}
              selected={[]}
              onSelectDoc={() => {}}
              onSelectAllDoc={() => {}}
            />
          </Box>
        </CardContent>
      </Card>
    </Page>
  );
};
