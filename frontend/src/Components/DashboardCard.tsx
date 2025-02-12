import {useNavigate} from "react-router-dom";
import {ReactNode} from "react";


interface baseCardProps {
    title: string;
    Description: string;
    buttonText: string;
    icon: ReactNode;
    route: string;
}

export function DashboardCard({title, Description, buttonText, icon, route}: baseCardProps){
    const navigate = useNavigate();

    return(
        <div className = "border rouded-lg shadow-md p-6 bg-white hover:shadow-lg cursor-pointer flex items-center">
            <div>
                <h3 className = "text-xl font-semibold">{title}</h3>
                <p className = "text-gray-600 my-2">{Description}</p>
                <div>{icon}</div>

                <div>
                    <button
                    className="bg-blue-500 text-white px-4 py-2 rouded hover:bg-blue-600 transition"
                        onClick={() => navigate(route)}>
                    {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default DashboardCard;