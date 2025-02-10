import {useNavigate} from "react-router-dom";
import {ReactNode} from "react";


interface baseCardProps {
    title: string;
    Description: string;
    icon: ReactNode;
    route: string;
}

export function DashboardCard({title, Description, icon, route}: baseCardProps){
    const navigate = useNavigate();

    return(
        <div>
            <h3>{title}</h3>
            <p>{Description}</p>
            <div>{icon}</div>

            <div>
                <button onClick={() => navigate(route)}>
                </button>
            </div>
        </div>
    );
}
export default DashboardCard;