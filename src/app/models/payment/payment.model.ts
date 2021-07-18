export interface PaymentModel{
    id?: string;
    code?: string;
    name: string;
    date:Date;
    receiptPayment: string;
    id_request:string;
}