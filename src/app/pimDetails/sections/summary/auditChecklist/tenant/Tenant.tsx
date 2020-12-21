import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader, Typography, Grid, IconButton } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';

export const Tenant = () => {
  const { formatMessage } = useLocale();
  const [comment, setComment] = useState(
    'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters namen ze door elkaar husselde om een font-catalogus te maken.',
  );
  const [isEditingComments, setIsEditingComments] = useState(false);

  const handleSaveComments = async (values: { comment: string }) => {
    setComment(values.comment);

    return undefined;
  };

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.tenant' })} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.tenant.tenant1' })}
                </Typography>
                <Typography variant="h4">C.G.M. van Gils</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.tenant.signed' })}
                </Typography>
                <Typography variant="h4">{DateTime.local().toLocaleString(DateTime.DATE_SHORT)}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.tenant.service' })}
                </Typography>
                <Typography variant="h4">{formatMessage({ id: 'common.yes' })}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.tenant.deposit' })}
                </Typography>
                <Typography variant="h4">€ 795,00</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.tenant.id_check' })}
                </Typography>
                <Typography variant="h4">{DateTime.local().toLocaleString(DateTime.DATE_SHORT)}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.tenant.credit_check' })}
                </Typography>
                <Typography variant="h4">{DateTime.local().toLocaleString(DateTime.DATE_SHORT)}</Typography>
              </Grid>
              <Grid item xs={6} />
              <Grid item xs={6}>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.tenant.score' })}
                </Typography>
                <Typography variant="h4">34</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h5" color="textSecondary">
                {formatMessage({ id: 'pim_details.summary.tenant.tenant2' })}
              </Typography>
              <Typography variant="h4">S.Pit</Typography>
            </Box>
            <Box>
              <Typography variant="h5" color="textSecondary">
                {formatMessage({ id: 'pim_details.summary.tenant.reno' })}
              </Typography>
              <Typography variant="h4">{formatMessage({ id: 'common.yes' })}</Typography>
            </Box>
            <Box>
              <Typography variant="h5" color="textSecondary">
                {formatMessage({ id: 'pim_details.summary.tenant.energy_label' })}
              </Typography>
              <Typography variant="h4">A+</Typography>
            </Box>
            <Box>
              <Typography variant="h5" color="textSecondary">
                {formatMessage({ id: 'pim_details.summary.tenant.peP_and_sanction_check' })}
              </Typography>
              <Typography variant="h4">{DateTime.local().toLocaleString(DateTime.DATE_SHORT)}</Typography>
            </Box>
            <Box>
              <Typography variant="h5" color="textSecondary">
                {formatMessage({ id: 'pim_details.summary.tenant.risc_qualification' })}
              </Typography>
              <Typography variant="h4">{formatMessage({ id: 'common.high' })}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="h5" color="textSecondary">
            {formatMessage({ id: 'pim_details.summary.tenant.comments' })}
          </Typography>
          <IconButton size="small" variant="rounded" onClick={() => setIsEditingComments(!isEditingComments)}>
            <EditIcon />
          </IconButton>
          {!isEditingComments && <Typography variant="h3">{comment}</Typography>}
          {isEditingComments && (
            <AutosaveForm initialValues={{ comment }} onSave={handleSaveComments}>
              <Grid item xs={12}>
                <GenericField name="comment" />
              </Grid>
            </AutosaveForm>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
