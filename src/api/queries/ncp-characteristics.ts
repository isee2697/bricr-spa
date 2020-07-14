import { gql } from 'apollo-boost';

export const NCP_CHARACTERISTICS = gql`
  query NcpCharacteristics($id: ID!) {
    getNcpCharacteristics(id: $id) {
      id
      characteristicsSections
      projectMarketing {
        logos {
          id
          url
        }
        emailAddress
        website
        firstColor
        secondColor
        mainLogoId
      }
      measurements {
        volumeFrom
        volumeTo
        livingSpaceFrom
        livingSpaceTo
        plotAreaFrom
        plotAreaTo
        calculateAutomatically
      }
      energy {
        label
        energyIndex
        endDateEnergyLabel
        EPC
        characteristicType
        notes
      }
      accountManagers {
        id
      }
      accountManagersIds
      identificationNumbers {
        id
        name
        number
        type
        dateCreated
      }
      attentionNote
      invoiceDetails {
        street
        houseNumber
        additionalNumber
        zipCode
        city
        country
        projectInvoiceNumber
        contactPerson
        description
      }
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
      characteristicsDescription
    }
  }
`;
