import {useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import CardAbout from './CardAbout.js'

function CardAboutContainer(props){
    const [country, setCountry] = useState([])
    const {name} = useParams()
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            const country = await response.json()
            setCountry(country)
        }
        fetchData()
    }, [name])
    const loading = Object.keys(country).length !== 0;
    return (
        <div>

            {loading &&
                <CardAbout country={country[0]} getFullName={props.getFullName}/>}
        </div>
        
    )
}

export default CardAboutContainer