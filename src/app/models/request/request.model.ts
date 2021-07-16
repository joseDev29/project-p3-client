import { ClientModel } from "../client/client.model";
import { PropertyModel } from "../project/property.model";
import { UserModel } from "../security/user.model";

export interface RequestModel{
    id?: string;
    code?: string;
    date: Date;
    client_id: string;
    seller_id: string;
    property_id: string;
    status?: string;
    offer: string;
    firstPayment?:string;
    totalPayment?:string;
    feePayment?:string;
    feeNumber?:string;
    client?:ClientModel;
    seller?:UserModel;
    property?:PropertyModel
}