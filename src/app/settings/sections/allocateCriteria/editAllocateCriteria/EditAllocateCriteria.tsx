import React from 'react';
import { useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { Box, IconButton, Radio } from 'ui/atoms';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { ExitIcon, StampIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { EditAllocateCriteriaProps } from './EditAllocateCriteria.types';
import { useStyles } from './EditAllocateCriteria.styles';
import { TypeOfAllocation } from './typeOfAllocation/TypeOfAllocation';
import { People } from './people/People';

export const EditAllocateCriteria = ({ item }: EditAllocateCriteriaProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <>
      <Page
        title={formatMessage({ id: 'settings.allocate_criteria' })}
        titleActions={
          <Box display="flex" alignItems="center">
            <ListOptionsMenu hideEditButton>
              <ListOptionsMenuItem
                icon={<StampIcon />}
                onClick={() => {}}
                title={formatMessage({ id: 'settings.allocate_criteria.details.clone' })}
              />
              <ListOptionsMenuItem
                icon={<Radio color="primary" checked={false} className={classes.checkbox} />}
                onClick={() => {}}
                title={formatMessage({ id: 'settings.allocate_criteria.details.inactive' })}
              />
            </ListOptionsMenu>
            <Box ml={2} />
            <IconButton
              size="small"
              variant="rounded"
              onClick={() => push(`${AppRoute.settings}/customAllocateCriteria`)}
            >
              <ExitIcon />
            </IconButton>
          </Box>
        }
      >
        <Box width="100%">
          <Box mt={1}>
            <TypeOfAllocation />
          </Box>
          <Box mt={3}>
            <People />
          </Box>
        </Box>
      </Page>
    </>
  );
};
