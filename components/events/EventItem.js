import Link from "next/link";
import styles from "./EventItem.module.css"
import Button from "../UI/Button.js";
import DateIcon from "../icons/date-icon.js";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon.js";
function EventItem(props){
  const {title, img, location,date,id}=props;
  const humanReadableDate=new Date(date).toLocaleDateString("en-US",{
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const formattedAddress=location.replace(",","\n");
  const link=`/events/${id}`;
  return <li className={styles.item}>
  <img src={"/"+img} alt={title} />
  <div className={styles.content}>
  <div className={styles.summary}>
  <h2>{title}</h2>
  <div className={styles.date}>
  <DateIcon />
<time>{humanReadableDate}</time>
  </div>
  <div className={styles.address}>
  <AddressIcon />
<address>{formattedAddress}</address>
  </div>
  </div>
  <div className={styles.actions}>
<Button link={link}>
<span>Explore event</span>
<span className={styles.icon}>
<ArrowRightIcon />
</span>
</Button>
  </div>
  </div>
  </li>
}
export default EventItem;
