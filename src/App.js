import './App.scss'
import React, {Component} from 'react'
import Header from './components/Header.js'
import Controls from './components/Controls.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CardsContainer from './components/CardsContainer'
import CardAboutContainer from './components/CardAboutContainer'
import Loader from './components/Loader.js'
class App extends Component {
    constructor(){
        super()
        this.state = {
            darkTheme: false,
            countries: [],
            data: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.setCountries = this.setCountries.bind(this)
        this.handleRegionClick = this.handleRegionClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.isDataFetched = this.isDataFetched.bind(this)
        this.getFullName = this.getFullName.bind(this)
    }

    setCountries(data){
        this.setState({
            countries: data,
            data: data,
            isLoading: false
        })
    }

    handleRegionClick(event){
        event.preventDefault()
        const region = event.target.textContent
        if(region === "All"){
            this.setCountries(this.state.data)
            return;
        }
        const countries = this.state.data.filter(item => item.region === region)
        console.log(this.state.data.filter(item => item.region === "Africa"))
        this.setState({
            countries: countries
        })
    }

    handleClick(){
        const darkTheme = this.state.darkTheme
        this.setState({
            darkTheme: !darkTheme
        })
    }

    handleChange(event){
        const country = event.target.value;
        const countries = this.state.data.filter(item => item.name.toLowerCase().includes(country.toLowerCase()))
        this.setState({
            countries: countries
        })
    }

    isDataFetched(data){
        return data.length
    }

    getFullName(code){
        const name = this.state.data.filter(item => item.alpha3Code === code)
        return name[0].name;
    }

    componentDidMount(){
        this.setState({isLoading: true});
        if(this.isDataFetched(this.state.data)){
            return;
        }
        fetch("https://restcountries.com/v3.1/all?fields=flag,name,capital,population,region,nativeName,subregion,currencies,languages,borders,topLevelDomain,alpha3Code")
        .then(response=>response.json())
        .then(data => {
        this.setCountries(data);
        })
    }
    
    render(){
    return (
        <Router>
            <div className={`App ${this.state.darkTheme ? "dark-mode" : ""}`}>
                <Header 
                    handleClick={this.handleClick}
                    darkTheme={this.state.darkTheme}
                />
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Controls 
                                handleRegionClick={this.handleRegionClick}
                                handleChange={this.handleChange}
                            />
                            {this.state.countries.length !== 0 ?
                                <CardsContainer countries={this.state.countries}/> : <Loader/>
                            }
                        </Route>
                        <Route path="/:name">
                            <CardAboutContainer getFullName={this.getFullName}/>
                        </Route>
                    </Switch>                   
                </main>
            </div>
        </Router>
    );
    }
}

export default App;
