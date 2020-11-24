import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { Box, IconButton, Typography } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { ContractTemplatesRowProps } from './ContractTemplatesRow.types';
import { useStyles } from './ContractTemplatesRow.styles';

export const ContractTemplatesRow = ({
  checked,
  checkbox,
  item: { id, name, note, version, dateVersion },
}: ContractTemplatesRowProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const handleNavigateToDetails = () => {
    push(joinUrlParams(AppRoute.contractTemplates, { contractTemplateId: id }));
  };

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box className={classes.rowItem} onClick={handleNavigateToDetails}>
        <Box display="flex">
          <Box display="flex">
            <Typography variant="h3" className={classes.fontWeightBold}>
              {formatMessage({ id: `settings.documents.contract_templates.version` }, { version })}
            </Typography>
            <Box ml={0.5} />
            <Typography variant="h3" color="textSecondary" className={classes.fontWeightBold}>
              {dateVersion.toLocaleString(DateTime.DATE_SHORT)}
            </Typography>
          </Box>
          <Box width="100%" ml={2} mr={2}>
            <Typography variant="h5" className={classes.fontWeightBold}>
              {name}
            </Typography>
            <Typography variant="h5">{note}</Typography>
          </Box>
          <Box>
            <IconButton size="small" variant="rounded">
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
