import React from 'react';
import { AnyObject } from 'final-form';

import { PropertyStage } from 'ui/molecules';
import { DialogContent, Grid, Box, Typography } from 'ui/atoms';
import { PropertyStageItem } from 'ui/molecules/propertyStage/PropertyStage.types';
import { useStyles } from '../MovePimModal.styles';

export const StepBar = ({ steps, results, step }: AnyObject) => {
  const classes = useStyles();

  return (
    <DialogContent>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.stepperWrapper} width="100%" mt={3}>
            <PropertyStage
              baseSize={300}
              height="100%"
              items={steps.map((item: AnyObject, index: number) => {
                const result = { title: item.name, text: [] } as PropertyStageItem;

                if (index === 0 && step === 1 && results && Object.entries(results).length > 0) {
                  result.text = Object.entries(results).map((object: AnyObject) => {
                    return (
                      <Typography variant="h6">
                        <strong>{object[1].length}</strong> {object[0]}
                      </Typography>
                    );
                  });
                }

                return result;
              })}
              activeItem={step}
            />
          </Box>
        </Grid>
      </Grid>
    </DialogContent>
  );
};
