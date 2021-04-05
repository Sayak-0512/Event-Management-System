import {useRouter} from "next/router";
import {Fragment} from "react";
import {getFilteredEvents} from "../../dummy-data.js";
import EventList from "../../components/events/EventList.js";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/UI/error-alert";
import Button from "../../components/UI/Button";
function FilteredEvents(){
  const router=useRouter();
  const filteredDate=router.query.slug;
  if(!filteredDate)
  {
    return <p className="center">Loading...</p>

  }
  const filteredYear=+filteredDate[0];
  const filteredMonth=+filteredDate[1];
  if(isNaN(filteredMonth) || isNaN(filteredYear) || filteredMonth<1 || filteredMonth>12)
  {
    return <Fragment>
    <ErrorAlert>
      <p className="center">Wrong filters</p>
      </ErrorAlert>
      <div className='center'>
      <Button>Show All Events</Button>
      </div>
      </Fragment>
  }

const eventsFiltered=getFilteredEvents({
  year: filteredYear,
  month: filteredMonth
});

if(!eventsFiltered || eventsFiltered.length===0)
{
  return <Fragment>
  <ErrorAlert>
    <p className="center">No filtered events found</p>
    </ErrorAlert>
    <div className='center'>
    <Button>Show All Events</Button>
    </div>
    </Fragment>
}
const date=new Date(filteredYear, filteredMonth-1);


  return (
    <div>
    <ResultsTitle date={date}/>
  <EventList items={eventsFiltered} />
    </div>
  );
}
export default FilteredEvents;
