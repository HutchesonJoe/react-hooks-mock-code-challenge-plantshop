import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  
  const [plantlist, setPlantList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
     .then (r => r.json())
     .then (data => setPlantList(data))
  },[])

  return (
    <div className="app">
      <Header />
      <PlantPage plantList = {plantlist} setPlantList = {setPlantList}/>
    </div>
  );
}

export default App;
