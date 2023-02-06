import styles from "@/styles/Details.module.css";
import { useState, useEffect } from "react";

function Details(props) {
  let hp = props.stats["0"];
  let atk = props.stats["1"];
  let def = props.stats["2"];
  let spa = props.stats["3"];
  let spd = props.stats["4"];
  let speed = props.stats["5"];
  console.log();

  return (
    <>
      <img src="assets/Left.png" className={styles.left}></img>
      <div className={styles.main}>
        <img src="assets/logo.png" className={styles.mainlogo}></img>
        <div className={styles.content}>
          <div className={styles.intro}>x</div>

          <img className={styles.image}></img>

          <div className={styles.stats}>
            HP:{hp}
            Attack:{atk}
            Defense:{def}
            Special Attack:{spa}
            Special Defense:{spd}
            Speed:{speed}
          </div>
        </div>
        <button onClick={props.remove} className={styles.button}>
          Back to Homepage
        </button>
      </div>
      <img src="assets/Left.png" className={styles.left}></img>
    </>
  );
}

export default Details;
