export interface CalendarEvent {
     id: string;
     title: string;
     description?: string;
     location?: string;

     start: string;
     end: string;

     attendees: string[];
}

export interface GoogleCalendarEvent {
     id?: string;

     summary?: string;
     description?: string;
     location?: string;

     start?: {
          dateTime?: string;
          date?: string;
     };

     end?: {
          dateTime?: string;
          date?: string;
     };

     attendees?: {
          email?: string;
     }[];
}