import React from "react";
import ReactDOM from 'react-dom';
import Header from "./Header";
import themeContext from "./MainContext";
import Home from "./Home";
import '../public/styles/main.css';
import bgimage from '../public/bg1.jpg';
class App extends React.Component{
    render(){
        return( <themeContext.Provider value='blue'>
            <div style={{backgroundImage:`url(${bgimage})`,backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'}}><Header /><main>
            </main>
            <Home />
            </div></themeContext.Provider>)
        
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));