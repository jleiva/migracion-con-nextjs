import { EventCard } from "@/components/EventCard";

const EventList = ({ eventList, status }) => {
  if (status === "loading") {
    return (
      <div style={{ display: "flex", margin: "0 auto", width: "80%" }}>
        <div className="skeleton" />
        <div className="skeleton" />
        <div className="skeleton" />
        <div className="skeleton" />
      </div>
    );
  }

  // Falta manejo de error
  // if (error) {
  //   return <div>Algun mensaje de error</div>;
  // }

  return (
    <ul className="container error-container gallery home-gallery">
      {eventList?.length > 0
        ? eventList.map((category) => {
            return (
              <EventCard
                key={category.id}
                eventId={category.id}
                price={category.price}
                date={category.date}
                title={category.title}
                image={category.image}
                location={category.location}
              />
            );
          })
        : null}
    </ul>
  );
};

export { EventList };
