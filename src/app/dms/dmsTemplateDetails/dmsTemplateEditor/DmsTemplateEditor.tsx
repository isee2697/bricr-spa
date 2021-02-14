import React, { useState } from 'react';

import { Page } from 'ui/templates';
import { Box, IconButton } from 'ui/atoms';
import {
  AttachIcon,
  BoldIcon,
  BulletListIcon,
  HeadingOneIcon,
  HeadingTwoIcon,
  ItalicIcon,
  NumberListIcon,
  PhotoCameraIcon,
  QuoteIcon,
  SeeIcon,
  UnderlineIcon,
} from 'ui/atoms/icons';
import { DmsTemplateEditorPreview } from '../dmsTemplateEditorPreview/DmsTemplateEditorPreview';
import { DmsTemplateEditorPanel } from '../dmsTemplateEditorPanel/DmsTemplateEditorPanel';

import { DmsTemplateEditorProps } from './DmsTemplateEditor.types';
import { useStyles } from './DmsTemplateEditor.styles';

export const DmsTemplateEditor = ({
  template,
  showImages,
  onChangeShowImages,
  showAttachments,
  onChangeShowAttachments,
}: DmsTemplateEditorProps) => {
  const classes = useStyles();
  const [isPreview, setIsPreview] = useState(false);

  return (
    <>
      <Page
        showHeader
        title={template.name}
        titleActions={[]}
        afterTitle={
          <IconButton
            size="small"
            variant="roundedContained"
            className={classes.previewButton}
            onClick={() => setIsPreview(!isPreview)}
          >
            <SeeIcon />
          </IconButton>
        }
      >
        <Box mt={1} width="100%" display="flex" alignItems="center" justifyContent="space-between">
          <Box className={classes.toolbar} display="flex" width="100%" mr={2} pt={1} pb={1} pl={2}>
            <IconButton size="small" variant="rounded">
              <BoldIcon color="inherit" />
            </IconButton>
            <Box ml={2} />
            <IconButton size="small" variant="rounded">
              <ItalicIcon color="inherit" />
            </IconButton>
            <Box ml={2} />
            <IconButton size="small" variant="rounded">
              <UnderlineIcon color="inherit" />
            </IconButton>
            <Box ml={8} />
            <IconButton size="small" variant="rounded">
              <HeadingOneIcon color="inherit" />
            </IconButton>
            <Box ml={2} />
            <IconButton size="small" variant="rounded">
              <HeadingTwoIcon color="inherit" />
            </IconButton>
            <Box ml={8} />
            <IconButton size="small" variant="rounded">
              <QuoteIcon color="inherit" />
            </IconButton>
            <Box ml={2} />
            <IconButton size="small" variant="rounded">
              <NumberListIcon color="inherit" />
            </IconButton>
            <Box ml={2} />
            <IconButton size="small" variant="rounded">
              <BulletListIcon color="inherit" />
            </IconButton>
            <Box ml={2} />
            <IconButton size="small" variant="rounded" onClick={onChangeShowImages} selected={showImages}>
              <PhotoCameraIcon color="inherit" />
            </IconButton>
          </Box>
          <IconButton
            size="small"
            variant="rounded"
            className={classes.previewButton}
            selected={showAttachments}
            onClick={onChangeShowAttachments}
          >
            <AttachIcon />
          </IconButton>
        </Box>
        {!isPreview && <DmsTemplateEditorPanel />}
        {isPreview && <DmsTemplateEditorPreview />}
      </Page>
    </>
  );
};
