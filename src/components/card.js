import styles from "@/styles/Card.module.css";
import React, { Component } from "react";

function Card(props) {
  componentDidUpdate = () => {
    doStuff();
  };
  function doStuff() {
    console.log(props.pokemon[1]);
    const nameLoad = props.pokemon[1];
    const firstLetter = nameLoad.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = nameLoad.slice(1);
    const x = firstLetterCap + remainingLetters;
  }

  return (
    <div className={styles.flex}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={props.pokemon[2]} alt={props.pokemon[1]}></img>
        </div>
        <div className={styles.name}>{x}</div>
      </div>
    </div>
  );
}

export default Card;
