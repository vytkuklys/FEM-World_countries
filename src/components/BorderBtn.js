import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'

function BorderBtn(props){
    const [name, setName] = useState([])
    const alpha3Code = props.border
    useEffect(()=>{
        const name = props.getFullName(alpha3Code)
        setName(name);
    }, [props, alpha3Code])
    return(
        <Link to={`/${name}`}><button className="details__btn">{name}</button></Link>
    )
}

export default BorderBtn