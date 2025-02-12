import { DashboardCard } from "../DashboardCard";
import { cardData } from "../DashBoardCardData";

const QuickActionModal = () =>{
    return(
        <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
            {cardData.map((card,index) =>(
                <DashboardCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};
export default QuickActionModal;
