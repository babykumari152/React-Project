import React,{useContext} from "react";
import themeContext from "./MainContext";
import Home from "./Home";

export default function Header(props){

    
    
        const contextVal = useContext(themeContext);
        return(<> <nav className="flex-row justify-between text-white">
        <div className="name">Bobby</div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <div className="menu-bar">
            <div className="list-item"><a href="#exp">Work </a></div>
            <div className="list-item"> <a href="#skills">Skills</a></div>
            <div className="list-item"><a href="#contact">Contact</a></div>
        </div>
    </nav></>)
    
}