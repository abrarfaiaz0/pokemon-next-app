import styles from "@/styles/Details.module.css";
import { useEffect } from "react";

function Details(props) {
  async function getDetails() {
    const response = await fetch(props.url);
    let json = await response.json();
    const hp = json.stats["0"].base_stat;
    const atk = json.stats["1"].base_stat;
    const def = json.stats["2"].base_stat;
    const spa = json.stats["3"].base_stat;
    const spd = json.stats["4"].base_stat;
    const speed = json.stats["5"].base_stat;
    console.log("in details", [hp, atk, def, spa, spd, speed]);
  }

  useEffect(() => {
    getDetails();
  }, [props]);

  return (
    <div className={styles.main}>
      <button onClick={props.remove} className={styles.button}></button>
    </div>
  );
}

export default Details;
