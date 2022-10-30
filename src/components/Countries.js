import { useState, useEffect } from "react";

function Countries(){
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://amazon-api.sellead.com/country') // GET request
    .then(response => response.json())
    .then(data => {  setCountries(data) })
  }, []);

  return (
    <>
      {countries.map(country => (
        <option key={country.code} value={country.name_ptbr}>{country.name_ptbr}</option>
      ))}
    </>
  );
}

export default Countries;