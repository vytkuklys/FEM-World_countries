import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'

function BorderBtn(props){
    const [name, setName] = useState([])
    useEffect(()=>{
        const name = props.getFullName(props.border)
        setName(name);
    }, [])
    console.log(name)
    // console.log('1')
    // props.getFullName(props.border);
    return(
        // <button className="details__btn">{props.border}</button>
        <Link to={`/${name}`}><button className="details__btn">{props.border}</button></Link>
    )
}

export default BorderBtn