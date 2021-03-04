import React, { useState } from 'react';

import { Grid, Box, Button, Typography, Avatar, Emoji } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { DropdownField, GenericField, RadioGroupField } from 'form/fields';
import { InfoSection } from 'ui/molecules';
import { EditIcon, LinkIcon, PdfIcon } from 'ui/atoms/icons';
import { EmployerIncomeProfession, EmploymentType } from 'api/types';
import { useModalDispatch } from 'hooks';
import { LinkBusinessModalContainer } from 'app/shared/linkBusinessModal/LinkBusinessModalContainer';

import { useStyles } from './Employer.styles';

export const Employer = ({ isEditing }: { isEditing: boolean }) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEmployeeLinked, setIsEmployeeLinked] = useState(false);
  const { open } = useModalDispatch();

  const typeOfEmployments = Object.keys(EmploymentType).map(type => ({
    label: `dictionaries.type_of_employment.${type}`,
    icon: <PdfIcon />,
    value: type,
  }));

  const avatar = 'https://source.unsplash.com/featured/?person';
  const name = 'Ikea';

  const handleLinkBusiness = async () => {
    return undefined;
  };

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <DropdownField
            items={Object.keys(EmployerIncomeProfession).map(key => ({
              label: formatMessage({ id: `dictionaries.employer_income_profession.${key}` }),
              value: key,
            }))}
            placeholder="crm.details.personal_information_financial_profile.income_information.profession"
            label="crm.details.personal_information_financial_profile.income_information.profession"
            name="employerIncome.profession"
            disabled={!isEditing}
          />
        </Grid>
      </Grid>
      <Box mt={4} />
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
            onClick={() => {
              open('link-business');
              setIsEmployeeLinked(true);
            }}
            startIcon={<LinkIcon color="inherit" />}
            size="small"
            className={classes.marginTopTwo}
          >
            {formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.employer.link_business',
            })}
          </Button>
        </InfoSection>
      )}
      <Box mt={4}>
        <GenericField
          className={classes.formField}
          label={formatMessage({
            id: 'crm.details.personal_information_financial_profile.income_information.employer.employer',
          })}
          name="employerIncome.employerInformation.name"
          placeholder="crm.details.personal_information_financial_profile.income_information.employer.employer.placeholder"
          disabled={!isEditing}
        />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <GenericField
            className={classes.formField}
            label={formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.employer.country',
            })}
            name="employerIncome.employerInformation.country"
            placeholder="crm.details.personal_information_financial_profile.income_information.employer.country.placeholder"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={5}>
          <GenericField
            className={classes.formField}
            label={formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.employer.city',
            })}
            name="employerIncome.employerInformation.city"
            placeholder="crm.details.personal_information_financial_profile.income_information.employer.city.placeholder"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={3}>
          <GenericField
            className={classes.formField}
            label={formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.employer.zip_code',
            })}
            name="employerIncome.employerInformation.zipcode"
            placeholder="crm.details.personal_information_financial_profile.income_information.employer.zip_code.placeholder"
            disabled={!isEditing}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <GenericField
            className={classes.formField}
            label={formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.employer.street',
            })}
            name="employerIncome.employerInformation.street"
            placeholder="crm.details.personal_information_financial_profile.income_information.employer.street.placeholder"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={5}>
          <GenericField
            className={classes.formField}
            label={formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.employer.house_number',
            })}
            name="employerIncome.employerInformation.houseNumber"
            placeholder="crm.details.personal_information_financial_profile.income_information.employer.house_number.placeholder"
            type="number"
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={3}>
          <GenericField
            className={classes.formField}
            label={formatMessage({
              id: 'crm.details.personal_information_financial_profile.income_information.employer.addition',
            })}
            name="employerIncome.employerInformation.addition"
            placeholder="crm.details.personal_information_financial_profile.income_information.employer.addition.placeholder"
            disabled={!isEditing}
          />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="space-between" alignItems="center">
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
      <RadioGroupField name="employerIncome.employmentType" options={typeOfEmployments} disabled={!isEditing} />
      <Box mb={4} />
      <LinkBusinessModalContainer onSubmit={handleLinkBusiness} />
    </>
  );
};
