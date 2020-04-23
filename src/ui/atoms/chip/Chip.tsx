import * as React from 'react';
import { ChipProps as DefaultChipProps } from '@material-ui/core/Chip';

import * as S from './Chip.styles';

export type ChipProps = DefaultChipProps;

export const Chip = (props: ChipProps) => <S.Chip {...props} />;
