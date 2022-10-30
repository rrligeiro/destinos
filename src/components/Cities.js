import { useState, useEffect } from "react";

function Cities(){
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://amazon-api.sellead.com/city') // GET request
    .then(response => response.json())
    .then(data => {  setCities(data) })
  }, []);

  return (
    <>
      {cities.map(city => (
        <option key={city.id} value={city.name_ptbr}>{city.name_ptbr}</option>
      ))}
    </>
  );
}

export default Cities;