import React, { useState } from 'react';
import { Form, AnyObject } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { Modal, PropertyStage } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { DialogContent, Grid, Box, Typography } from 'ui/atoms';
import { Pim as PimEntity } from 'api/types';
import { PropertyStageItem } from 'ui/molecules/propertyStage/PropertyStage.types';

import { MovePimModalProps, ObjectType } from './MovePimModal.types';
import { SelectObjectStep } from './selectObjectStep/SelectObjectStep';
import { SelectTeamsStep } from './selectTeamsStep/SelectTeamsStep';
import { ResultStep } from './resultStep/ResultStep';
import { useStyles } from './MovePimModal.styles';

const steps = [
  {
    name: 'select_objects',
    component: SelectObjectStep,
  },
  {
    name: 'select_teams',
    component: SelectTeamsStep,
  },
  {
    name: 'result',
    component: ResultStep,
  },
];

export const MovePimModal = ({ onSubmit, isOpen, options, data }: MovePimModalProps) => {
  const [step, setStep] = useState(0);
  const [results, updateResults] = useState({});
  const currentStep = steps[step];
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();
  const classes = useStyles();

  const handleNext = () => {
    setStep(i => i + 1);
  };

  const handlePrev = () => {
    setStep(i => i - 1);
  };

  const generateData = () => {
    if (data) {
      const newObjects = Object.entries(JSON.parse(JSON.stringify(data)));
      const newData: { [key: string]: PimEntity[] } = {};

      newObjects.forEach((object: AnyObject) => {
        newData[object[0] as string] = object[1].listPims.items as PimEntity[];
      });

      return newData;
    }

    return {};
  };

  const handleUpdate = async (data: ObjectType) => {
    updateResults(data);
  };

  const handleSubmit = async (body: AnyObject) => {
    const response = await onSubmit(body);

    if (!response) {
      return;
    }

    if (!response.error) {
      setStep(0);
    }

    return response;
  };

  const handleClose = () => {
    close('move-pim');
    setStep(0);
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={{}} mutators={{ ...arrayMutators }}>
      {({ handleSubmit, submitErrors, values }) => (
        <Modal
          fullWidth
          isOpened={isOpen}
          onClose={handleClose}
          className={classes.modal}
          title={formatMessage({
            id: `add_pim.${currentStep.name}.title`,
            defaultMessage: formatMessage({ id: `add_pim.${currentStep.name}.title` }),
          })}
        >
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <Grid container>
                <Grid item xs={12}>
                  <Box className={classes.stepperWrapper} width="100%" mt={3}>
                    <PropertyStage
                      baseSize={300}
                      height="100%"
                      items={steps.map((item, index) => {
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
            {React.createElement(currentStep.component, {
              onNext: handleNext,
              onPrev: handlePrev,
              objects: data && Object.entries(data).length > 0 ? generateData() : {},
              onUpdate: handleUpdate,
              options,
              results,
              onClose: handleClose,
            })}
          </form>
        </Modal>
      )}
    </Form>
  );
};
