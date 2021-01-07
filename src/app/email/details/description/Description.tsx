import React, { createRef, useEffect, useState } from 'react';

import { EmailSectionsProps } from '../Details.types';
import { Box, Card, CardContent } from 'ui/atoms';

import { useStyles } from './Description.styles';

export const Description = ({ email: { body } }: EmailSectionsProps) => {
  const classes = useStyles();
  const iframeRef = createRef<HTMLIFrameElement>();
  const [height, setHeight] = useState<number>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (loaded && iframeRef.current) {
      const checkHeight = iframeRef?.current?.contentWindow?.document.body.scrollHeight;

      setHeight(old => (old !== checkHeight ? checkHeight : old));
    }
  }, [iframeRef, setHeight, loaded]);

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Box mt={4} mr={3} ml={3} mb={4}>
          <iframe
            title="mail-detail"
            ref={iframeRef}
            height={height}
            onLoad={() => setLoaded(true)}
            sandbox="allow-same-origin"
            scrolling="no"
            frameBorder="0"
            width="100%"
            srcDoc={body}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
