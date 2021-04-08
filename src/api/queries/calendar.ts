import { gql } from 'apollo-boost';

export const LIST_CALENDAR = gql`
  query ListCalendar($input: AppointmentSearch!) {
    listCalendar(input: $input)
      @rest(type: "ListCalendar", path: "/calendar-search", method: "POST", endpoint: "default") {
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
    getAppointment(appointmentId: $appointmentId)
      @rest(type: "GetAppointment", path: "/calendar-getappointment", method: "POST", endpoint: "default") {
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
