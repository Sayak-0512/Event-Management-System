import EventItem from "./EventItem";
import styles from "./EventItem.module.css"
function EventList(props){
  const {items}=props;
  return (<ul className={styles.list}>
  {items.map(item => (
    <EventItem key={item.id} title={item.title} img={item.image} location={item.location} id={item.id} date={item.date}/>
  ))}
  </ul>);
}
export default EventList;
