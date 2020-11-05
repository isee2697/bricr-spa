import { gql } from 'apollo-boost';

export const MOVE_PIM_DATA = gql`
  query MovePimData {
    properties: listPims(filters: { archived: false, propertyTypes: [Apartment, House] }) {
      items {
        id
        street
      }
      metadata {
        total
      }
    }
    bog: listPims(filters: { archived: false, propertyTypes: [Commercial] }) {
      items {
        id
        street
      }
      metadata {
        total
      }
    }
    aog: listPims(filters: { archived: false, propertyTypes: [Agricultural] }) {
      items {
        id
        street
      }
      metadata {
        total
      }
    }
    nc: listNcps(filters: { archived: false, projectType: NewConstruction }) {
      items {
        id
        name
      }
      metadata {
        total
      }
    }
    relet: listNcps(filters: { archived: false, projectType: Relet }) {
      items {
        id
        name
      }
      metadata {
        total
      }
    }
  }
`;
