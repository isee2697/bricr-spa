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

export const OBJECT_TYPE_GENERAL_INFORMATION = gql`
  query NcpGeneralInformation($id: ID!) {
    project: getNcp(id: $id) {
      id
      name
    }
    objectTypes: listObjectTypes(filters: { ncpId: $id, archived: false }) {
      metadata {
        total
      }
    }
    linkedProperties: getNcpLinkedPims(id: $id) {
      linkedProperties(filters: { archived: false }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
  }
`;
