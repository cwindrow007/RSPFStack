import { routeMap } from "../EventHandlers/routeMap";
import ProductsIcon from "../Icons/Products.png";
import OrdersIcon from "../Icons/Orders.png";
import InventoryIcon from "../Icons/Inventory.png";

export const cardData = [
    {
        title: "New Product",
        Description: "Create a new product Entry",
        route: routeMap.products

    },
    {
        title: "Inventory",
        Description: "Access Inventory",
        icon: OrdersIcon,
        route: routeMap.inventory
    },
    {
        title: "Orders",
        Description: "Access Orders",
        icon: InventoryIcon,
        route: routeMap.orders
    }
]
export default cardData;