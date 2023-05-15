import { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme") || false))

  useEffect(()=>{
    localStorage.setItem("theme" , JSON.stringify(theme))
  },[theme])
  return (
    <div className={theme ? "dark" : "light"}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Sidebar/>
      
    </div>
  );
}

export default App;
