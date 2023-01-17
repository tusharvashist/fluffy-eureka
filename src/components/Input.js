

const Input = ({setSerchedCountry}) => {

    const handleChange =(e) => {
        setSerchedCountry(e.target.value)
    }

    return (
        <div>
            <input type="text" id="countrySearch" onChange={handleChange}/>
        </div>
    )
}

export default Input;