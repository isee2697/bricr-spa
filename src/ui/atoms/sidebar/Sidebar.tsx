import React from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { useOverlayState } from 'hooks/useOverlayState/useOverlayState';

import * as S from './Sidebar.styles';

export const Sidebar = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const isOverlayActive = useOverlayState();

  return <S.Sidebar className={`${props.className} ${isOverlayActive ? 'hasOverlay' : ''}`} {...props} />;
};

Sidebar.Divider = S.SidebarDivider;
