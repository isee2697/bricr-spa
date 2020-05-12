import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { DateTime } from 'luxon';

import { Avatar, Box, Typography, IconButton, ProgressFilling, Collapse, Button, Price, Chip } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons/menu/MenuIcon';
import { HelpIcon } from 'ui/atoms/icons/help/HelpIcon';
import { ArrowDownIcon } from 'ui/atoms/icons/arrowDown/ArrowDownIcon';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';

import { PropertyItemProps } from './PropertyItem.types';
import { useStyles } from './PropertyItem.styles';

import { PropertyStage } from '..';

export const PropertyItem = ({
  title,
  image,
  date,
  labels,
  discountPrice,
  salePrice,
  rentPrice,
  status,
  categories,
  completeness,
  alert,
  stageItems,
  stageIndex,
  isArchived,
  formerOwners,
  buyers,
  onMenuClick,
}: PropertyItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const [isCollapsed, setCollapse] = useState(false);
  const classes = useStyles({ isArchived });
  const theme = useTheme();

  return (
    <div className={classes.wrapper}>
      <Box display="flex" width="100%" flexDirection="column">
        <Box display="flex" mb={1}>
          <div>
            <Avatar variant="rounded" src={image} className={classes.image} />
          </div>
          <Box width="100%">
            <Box display="flex" justifyContent="space-between">
              <div>
                <Typography className={classes.date}>
                  {isArchived && formatMessage({ id: AppMessages['property_item.archived'] })}{' '}
                  {DateTime.fromISO(date.toString()).toRelative({ locale: intl.locale })}
                </Typography>
                <Typography className={classes.title}>{title}</Typography>
                <div className={classes.labels}>
                  {labels.length ? (
                    labels.map(label => (
                      <Box component="span" key={label}>
                        {label}
                      </Box>
                    ))
                  ) : (
                    <Box mb={2.5} />
                  )}
                </div>
              </div>
              <div>
                <IconButton variant="rounded" size="small" onClick={onMenuClick}>
                  <MenuIcon />
                </IconButton>
              </div>
            </Box>
            <div className={classes.content}>
              <div>
                {discountPrice ? (
                  <s className={classes.discountPrice}>
                    <Price
                      minimumFractionDigits={discountPrice % 1 === 0 ? 0 : 2}
                      maximumFractionDigits={discountPrice % 1 === 0 ? 0 : 2}
                      value={discountPrice}
                    />
                  </s>
                ) : (
                  <Box mb={2.5} />
                )}
                <div className={classes.prices}>
                  {salePrice && (
                    <div className={classes.price}>
                      <Price
                        value={salePrice}
                        minimumFractionDigits={salePrice % 1 === 0 ? 0 : 2}
                        maximumFractionDigits={salePrice % 1 === 0 ? 0 : 2}
                      />
                    </div>
                  )}
                  {rentPrice && (
                    <span>
                      <Price
                        value={rentPrice}
                        minimumFractionDigits={rentPrice % 1 === 0 ? 0 : 2}
                        maximumFractionDigits={rentPrice % 1 === 0 ? 0 : 2}
                      />{' '}
                      {formatMessage({ id: AppMessages['property_item.per_meter'] })}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <Box
                  className={isArchived ? classes.statusArchived : classes.status}
                  textAlign="end"
                  mb={0.5}
                  height={theme.spacing(2)}
                >
                  {status}
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  {categories.map(category => (
                    <Box ml={1} key={category}>
                      <Chip
                        variant="outlined"
                        color="primary"
                        {...(isArchived ? { fontcolor: theme.palette.green.main } : {})}
                        label={category}
                        size="small"
                      />
                    </Box>
                  ))}
                </Box>
              </div>
            </div>
          </Box>
        </Box>
        {!isArchived ? (
          <>
            <Box display="flex">
              <div className={classes.infoProgress}>
                <Box mb={1}>{formatMessage({ id: AppMessages['property_item.info_completed'] })}</Box>
                <ProgressFilling progress={completeness ?? 0} />
              </div>
              <Box ml={1.5} display="flex" alignItems="center" width="100%" justifyContent="space-between">
                {alert && (
                  <div className={classes.alert}>
                    <HelpIcon color="inherit" />
                    <Box ml={0.5}>{alert}</Box>
                  </div>
                )}
              </Box>
              <div className={classes.buttonWrapper}>
                <Button
                  color="ghost"
                  endIcon={<ArrowDownIcon color="primary" />}
                  onClick={() => setCollapse(prevState => !prevState)}
                >
                  {isCollapsed
                    ? formatMessage({ id: AppMessages['property_item.button_hide'] })
                    : formatMessage({ id: AppMessages['property_item.button_more'] })}
                </Button>
              </div>
            </Box>
            <Collapse in={isCollapsed}>
              <Box width="100%" mt={3}>
                <div className={classes.collapse}>{formatMessage({ id: AppMessages['property_item.progress'] })}</div>
                {stageItems && stageIndex !== undefined && <PropertyStage items={stageItems} activeItem={stageIndex} />}
              </Box>
            </Collapse>
          </>
        ) : (
          <Box display="flex" mt={1}>
            <Box display="flex" flexShrink={0} flexBasis={176} flexDirection="column">
              <Typography className={classes.archivedTitle}>
                {formatMessage({ id: AppMessages['property_item.former_owners'] })}
              </Typography>
              <Box>
                <Typography variant="h5" className={classes.archivedText}>
                  {formerOwners}
                </Typography>
              </Box>
            </Box>
            <Box ml={1.5} display="flex" flexShrink={0} flexDirection="column">
              <Typography className={classes.archivedTitle}>
                {formatMessage({ id: AppMessages['property_item.buyers'] })}
              </Typography>
              <Box>
                <Typography variant="h5" className={classes.archivedText}>
                  {buyers}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
};
