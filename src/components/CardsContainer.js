import Card from "./Card.js"

function CardsContainer(props){
    let cards;
    if(props.countries.length){
        console.log("ja")
        cards = props.countries.map(country =>{
            // console.log(country)
           return <Card key={country.name} country={country}/>
        })
        // console.log(cards)
    }

    
    return(
        <div 
            className="output"
        >
            {/* <section 
                className="output__box">
                    <div className="output__flag" style={{backgroundImage: `url("https://restcountries.eu/data/alb.svg")`}}></div>
                    <div className="output__info">
                        <h3 className="output__info-title">Afghanistan</h3>
                        <p className="output--bold">
                            Population: <span className="output__info-population"></span>
                        </p>
                        <p className="output--bold">
                            Region: <span className="output__info-region"></span>
                        </p>
                        <p className="output--bold">
                            Capital: <span className="output__info-capital"></span>
                        </p>
                    </div>
            </section> */}
            {/* {cards ? cards : ""} */}
            {/* <Card countries={props.countries}/> */}
            {/* <Card country={props.countries[0]}/> */}
            {cards}
        </div>
    )
}

export default CardsContainer