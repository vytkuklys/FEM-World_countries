import {Link} from 'react-router-dom'

function Card(props){
    return(
        <Link to={`/${props.country.name}`} className="text-link output__box">
            <div className="output__flag" style={{backgroundImage: `url('${props.country.flag}')`}}></div>
            <div className="output__info">
                <h3 className="output__info-title">{props.country.name}</h3>
                <p className="output--bold">
                    Population: <span className="output__info-population">{props.country.population.toLocaleString()}</span>
                </p>
                <p className="output--bold">
                    Region: <span className="output__info-region">{props.country.region}</span>
                </p>
                <p className="output--bold">
                    Capital: <span className="output__info-capital">{props.country.capital}</span>
                </p>
            </div>
        </Link>
    )
}

export default Card