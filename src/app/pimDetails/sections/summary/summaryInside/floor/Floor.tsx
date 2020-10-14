import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './Floor.styles';
import { FloorProps } from './Floor.types';

export const Floor = ({ floor: { spaces } }: FloorProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.inside.floor.title' })}</Typography>
            <Counter count={spaces?.length || 0} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {spaces &&
          spaces.length > 0 &&
          spaces.map((space, index) => (
            <FormSubSection
              key={index}
              initiallyOpened={false}
              title={
                <>
                  <Typography variant="h4" className={classes.index}>
                    {index + 1}
                  </Typography>
                  <Typography variant="h3">{space.spaceName}</Typography>
                </>
              }
              onOptionsClick={() => {}}
            >
              <div>Home office content</div>
            </FormSubSection>
          ))}
      </CardContent>
    </Card>
  );
};
