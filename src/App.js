import { useContext } from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ComondContext from './Components/Context/ComondContext';

function App() {
  
  const {theme,setTheme} = useContext(ComondContext)
  return (
    <div className={theme ? "dark" : "light"}>
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
