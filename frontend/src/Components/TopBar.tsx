
import DateTime from "../EventHandlers/DateTime"
import ModeToggle from "./UserDarkMode"
const TopBar = () =>{
    return(
        <div>
            <ModeToggle/>
            <DateTime/>
        </div>
    );
};

export default TopBar;