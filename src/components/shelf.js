import Card from "./card";
import styles from "@/styles/Shelf.module.css";
import React, { useEffect, useState } from "react";

// () => fetchPokemons();

const Shelf = (props) => {
  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState([]);
  const offset = props.offset;

  console.log(offset);
  useEffect(() => {
    fetchPokemons();
  }, []);
  useEffect(() => {
    fetchPokemons();
  }, [props]);

  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }`;

  const gqlVariables = {
    limit: 10,
    offset: offset,
  };
  async function fetchPokemons() {
    const response = await fetch("https://graphql-pokeapi.graphcdn.app/", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: "POST",
    });

    const json = await response.json();

    let fetched_arr = json.data.pokemons.results;
    let results_name = [];
    let results_url = [];
    fetched_arr.forEach((element) => {
      results_name.push(element["name"]);
      results_url.push(element["url"]);
    });
    setPoke(results_name);
    setUrl(results_url);
  }
  if (poke.length !== 0) {
    console.log("here", poke);
    return (
      <div className={styles.shelf}>
        <Card pokemon={poke[0]} url={url[0]} />
        <Card pokemon={poke[1]} url={url[1]} />
        <Card pokemon={poke[2]} url={url[2]} />
        <Card pokemon={poke[3]} url={url[3]} />
        <Card pokemon={poke[4]} url={url[4]} />
        <Card pokemon={poke[5]} url={url[5]} />
        <Card pokemon={poke[6]} url={url[6]} />
        <Card pokemon={poke[7]} url={url[7]} />
        <Card pokemon={poke[8]} url={url[8]} />
        <Card pokemon={poke[9]} url={url[9]} />
      </div>
    );
  }
};

export default Shelf;
