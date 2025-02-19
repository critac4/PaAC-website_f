import "./Events.css";

// import { Upcoming } from "./EventsData.js";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CalendarIcon, GlobeIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const spaceId = import.meta.env.VITE_SPACE_ID;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const UpcomingEvent = () => {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query: `query {
            newEventsCollection {
              items {
                titleOfEvent
                dateAndTimeOfEvent
                venueOfEvent
                descriptionOfEvent
              }
            }
          }`,
        }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setEvents(data.newEventsCollection.items);
      });
  }, []);

    // useEffect(() => {
    //   console.log(events);
    // }, [events]);

  if (!events) {
    return "Loading...."
  }

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      // centeredSlides={true}
      loop={true}
      spaceBetween={90}
      slidesPerView={2.5}
      // autoplay={{
      //   delay: 3000,
      // }}
      breakpoints={{
        830: {
          spaceBetween: 90,
        },
        750: {
          spaceBetween: 40,
          slidesPerView: 2.5,
        },
        0: {
          spaceBetween: 20,
          slidesPerView: 0.8,
        },
      }}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ dynamicBullets: true }}
      modules={[Pagination, EffectCoverflow, Autoplay]}
      className="swiper_container"
    >
      {events.map((up) => (
        <SwiperSlide>
          <div className="event-card">
            <h1 className="event-title">
              {up.titleOfEvent}
            </h1>
            <div className="event-time">
              <CalendarIcon /> {`${up.dateAndTimeOfEvent.substring(0,10)} ${up.dateAndTimeOfEvent.substring(11,19)}`}
            </div>
            <div className="event-location">
              <GlobeIcon /> {up.venueOfEvent}
            </div>
            <hr className="divider" />
            <p className="upcoming-event-details">{up.descriptionOfEvent}</p>
            {/* <button className="event-share-button">Share</button> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default UpcomingEvent;
