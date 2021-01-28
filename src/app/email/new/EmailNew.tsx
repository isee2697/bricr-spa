import React, { useState } from 'react';

import { Box, Button, Grid, IconButton, NavBreadcrumb, NavBreadcrumbs } from 'ui/atoms';
import { useLocale } from 'hooks';
import { MenuIcon, ExitIcon } from 'ui/atoms/icons';
import { ActionTabs } from 'ui/molecules';
import { Page } from 'ui/templates';

import { useStyles } from './EmailNew.styles';
import { EmailNewTab } from './EmailNew.types';
import { Destinations } from './destinations/Destinations';
import { Subject } from './subject/Subject';
import { Description } from './description/Description';
import { Attachements } from './attachements/Attachements';

export const EmailNew = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [tab, setTab] = useState<EmailNewTab>(EmailNewTab.NewMail);

  const tabs = Object.keys(EmailNewTab).map(key => ({
    value: key,
    label: formatMessage({ id: `email.new_email.tab.${key}` }),
  }));

  return (
    <Grid item xs={12}>
      <Grid container className={classes.content}>
        <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
          <NavBreadcrumb title={formatMessage({ id: 'email.new_email' })} />
          <Box display="flex" alignItems="center">
            <NavBreadcrumbs />
            <Box ml={6} />
            <ActionTabs onStatusChange={setTab} tabs={tabs} status={tab} className={classes.tab} />
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <ExitIcon />
            </IconButton>
            <Box ml={3.5} />
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
        <Page withoutHeader>
          <Grid item xs={12}>
            <Box width="100%" mt={3} />
            <Destinations name={'to'} />
            <Box width="100%" mt={1} />
            <Destinations name={'cc'} />
            <Box width="100%" mt={1} />
            <Destinations name={'bcc'} />
            <Box width="100%" mt={1} />
            <Subject />
            <Box width="100%" mt={3} />
            <Description />
            <Box width="100%" mt={3} />
            <Attachements />
            <Box mt={4} width="100%" display="flex" alignItems="center" justifyContent="space-between">
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
          </Grid>
        </Page>
      </Grid>
    </Grid>
  );
};
