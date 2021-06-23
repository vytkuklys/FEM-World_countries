
function Header(props){
    return(
        <header className="header">
            <div className="header__container">
                <h2 className="header__title">Where in the world?</h2>
                <button 
                    className="header__button" 
                    aria-label="Change theme"
                    onClick={props.handleClick}    
                >{props.darkTheme ? "Light Mode" : "Dark Mode"}</button>
            </div>
        </header>
    )
}

export default Header