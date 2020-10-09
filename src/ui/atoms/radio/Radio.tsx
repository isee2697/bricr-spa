import React from 'react';
import { CheckCircleRounded } from '@material-ui/icons';

import { RadioProps } from './Radio.types';
import * as S from './Radio.styles';

export const Radio = (props: RadioProps) => <S.Radio checkedIcon={<CheckCircleRounded />} {...props} />;
