import {useNavigate} from "react-router-dom";

interface baseCardProps {
    title: string;
    icon: React.ComponentType;
    description: string;
    route: string;
}

export function DashboardCard({title, description, route}: baseCardProps){
    const navigate = useNavigate();

    return(
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <button onClick={() => navigate(route)}>
                </button>
            </div>
        </div>
    );
}