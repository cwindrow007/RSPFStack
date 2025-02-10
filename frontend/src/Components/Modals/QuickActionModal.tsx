import { DashboardCard } from "../DashboardCard";
import { cardData } from "../DashBoardCardData";

const QuickActionModal = () =>{
    return(
        <div>
            {cardData.map((card,index) =>(
                <DashboardCard key={index} {...card} />
                ))}
        </div>
    );
};
export default QuickActionModal;
