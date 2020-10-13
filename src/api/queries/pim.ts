import { gql } from 'apollo-boost';

export const PIM_INFO = gql`
  query PimInfo($id: ID!) {
    getPim(id: $id) {
      street
      houseNumberPrefix
      houseNumber
      houseNumberAddition
      constructionNumber
      constructionNumberPrefix
      constructionNumberAddition
      city
      developmentType
      status
      salePrice
      rentPrice
      description
      livingArea
      propertyType
      attentionNote
      completeness
      archived
      houseGeneral {
        availability {
          availability
          from
          notes
          habitation
          currentUse
          currentDestination
        }
        construction {
          type
          from
          to
          notes
        }
        floor
        propertyConnection
        propertyDetails
      }
      parkingGeneral {
        type {
          type
          parkingNumber
          notes
        }
        measurements {
          length
          width
          surface
          capacity
          height
          volume
        }
        specifications {
          type
          notes
        }
        material {
          type
          notes
        }
        insulation {
          type
          notes
        }
      }
      bogGeneral {
        type
        characteristics
        startsOnFloor
        totalFloors
        notes
      }
      aogGeneral {
        generalType
        additionalPosition
        houseLot {
          length
          width
          surface
          amountOfHouses
        }
        specifications {
          type
          notes
        }
      }
      houseOutside {
        generalInformation {
          qualityInformation
          images {
            id
            fileName
            description
            status
            fileType
            permission
            key
            signedUrl
            url
            bucket
          }
          notes
        }
        foundation {
          type {
            type
            notes
          }
          material {
            type
            notes
          }
        }
        propertyRelated {
          items
          notes
          images {
            id
            fileName
            description
            status
            fileType
            permission
            key
            signedUrl
            url
            bucket
          }
        }
        roofInformation {
          type {
            name
            notes
          }
          material {
            name
            notes
          }
          insulation {
            name
            notes
          }
          images {
            id
            fileName
            description
            status
            fileType
            permission
            key
            signedUrl
            url
            bucket
          }
          yearOfRoof
          gutter {
            type
            notes
          }
          gutterMaterial {
            material
            notes
          }
        }
        notes
      }
      floors {
        id
        floorDescription
        level
        floorType
        spaces {
          id
          spaceType
          spaceName
          extraRoomPossibility
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
        windows {
          types
          notes
        }
        extension {
          yearOfExtension
          notes
        }
        renovation {
          yearOfRenovation
        }
        notes
      }
      cadastre {
        id
        description
        mapsDescription
        type
        maps {
          id
          mapName
          name
          file {
            id
            fileName
            description
            status
            fileType
            permission
            key
            signedUrl
            url
            bucket
          }
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
          ownershipChoice
          ownershipType
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
      }
      pictures {
        id
        description
        type
        name
        file {
          id
          fileName
          description
          fileType
          permission
          key
          signedUrl
          url
          bucket
        }
        isMainPicture
      }
    }
  }
`;

export const PIM_OVERALL_INFO = gql`
  query PimOverallInfo($id: ID!) {
    getPimGeneral(id: $id) {
      street
      houseNumber
      postalCode
      city
      propertyType
    }
    getPimInside(id: $id) {
      floors {
        id
        floorType
        level
      }
      bogSpaces {
        id
        type
      }
      aogSpaces {
        id
        type
        name
        animalsConfiguration {
          type
        }
        groundConfiguration {
          typeOfLooseGround
        }
        buildingsConfiguration {
          buildingType
        }
        installationsConfiguration {
          type
        }
      }
    }
    getPimOutside(id: $id) {
      outsideFeatures {
        id
        type
      }
    }
    getPimCadastre(id: $id) {
      cadastre {
        id
        type
      }
    }
    getPimServices(id: $id) {
      meters {
        id
        type
      }
    }
  }
`;
