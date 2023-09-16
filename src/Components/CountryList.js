import Country from "./Country";

const CountryList = ({countries, onCountrySelected}) => {

    const listOfCountries = countries.map((country, index) => {
        return <Country country={country} key={index} index={index} />
    })

    const handleChange = function(event){
        const chosenCountry = countries[event.target.value]
        onCountrySelected(chosenCountry)

    }


    return(
        <>
        <select defaultValue={null} onChange={handleChange}>
            {listOfCountries}
        </select>
        </>
    )
}

export default CountryList;