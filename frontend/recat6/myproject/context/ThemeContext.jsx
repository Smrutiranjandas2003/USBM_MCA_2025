/* eslint-disable react/prop-types */
import { createContext ,useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
   
     const [theme, settheme] = useState("") ;   
     const toggleTheme = () => {
        settheme((prev) => prev === "light" ? "dark" : "light");
     };

 return(
    <ThemeContext.Provider value ={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
};

export default ThemeContext;