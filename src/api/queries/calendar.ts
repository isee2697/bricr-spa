import { gql } from 'apollo-boost';

export const LIST_CALENDAR = gql`
  query ListCalendar($input: AppointmentSearch!) {
    listCalendar(input: $input) {
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
