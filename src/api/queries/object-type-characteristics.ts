import { gql } from 'apollo-boost';

export const NCP_CHARACTERISTICS = gql`
  query ObjectTypeCharacteristics($id: ID!) {
    getObjectTypeCharacteristics(id: $id) {
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
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
      characteristicsDescription
      type
      automaticallySetObjectTypes
    }
  }
`;
