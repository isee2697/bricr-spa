import { gql } from 'apollo-boost';

export const PIM_CADASTRE = gql`
  query PimCadastre($id: ID!) {
    getPimCadastre(id: $id) {
      id
      cadastre {
        id
        description
        type
        maps {
          id
          mapName
          file {
            key
            id
          }
          description
          type
        }
        plot {
          notes
          name
          municipalCode
          sectionCode
          plot
          indexNumber
          surface
          share
          codeSize
          ownership {
            stressedInChargeOf
          }
          lease {
            leaseholder
            information
            duration
            yearlyPrice
            endDate
          }
          boughtOff {
            date
            perpetually
            notes
          }
        }
        dateCreated
        dateUpdated
        lastEditedBy
      }
    }
  }
`;
