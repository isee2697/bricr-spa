import React from 'react';

import { DocumentViewer, Popover } from 'ui/atoms';
import { SeeIcon } from 'ui/atoms/icons';
import { PreviewIconProps } from 'ui/molecules/previewIcon/PreviewIcon.types';

import { useStyles } from './PreviewIcon.styles';

export const PreviewIcon = ({ uri, onClick, className }: PreviewIconProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<SVGElement | null>(null);

  return (
    <>
      <SeeIcon
        className={className}
        aria-owns={!!anchorEl ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={event => setAnchorEl(event.currentTarget)}
        onMouseLeave={() => setAnchorEl(null)}
        onClick={e => {
          e.stopPropagation();
          onClick && onClick();
        }}
        data-testid="hover-view-icon"
      />
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        open={!!anchorEl}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={() => setAnchorEl(null)}
        disableRestoreFocus
      >
        <div
          className={classes.content}
          onClick={e => {
            e.stopPropagation();
            onClick && onClick();
          }}
        >
          <DocumentViewer
            data-testid="popover-document-viewer"
            className={classes.preview}
            config={{ header: { disableHeader: true } }}
            documents={[{ uri }]}
            isPreview={true}
          />
        </div>
      </Popover>
    </>
  );
};
