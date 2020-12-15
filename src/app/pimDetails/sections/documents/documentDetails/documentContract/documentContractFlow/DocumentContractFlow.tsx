import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { Grid, Box, Typography, FormControlLabel, Checkbox } from 'ui/atoms';
import { HistoryIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';

import { useStyles } from './DocumentContractFlow.styles';
import { DocumentContractFlowProps } from './DocumentContractFlow.types';
import { ContractGeneralForm } from './forms/ContractGeneralForm';
import { ContractSalesPriceForm } from './forms/ContractSalesPriceForm';
import { ContractGroundLeaseForm } from './forms/ContractGroundLeaseForm';
import { ContractMovablePropertyForm } from './forms/ContractMovablePropertyForm';
import { ContractPublicLawForm } from './forms/ContractPublicLawForm';
import { ContractRemovalRightsForm } from './forms/ContractRemovableRightsForm';
import { ContractChargesnObligationsForm } from './forms/ContractChargesnObligationsForm';
import { ContractHandoverForm } from './forms/ContractHandoverForm';
import { ContractGuarenteeForm } from './forms/ContractGuarenteeForm';
import { ContractDissolutionsForm } from './forms/ContractDissolutionsForm';
import { ContractNHGForm } from './forms/ContractNHGForm';
import { ContractConstructionInsForm } from './forms/ContractConstructionInsForm';
import { ContractRegistrationForm } from './forms/ContractRegistrationForm';
import { ContractExtraArticlesForm } from './forms/ContractExtraArticlesForm';
import { ContractSigningForm } from './forms/ContractSigningForm';
import { ContractAllongeForm } from './forms/ContractAllongeForm';

export const DocumentContractFlow = ({ data }: DocumentContractFlowProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [allOpened, setAllOpened] = useState(false);

  const modifiedAt = new Date();
  const owner = 'Christian van Gils';

  return (
    <Page withoutHeader>
      <Grid item xs={12}>
        <Box>
          <FormControlLabel
            control={<Checkbox checked={allOpened} onChange={() => setAllOpened(!allOpened)} color="primary" />}
            label={
              <Typography variant="h5" className={classes.grayText}>
                {formatMessage({ id: 'pim_details.documents.open_all_card' })}
              </Typography>
            }
          />
        </Box>
        <Box mt={2.5}>
          <ContractGeneralForm documentKind={data.documentKind} />
        </Box>
        <Box mt={2.5}>
          <ContractSalesPriceForm />
        </Box>
        <Box mt={2.5}>
          <ContractGroundLeaseForm />
        </Box>
        <Box mt={2.5}>
          <ContractMovablePropertyForm />
        </Box>
        <Box mt={2.5}>
          <ContractPublicLawForm />
        </Box>
        <Box mt={2.5}>
          <ContractRemovalRightsForm />
        </Box>
        <Box mt={2.5}>
          <ContractChargesnObligationsForm />
        </Box>
        <Box mt={2.5}>
          <ContractHandoverForm />
        </Box>
        <Box mt={2.5}>
          <ContractGuarenteeForm />
        </Box>
        <Box mt={2.5}>
          <ContractDissolutionsForm />
        </Box>
        <Box mt={2.5}>
          <ContractNHGForm />
        </Box>
        <Box mt={2.5}>
          <ContractConstructionInsForm />
        </Box>
        <Box mt={2.5}>
          <ContractRegistrationForm />
        </Box>
        <Box mt={2.5}>
          <ContractExtraArticlesForm />
        </Box>
        <Box mt={2.5}>
          <ContractSigningForm />
        </Box>
        <Box mt={2.5}>
          <ContractAllongeForm />
        </Box>
        {/* {data.steps.map(step => (
      <Box mt={2.5}>
        <DocumentContractFlow stepInfo={step} documentKind={data.documentKind} />
      </Box>
    ))} */}
        <Box mt={7} display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" className={classes.grayText}>
            {modifiedAt && (
              <>
                {formatMessage({ id: 'common.last_updated' })}:{' '}
                <Typography component="span" variant="h5" className={classes.boldText}>
                  {DateTime.fromJSDate(modifiedAt).toFormat('dd-MM-yyyy HH:mm')} by {owner}
                </Typography>
              </>
            )}
          </Typography>
          <Typography variant="h5" className={classes.grayText}>
            <HistoryIcon />
          </Typography>
        </Box>
      </Grid>
    </Page>
  );
};
