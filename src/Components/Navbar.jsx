import React, { useEffect, useState } from 'react'
import './Sass/Navbar.scss'
import Logo2 from './Image/Logo2.png'
import { Switch } from 'antd'

const Navbar = ({ theme, setTheme }) => {
    const [toggle, setToggle] = useState(JSON.parse(localStorage.getItem("Switch")||false))
    const themeMode = () => {
        setTheme(!theme)
        setToggle(!toggle)
    }
    useEffect(()=>{
        localStorage.setItem("Switch",JSON.stringify(toggle))
    },[toggle])
    return (
        <div className="header">
            <div className="logo-parents">
                <img src={Logo2} alt="Logo" />
                <span>enior.az</span>
            </div>
            <div className="theme-mode-parents"
                onClick={() => {
                    themeMode() 
                }
                }>
                {
                    !toggle ? <span>< i className="bi bi-sun-fill" style={{ fontSize: "25px", color: "orange" }} /></span>
                        : <span><i className="bi bi-moon" style={{ fontSize: "23px" }} /></span>
                }


                {/* <Switch
                    checkedChildren="Off"
                    unCheckedChildren="On"
                    onClick={() => {
                        themeMode()
                    }
                    }
                /> */}
            </div>
        </div>
    )
}

export default Navbar