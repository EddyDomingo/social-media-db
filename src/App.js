import './App.css';
import Overview from './Overview';
import OverviewToday from './OverviewToday';
import OverviewData from './OverviewData';
import OverToday from './OverToday';
import { useState } from 'react';


function App() {
  const [toggle, setToggle] = useState(true)
  const [theme, setTheme] = useState("Light Theme")
  const toggler = () =>{
    toggle ? setToggle(false): setToggle(true);
    toggle ? setTheme("Dark Mode"): setTheme("Light Mode");
  }
  return (
    <div style={{ background: toggle ? "hsl(225, 100%, 98%)" : "hsl(230, 17%, 14%)"}}>
      <header>
        <h1 style={{ color: toggle ? "hsl(228, 28%, 20%)" : "hsl(0, 0%, 100%)"}} >Social Media Dashboard</h1>
        <span style={{ color: toggle ? "hsl(228, 12%, 44%)" : "hsl(0, 0%, 100%)"}} >Total Followers: 23,004</span>
        <hr></hr>
        <span style={{ color: toggle ? "hsl(228, 12%, 44%)" : "hsl(0, 0%, 100%)"}} >{theme}</span>
        <label className="switch1">
            <input type="checkbox" onClick={() => toggler()}/>
            <span className="slider1"/>
        </label>
      </header>
      <section>
        <Overview OverviewData={OverviewData} toggle={toggle}/>
      </section>
      <section>
        <OverviewToday OverToday={OverToday} toggle={toggle}/>
      </section>
    
    </div>
  );
}

export default App;
