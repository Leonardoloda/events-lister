import { FC, useState } from "react";
import { data } from "@/data/events.json";
import { Event } from "@/types/Events";
import PaginatedList from "@/components/PaginatedList";
import EventComponent from "@/components/Event";
import Title from "@/components/Title";

export interface EventsPageProps {}

const EventsPage: FC<EventsPageProps> = () => {
  const [events] = useState<Array<Event>>(data);

  return (
    <div>
      <Title label="Event" />
      <PaginatedList>
        {events.map(({ id, ...event }) => (
          <EventComponent key={id} event={event} />
        ))}
      </PaginatedList>
    </div>
  );
};

export default EventsPage;
