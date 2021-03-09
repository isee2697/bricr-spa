import React from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

import { DocumentViewerHeaderOverride } from 'ui/atoms/documentViewer/DocumentViewerHeader';

import { useStyles } from './DocumentView.styles';
import { DocumentViewProps } from './DocumentView.types';

export const DocumentViewer = ({ pluginRenderers, isPreview, ...props }: DocumentViewProps) => {
  const classes = useStyles(!!isPreview);
  const renderers = pluginRenderers ?? DocViewerRenderers;

  return (
    <DocViewer
      {...props}
      pluginRenderers={renderers}
      config={{
        ...(props.config ?? {}),
        header: {
          ...(props.config?.header ?? {}),
          overrideComponent: DocumentViewerHeaderOverride,
        },
      }}
      className={`${classes.root} ${props.className}`}
    />
  );
};
