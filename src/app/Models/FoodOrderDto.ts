import { Allorder } from "./Allorder";
import { FoodOrder } from "./FoodOrder";
import { FoodOrderBilling } from "./FoodOrderBilling";
import { FoodOrderItem } from "./FoodOrderItem";

export class FoodOrderDto {
    allorder:Allorder
    Order:FoodOrder
    OrderItems:FoodOrderItem[]=[]
    OrderBilling:FoodOrderBilling

}
