import { Event } from "@/types/Events";
import Image from "next/image";
import { FC } from "react";

export interface EventProps {
  event: Omit<Event, "id">;
}

const Event: FC<EventProps> = ({
  event: { eventName, eventType, date, location, ticketsAvailable },
}) => {
  return (
    <li className="flex items-center max-w-6xl m-auto mt-4 border-2 border-gray-700">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Paramore_Concert.jpg"
        alt={eventName}
        width="100"
        height="100"
      />
      <div className="flex px-8">
        <p>{eventName}</p>
        <p>{eventType}</p>
        <p>{date}</p>
        <p>{location}</p>
        <p>Tickets Available: {ticketsAvailable ? "Yes" : "No"}</p>
      </div>
    </li>
  );
};

export default Event;
