import React from 'react';
import classNames from 'classnames';

import { Grid, Box, Typography, Fade, Slide, Emoji } from 'ui/atoms';
import { useClaimSpaceHook } from '../../hooks/useClaimSpaceHook/useClaimSpaceHook';
import logo from 'assets/images/logo_no_text.svg';
import { CheckIcon } from '../../ui/atoms/icons';
import { useLocale } from '../../hooks';

import { useStyles } from './RegisterInfoScreen.styles';

export const RegisterInfoScreen = () => {
  const { isClaimed, isCheckingSpaceName, suggestions, spaceName, updateClaimSpace } = useClaimSpaceHook();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Fade in={isClaimed !== undefined || isCheckingSpaceName}>
      <Grid item md={12} lg={6} xl={4} className={classes.root}>
        <Slide in={isClaimed}>
          <Box mb={3} className={classNames(classes.box, classes.error)}>
            <Emoji children={`😭 ${formatMessage({ id: 'register.already_claimed' })}`} />
          </Box>
        </Slide>
        <Box mb={3} className={classes.box}>
          <img className={classNames(classes.logo, isCheckingSpaceName ? classes.loading : '')} src={logo} />
        </Box>
        <Box mb={0.5} className={classes.box}>
          <Typography variant="h4" className={classes.spaceName}>
            {spaceName}
          </Typography>
        </Box>
        <Box className={classes.box}>
          <Typography className={classes.textColor} variant="h4">
            {spaceName}
            {formatMessage({ id: 'register.url' })}
          </Typography>
        </Box>
        {isClaimed === false && (
          <>
            <Box mt={2} className={classes.box}>
              <CheckIcon className={classes.checkIcon} />
            </Box>
            <Box mt={4} className={classes.box}>
              <Typography variant="h4" className={classes.spaceName}>
                {formatMessage({ id: 'register.claim_now' })}
              </Typography>
            </Box>
            <Box mt={1} className={classes.box}>
              <Typography variant="h4" className={classes.textColor}>
                <div dangerouslySetInnerHTML={{ __html: formatMessage({ id: 'register.start_free_trial' }) }} />
              </Typography>
            </Box>
          </>
        )}
        {isClaimed && (
          <>
            <Box mt={3} className={classes.box}>
              <Typography variant="h4" className={classes.spaceName}>
                {formatMessage({ id: 'register.suggestions' })}
              </Typography>
            </Box>
            <Box mb={2} />
            {suggestions &&
              suggestions.map(suggestion => (
                <Typography
                  onClick={() => updateClaimSpace({ spaceName: suggestion, isClaimed: false })}
                  className={classNames(classes.textColor, classes.link)}
                  key={suggestion}
                  variant="h4"
                >
                  {suggestion}
                  {formatMessage({ id: 'register.url' })}
                </Typography>
              ))}
          </>
        )}
      </Grid>
    </Fade>
  );
};
