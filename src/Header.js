import React,{useContext} from "react";
import '../public/styles/header.css';
import themeContext from "./MainContext";

export default function Header(props){

    
    
        const contextVal = useContext(themeContext);
        return(<header>
            
           <div className="header-top"></div>
            <nav>
                <ul>
                    
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a>{contextVal}</a></li>
                    
                </ul>
            </nav>
        </header>);
    
}