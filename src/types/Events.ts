export interface Event {
  id: string;
  eventType: string;
  eventName: string;
  date: string;
  location: string;
  ticketsAvailable: boolean;
}

export interface UpcomingEvents {
  upcomingEvents: Event[];
}
