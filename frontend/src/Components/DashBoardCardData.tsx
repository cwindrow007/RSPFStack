import { routeMap } from "../EventHandlers/routeMap";
import ProductsIcon from "../Icons/Products.png";
import OrdersIcon from "../Icons/Orders.png";
import InventoryIcon from "../Icons/Inventory.png";

export const cardData = [
    {
        title: "New Product",
        Description: "Create a new product Entry",
        icon: <img src = {ProductsIcon}/>,
        route: routeMap.products

    },
    {
        title: "Inventory",
        Description: "Check current Inventory",
        icon: <img src = {InventoryIcon}/>,
        route: routeMap.inventory
    },
    {
        title: "Manage Orders",
        Description: "Track and fulfill orders",
        icon: <img src = {OrdersIcon}/>,
        route: routeMap.orders
    }
]
export default cardData;