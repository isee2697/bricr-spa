import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Box, IconButton } from 'ui/atoms';
import { ExitIcon, HomeIcon } from 'ui/atoms/icons';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { MatchPropertyType } from 'api/types';

import { Location } from './location/Location';
import { Extras } from './extras/Extras';
import { General } from './general/General';
import { CreateNewMatchProfileProps } from './CreateNewMatchProfile.types';
import { EstateType } from './estateType/EstateType';
import { CommercialEstateType } from './commercialEstateType/CommercialEstateType';
import { Measurements } from './measurements/Measurements';
import { SurfaceProperty } from './surfaceProperty/SurfaceProperty';
import { SurfacePlot } from './surfacePlot/SurfacePlot';
import { CharacteristicsProperty } from './characteristicsProperty/CharacteristicsProperty';
import { Characteristics } from './characteristics/Characteristics';
import { Pricing } from './pricing/Pricing';
import { Outside } from './outside/Outside';
import { Garden } from './garden/Garden';
import { Conditions } from './conditions/Conditions';
import { Services } from './services/Services';
import { RevenueAndExploitation } from './revenueAndExploitation/RevenueAndExploitation';
import { Tags } from './tags/Tags';

export const CreateNewMatchProfile = ({
  path,
  onSidebarOpen,
  isSidebarVisible,
  matchProfile,
  onSave,
}: CreateNewMatchProfileProps) => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box display="flex">
            <ListOptionsMenu onDeleteClick={() => {}} hideEditButton>
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'crm.details.personal_information_match_profile.active_inactive',
                })}
                icon={<HomeIcon />}
              />
            </ListOptionsMenu>
            <Box ml={3} />
            <IconButton size="small" variant="rounded" onClick={() => push(joinUrlParams(path, { id }))}>
              <ExitIcon />
            </IconButton>
          </Box>
        }
      />
      <Page title={formatMessage({ id: 'crm.details.personal_information_match_profile.title' })} titleActions={<></>}>
        <General onSave={onSave} />
        {(!matchProfile || matchProfile.propertyType !== MatchPropertyType.Commercial) && (
          <>
            <EstateType />
            <Measurements onSave={onSave} />
            <SurfacePlot onSave={onSave} />
            <CharacteristicsProperty onSave={onSave} />
            <Pricing onSave={onSave} />
            <Outside onSave={onSave} />
            <Garden onSave={onSave} />
            <Tags onSave={onSave} />
            <Location onSave={onSave} />
            <Extras onSave={onSave} />
          </>
        )}
        {matchProfile && matchProfile.propertyType === MatchPropertyType.Commercial && (
          <>
            <CommercialEstateType />
            <SurfaceProperty onSave={onSave} />
            <SurfacePlot onSave={onSave} />
            <Conditions onSave={onSave} />
            <Characteristics onSave={onSave} />
            <Services onSave={onSave} />
            <RevenueAndExploitation onSave={onSave} />
            <Tags onSave={onSave} />
            <Location onSave={onSave} />
          </>
        )}
      </Page>
    </>
  );
};
