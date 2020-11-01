import React, { useState } from 'react';

import { Page } from 'ui/templates';
import { Box, Card, CardContent, CardHeader, IconButton, Tab, Tabs, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks';
import { ManageIcon } from 'ui/atoms/icons';

import { useStyles } from './List.styles';
export const List = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [showAllocateResults, setShowAllocateResults] = useState(true);
  const tabs = [
    {
      key: 'ResultList',
    },
  ];
  const [status, setStatus] = useState(tabs[0]);

  const [] = useState([]);

  return (
    <Page withoutHeader>
      <Card onClick={() => setShowAllocateResults(true)}>
        {showAllocateResults && (
          <>
            <CardHeader
              title={formatMessage({ id: 'project.details.allocate_results.title' })}
              action={
                <IconButton variant="roundedContained" onClick={() => {}} size="small">
                  <ManageIcon />
                </IconButton>
              }
            />
            <CardContent className={classes.noPadding}>
              <Box>
                <Tabs
                  className={classes.tabs}
                  value={status.key}
                  onChange={(event, value) => setStatus(value)}
                  indicatorColor="primary"
                  textColor="inherit"
                >
                  <Tab
                    key={status.key}
                    value={status.key}
                    label={formatMessage({ id: `project.details.allocate_results.${status.key}` })}
                  />
                </Tabs>
              </Box>
            </CardContent>
          </>
        )}
        {!showAllocateResults && (
          <CardContent>
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'project.details.allocate_results.empty_title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'project.details.allocate_results.empty_description' })}
              </Typography>
            </InfoSection>
          </CardContent>
        )}
      </Card>
    </Page>
  );
};
