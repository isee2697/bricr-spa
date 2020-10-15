import React, { useState } from 'react';

import { Card, CardContent, Tabs, Tab } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Collapse } from 'ui/atoms';

import { Participants } from './Participants';
import { useStyles } from './ParticipantsLocation.styles';
import { ParticipantsLocationProps } from './ParticipantsLocation.types';

export const ParticipantsLocation = ({ members, locations }: ParticipantsLocationProps) => {
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(0);
  const classes = useStyles();

  return (
    <Card>
      <Tabs
        className={classes.tabs}
        onChange={(e, value) => setActiveTab(value)}
        value={activeTab}
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label={formatMessage({ id: 'appointment.participants.title' })} />
        <Tab label={formatMessage({ id: 'appointment.location.title' })} />
      </Tabs>
      <CardContent>
        <Collapse in={activeTab === 0}>
          <Participants members={members} />
        </Collapse>
        <Collapse in={activeTab === 1}>
          <>locs</>
        </Collapse>
      </CardContent>
    </Card>
  );
};
