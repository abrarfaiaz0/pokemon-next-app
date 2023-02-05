import styles from "@/styles/Card.module.css";
import { useEffect, useState } from "react";
import details from "./details";

function Card(props) {
  const [big, setBig] = useState(false);
  const [x, setX] = useState();
  const [src, setSrc] = useState();
  const [url, setUrl] = useState([]);
  const [types, setTypes] = useState([]);
  const [typeLogos, setTypeLogos] = useState([]);

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
    setX(capitalize(props.pokemon[1]));
    setSrc(props.pokemon[2]);
    setUrl(props.pokemon[0]);
  }
  function showCardDetails() {}

  async function fetchDetails() {
    const response = await fetch(url);
    let json = await response.json();
    let typeLogo = [];
    let type = [];
    if (json.types.length === 2) {
      typeLogo.push(capitalize(json.types[0].type.url));
      typeLogo.push(capitalize(json.types[1].type.url));
      type.push(capitalize(json.types[0].type.name));
      type.push(capitalize(json.types[1].type.name));
      console.log(typeLogo);
    }
    if (json.types.length === 1) {
      typeLogo.push(capitalize(json.types[0].type.url));
      type.push(capitalize(json.types[0].type.name));
    }

    setTypes(type);
    setTypeLogos(typeLogo);
  }

  const pokemonimgclass = big ? styles.pokemonimgbig : styles.pokemonimg;
  const imgclass = big ? styles.imagebig : styles.image;

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    fetchDetails();
    getData();
  }, [props]);

  return (
    <div className={styles.flex}>
      <div
        className={styles.card}
        onMouseEnter={() => cardHover()}
        onMouseLeave={() => cardUnhover()}
        onClick={() => showCardDetails()}
      >
        <div className={imgclass}>
          <img src={src} alt={x} className={pokemonimgclass}></img>
        </div>
        <div className={styles.name}>{x}</div>
        <div className={styles.type}>{types}</div>
      </div>
    </div>
  );
}

export default Card;
