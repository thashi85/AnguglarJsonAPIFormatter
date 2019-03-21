import { BaseResource } from 'json-api-format';
export class customer extends BaseResource{
    public reference: string;  
    public name: string;
    public active: boolean;  
    public company:string;   
    public contacts: contact[];
    public addrress:address;
}
export class contact extends BaseResource
{
    public name: string;
    public phone: string;
    public email: string;
}
export class address
{
    public addressLine1: string;
    public addressLine2: string;
}