import { useEffect, useState } from "react"

const Box = ({serchedCountry, getCountries}) => {
    const [showCountry, setShowCountry] = useState([])
    useEffect(()=>{
        getCountries(serchedCountry).then(res=>{
            setShowCountry(res)
        })
    },[serchedCountry])
    
    return (
        <div>
            {showCountry.length>0 ? (
                <ul>
                    {showCountry.map(el=><li>{el}</li>)}
                </ul>
            ):
            <div>No Country Found</div>
        }    
        </div>
    )
}

export default Box;