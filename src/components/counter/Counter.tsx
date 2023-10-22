import { useState } from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
  const [Counter, setCounter] = useState(0);
  return (
    <>
      <h1>{Counter}</h1>
      <button className={styles.btn} onClick={() => setCounter(c => ++c)}><span>Counter</span></button>
    </>
  )
}
