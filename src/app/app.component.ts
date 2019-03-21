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
    dummyCustomer.name="Test Customer";
    dummyCustomer.reference="CU1001";
    dummyCustomer.active=true;
    dummyCustomer.type="CorporateCustomer";

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
