import styles from "@/styles/Card.module.css";
import { useEffect, useState } from "react";
import details from "./details";

function Card(props) {
  const [big, setBig] = useState(false);
  const [x, setX] = useState([]);
  const [src, setSrc] = useState([]);

  function cardHover() {
    setBig(true);
  }
  function cardUnhover() {
    setBig(false);
  }
  function showCardDetails() {}

  useEffect(() => {
    const nameLoad = props.pokemon[1];
    const firstLetter = nameLoad.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = nameLoad.slice(1);
    setX(firstLetterCap + remainingLetters);
    setSrc(props.pokemon[2]);
  }, [props]);

  return (
    <div className={styles.flex}>
      <div
        className={styles.card}
        onMouseEnter={() => cardHover()}
        onMouseLeave={() => cardUnhover()}
        onClick={() => showCardDetails()}
      >
        <div className={styles.image}>
          <img
            src={src}
            alt={x}
            className={big ? styles.pokemonimgbig : styles.pokemonimg}
          ></img>
        </div>
        <div className={styles.name}>{x}</div>
      </div>
    </div>
  );
}

export default Card;
