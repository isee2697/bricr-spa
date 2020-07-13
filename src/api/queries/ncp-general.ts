import { gql } from 'apollo-boost';

export const PIM_MEDIA = gql`
  query NcpGeneral($id: ID!) {
    getNcp(id: $id) {
      id
      type
      dateCreated
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      name
      additionalName
      street
      houseNumber
      additionalHouseNumber
      zipCode
      city
      country

      automaticallyCalculateQuantity
      objectTypes
      properties
      progressStatus
      startConstruction
      noteStartConstruction
      startSale
      noteStartSale
      startDelivery
      noteStartDelivery
      startConstructionAfterPresalePercentage
      projectRisk
      notes
    }
  }
`;
