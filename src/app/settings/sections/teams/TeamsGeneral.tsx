import React, { useState } from 'react';

import { InfoCardPage } from 'ui/templates';
import { NavBreadcrumb, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { CreateTeamModalContainer } from 'app/settings/sections/teams/modals/CreateTeamModalContainer';
import { AppRoute } from 'routing/AppRoute.enum';
import { AutosaveForm } from 'ui/organisms';

export const TeamsGeneral = ({ hasTeams }: { hasTeams: boolean }) => {
  const { formatMessage } = useLocale();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <NavBreadcrumb to={AppRoute.teams} title={formatMessage({ id: 'settings.teams.card_title' })} />
      <InfoCardPage
        cardTitle={formatMessage({ id: 'settings.teams.card_title' })}
        infoEmoji="👨‍👦‍👦"
        emptyTextFirst={formatMessage({ id: 'settings.teams.empty_title' })}
        emptyTextSecond={formatMessage({ id: 'settings.teams.empty_description' })}
        infoTextFirst={formatMessage({ id: 'settings.teams.info_title' })}
        infoTextSecond={formatMessage({ id: 'settings.teams.info_description' })}
        emptyEmoji="😢"
        isEmpty={!hasTeams}
        title={formatMessage({ id: 'settings.teams.add' })}
        showHeader
        headerProps={{ actionText: formatMessage({ id: 'settings.teams.add' }), onAction: () => setModalOpen(true) }}
        titleActions={<></>}
      >
        {hasTeams && <Typography>{formatMessage({ id: 'settings.teams.info_explenation' })}</Typography>}
      </InfoCardPage>
      <CreateTeamModalContainer isOpened={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
