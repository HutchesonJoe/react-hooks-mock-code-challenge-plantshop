import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList, setPlantList}) {

  return (
    <main>
      <NewPlantForm plantList = {plantList} setPlantList = {setPlantList} />
      <Search plantList = {plantList} setPlantList = {setPlantList}/>
      <PlantList plantList = {plantList} setPlantList = {setPlantList}/>
    </main>
  );
}

export default PlantPage;
