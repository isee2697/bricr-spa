import { PimDetailsQueryHookResult } from 'api/types';

export type PimDetailsProps = Pick<PimDetailsQueryHookResult, 'loading' | 'error' | 'data'>;
