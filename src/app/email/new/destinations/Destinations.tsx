import React, { useState } from 'react';

import { Alert, Box, Card, CardContent, Snackbar, Typography, UserAvatar } from 'ui/atoms';
import { useLocale } from 'hooks';
import { MultiSearch } from 'ui/molecules';
import { MultiSearch as MultiSearchType } from 'ui/molecules/multiSearch/MultiSearch.types';

import { useStyles } from './Destinations.styles';
import { DestinationsProps } from './Destinations.types';

export const Destinations = ({ name }: DestinationsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [indicatorState, setIndicatorState] = useState<undefined | 'success' | 'error' | 'info'>(undefined);

  const destinationOptions: MultiSearchType[] = [
    {
      title: 'Christian van Gils',
      type: '',
      icon: <UserAvatar avatar={''} name={'Christian van Gils'} />,
    },
    {
      title: 'Christian van Hils',
      type: '',
      icon: <UserAvatar avatar={''} name={'Christian van Gils'} />,
    },
    {
      title: 'Christian van Bils',
      type: '',
      icon: <UserAvatar avatar={''} name={'Christian van Gils'} />,
    },
  ];

  const handleChangeDestinations = (value: MultiSearchType[]) => {
    setIndicatorState('success');
  };

  return (
    <>
      <Card classes={{ root: classes.card }}>
        <CardContent className={classes.cardContent}>
          <Box mt={3} ml={2} mr={2}>
            <Typography variant="h6" className={classes.fontWeightMedium}>
              {formatMessage({ id: `email.new_email.destination.${name}` })}
            </Typography>
          </Box>
          <Box mt={0.5} ml={1.5} mr={1.5} mb={1.5} className={classes.searchBoxWrapper}>
            <MultiSearch
              options={destinationOptions}
              value={[destinationOptions[0]]}
              classes={{
                root: classes.searchBox,
                input: classes.searchBoxInput,
              }}
              getOptionLabel={option => option.title}
              onChange={handleChangeDestinations}
            />
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={!!indicatorState}
        autoHideDuration={6000}
        onClose={() => setIndicatorState(undefined)}
      >
        <Alert variant="filled" severity={indicatorState}>
          {formatMessage({ id: 'common.autosaving' })}
        </Alert>
      </Snackbar>
    </>
  );
};
