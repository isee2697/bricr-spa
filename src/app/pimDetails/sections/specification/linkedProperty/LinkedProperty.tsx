import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { GenericField } from 'form/fields';
import { Box } from 'ui/atoms';
import { LinkedPropertyItem } from 'ui/molecules';
import { FormSection } from 'ui/organisms';

const MOCKED_DATA = {
  title: 'Parking Lot 12',
  image: 'https://source.unsplash.com/featured/?building',
  address: '1011 Amsterdam Isenburgstraat 36, Breda',
  project: 'Projecte Name Linked Object Type',
  price: '€ 25000,00 k.',
  owner: 'Christian van Gils',
  accManager: 'Hendriks Makelaardij',
  status: 'Wojciech Dobry',
  plotNumber: 'Field Value',
  pimAttention: 'Field Value',
};

export const LinkedProperty = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid xs={12} item>
        <Typography variant="h1">
          {formatMessage({ id: 'pim_details.specification.linked_properties.title' })}
        </Typography>
        <GenericField
          placeholder="pim_details.specification.linked_properties.description_placeholder"
          name="specification.linked_properties.description"
        />
      </Grid>
      <Grid xs={12} item>
        <Box mt={1}>
          <FormSection
            title={formatMessage({ id: 'pim_details.specification.linked_properties.title' })}
            isExpandable
            isInitExpanded
          >
            {() => (
              <LinkedPropertyItem
                title={MOCKED_DATA.title}
                image={MOCKED_DATA.image}
                address={MOCKED_DATA.address}
                project={MOCKED_DATA.project}
                price={MOCKED_DATA.price}
                owner={MOCKED_DATA.owner}
                accManager={MOCKED_DATA.accManager}
                status={MOCKED_DATA.status}
                plotNumber={MOCKED_DATA.plotNumber}
                pimAttention={MOCKED_DATA.pimAttention}
                onEditClick={() => {}}
              />
            )}
          </FormSection>
        </Box>
      </Grid>
    </>
  );
};
