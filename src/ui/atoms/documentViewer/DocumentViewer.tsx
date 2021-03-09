import React from 'react';
import DocViewer, { DocViewerProps, DocViewerRenderers } from 'react-doc-viewer';

import { DocumentViewerHeaderOverride } from 'ui/atoms/documentViewer/DocumentViewerHeader';

import { useStyles } from './DocumentView.styles';

export const DocumentViewer = ({ pluginRenderers, ...props }: DocViewerProps) => {
  const classes = useStyles();
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
      className={classes.root}
    />
  );
};
