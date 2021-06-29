import Card from "./Card.js"

function CardsContainer(props){
    let cards;
    if(props.countries.length){
        cards = props.countries.map(country =>{
           return <Card key={country.name} country={country}/>
        })
    }

    
    return(
        <div className="output">
            {cards}
        </div>
    )
}

export default CardsContainer