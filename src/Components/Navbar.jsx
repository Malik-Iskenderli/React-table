import React from 'react'
import  './Sass/Navbar.scss'
import Logo2 from './Image/Logo2.png'
import {Switch} from 'antd'

const Navbar = ({theme,setTheme}) => {
    const themeMode = ()=>{
        setTheme(!theme)
    }
  return (
    <div className="header">
        <div className="logo-parents">
            <img src={Logo2} alt="Logo" />
            <span>enior.az</span>
        </div>
        <div className="theme-mode-parents">
            <span>< i className="bi bi-sun-fill" style={{fontSize:"25px" , color:"orange"}}/></span>
            <Switch 
            checkedChildren="Off"
            unCheckedChildren="On"
            onClick={()=>{
                themeMode()}
            }
            />
            <span><i className="bi bi-moon" style={{fontSize:"23px"}}/></span>

        </div>
    </div>
  )
}

export default Navbar