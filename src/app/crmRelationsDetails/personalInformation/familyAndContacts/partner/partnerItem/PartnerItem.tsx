import React, { useState } from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router';

import { Avatar, Box, Chip, Emoji, Typography } from 'ui/atoms';
import { DivorcedIcon, PassedAwayIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { ListOptionsMenu } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { PassedAwayModal } from '../passedAwayModal/PassedAwayModal';

import { useStyles } from './PartnerItem.styles';
import { PartnerItemProps } from './PartnerItem.types';

export const PartnerItem = ({ className, partner, onUpdate, onDelete }: PartnerItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const [passedAwayModal, setPassedAwayModal] = useState(false);

  const {
    isDivorced,
    partner: { id, firstName, lastName, avatar, isPassedAway, dateOfDeath },
  } = partner;

  return (
    <Box display="flex" className={clsx(className, (isDivorced || isPassedAway) && classes.inactive)}>
      <Box position="relative">
        <Avatar variant="square" src={avatar?.url || ''} className={classes.image}>
          {!avatar?.url && <Emoji>{'📷'}</Emoji>}
        </Avatar>
        {isDivorced ? (
          <Box className={classes.chipWrapper}>
            <Chip
              size="small"
              label={formatMessage({ id: 'crm.details.partner.divorced' })}
              className={classes.inactiveChip}
            />
          </Box>
        ) : (
          isPassedAway && (
            <Box className={classes.chipWrapper}>
              <Chip
                size="small"
                label={
                  <Box display="flex" alignItems="center">
                    {dateOfDeath && (
                      <Box mr={1.5}>{DateTime.fromJSDate(new Date(dateOfDeath)).toFormat('dd-MM-yyyy')}</Box>
                    )}
                    <PassedAwayIcon color="inherit" fontSize="small" />
                  </Box>
                }
                className={classes.inactiveChip}
              />
            </Box>
          )
        )}
      </Box>
      <Box width="100%" className={classes.paddingTwo}>
        <Box display="flex" justifyContent="space-between" className={classes.header}>
          <Typography variant="h4" className={classes.fontWeightMedium}>
            {firstName} {lastName}
          </Typography>
          <Box>
            <ListOptionsMenu
              id={`crm-details-partner-menu-${id}`}
              onDeleteClick={() => onDelete?.()}
              onEditClick={() =>
                push(`${AppRoute.crmRelationsDetails.replace(':id', id)}/personal_information_general`)
              }
            >
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'crm.details.partner.menu.divorce',
                })}
                icon={<DivorcedIcon />}
                onClick={() => {
                  onUpdate?.({ isDivorced: true, partner: { ...partner.partner, isPassedAway: false } });
                }}
              />
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'crm.details.partner.menu.passed_away',
                })}
                icon={<PassedAwayIcon />}
                onClick={() => setPassedAwayModal(true)}
              />
            </ListOptionsMenu>
            {passedAwayModal && (
              <PassedAwayModal
                onClose={() => setPassedAwayModal(false)}
                onSubmit={({ dateOfDeath }) => {
                  onUpdate?.({
                    isDivorced: false,
                    partner: { ...partner.partner, isPassedAway: true, dateOfDeath: dateOfDeath ?? undefined },
                  });
                  setPassedAwayModal(false);

                  return Promise.resolve({ error: false });
                }}
                isOpened={passedAwayModal}
              />
            )}
          </Box>
        </Box>
        <Box display="flex" className={classes.details}>
          <Box width="50%">
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.partner.office' })}
            </Typography>
            <Typography variant="h5">Vestiging Weert</Typography>
            <Typography variant="h5">Hendriks Makelaardij</Typography>
          </Box>
          <Box width="50%">
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.partner.contact' })}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
