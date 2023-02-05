import styles from "@/styles/Card.module.css";
import { useEffect, useState } from "react";

function Card(props) {
  const [x, setX] = useState([]);
  const [src, setSrc] = useState([]);

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
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={src} alt={x}></img>
        </div>
        <div className={styles.name}>{x}</div>
      </div>
    </div>
  );
}

export default Card;
