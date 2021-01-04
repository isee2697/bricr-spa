import React, { useState } from 'react';
import { DateTime } from 'luxon';
import clsx from 'classnames';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  NavBreadcrumb,
  NavBreadcrumbs,
  Typography,
} from 'ui/atoms';
import { ClockIcon, DeleteIcon, MenuIcon, PinIcon, ShareIcon } from 'ui/atoms/icons';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { Page } from 'ui/templates';
import { EmailReply } from '../Email.types';
import { PIM_1 } from 'api/mocks/pim';
import { CRM } from 'api/mocks/crm';
import { SALES_LEADS } from 'api/mocks/sales';
import { Pim } from 'api/types';
import { CrmItem } from 'app/crm/Crm.types';
import { SalesLead } from 'app/sales/salesLeads/SalesLeads.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { LinkPimObjectModalContainer } from '../linkPimObjectModal/LinkPimObjectModalContainer';

import { useStyles } from './Details.styles';
import { EmailDetailsProps } from './Details.types';
import { Subject } from './subject/Subject';
import { Description } from './description/Description';
import { Attachements } from './attachements/Attachements';
import { Replies } from './replies/Replies';
import { Destinations } from './destinations/Destinations';
import { LinkedItems } from './linkedItems/LinkedItems';

export const EmailDetails = ({ email }: EmailDetailsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const { id, pinned, date } = email;
  const { isOpen } = useModalState('link-pim-object');
  const { open, close } = useModalDispatch();
  const [linkedPims, setLinkedPims] = useState<Pim[]>([]);
  const [linkedRelations, setLinkedRelations] = useState<CrmItem[]>([]);
  const [linkedSalesOrders, setLinkedSalesOrders] = useState<SalesLead[]>([]);
  const [linkedCalendars, setLinkedCalendars] = useState<DateTime[]>([]);
  const { params } = useRouteMatch();
  const { push } = useHistory();

  const replies: EmailReply[] = [
    {
      id: '0001',
      from: {
        firstName: 'John',
        lastName: 'Doe',
        image: 'http://placeimg.com/80/80/people',
      },
      date: DateTime.local(),
      description: 'Billing discussion reply',
    },
  ];

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const actions = [
    {
      value: 'linkToCrm',
      icon: <ClockIcon />,
      onClick: () => {},
      isChecked: linkedRelations.length > 0,
    },
    {
      value: 'linkToPim',
      icon: <ClockIcon />,
      onClick: () => {
        open('link-pim-object');
      },
      isChecked: linkedPims.length > 0,
    },
    {
      value: 'linkToSales',
      icon: <ClockIcon />,
      onClick: () => {},
      isChecked: linkedSalesOrders.length > 0,
    },
    {
      value: 'linkToCalendar',
      icon: <ClockIcon />,
      onClick: () => {},
      isChecked: linkedCalendars.length > 0,
    },
    {
      value: 'print',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'reply',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'replyToAll',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'forward',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'markAsUnread',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'archive',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'delete',
      icon: <DeleteIcon color="inherit" />,
      onClick: () => {},
      color: 'red',
    },
  ];

  const handleLinkPimObjects = async (pims: string[]) => {
    close('link-pim-object');
    setLinkedPims([PIM_1]);
    setLinkedRelations([CRM]);
    setLinkedSalesOrders(SALES_LEADS);
    setLinkedCalendars([DateTime.local()]);
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid container className={classes.content}>
          <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
            <NavBreadcrumb title={id} />
            <NavBreadcrumbs />
            <Box display="flex" alignItems="center">
              <IconButton variant="rounded" size="small" onClick={() => {}}>
                <PinIcon color={pinned ? 'error' : 'inherit'} className={classes.pinIcon} />
              </IconButton>
              <Box ml={6} />
              <Typography variant="h5" className={classes.fontWeightMedium}>
                {DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
              </Typography>
              <Box ml={4} />
              <IconButton
                variant="rounded"
                size="small"
                onClick={() => push(joinUrlParams(`${AppRoute.email}/inbox/:inboxId/:folderId`, params))}
              >
                <ShareIcon />
              </IconButton>
              <Box ml={3.5} />
              <IconButton variant="rounded" size="small" onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
          <Page withoutHeader>
            <Destinations />
            <Subject email={email} />
            {(linkedPims.length > 0 ||
              linkedRelations.length > 0 ||
              linkedSalesOrders.length > 0 ||
              linkedCalendars.length > 0) && (
              <LinkedItems
                pimObjects={linkedPims}
                relations={linkedRelations}
                salesOrders={linkedSalesOrders}
                calendars={linkedCalendars}
              />
            )}
            <Description email={email} />
            <Attachements />
            {replies.length > 0 && (
              <>
                <Box width="100%" mt={5} mb={5} className={classes.splitter} />
                <Replies email={email} replies={replies} />
              </>
            )}
            <Box mt={8.75} width="100%" display="flex" alignItems="center" justifyContent="space-between">
              <Button color="primary" variant="outlined">
                {formatMessage({ id: 'common.cancel' })}
              </Button>
              <Button color="primary" variant="outlined">
                {formatMessage({ id: 'email.save_as_concept' })}
              </Button>
              <Button color="primary" variant="contained">
                {formatMessage({ id: 'common.send' })}
              </Button>
            </Box>
          </Page>
        </Grid>
      </Grid>
      <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
        {actions.map((action, index) => (
          <MenuItem
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              setMenuEl(null);
              action.onClick();
            }}
            className={clsx(classes.menuItem, action.color)}
          >
            {action.icon}
            <Box ml={2} display="flex" width="100%" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1">
                {formatMessage({
                  id: `email.action.${action.value}`,
                })}
              </Typography>
              {action.isChecked && <Checkbox color="primary" checked />}
            </Box>
          </MenuItem>
        ))}
      </Menu>
      <LinkPimObjectModalContainer
        isOpened={isOpen}
        onClose={() => {
          close('link-pim-object');
        }}
        onSubmit={handleLinkPimObjects}
      />
    </>
  );
};
