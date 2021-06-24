import {useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
function CardAbout(){
    // console.log(Object.keys(props).length)
    // if(!Object.keys(props).length){

    //     return(<span>a</span>);
    // }
    const [country, setCountry] = useState([])
    const {name} = useParams()

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            const country = await response.json()
            setCountry(country)
        }
        fetchData()
    }, [])
    console.log(country)
    return (
        <article className="details">
            <div className="details__img">
                <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Country flag" className="details__flag"/>
            </div>
            <div className="details__info">
                <h3 className="details__title">Belgium</h3>
                <div className="details__list">
                    <ul className="details__list-items">
                        <li className="details__list-item" id="nativeName">Native Name: <span>{country[0].nativeName}</span></li>
                        <li className="details__list-item" id="population">Population: <span>{country[0].population.toLocaleString()}</span></li>
                        {/* <li className="details__list-item" id="region">Region: <span>{props.country.region}</span></li> */}
                        <li className="details__list-item" id="subregion">Sub Region: <span>Western Europe</span></li>
                        <li className="details__list-item" id="capital">Capital: <span>Brussels</span></li>
                    </ul>
                    <ul className="details__list-items">
                        <li className="details__list-item" id="topLevelDomain">Top Level Domain: <span>.be</span></li>
                        <li className="details__list-item" id="currencies">Currencies: <span>Euro</span></li>
                        <li className="details__list-item" id="languages">Languages: <span>Dutch, French, German</span></li>
                    </ul>
                </div>
                <div className="details__btns">
                    <span className="details__btn-title--display" id="details__title">Border Countries:</span>
                </div>
            </div>
        </article>
    )
}

export default CardAbout