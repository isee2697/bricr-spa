import React from 'react';

import { Button } from 'ui/atoms';

import { useStyles } from './Buttons.styles';

export const CloseIconButton = () => {
  const classes = useStyles();

  return (
    <Button classes={{ root: classes.root, label: classes.buttonLabel }}>
      <svg width="161" height="52" viewBox="0 0 161 52" fill="none">
        <path
          opacity="0.8"
          d="M153.23 42.0734L160.194 10.6535C161.433 5.06235 157.043 -0.186837 151.321 0.0449097L80.3721 2.91833L9.3989 0.0439084C3.68441 -0.187529 -0.704487 5.04818 0.521249 10.6345L7.41576 42.0561C8.26178 45.9118 11.5906 48.7196 15.5338 48.9035L80.3178 51.924L145.116 48.9028C149.053 48.7193 152.378 45.9207 153.23 42.0734Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="162.647"
            y1="51.924"
            x2="132.412"
            y2="-43.1349"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0A57E9" />
            <stop offset="1" stopColor="#9FC0FF" />
          </linearGradient>
        </defs>
      </svg>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className={classes.closeButtonIcon}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1956 14.5536C16.4046 13.7626 15.1221 13.7626 14.331 14.5536C13.54 15.3447 13.54 16.6272 14.331 17.4182L21.8727 24.9599L14.331 32.5016L15.0381 33.2087L14.331 32.5016C13.54 33.2927 13.54 34.5752 14.331 35.3663C15.1221 36.1573 16.4046 36.1573 17.1956 35.3663L24.7373 27.8246L32.279 35.3663C33.0701 36.1573 34.3526 36.1573 35.1437 35.3663C35.9347 34.5752 35.9347 33.2927 35.1437 32.5016L27.602 24.9599L35.1437 17.4182C35.9347 16.6272 35.9347 15.3447 35.1437 14.5536C34.3526 13.7626 33.0701 13.7626 32.279 14.5536L24.7373 22.0953L17.1956 14.5536Z"
          fill="white"
        />
      </svg>
    </Button>
  );
};
