import {useRouter} from "next/router";
import {Fragment} from "react";
import {getEventById} from "../../dummy-data.js";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/UI/error-alert";
import Button from "../../components/UI/Button";
function DetailedEvent(){
const route=useRouter();
const eventId=route.query.id;
const event=getEventById(eventId);
if(!event)
{
  return <Fragment>
  <ErrorAlert>
    <p className="center">No event found</p>
    </ErrorAlert>
    <div className='center'>
    <Button>Show All Events</Button>
    </div>
    </Fragment>
}
else
{
  return (
  <Fragment>
    <EventSummary title={event.title}/>
    <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
  </Fragment>
  );
}

}
export default DetailedEvent;
