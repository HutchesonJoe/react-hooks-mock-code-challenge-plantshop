import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, setPlantList}) { 

  const thisPlantList = plantList.map(plant => {
    return (
      <PlantCard plant={plant} plantList={plantList} setPlantList={setPlantList} key={plant.id}/>
    )
  })

  return (
    <ul className="cards">{thisPlantList}</ul>
  );
}

export default PlantList;
