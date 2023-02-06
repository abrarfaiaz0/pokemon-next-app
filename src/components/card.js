import styles from "@/styles/Card.module.css";
import { useContext, useEffect, useState } from "react";
import details from "./details";
import { OffsetGlobal } from "@/pages";

function Card(props) {
  const [big, setBig] = useState(false);
  const [x, setX] = useState();
  const [src, setSrc] = useState([]);
  const [url, setUrl] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getUrl();
    fetchDetails();
  }, []);
  useEffect(() => {
    getUrl();
  }, [props]);

  useEffect(() => {
    fetchDetails();
  }, [props]);

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
  function getUrl() {
    setUrl(props.url);
  }
  function showCardDetails() {}

  async function fetchDetails() {
    const response = await fetch(url);
    let json = await response.json();
    let type = [];
    let src_temp = [];
    let x_temp = [];

    if (json.types.length === 2) {
      type.push(capitalize(json.types[0].type.name));
      type.push(capitalize(json.types[1].type.name));
    }
    if (json.types.length === 1) {
      type.push(capitalize(json.types[0].type.name));
    }

    src_temp.push(json.sprites.other["official-artwork"]["front_default"]);
    x_temp.push(capitalize(json.name));
    console.log("loop_in_card");

    setX(x_temp);
    setSrc(src_temp);
    setTypes(type);
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
          <img src={src} alt={x} className={pokemonimgclass}></img>
        </div>
        <div className={styles.name}>{x}</div>
        <div className={styles.type}>{types}</div>
      </div>
    </div>
  );
}

export default Card;
