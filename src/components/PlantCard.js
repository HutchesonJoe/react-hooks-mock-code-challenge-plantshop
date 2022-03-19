import React, {useState} from "react";




function PlantCard({plantList, setPlantList, plant}) {

  const {id, name, image, price} = plant
  const [stocked, setStocked] = useState(true)
  function handleStock(){
    setStocked(!stocked)
  }

  return (
    <li className="card"  key={name}>
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button id={id} onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
