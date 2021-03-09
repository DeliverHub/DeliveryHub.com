import { Allorder } from "./Allorder";
import { ProductOrder } from "./ProductOrder";
import { Productorderbilling } from "./productorderbilling";
import { ProductOrderItems } from "./ProductOrderItems";

export class ProductOrderDto {

allorder:Allorder
Order:ProductOrder;
OrderItems:ProductOrderItems[]=[]
OrderBilling:Productorderbilling
}
