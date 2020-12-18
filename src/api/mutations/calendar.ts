import { gql } from 'apollo-boost';

export const ADD_APPOINTMENT = gql`
  mutation AddAppointment($input: AddAppointmentInput!) {
    addAppointment(input: $input) {
      id
      from
      to
      travelTimeBefore
      travelTimeAfter
      title
      allDay
      type
      isInsideOffice
      location
      outsideLocation
      taskLabel
      state
      agreementType
      repeatAppointment
      description
      appointmentType
      assignedPimIds
      invitedPersons
    }
  }
`;
