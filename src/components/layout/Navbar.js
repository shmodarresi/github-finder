import React, {useState , useEffect} from 'react'

const Navbar = ({ icon, title }) => {
    // window.navigator.geolocation.getCurrentPosition(
    //     (position) => console.log(position),
    //     (err) => console.log(err)
    // );

    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        setInterval(() =>{
            setTime(new Date());
        },1000)
    })


    return (
        <nav className="navbar bg-danger text-light">
            <h2>
                <i className={icon}></i> {title}

            </h2>
            <span className="float-right">{time.toLocaleTimeString()}</span>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fa fa-github'
};

export default Navbar
