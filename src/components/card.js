import styles from "@/styles/Card.module.css";
import { useContext, useEffect, useState } from "react";
import Details from "./details";

function Card(props) {
  const [big, setBig] = useState(false);
  const [x, setX] = useState();
  const [src, setSrc] = useState([]);
  const [d, setD] = useState(false);
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [heightweight, setHeightWeight] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    fetchDetails();
  }, []);

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

  function toggleCardDetails() {
    setD((d) => !d);
  }

  async function fetchDetails() {
    const response = await fetch(props.url);
    let json = await response.json();
    let type = [];
    let src_temp = [];
    let x_temp = [];
    let stat_arr = [];
    let hw = [];
    let i = 0;
    let hp = json.stats["0"].base_stat;
    let atk = json.stats["1"].base_stat;
    let def = json.stats["2"].base_stat;
    let spa = json.stats["3"].base_stat;
    let spd = json.stats["4"].base_stat;
    let speed = json.stats["5"].base_stat;
    hw.push(json.height);
    hw.push(json.weight);
    i = json.id;
    stat_arr.push(hp);
    stat_arr.push(atk);
    stat_arr.push(def);
    stat_arr.push(spa);
    stat_arr.push(spd);
    stat_arr.push(speed);

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
    setStats(stat_arr);
    setHeightWeight(hw);
    setId(i);
  }

  const pokemonimgclass = big ? styles.pokemonimgbig : styles.pokemonimg;
  const imgclass = big ? styles.imagebig : styles.image;
  if (d)
    return (
      <Details
        url={props.url}
        remove={() => toggleCardDetails()}
        stats={stats}
        name={x}
        src={src}
        hw={heightweight}
        id={id}
      />
    );
  else
    return (
      <div className={styles.flex}>
        <div
          className={styles.card}
          onMouseEnter={() => cardHover()}
          onMouseLeave={() => cardUnhover()}
          onClick={() => toggleCardDetails()}
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
