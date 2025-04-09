// Theme Toggle for user, allows user to have dark mode (made this for late night programming).
import {useEffect, useState} from "react";

const UserDarkMode = () =>{
    const[dark, setDark] = useState(() =>
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if(dark){
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else
        {
            root.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }, [dark]);

    return(
        <button onClick={() => setDark(!dark)} className="p-2 border">
            Toggle {dark ? "Light" : "Dark"} mode
        </button>
    );
};


export default UserDarkMode;