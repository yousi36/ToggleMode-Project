import { use } from "react"
import { themeContextHook } from "./themeContextProvider";
import "./ToggleMode.css"

export function ToggleMode (){
    const {theme,handleButtonClick}=use(themeContextHook);
    if(theme=="dark"){
        document.body.style.backgroundColor="black";
    }
    else{
        document.body.style.backgroundColor="white";
    }
    return (
        <>
        <h3 style={{
            color:theme=="dark"?"white":"black",
        }} >Dark Light Mode Website</h3>
        <h4 style={{
            color:theme=="dark"?"white":"black",
        }}>Hello! My React V19 Fan</h4>
        <button  onClick={handleButtonClick} style={{
            color:theme=="dark"?"white":"black",
            backgroundColor:"green"
        }}>{theme=="dark"?"Switch to light Mode":"Switch to Dark Mode"}</button>
        </>
    )
}