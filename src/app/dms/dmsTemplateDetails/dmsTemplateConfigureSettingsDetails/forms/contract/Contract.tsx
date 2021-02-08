import React, { useState } from 'react';

import { Box, Card, CardContent, CardHeader, Checkbox, FormControlLabel, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { ContractStepType } from 'app/pimDetails/sections/documents/documentDetails/documentContract/DocumentContract.types';

import { ContractProps, ContractStepCheckType } from './Contract.types';
import { useStyles } from './Contract.styles';

export const Contract = ({ template }: ContractProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [steps, setSteps] = useState<ContractStepCheckType>(
    Object.keys(ContractStepType).reduce((stepChecks, item) => ({ ...stepChecks, [item]: true }), {}),
  );

  return (
    <Page showHeader title={template.name} titleActions={[]}>
      <Card>
        <CardHeader title={formatMessage({ id: 'dms.templates.activate_cards_contract' })} />
        <CardContent>
          {Object.keys(steps).map(item => (
            <Box my={0.75} key={item}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={steps[item]}
                    onChange={() => setSteps({ ...steps, [item]: !steps[item] })}
                  />
                }
                label={
                  <Typography variant="h3" color="textSecondary" className={classes.fontWeightBold}>
                    {formatMessage({
                      id: `dms.templates.contract_types.${item}`,
                    })}
                  </Typography>
                }
              />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Page>
  );
};
