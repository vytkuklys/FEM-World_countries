import './App.scss'
import React, {Component} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from "@fortawesome/fontawesome-svg-core"
// import { faUser } from "@fortawesome/free-solid-svg-icons"
import Header from './components/Header.js'
import Controls from './components/Controls.js'
// library.add(faUser);


class App extends Component {
    constructor(){
        super()
        this.state = {
            darkTheme: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const darkTheme = this.state.darkTheme
        this.setState({
            darkTheme: !darkTheme
        })
    }

    render(){
    return (
        <div className={`App ${this.state.darkTheme ? "dark-mode" : ""}`}>
            <Header 
                handleClick={this.handleClick}
                darkTheme={this.state.darkTheme}
            />
            {/* <button onClick={this.handleClick}>
                This
            </button> */}
        <main>
            <Controls/>
            <div className="details__return">
                <button onfocus="blur()" aria-label="return to previous page" className="details__return-btn">Back</button>
            </div>
            <div id="output" className="output"></div>
            <article className="details">
                <div className="details__img">
                    <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Country flag" className="details__flag"/>
                </div>
                <div className="details__info">
                    <h3 className="details__title">Belgium</h3>
                    <div className="details__list">
                        <ul className="details__list-items">
                            <li className="details__list-item" id="nativeName">Native Name: <span>Belgie</span></li>
                            <li className="details__list-item" id="population">Population: <span>11,319,511</span></li>
                            <li className="details__list-item" id="region">Region: <span>Europe</span></li>
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
        </main>
        <div>

        {/* <FontAwesomeIcon icon="user"/> */}
        </div>

        </div>
    );
    }
}

export default App;
