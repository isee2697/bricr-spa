import { gql } from 'apollo-boost';

export const ADD_APPOINTMENT = gql`
  mutation AddAppointment($input: AddAppointmentInput!) {
    addAppointment(input: $input) {
      id
      startDate
      endDate
      travelTimeBefore
      travelTimeAfter
      title
      allDay
      type
      location
      taskLabel
      state
    }
  }
`;
