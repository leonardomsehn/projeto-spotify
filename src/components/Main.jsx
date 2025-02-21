import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* Item List de artistas */}
      <ItemList title="Artistas" items={5} itemsArray={artistArray} />

      {/* Item List de músicas */}
      <ItemList title="Músicas" items={10} itemsArray={songsArray} />
    </div>
  );
};

export default Main;
