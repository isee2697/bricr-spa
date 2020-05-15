import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { AppMessages } from 'i18n/messages';

import { ErrorFloorProps } from './EmptyFloor.types';
import { useStyles } from './EmptyFloor.styles';

export const EmptyFloor = ({ title, onClick }: ErrorFloorProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <FormSection
        title={formatMessage({ id: 'pim_details.inside.space_title' }, { space: title })}
        onAdd={onClick}
        isEditable={false}
      >
        {() => (
          <InfoSection emoji="🤔" className={classes.content}>
            <Typography variant="h3">{formatMessage({ id: AppMessages['pim_details.empty_floor.title'] })}</Typography>
            <Typography variant="h3">
              {formatMessage({ id: AppMessages['pim_details.empty_floor.description'] })}
            </Typography>
          </InfoSection>
        )}
      </FormSection>
    </Grid>
  );
};
