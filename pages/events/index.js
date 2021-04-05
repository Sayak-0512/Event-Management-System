import {getAllEvents} from "../../dummy-data.js";
import EventList from "../../components/events/EventList.js";
import {useRouter} from "next/router";
import EventSearchForm from "../../components/events/EventSearchForm.js";
function Events(){
  const router=useRouter();
  const events=getAllEvents();
  function heandleSearch(year,month){
    const pathname=`/events/${year}/${month}`;
    router.push(pathname);

  }


  return (
    <div>
    <EventSearchForm onSearch={heandleSearch}/>
    <EventList items={events} />
    </div>
  );
}
export default Events;
