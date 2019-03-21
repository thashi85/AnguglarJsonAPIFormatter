# Json API Format Converter for Typescript

Json API Formatter for Angular(Typescript)
## Getting Started
Install JsonAPIFormmatter through npm:
```angular2html
npm install --save json-api-Formatter
```
Json API resource is identified by the id/tid attribute
when creating a typescript class, if that is a resource inherit that from base resource

Ex:
```typescript
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

```
By default class name will be taken as the type, that can be overwrite by specifing value to type
```typescript
var obj=new customer();
 obj.id="1001";
 obj.name="Test Customer";
 obj.type="CorporateCustomer";
```

For serialize/deserialize import Serializer and Deserializer

```typescript
import { Serializer } from 'json-api-format';
import { Deserializer } from 'json-api-format';
```

Create the instance of serializer and call "serialize" method by passing type script object
```typescript
var obj=new customer();
 obj.id="1001";
 obj.name="Test Customer";
 var JsonAPIFormattedString=((new Serializer()).serialize(Obj));
```
For deserialization create the instance of Dezirializer and call the "deserialize" method by passing json api format string
```typescript
 var customerObj=((new Deserializer()).deserialize(JsonAPIFormattedString));
```
Example: 

```typescript
import { Component } from '@angular/core';
import { Deserializer, Serializer } from 'json-api-format';
import {customer, address, contact} from 'src/models/customer'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JsonAPIFormatLibrary';
  JsonObj={};
  JsonSerialized='';
  JsonDeserialized='';
  
  constructor(){
    var dummyCustomer=new customer();
    dummyCustomer.id="1001";
    dummyCustomer.type="CorporateCustomer";
    dummyCustomer.name="Test Customer";
    dummyCustomer.reference="CU1001";
    dummyCustomer.active=true;    

    dummyCustomer.addrress=new address();
    dummyCustomer.addrress.addressLine1="Address1";
    dummyCustomer.addrress.addressLine2="Address2";

    dummyCustomer.contacts=[];
    var cnt=new contact();
    cnt.id="2001" 
    cnt.name="test contact"
    cnt.email="testc@t.com"
    cnt.phone="071858965"
    dummyCustomer.contacts.push(cnt);

    var cnt2=new contact();
    cnt2.id="2002" 
    cnt2.name="test2 contact"
    cnt2.email="test2c@t.com"
    cnt2.phone="0114785258"
    dummyCustomer.contacts.push(cnt2);

    this.JsonObj=dummyCustomer;
    this.JsonSerialized=((new Serializer()).serialize(dummyCustomer));
    this.JsonDeserialized=((new Deserializer()).deserialize(this.JsonSerialized));
    }
}
```
```javascript
data:
    type: "CorporateCustomer"
    id: "1001"
    attributes:
        name: "Test Customer"
        reference: "CU1001"
        active: true
        addrress:
            addressLine1: "Address1"
            addressLine2: "Address2"
relationships:
    contacts:
        data:
            0:
                id: "2001"
                type: "contact"
            1:
                id: "2002"
                type: "contact"
included:
    0:
        type: "contact"
        id: "2001"
        attributes:
            name: "test contact"
            email: "testc@t.com"
            phone: "071858965"
    1:
        type: "contact"
        id: "2002"
        attributes:
            name: "test2 contact"
            email: "test2c@t.com"
            phone: "0114785258"
```
Serialized Output:


Deserialized Output(same serialized output is deserialized):

```json

name: "Test Customer"
reference: "CU1001"
active: true
addrress:
    addressLine1: "Address1"
    addressLine2: "Address2"
id: "1001"
type: "CorporateCustomer"
contacts:
    0:
        name: "test contact"
        email: "testc@t.com"
        phone: "071858965"
        id: "2001"
        type: "contact"
    1:
        name: "test2 contact"
        email: "test2c@t.com"
        phone: "0114785258"
        id: "2002"
        type: "contact"
```