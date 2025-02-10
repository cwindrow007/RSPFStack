import { routeMap } from "../EventHandlers/routeMap";

export const cardData = [
    {
        title: "New Product",
        Description: "Create a new product Entry",
        route: routeMap.products

    },
    {
        title: "Inventory",
        Description: "Access Inventory",
        route: routeMap.inventory
    },
    {
        title: "Orders",
        Description: "Access Orders",
        route: routeMap.orders
    }
]