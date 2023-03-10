import Card from "./card";
import styles from "@/styles/Shelf.module.css";
import React, { useEffect, useState } from "react";

const Shelf = (props) => {
  const [url, setUrl] = useState([]);
  props.offset;

  console.log("offset in Card", props.offset);
  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [props.offset]);

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
    offset: props.offset,
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

    let results_url = [];
    fetched_arr.forEach((element) => {
      results_url.push(element["url"]);
    });

    setUrl(results_url);
    console.log("loop_in_shelf");
  }

  return (
    <div className={styles.shelf}>
      <Card url={url[0]} />
      <Card url={url[1]} />
      <Card url={url[2]} />
      <Card url={url[3]} />
      <Card url={url[4]} />
      <Card url={url[5]} />
      <Card url={url[6]} />
      <Card url={url[7]} />
      <Card url={url[8]} />
      <Card url={url[9]} />
    </div>
  );
};

export default Shelf;
