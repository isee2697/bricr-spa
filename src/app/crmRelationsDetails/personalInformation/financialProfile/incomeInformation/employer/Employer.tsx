import React, { useState } from 'react';
import { Grid, Box, Button, Typography, Avatar, Emoji } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { DropdownField, GenericField, RadioGroupField } from 'form/fields';
import { InfoSection } from 'ui/molecules';
import { EditIcon, LinkIcon, SquareIcon } from 'ui/atoms/icons';
import { IncomeInformationTypeOfEmployment } from '../IncomeInformation.types';

import { useStyles } from './Employer.styles';

export const Employer = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEmployeeLinked, setIsEmployeeLinked] = useState(false);

  const Professions = [
    {
      label: formatMessage({ id: 'dictionaries.profession.designer' }),
      value: 'Designer',
    },
  ];

  const typeOfEmployments = Object.keys(IncomeInformationTypeOfEmployment).map(type => ({
    label: `dictionaries.type_of_employment.${type}`,
    icon: <SquareIcon />,
    value: type,
  }));

  const avatar = 'https://source.unsplash.com/featured/?person';
  const name = 'Ikea';

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <DropdownField
            items={Professions}
            placeholder="crm.details.personal_information_financial_profile.income_information.profession"
            label="crm.details.personal_information_financial_profile.income_information.profession"
            name="employer.profession"
          />
        </Grid>
      </Grid>
      {isEmployeeLinked && (
        <Box display="flex" className={classes.employerRow}>
          <Box>
            <Avatar variant="square" src={avatar} className={classes.image}>
              {!avatar && <Emoji>{'📷'}</Emoji>}
            </Avatar>
          </Box>
          <Box width="100%" className={classes.employerRowDetail}>
            <Box display="flex" justifyContent="space-between" mb={2} className={classes.employerRowDetailHeader}>
              <Typography variant="h3">{name}</Typography>
              <EditIcon />
            </Box>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6" className={classes.gray}>
                  {formatMessage({ id: 'common.office' })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  Vestiging Weert
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  Hendriks Makelaardij
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" className={classes.gray}>
                  {formatMessage({ id: 'common.contact' })}
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  T: <u>06-48764044</u>
                </Typography>
                <Typography variant="h5" className={classes.gray}>
                  E: <u>christian@cubiceyes.com</u>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
      {!isEmployeeLinked && (
        <>
          <InfoSection emoji="🤔" className={classes.infoSection}>
            <Typography variant="h3">
              {formatMessage({
                id:
                  'crm.details.personal_information_financial_profile.income_information.employer.want_to_link_employee',
              })}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setIsEmployeeLinked(true)}
              startIcon={<LinkIcon color="inherit" />}
              size="small"
              className={classes.marginTopTwo}
            >
              {formatMessage({
                id: 'crm.details.personal_information_financial_profile.income_information.employer.link_business',
              })}
            </Button>
          </InfoSection>
          <Box className={classes.marginTopFour}>
            <Typography variant="h5">
              {formatMessage({
                id: 'crm.details.personal_information_financial_profile.income_information.employer.employer',
              })}
            </Typography>
            <GenericField
              className={classes.formField}
              name="employer.employer"
              placeholder="crm.details.personal_information_financial_profile.income_information.employer.employer.placeholder"
            />
          </Box>
          <Grid container className={classes.marginTopFour}>
            <Grid item xs={4}>
              <Typography variant="h5">
                {formatMessage({
                  id: 'crm.details.personal_information_financial_profile.income_information.employer.country',
                })}
              </Typography>
              <GenericField
                className={classes.formField}
                name="employer.country"
                placeholder="crm.details.personal_information_financial_profile.income_information.employer.country.placeholder"
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h5">
                {formatMessage({
                  id: 'crm.details.personal_information_financial_profile.income_information.employer.city',
                })}
              </Typography>
              <GenericField
                className={classes.formField}
                name="employer.city"
                placeholder="crm.details.personal_information_financial_profile.income_information.employer.city.placeholder"
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5">
                {formatMessage({
                  id: 'crm.details.personal_information_financial_profile.income_information.employer.zip_code',
                })}
              </Typography>
              <GenericField
                className={classes.formField}
                name="employer.zipCode"
                placeholder="crm.details.personal_information_financial_profile.income_information.employer.zip_code.placeholder"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.marginTopFour}>
            <Grid item xs={6}>
              <Typography variant="h5">
                {formatMessage({
                  id: 'crm.details.personal_information_financial_profile.income_information.employer.street',
                })}
              </Typography>
              <GenericField
                className={classes.formField}
                name="employer.street"
                placeholder="crm.details.personal_information_financial_profile.income_information.employer.street.placeholder"
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h5">
                {formatMessage({
                  id: 'crm.details.personal_information_financial_profile.income_information.employer.house_number',
                })}
              </Typography>
              <GenericField
                className={classes.formField}
                name="employer.houseNumber"
                placeholder="crm.details.personal_information_financial_profile.income_information.employer.house_number.placeholder"
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5">
                {formatMessage({
                  id: 'crm.details.personal_information_financial_profile.income_information.employer.addition',
                })}
              </Typography>
              <GenericField
                className={classes.formField}
                name="employer.addition"
                placeholder="crm.details.personal_information_financial_profile.income_information.employer.addition.placeholder"
              />
            </Grid>
          </Grid>
        </>
      )}
      <Box className={classes.marginTopFour}>
        <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.marginBottomTwo}>
          <Typography variant="h3">
            {formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.employer.type_of_employment',
            })}
          </Typography>
          <Typography variant="h5" className={classes.gray}>
            {formatMessage({
              id: 'common.choose_one_option_below',
            })}
          </Typography>
        </Box>
        <RadioGroupField name="employer.typeOfEmployment" options={typeOfEmployments} />
      </Box>
    </>
  );
};
