import Card from "./card";
import styles from "@/styles/Shelf.module.css";
import React, { useEffect, useState } from "react";

const Shelf = (props) => {
  const [poke, setPoke] = useState(
    ["placeholder", "placeholder", "placeholder"],
    ["placeholder", "placeholder", "placeholder"],
    ["placeholder", "placeholder", "placeholder"],
    ["placeholder", "placeholder", "placeholder"],
    ["placeholder", "placeholder", "placeholder"],
    ["placeholder", "placeholder", "placeholder"],
    ["placeholder", "placeholder", "placeholder"],
    ["placeholder", "placeholder", "placeholder"],
    ["placeholder", "placeholder", "placeholder"],
    ["placeholder", "placeholder", "placeholder"]
  );

  const offset = props.offset;

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

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

    const fetched = json.data.pokemons.results;
    let result = [];
    for (let key in fetched) {
      result.push(Object.values(fetched[key]));
    }
    // console.log(result);

    setPoke((poke) => result);
  }

  return (
    <div className={styles.shelf}>
      <Card pokemon={poke[0]} />
      <Card pokemon={poke[1]} />
      <Card pokemon={poke[2]} />
      <Card pokemon={poke[3]} />
      <Card pokemon={poke[4]} />
      <Card pokemon={poke[5]} />
      <Card pokemon={poke[6]} />
      <Card pokemon={poke[7]} />
      <Card pokemon={poke[8]} />
      <Card pokemon={poke[9]} />
    </div>
  );
};

export default Shelf;
