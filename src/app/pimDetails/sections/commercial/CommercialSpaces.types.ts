import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { BogSpaceType, BogSpace, File, UpdateBogSpaceInput, PimBogSpacesQuery } from 'api/types';

export type AddCommercialSpaceInput = {
  type: BogSpaceType;
  name: string;
};

export type CommercialSpaceInformationSubmit = {
  description: string;
};

export type AddCommercialSpaceModalContainerProps = {
  onModalClose: VoidFunction;
  isModalOpen: boolean;
};

export type AddCommercialSpaceModalProps = AddCommercialSpaceModalContainerProps & {
  onModalSubmit: (data: AddCommercialSpaceInput) => Promise<{ error: boolean } | undefined>;
};

export type CommercialSpacesInformationProps = {
  data: PimBogSpacesQuery;
  onSave: (data: CommercialSpaceInformationSubmit) => Promise<{ error: boolean } | undefined>;
};

export type CommercialSpaceFormProps = {
  commercialSpace: BogSpace;
  index: number;
};

export type UpdateSingleCommercialSpace = Partial<UpdateBogSpaceInput> & {
  pictures: [File];
};

export type CommercialSpacesProps = PimDetailsSectionProps & CommercialSpacesInformationProps;
