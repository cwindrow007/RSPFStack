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
        <div className = "relative border rouded-lg shadow-md p-6 bg-white hover:shadow-lg cursor-pointer flex items-center dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <div>
                <h3 className = "text-xl font-semibold">{title}</h3>
                <p className = "text-gray-600 mt-2">{Description}</p>
                <div className = "absolute top-3 right-3 text-2xl text-gray-500 dark:invert ">{icon}</div>

                <div className="mt-10 flex justify-center">
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