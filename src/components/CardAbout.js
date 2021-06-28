import BorderBtn from "./BorderBtn.js"
import {useHistory} from 'react-router-dom'


function CardAbout (props){
    const topLevelDomain = props.country.topLevelDomain.map(item =>{
        return item
    })
    const currencies = props.country.currencies.map((item, index) =>{
        return index ? `, ${item.code}` : item.code
    })
    const languages = props.country.languages.map((item, index) =>{
        return index ? `, ${item.name}` : item.name
    })
    const bordersBtns = props.country.borders.map(item =>{
        return <BorderBtn border={item} key={item} getFullName={props.getFullName}/>
    })
    const history = useHistory();

    const routeChange = () => {
        history.goBack()
    };

    return(
        <div>
        <div className="details__return">
            <button 
                aria-label="return to previous page" 
                className="details__return-btn"
                onClick={routeChange}
            >Back</button>
        </div> 
       
        <article className="details">
            <div className="details__img">
                <img src={props.country.flag} alt="Country flag" className="details__flag"/>
            </div>
            <div className="details__info">
                <h3 className="details__title">{props.country.name}</h3>
                <div className="details__list">
                    <ul className="details__list-items">
                        <li className="details__list-item" id="nativeName">Native Name: <span>{props.country.nativeName}</span></li>
                        <li className="details__list-item" id="population">Population: <span>{props.country.population.toLocaleString()}</span></li>
                        <li className="details__list-item" id="region">Region: <span>{props.country.region}</span></li>
                        <li className="details__list-item" id="subregion">Sub Region: <span>{props.country.subregion}</span></li>
                        <li className="details__list-item" id="capital">Capital: <span>{props.country.capital}</span></li>
                    </ul>
                    <ul className="details__list-items">
                        <li className="details__list-item" id="topLevelDomain">Top Level Domain: <span>{topLevelDomain}</span></li>
                        <li className="details__list-item" id="currencies">Currencies: <span>{currencies}</span></li>
                        <li className="details__list-item" id="languages">Languages: <span>{languages}</span></li> 
                    </ul>
                </div>
                <div className="details__btns">
                    <span className="details__btn-title--display" id="details__title">Border Countries:</span>
                    {bordersBtns}
                </div>
            </div>
        </article>
        </div>
    )
}

export default CardAbout