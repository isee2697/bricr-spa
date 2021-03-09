import { IMainState } from 'react-doc-viewer/build/state/reducer';
import { DocViewerProps } from 'react-doc-viewer';

export type DocumentViewHeaderTypes = {
  state: IMainState;
  previousDocument: VoidFunction;
  nextDocument: VoidFunction;
};

export type DocumentViewProps = DocViewerProps & { isPreview?: boolean };
