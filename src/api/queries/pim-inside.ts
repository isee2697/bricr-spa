import { gql } from 'apollo-boost';

export const PIM_INSIDE = gql`
  query PimInside($id: ID!) {
    getPimInside(id: $id) {
      id
      floors {
        id
        level
        floorType
        floorDescription
        spaces {
          id
          spaceType
          spaceName
          configuration {
            ... on KitchenSpace {
              constructionYear
              notes
              kitchenType: type
              constructionType
              servicesNotes
              kitchenServices: services
              appliances {
                name
                quantity
                notes
              }
              hob
              shape
              measurement {
                length
                width
                height
                surface
                volume
              }
              serviceHeating
              images {
                url
              }
            }
            ... on LivingRoomSpace {
              livingRoomType: type
              shape
              stairs
              measurement {
                length
                width
                height
                surface
                volume
              }
              serviceHeating
              images {
                url
              }
            }
            ... on BathroomSpace {
              constructionYear
              shape
              bathroomServices: services
              measurement {
                length
                width
                height
                surface
                volume
              }
              serviceHeating
              images {
                url
              }
            }
            ... on BedroomSpace {
              notes
              shape
              measurement {
                length
                width
                height
                surface
                volume
              }
              serviceHeating
              images {
                url
              }
            }
            ... on HomeOfficeSpace {
              notes
              shape
              measurement {
                length
                width
                height
                surface
                volume
              }
              serviceHeating
              images {
                url
              }
            }
            ... on OtherSpace {
              notes
              shape
              measurement {
                length
                width
                height
                surface
                volume
              }
              serviceHeating
              images {
                url
              }
            }
          }
        }
      }
      insideGeneral {
        extension {
          notes
          yearOfExtension
        }
        renovation {
          notes
          yearOfRenovation
        }
        windows {
          notes
          types
        }
        notes
      }
    }
  }
`;
