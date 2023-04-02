import React from "react";
import ReactDOM from 'react-dom';
import Header from "./Header";
import themeContext from "./MainContext";
class App extends React.Component{
    render(){
        return( <themeContext.Provider value='blue'><Header/><main>
            </main></themeContext.Provider>)
        
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));