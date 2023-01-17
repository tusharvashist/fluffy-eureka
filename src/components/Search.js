import Box from "./Box";
import Input from "./Input";

const Search = ({setSerchedCountry, serchedCountry, getCountries}) => {
    return(
        <div>
            <Input setSerchedCountry={setSerchedCountry} />
            <Box serchedCountry={serchedCountry} getCountries={getCountries} />
        </div>

    )
}

export default Search;