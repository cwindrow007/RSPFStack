import { routeMap } from "../EventHandlers/routeMap";
import ProductsIcon from "../Icons/Products.png";
import OrdersIcon from "../Icons/Orders.png";
import InventoryIcon from "../Icons/Inventory.png";

export const cardData = [
    {
        title: "New Product",
        Description: "Create a new product Entry",
        icon: <img src = {ProductsIcon}/>,
        buttonText: "Create",
        route: routeMap.products

    },
    {
        title: "Inventory",
        Description: "Check current Inventory",
        icon: <img src = {InventoryIcon}/>,
        buttonText: "view",
        route: routeMap.inventory
    },
    {
        title: "Manage Orders",
        Description: "Track and fulfill orders",
        buttonText: "Manage",
        icon: <img src = {OrdersIcon}/>,
        route: routeMap.orders
    }
]
export default cardData;