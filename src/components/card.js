import styles from "@/styles/Card.module.css";
import { useEffect, useState } from "react";
import details from "./details";

function Card(props) {
  const [big, setBig] = useState(false);
  const [x, setX] = useState();
  const [src, setSrc] = useState();
  const [url, setUrl] = useState([]);
  const [types, setTypes] = useState();

  useEffect(() => {
    fetchDetails();
    getData();
  }, []);

  useEffect(() => {
    fetchDetails();
    getData();
  }, [types, props]);

  function capitalize(word) {
    const nameLoad = word;
    const firstLetter = nameLoad.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = nameLoad.slice(1);
    return firstLetterCap + remainingLetters;
  }

  function cardHover() {
    setBig(true);
  }
  function cardUnhover() {
    setBig(false);
  }
  function getData() {
    setX(capitalize(props.pokemon));
    setSrc(props.pokemon[2]);
    setUrl(props.url);
  }
  function showCardDetails() {}

  async function fetchDetails() {
    if (url !== []) {
      const response = await fetch(url);
      let json = await response.json();
      let type = [];
      if (json.types.length === 2) {
        type.push(capitalize(json.types[0].type.name));
        type.push(capitalize(json.types[1].type.name));
      }
      if (json.types.length === 1) {
        type.push(capitalize(json.types[0].type.name));
      }

      setTypes(type);
    }
  }

  const pokemonimgclass = big ? styles.pokemonimgbig : styles.pokemonimg;
  const imgclass = big ? styles.imagebig : styles.image;

  return (
    <div className={styles.flex}>
      <div
        className={styles.card}
        onMouseEnter={() => cardHover()}
        onMouseLeave={() => cardUnhover()}
        onClick={() => showCardDetails()}
      >
        <div className={imgclass}>
          <img alt={x} className={pokemonimgclass}></img>
        </div>
        <div className={styles.name}>{x}</div>
        <div className={styles.type}>{types}</div>
      </div>
    </div>
  );
}

export default Card;
