import React, {useState, useEffect} from 'react'
import CountryList from '../Components/CountryList';

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)

const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
}

 const onCountrySelected = (country) => {
    setSelectedCountry(country)
 }

useEffect(() => {
    getCountries()
}, [])

    return (
        <>
        <h1> Countries Container</h1>
        <CountryList countries={countries}/>
        </>
    )
}

export default CountriesContainer;