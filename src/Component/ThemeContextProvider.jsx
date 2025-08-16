import { createContext, useState } from "react"

export const themeContextHook=createContext();

export function ThemeContextProvider({children}){
    const [theme,setTheme]=useState("light");
    const handleButtonClick=()=>{
        setTheme((prev)=> prev=="dark"?"light":"dark");
    }
    return(
        <>
        <themeContextHook.Provider value={{theme,handleButtonClick}}>{children}</themeContextHook.Provider>
        </>
    )
}