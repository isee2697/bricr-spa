import { Company } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type AccountProps = {
  data: Company;
  onSave: PromiseFunction<Company>;
};
