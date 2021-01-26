import { gql } from 'apollo-boost';

export const LIST_CALENDAR = gql`
  query ListCalendar($input: AppointmentSearch!) {
    listCalendar(input: $input) {
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

export const GET_APPOINTMENT = gql`
  query GetAppointment($appointmentId: ID!) {
    getAppointment(appointmentId: $appointmentId) {
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
