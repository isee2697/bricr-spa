import { IMainState } from 'react-doc-viewer/build/state/reducer';

export type DocumentViewHeaderTypes = {
  state: IMainState;
  previousDocument: VoidFunction;
  nextDocument: VoidFunction;
};
