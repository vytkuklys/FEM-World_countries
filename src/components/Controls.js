import React, {Component} from 'react'

class Controls extends Component{
    constructor(){
        super()
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this)
        // this.handleRegionClick = this.handleRegionClick.bind(this)
    }

    // handleRegionClick =() =>{
    //     this.props.handleRegionClick
    // }

    handleClick(){
        const open = this.state.open
        this.setState({
            open: !open          
        })
    }

    render(){
        return(
            <div className={`controls ${this.state.open ? "controls--JS" : ""}`}>
                <div className="controls__input">
                    <input className="controls__input-text" type="text" placeholder="Search for a country..."
                        aria-label="Search bar"></input>
                    <button className="controls__input-btn" onfocus="blur()" aria-label="close button"></button>
                </div>
                <div className="controls__select" onClick={this.handleClick}>
                    <p className="controls__title">Filter by Region<span classprops="controls__title-arrow"></span></p>
                    <div className="controls__select-menu">
                        <button className="controls__select-item" onClick={this.props.handleRegionClick}>All</button>
                        <button className="controls__select-item" onClick={this.props.handleRegionClick}>Africa</button>
                        <button className="controls__select-item" onClick={this.props.handleRegionClick}>Americas</button>
                        <button className="controls__select-item" onClick={this.props.handleRegionClick}>Asia</button>
                        <button className="controls__select-item" onClick={this.props.handleRegionClick}>Europe</button>
                        <button className="controls__select-item" onClick={this.props.handleRegionClick}>Oceania</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Controls