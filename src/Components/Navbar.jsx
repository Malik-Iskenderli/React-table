import React, { useContext, useEffect, useState } from 'react'
import './Sass/Navbar.scss'
import Logo from './Image/Logo.png'
import Logodark from './Image/Logodark.png'
import ComondContext from './Context/ComondContext'

const Navbar = () => {
    //C O N T E X T
    const { theme, setTheme } = useContext(ComondContext)

    // T H E M E
    const [toggle, setToggle] = useState(JSON.parse(localStorage.getItem("Switch") || false))

    // C L I C K 
    const themeMode = () => {
        setTheme(!theme)
        setToggle(!toggle)
    }
    
    // C L I C K   L O C A L
    useEffect(() => {
        localStorage.setItem("Switch", JSON.stringify(toggle))
    }, [toggle])

    return (
        <div className="header">
            <div className="logo-parents">
                {
                    theme ? <img src={Logodark} alt="Logo" /> : <img src={Logo} alt="Logo" />
                }
            </div>
            <div className="theme-mode-parents"
                onClick={() => {
                    themeMode()
                }}>
                    
                {
                    !toggle ? <button>< i className="bi bi-sun-fill" style={{ fontSize: "25px", color: "orange" }} /></button>
                    : <button><i className="bi bi-moon" style={{ fontSize: "23px" }} /></button>}

            </div>
        </div>
    )
}

export default Navbar