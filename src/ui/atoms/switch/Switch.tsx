import React from 'react';

import { SwitchProps } from './Switch.types';
import * as S from './Switch.styles';

export const Switch = (props: SwitchProps) => <S.Switch disableRipple {...props} />;
