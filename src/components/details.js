import styles from "@/styles/Details.module.css";
import { useState, useEffect } from "react";

function Details(props) {
  let hp = props.stats["0"];
  let atk = props.stats["1"];
  let def = props.stats["2"];
  let spa = props.stats["3"];
  let spd = props.stats["4"];
  let speed = props.stats["5"];
  let x = props.name;
  let src = props.src;
  let height = props.hw["0"];
  let weight = props.hw["1"];
  let id = props.id;
  let types = props.types;
  console.log();

  return (
    <>
      <div className={styles.main}>
        <img src="assets/logo.png" className={styles.mainlogo}></img>
        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.name}>
              {x} #{id}
            </div>
            <div className={styles.typestxt}>Types:</div>
            <div className={styles.type}>
              <img
                className={styles.typeicon}
                src={`../public/assets/icons/${types["0"]}.png`}
              ></img>
              {types.length === 2 ? (
                <img
                  className={styles.typeicon}
                  src={`../public/assets/icons/${types["1"]}.png`}
                ></img>
              ) : null}
            </div>
            <div className={styles.bio}>
              <div>Height: {height / 10}m</div>
              <div>Weight: {weight / 10}kg(s)</div>
            </div>
          </div>
          <img className={styles.image} src={src}></img>
          <div className={styles.stats}>
            <span>HP: {hp}</span>
            <span>Attack: {atk}</span>
            <span>Defense: {def}</span>
            <span>Special Attack: {spa}</span>
            <span>Special Defense: {spd}</span>
            <span>Speed: {speed}</span>
          </div>
        </div>
        <button onClick={props.remove} className={styles.button}>
          Back to Homepage
        </button>
      </div>
    </>
  );
}

export default Details;
