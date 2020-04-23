import React from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import * as S from './Sidebar.styles';

export const Sidebar = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <S.Sidebar {...props} />
);

Sidebar.Divider = S.SidebarDivider;
