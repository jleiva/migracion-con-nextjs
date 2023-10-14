import Link from "next/link";
import Image from "next/image";
import formatDate from "../lib/format-date";
import { EventInteractions } from "@/components/EventInteractions";

const EventCard = (props) => {
  return (
    <li className="gallery__card">
      <Image src={props.image} alt={props.title} width={253} height={320} />
      <div className="gallery__text">
        <div className="event__info">
          <h3>
            <Link href={`/event/${props.eventId}`}>{props.title}</Link>
          </h3>
          <p className="date">{formatDate(new Date(props.date))}.</p>
          <p>
            {props.location.address} • {props.location.city},{" "}
            {props.location.state}.
          </p>
          <strong>{props.price}</strong>
        </div>
        <EventInteractions {...props} />
      </div>
    </li>
  );
};

export { EventCard };
