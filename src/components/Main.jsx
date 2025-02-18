import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* Item List de artistas */}
      <ItemList title="Artistas" />

      {/* Item List de músicas */}
      <ItemList title="Músicas" />
    </div>
  );
};

export default Main;
