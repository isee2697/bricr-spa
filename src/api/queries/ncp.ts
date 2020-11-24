import { gql } from 'apollo-boost';

export const NCP_OVERALL_INFO = gql`
  query NcpOverallInfo(
    $id: ID!
    $archived: Boolean
    $picturesSort: Sort
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int
    $limit: Int
    $name: String
  ) {
    getNcp(id: $id) {
      startSale
      startDelivery
      properties
      objectTypesCount
      projectType
    }
    getNcpPrices(id: $id) {
      pricing {
        rent {
          minPrice
          maxPrice
          isEnabled
          calculateAutomatically
        }
        sale {
          minPrice
          maxPrice
          isEnabled
          calculateAutomatically
        }
      }
      costs {
        costs {
          id
          serviceCostsFrom
          serviceCostsTill
          paymentsFrequency
          vatTaxedServiceCostsFrom
          vatTaxedServiceCostsTill
          vatPercentage
          notes
          type
          name
          dateCreated
        }
        description
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateUpdated
      }
      interests {
        groundInterest
        buildingInterest
        rentedagen
        suspensiveCondition
        description
        dateCreated
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
      }
    }
    listObjectTypes(
      filters: { ncpId: $id, archived: $archived }
      pagination: { from: $from, limit: $limit }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        ncpId
        dateCreated
        dateUpdated
        archived
        areaRangeFrom
        areaRangeTo
        numberOfRoomsFrom
        numberOfRoomsTo
        mainPicture {
          id
          file {
            url
          }
        }
        name
        salePriceFrom
        salePriceTo
        rentPriceFrom
        rentPriceTo
        saleLabel
        rentLabel
        partOfPhase
        completeness
        matches
        interests
        propertiesConnected
        propertiesAvailable
        underOption
        soldOrRent
        attentionNote
      }
    }
    getNcpMedia(id: $id) {
      id
      mediaDescription
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      pictures(sort: $picturesSort) {
        id
        name
        description
        type
        dateUpdated
        file {
          id
          key
          fileName
          url
        }
      }
      mainPictureId
      mediaLinks {
        id
        name
        type
        url
      }
      textChapters {
        id
        name
        type
        text
      }
      usps {
        id
        name
        description
        type
      }
      tags {
        id
        name
        description
        type
      }
    }
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
    getProjectPhases(filters: { name: $name, ncpId: $id }, pagination: { from: $from, limit: $limit }) {
      items {
        id
        name
        logo {
          id
          fileName
          description
          status
          fileType
          permission
          key
          createdAt
          signedUrl
          url
          bucket
          entityID
          entity
        }
        ncpIds
      }
    }
  }
`;
