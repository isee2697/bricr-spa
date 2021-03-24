import React from 'react';
import { useIntl } from 'react-intl';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Typography, Chip } from 'ui/atoms';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { DmsTemplatesItemProps } from './DmsTemplatesItem.types';
import { useStyles } from './DmsTemplatesItem.styles';

export const DmsTemplatesItem = ({ template, onStatusChange, category }: DmsTemplatesItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const classes = useStyles(template);

  //  const { id, name, createdAt, avatar, labels, meta, status } = template;
  const { id, questionaireName, published } = template;
  
  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Box display="flex">
        <Box position="relative" className={classes.imageWrapper}>
          <Box className={classes.inactiveWrapper}>
              <Chip
                color="secondary"
                label={formatMessage({
                  id: 'dms.templates.inactive',
                })}
                className={classes.inactiveChip}
                size="small"
              />
            </Box>
          <div>{id}</div>
        </Box>
        <Box width="100%" display="flex" flexDirection="column" alignItems="space-between">
          <Box display="flex" justifyContent="space-between" mb={2}>
            <div>
              <Typography className={classes.date}>
                {/* {DateTime.fromISO(new Date(createdAt.toString()).toISOString()).toRelative({
                  locale: intl.locale,
                })} */}
                {Date()}
              </Typography>
              <Typography className={classes.title}>{questionaireName}</Typography>
              <Box mt={2}>
                {/* {labels.length
                  ? labels.map(label => (
                      <Box component="span" key={label} mr={2}>
                        <Chip variant="outlined" color="primary" label={label} size="small" />
                      </Box>
                    ))
                  : null} */}
              </Box>
            </div>
            <div>
              <ListOptionsMenu
                id={`dms-template-item-menu-${id}`}
                hideDeleteButton={category === 'bricr'}
                hideEditButton
              >
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'dms.templates.clone',
                  })}
                />
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'dms.templates.active_inactive',
                  })}
                  onClick={() => {
                    onStatusChange(published === true ? 'inactive' : 'active');
                  }}
                />
              </ListOptionsMenu>
            </div>
          </Box>
          {/* <Box display="flex" className={classes.stats}> */}
            {/* {Object.entries(meta).map(([key, value], index) => (
              <Box
                display="flex"
                flexDirection="column"
                className={clsx(classes.statItem, !value && 'disabled')}
                key={index}
              >
                <Typography className={classes.statInfo}>{value}</Typography>
                <Typography className={classes.statLabel}>
                  {formatMessage({ id: `dms.templates.stats.${key}` })}
                </Typography>
              </Box>
            ))} */}
          {/* </Box> */}
        </Box>
      </Box>
    </Box>
  );
};
