import {
  CadastreMap,
  CadastrePlot,
  CadastreMapType,
  CadastreType,
  PimCadastre,
  CodeSizeType,
  OwnershipChoiceType,
  CadastreOwnershipType,
} from 'api/types';

import { FILE_1 } from './file';

export const CADASTRE_MAP_1: CadastreMap = {
  id: 'sdfsdf-fdsf-dsfdsfds',
  mapName: 'my cadastre name',
  file: FILE_1,
  description: 'My cadastre',
  type: CadastreMapType.Register,
};

export const CADASTRE_MAP_2: CadastreMap = {
  id: 'sdfsdf-fdsf-dsfdsfds',
  mapName: 'my cadastre name',
  file: FILE_1,
  description: 'My cadastre',
  type: CadastreMapType.Map,
};

export const CADASTRE_PLOT_1: CadastrePlot = {
  notes: 'some notes',
  name: 'my plot name',
  municipalCode: 'mcode',
  sectionCode: 'scode',
  plot: 'plot',
  indexNumber: '5',
  surface: 5,
  share: 'hi',
  codeSize: CodeSizeType.Apartment,
  ownershipType: CadastreOwnershipType.AnnualLeaseholdChargedWith,
  ownershipChoice: OwnershipChoiceType.UseAndHabitation,
};

export const CADASTRE_1 = {
  id: 'cadastre-id-1',
  description: 'my desc',
  type: CadastreType.CadastreMap,
  maps: [CADASTRE_MAP_1],
  dateCreated: new Date().toISOString(),
  dateUpdated: new Date().toISOString(),
  lastEditedBy: {
    id: 'foo',
    firstName: 'fooName',
    lastName: 'fooLastName',
    email: 'a@b.c',
    isActive: true,
  },
};

export const CADASTRE_2 = {
  id: 'cadastre-id-2',
  description: 'my desc',
  type: CadastreType.Plot,
  plot: CADASTRE_PLOT_1,
  dateCreated: new Date().toISOString(),
  dateUpdated: new Date().toISOString(),
  lastEditedBy: {
    id: 'foo',
    firstName: 'fooName',
    lastName: 'fooLastName',
    email: 'a@b.c',
    isActive: true,
  },
};

export const CADASTRE_3 = {
  id: 'cadastre-id-3',
  description: 'my desc',
  type: CadastreType.Plot,
  plot: CADASTRE_PLOT_1,
  dateCreated: new Date().toISOString(),
  dateUpdated: new Date().toISOString(),
  lastEditedBy: {
    id: 'foo',
    firstName: 'fooName',
    lastName: 'fooLastName',
    email: 'a@b.c',
    isActive: true,
  },
};

export const PIM_CADASTRE_1: PimCadastre = {
  id: 'pim-cadastre-1',
  cadastre: [CADASTRE_1, CADASTRE_2],
};
