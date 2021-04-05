import Button from "../UI/Button";
import {useRef} from "react";
import styles from "./EventSearchForm.module.css";
function EventSearchForm(props){
const yearInputRef=useRef();
const monthInputRef=useRef();

function submitHandler(event){
  event.preventDefault();
  const submittedYear=yearInputRef.current.value;
  const submittedMonth=monthInputRef.current.value;

  props.onSearch(submittedYear,submittedMonth);



}


  return <form className={styles.form} onSubmit={submitHandler}>
  <div className={styles.controls}>
  <div className={styles.control}>
  <label htmlFor="year">Year</label>
  <select id="year" ref={yearInputRef}>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  </select>
  </div>
  <div className={styles.control}>
  <label htmlFor="month">Month</label>
  <select id="month" ref={monthInputRef}>
  <option value="1">January</option>
  <option value="2">February</option>
  <option value="3">March</option>
  <option value="4">April</option>
  <option value="5">May</option>
  <option value="6">June</option>
  <option value="7">July</option>
  <option value="8">August</option>
  <option value="9">September</option>
  <option value="10">October</option>
  <option value="11">November</option>
  <option value="12">December</option>

  </select>
  </div>
  </div>
  <Button>Find Events</Button>
  </form>
}
export default EventSearchForm;
