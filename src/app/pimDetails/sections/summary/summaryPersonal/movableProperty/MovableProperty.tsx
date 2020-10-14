import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './MovableProperty.styles';

export const MovableProperty = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const sections = [
    {
      title: 'Golden tiles',
    },
    {
      title: 'Dog house',
    },
    {
      title: 'Courtains',
    },
    {
      title: 'Wardrobe',
    },
    {
      title: 'TV',
    },
    {
      title: 'Cat house',
    },
    {
      title: 'Cocobolo desk',
    },
  ];

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">
              {formatMessage({ id: 'pim_details.summary.personal.movable_property.title' })}
            </Typography>
            <Counter count={7} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {sections.map((section, index) => (
          <FormSubSection
            key={index}
            initiallyOpened={false}
            title={
              <>
                <Typography variant="h4" className={classes.index}>
                  1
                </Typography>
                <Typography variant="h3">{section.title}</Typography>
              </>
            }
            onOptionsClick={() => {}}
          >
            <div>{section.title} section</div>
          </FormSubSection>
        ))}
      </CardContent>
    </Card>
  );
};
