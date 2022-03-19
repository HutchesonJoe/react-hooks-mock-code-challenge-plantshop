import React, {useState} from "react";

function Search({plantList, setPlantList}) {

  function handleSearch(e){
    console.log(e.target.value.toLowerCase())
    const thisPlantList = plantList.filter((plant)=>{
      return plant.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setPlantList(thisPlantList)
    }
        
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
