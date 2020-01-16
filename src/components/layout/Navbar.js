import React from 'react'

function getTime(){
    return (new Date()).toLocaleTimeString();
}

const Navbar = ({icon,title}) => {
        window.navigator.geolocation.getCurrentPosition(
            (position)=>console.log(position),
            (err) => console.log(err)
        );

        return (
            <nav className="navbar navbar-light bg-light">
                <h2>
                    <i className={icon}></i> {title}
                    
                </h2>
                <span className="float-right">{getTime()}</span>
            </nav>
        )
}

Navbar.defaultProps={
    title:'Github Finder',
    icon:'fa fa-github'
};

export default Navbar
