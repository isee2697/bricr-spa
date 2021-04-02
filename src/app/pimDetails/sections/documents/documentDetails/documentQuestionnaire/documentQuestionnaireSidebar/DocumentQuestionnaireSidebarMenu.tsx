import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { LockIcon, SaleIcon, TriggerIcon } from 'ui/atoms/icons';
import { MenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { Box, Scrollable, SidebarTitleTile, UserAvatar } from 'ui/atoms';
import { useLocale } from 'hooks';
import { QuestionnaireConfigureItems } from 'app/dms/dmsDetailsSidebarMenu/configureItems/questionnaire/QuestionnaireConfigureItems';

import { DocumentQuestionnaireSidebarMenuProps } from './DocumentQuestionnaireSidebarMenu.types';

export const DocumentQuestionnaireSidebarMenu = ({
  onHide,
  isVisible,
  data,
  onChangeStep,
}: DocumentQuestionnaireSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

  const baseSize = 90;

  const isOnSecurityPage = pathname.endsWith('/security');

  const items: MenuItem[] = [{ key: 'security', icon: <LockIcon /> }];

  if (isOnSecurityPage) {
    items.unshift({ key: 'data', icon: <TriggerIcon /> });
  }

  const menu = {
    url,
    groups: [
      {
        items,
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="pim_details.documents.menu"
      menu={menu}
      menuTitleIcon={<SaleIcon />}
      menuTitle={
        <>
          <SidebarTitleTile
            title={'Van der Meerstraat'}
            subtitle={formatMessage({ id: 'documents.questionnaire.residential' })}
            icon={
              <UserAvatar name={'Van der Meerstraat'} avatar={'http://placeimg.com/32/32/arch'} variant="rounded" />
            }
          />
          <Box mt={2} />
          {!isOnSecurityPage && (
            <Scrollable width="100%" height={baseSize * data.steps.length}>
              <QuestionnaireConfigureItems data={data} onChangeStep={onChangeStep} />
            </Scrollable>
          )}
        </>
      }
    />
  );
};
