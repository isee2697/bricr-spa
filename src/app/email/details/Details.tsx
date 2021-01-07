import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Box, Button, Grid, IconButton, NavBreadcrumb, NavBreadcrumbs, Typography } from 'ui/atoms';
import { ClockIcon, DeleteIcon, PinIcon, ShareIcon } from 'ui/atoms/icons';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { Page } from 'ui/templates';
import { PIM_1 } from 'api/mocks/pim';
import { CRM } from 'api/mocks/crm';
import { SALES_LEADS } from 'api/mocks/sales';
import { Pim, CrmGeneral } from 'api/types';
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
import { LinkCrmRelationModalContainer } from './../linkCrmRelationModal/LinkCrmRelationModalContainer';

export const EmailDetails = ({ email }: EmailDetailsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { id, pinned, date, threadMessages = [] } = email;
  const { isOpen: isOpenPim } = useModalState('link-pim-object');
  const { isOpen: isOpenCrm } = useModalState('link-crm-relation');
  // const { isOpen: isOpenSales } = useModalState('link-sales-order');
  const { open, close } = useModalDispatch();
  const [linkedPims, setLinkedPims] = useState<Pim[]>([]);
  const [linkedRelations, setLinkedRelations] = useState<CrmItem[]>([]);
  const [linkedSalesOrders, setLinkedSalesOrders] = useState<SalesLead[]>([]);
  const [linkedCalendars, setLinkedCalendars] = useState<DateTime[]>([]);
  const { params } = useRouteMatch();
  const { push } = useHistory();

  const actions = [
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

  const handleLinkPims = () => {
    open('link-pim-object');
  };

  const handleLinkPimObjects = async (pims: string[]) => {
    close('link-pim-object');
    setLinkedPims([PIM_1]);
    setLinkedRelations([CRM, CRM]);
    setLinkedSalesOrders(SALES_LEADS);
    setLinkedCalendars([DateTime.local()]);
  };

  const handleLinkRelations = () => {
    open('link-crm-relation');
  };

  const handleLinkCrmRelations = async (crm: CrmGeneral) => {
    close('link-crm-relation');
    // setLinkedRelations([...linkedRelations, crm]);
  };

  const handleLinkSalesOrders = () => {
    open('link-sales-order');
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
                {DateTime.fromSeconds(parseInt(date, 10)).toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
              </Typography>
              <Box ml={4} />
              <IconButton
                variant="rounded"
                size="small"
                onClick={() => push(joinUrlParams(`${AppRoute.email}/inbox/:inboxId/:folderId`, params))}
              >
                <ShareIcon />
              </IconButton>
            </Box>
          </Box>
          <Page withoutHeader>
            <Destinations
              email={email}
              linkedPims={linkedPims}
              onLinkPims={handleLinkPims}
              linkedRelations={linkedRelations}
              onLinkRelations={handleLinkRelations}
              linkedSalesOrders={linkedSalesOrders}
              onLinkSalesOrders={handleLinkSalesOrders}
              actions={actions}
            />
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
            <Attachements email={email} />
            {threadMessages && threadMessages.length > 0 && (
              <>
                <Box width="100%" mt={5} mb={5} className={classes.splitter} />
                <Replies email={email} replies={threadMessages} />
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
      <LinkPimObjectModalContainer
        isOpened={isOpenPim}
        onClose={() => {
          close('link-pim-object');
        }}
        onSubmit={handleLinkPimObjects}
      />
      <LinkCrmRelationModalContainer
        isOpened={isOpenCrm}
        onClose={() => {
          close('link-crm-relation');
        }}
        onSubmit={handleLinkCrmRelations}
      />
    </>
  );
};
