import { Header } from "@/components/Header";

export default function EventDetail({ params }) {
  return (
    <>
      <Header isAccount /> <h2>Event Id: {params.eventId}</h2>
    </>
  );
}
