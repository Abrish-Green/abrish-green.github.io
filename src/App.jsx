import React, { useState ,useContext }  from 'react';
import Intro from './component/intro/intro'
import About from './component/about/about'
import Technology from './component/technology/technology'
import Contact from './component/contact/contact'
import Toggle from './component/toggle/toggle'
import { ThemeContext } from './context';
  
const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode= theme.state.darkMode
    return (
       <div style={{ backgroundColor: darkMode ? 'black' : 'white',color: darkMode ? 'white' : 'black' }}>
      
            <Toggle />
            <Intro />
            <About />   
            <Contact /> 
       
       </div>
    );
}

export default App;