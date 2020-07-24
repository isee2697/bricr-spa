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
      objectTypesCount
      automaticallyCalculateQuantity
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
      archived
    }
  }
`;

export const NCP_GENERAL_WITH_SAME_ADDRESS = gql`
  query NcpWithSameAddress($input: NcpWithSameAddressInput!) {
    getNcpWithSameAddress(input: $input) {
      metadata {
        total
      }
      items {
        id
      }
    }
  }
`;
