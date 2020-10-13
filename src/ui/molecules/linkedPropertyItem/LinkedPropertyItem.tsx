import React from 'react';
import { Card, CardHeader, CardContent, Grid, Typography, Box, IconButton } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';

import { LinkedPropertyItemProps } from './LinkedPropertyItem.types';
import { useStyles } from './LinkedPropertyItem.styles';
import { LinkedPropertyItemCol } from './linkedPropertyItemCol/LinkedPropertyItemCol';

export const LinkedPropertyItem = ({
  image,
  title,
  project,
  address,
  price,
  owner,
  accManager,
  status,
  plotNumber,
  pimAttention,
  onEditClick,
}: LinkedPropertyItemProps) => {
  const classes = useStyles({ image });

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={3}>
          <Box className={classes.image} />
        </Grid>
        <Grid item xs={9}>
          <CardHeader
            className={classes.header}
            title={
              <Typography className={classes.title} variant="h4">
                {title}
              </Typography>
            }
            action={
              <Grid className={classes.link} container alignItems="center">
                <IconButton onClick={onEditClick} variant="rounded" size="small">
                  <EditIcon color="inherit" />
                </IconButton>
              </Grid>
            }
          />
          <CardContent className={classes.content}>
            <Box className={classes.row}>
              <Grid container spacing={3}>
                <LinkedPropertyItemCol labelId="linked_property.address" title={address} />
                <LinkedPropertyItemCol labelId="linked_property.project" title={project} />
                <LinkedPropertyItemCol labelId="linked_property.price" title={price} />
              </Grid>
            </Box>
            <Box className={classes.row}>
              <Grid container spacing={3}>
                <LinkedPropertyItemCol labelId="linked_property.owner" title={owner} />
                <LinkedPropertyItemCol labelId="linked_property.acc_manager" title={accManager} />
                <LinkedPropertyItemCol labelId="linked_property.status" title={status} />
              </Grid>
            </Box>
            <Box pt={2}>
              <Grid container spacing={3}>
                <LinkedPropertyItemCol labelId="linked_property.plot_number" title={plotNumber} />
                <LinkedPropertyItemCol labelId="linked_property.pim_attention" title={pimAttention} />
              </Grid>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
