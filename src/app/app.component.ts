import { Component } from '@angular/core';
import { Deserializer, Serializer } from 'ts-json-api-formatter';
import {customer, address, contact} from 'src/models/customer'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Json API Format Library';
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
//debugger;
    var testJson={"links":{"self":"http://apidocumentation.optimosoftware.co.uk/OptimoWebAPI/DEVYS/api/v4.1/bookings/9989?include=BookingQuestionnaires,BookingQuestions,question,bookingPackages,bookingItems"},"data":{"type":"booking","id":"9989","attributes":{"bookingReference":"BP9989","bookingDate":"2019-06-17T10:34:40","confirmed":false,"confirmedDate":"2019-06-18T06:06:07.5","attendees":1,"eventName":"","grossAmount":3795.75,"netAmount":3615.0,"taxAmount":180.75,"discountAmount":0.0,"deliveryCharge":0.0,"actualCost":0.0,"margin":1.00000000,"invoicedAmount":0.0,"nextInvoiceDate":"0001-01-01T00:00:00","paidAmount":0.0,"dueAmount":3795.75,"cancelled":false,"cancelledDate":"0001-01-01T00:00:00","salesChannelId":1,"salesChannel":"Corporate","temporary":false,"expiryDate":"0001-01-01T00:00:00","alternativeBookingRef":"","agentBooking":false,"exported":false,"paymentOnCollection":false,"currencyExchangeRate":1.00000000,"paymentProcessStartTime":"0001-01-01T00:00:00","paymentInProgress":false,"showPriceWithTax":false,"eventStartDate":"2019-06-19T00:00:00","eventEndDate":"2019-06-19T04:00:00","currencyID":4,"currencyCode":"AED","currencyName":"UAE Dirhams","entityConfigurationProfileId":0,"totalBookingQuestions":5,"totalAnsweredQuestions":1,"totalUnAnsweredMandatoryQuestions":2,"totalBookingTasks":0,"totalCompletedTasks":0,"totalOverdueTasks":0,"externalBookingId":""},"relationships":{"client":{"data":{"id":"5016","type":"client"},"links":{"related":"http://apidocumentation.optimosoftware.co.uk/OptimoWebAPI/DevYS/api/v4.1/customers/clients/5016"}},"contact":{"data":{"id":"6016","type":"contact"},"links":{"related":"http://apidocumentation.optimosoftware.co.uk/OptimoWebAPI/DevYS/api/v4.1/customers/contacts/6016"}},"bookingStatus":{"data":{"id":"32","type":"bookingStatus"}},"paymentTerm":{"data":{"id":"1","type":"paymentTerm"}},"cancellationPolicy":{"data":{"id":"1","type":"cancellationPolicy"}},"salesPerson":{"data":{"id":"1073","type":"user"}},"eventManager":{"data":{"id":"4","type":"user"}},"bookingPackages":{"data":[{"id":"13723","tid":"","type":"bookingPackage"}],"links":{"related":"http://apidocumentation.optimosoftware.co.uk/OptimoWebAPI/DevYS/api/v4.1/bookings/9989/booking-packages"}},"bookingItems":{"data":[{"id":"68070","tid":"","type":"privateBookingGeneralAdmissionItem"},{"id":"68071","tid":"","type":"bookingServiceItem"},{"id":"68072","type":"privateBookingGeneralAdmissionItem"},{"id":"68073","tid":"","type":"privateBookingResourceItem"},{"id":"68074","tid":"","type":"bookingDeliveryItem"},{"id":"68075","tid":"","type":"bookingAdminFeeItem"},{"id":"68076","type":"privateBookingGeneralAdmissionItem"},{"id":"68077","type":"privateBookingGeneralAdmissionItem"},{"id":"68078","type":"privateBookingGeneralAdmissionItem"}]},"invoiceAddress":{"data":{"id":"34666","type":"address"}},"deliveryAddress":{"data":{"id":"34667","type":"address"}},"auditHistory":{"data":[{"id":"145893","type":"auditHistory"}]},"bookingQuestionnaires":{"data":[{"id":"5479","type":"globalBookingQuestionnaire"},{"id":"5480","type":"globalBookingQuestionnaire"},{"id":"5481","type":"packageBookingQuestionnaire"},{"id":"5482","type":"itemBookingQuestionnaire"},{"id":"5483","type":"itemBookingQuestionnaire"},{"id":"5484","type":"itemBookingQuestionnaire"},{"id":"5485","type":"itemBookingQuestionnaire"},{"id":"5486","type":"itemBookingQuestionnaire"},{"id":"5487","type":"itemBookingQuestionnaire"},{"id":"5488","type":"itemBookingQuestionnaire"},{"id":"5489","type":"itemBookingQuestionnaire"}]}}},"included":[{"type":"bookingPackage","id":"13723","attributes":{"name":"GP Circuit","attendees":1,"quantity":1,"priceTypeId":1,"priceType":"Varied","unitPrice":3615.0,"priceSettingMethodId":1,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":1,"taxCode":"0%","taxRate":0.00000000,"taxAmount":180.75,"netAmount":3615.0,"margin":100.00000000,"totalAmount":3795.75,"startDate":"2019-06-19T00:00:00","endDate":"2019-06-19T04:00:00","bespoke":true,"attendeesPerPackage":1,"complimentary":false,"voucherPackage":false,"voucherRedeemedPackage":false,"costCentreCode":"C1","hasUpsellItems":false,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:09.603"},"entityConfigurationProfileId":0},"relationships":{"bookingItems":{"data":[{"id":"68070","tid":"","type":"bookingItem"},{"id":"68071","type":"bookingItem"},{"id":"68072","type":"bookingItem"},{"id":"68073","type":"bookingItem"},{"id":"68074","type":"bookingItem"},{"id":"68075","type":"bookingItem"},{"id":"68076","type":"bookingItem"},{"id":"68077","type":"bookingItem"},{"id":"68078","type":"bookingItem"}]},"event":{"data":{"id":"3","type":"event"}},"package":{"data":{"id":"1","type":"privatePackage"}}}},{"type":"privateBookingGeneralAdmissionItem","id":"68070","attributes":{"startTime":"2019-06-19T00:00:00","endTime":"2019-06-19T04:00:00","itineraryItem":false,"despatchItem":false,"printBeforeDespatch":false,"scanBeforeDespatch":false,"printAtHomeTemplateId":0,"mobileTemplateId":0,"name":"Main Pit","priceTypeId":3,"priceType":"Daily","unitPrice":1565.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":2,"taxCode":"5%","taxRate":5.00000000,"taxAmount":78.25,"netAmount":1565.0,"margin":0.00000000,"showInDocuments":true,"showInInvoice":true,"quantity":1,"units":1.0,"upsell":false,"unitPriceExcludingTax":1565.0,"unitPriceIncludingTax":1643.25,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:09.61"},"entityConfigurationProfileId":0},"relationships":{"item":{"data":{"id":"369","type":"generalAdmissionItem"}},"allocations":{"data":[{"id":"764026","type":"allocation"}]},"eligibleAssets":{"data":[{"id":"33","type":"asset"},{"id":"34","type":"asset"},{"id":"35","type":"asset"},{"id":"36","type":"asset"},{"id":"37","type":"asset"},{"id":"38","type":"asset"},{"id":"39","type":"asset"},{"id":"40","type":"asset"},{"id":"41","type":"asset"},{"id":"42","type":"asset"},{"id":"43","type":"asset"},{"id":"44","type":"asset"},{"id":"76","type":"asset"},{"id":"77","type":"asset"},{"id":"78","type":"asset"},{"id":"79","type":"asset"},{"id":"80","type":"asset"},{"id":"81","type":"asset"},{"id":"82","type":"asset"},{"id":"83","type":"asset"},{"id":"84","type":"asset"},{"id":"85","type":"asset"},{"id":"86","type":"asset"},{"id":"87","type":"asset"},{"id":"88","type":"asset"},{"id":"90","type":"asset"},{"id":"91","type":"asset"},{"id":"92","type":"asset"},{"id":"93","type":"asset"},{"id":"94","type":"asset"},{"id":"95","type":"asset"},{"id":"96","type":"asset"},{"id":"97","type":"asset"},{"id":"98","type":"asset"},{"id":"99","type":"asset"},{"id":"100","type":"asset"},{"id":"132","type":"asset"},{"id":"133","type":"asset"},{"id":"134","type":"asset"},{"id":"135","type":"asset"}]},"priceGroup":{"data":{"id":"1","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}},"bookingItemDetails":{"data":[{"id":"109653","type":"bookingItemDetail"}]}}},{"type":"bookingServiceItem","id":"68071","attributes":{"startTime":"2019-06-19T00:00:00","endTime":"2019-06-19T04:00:00","itineraryItem":false,"attendeesPerItem":1,"multiplesOnly":false,"enforceAtUpsell":false,"name":"Safety Cover","priceTypeId":3,"priceType":"Daily","unitPrice":0.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":2,"taxCode":"5%","taxRate":5.00000000,"taxAmount":0.0,"netAmount":0.0,"margin":1.00000000,"showInDocuments":false,"showInInvoice":true,"quantity":1,"units":1.0,"upsell":false,"unitPriceExcludingTax":0.0,"unitPriceIncludingTax":0.0,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:10.493"},"entityConfigurationProfileId":0},"relationships":{"item":{"data":{"id":"384","type":"serviceItem"}},"priceGroup":{"data":{"id":"1","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}}}},{"type":"privateBookingGeneralAdmissionItem","id":"68072","attributes":{"startTime":"2019-06-19T00:00:00","endTime":"2019-06-19T04:00:00","itineraryItem":false,"despatchItem":false,"printBeforeDespatch":false,"scanBeforeDespatch":false,"printAtHomeTemplateId":0,"mobileTemplateId":0,"name":"Main Pit Lane","priceTypeId":3,"priceType":"Daily","unitPrice":2000.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":2,"taxCode":"5%","taxRate":5.00000000,"taxAmount":100.0,"netAmount":2000.0,"margin":0.00000000,"showInDocuments":false,"showInInvoice":true,"quantity":1,"units":1.0,"upsell":false,"unitPriceExcludingTax":2000.0,"unitPriceIncludingTax":2100.0,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:10.507"},"entityConfigurationProfileId":0},"relationships":{"item":{"data":{"id":"334","type":"generalAdmissionItem"}},"allocations":{"data":[{"id":"764027","type":"allocation"}]},"eligibleAssets":{"data":[{"id":"234","type":"asset"}]},"priceGroup":{"data":{"id":"1","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}},"bookingItemDetails":{"data":[{"id":"109654","type":"bookingItemDetail"}]}}},{"type":"privateBookingResourceItem","id":"68073","attributes":{"startTime":"2019-06-19T00:00:00","endTime":"2019-06-19T04:00:00","itineraryItem":false,"allocateToAll":false,"despatchItem":false,"printBeforeDespatch":false,"scanBeforeDespatch":false,"name":"Main Pit owner","priceTypeId":3,"priceType":"Daily","unitPrice":50.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":2,"taxCode":"5%","taxRate":5.00000000,"taxAmount":2.5,"netAmount":50.0,"margin":0.00000000,"showInDocuments":false,"showInInvoice":true,"quantity":1,"units":1.0,"upsell":false,"unitPriceExcludingTax":50.0,"unitPriceIncludingTax":52.5,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:11.34"},"entityConfigurationProfileId":0},"relationships":{"item":{"data":{"id":"483","type":"resourceItem"}},"priceGroup":{"data":{"id":"1","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}},"bookingItemDetails":{"data":[{"id":"109655","type":"bookingItemDetail"}]}}},{"type":"bookingDeliveryItem","id":"68074","attributes":{"name":"Booking Confirmation","priceTypeId":2,"priceType":"Hourly","unitPrice":0.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"taxId":2,"taxCode":"5%","taxRate":5.00000000,"taxAmount":0.0,"netAmount":0.0,"margin":0.00000000,"showInDocuments":false,"showInInvoice":true,"quantity":1,"upsell":false,"unitPriceExcludingTax":0.0,"unitPriceIncludingTax":0.0,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:11.357"},"entityConfigurationProfileId":0},"relationships":{"item":{"data":{"id":"25","type":"deliveryItem"}},"priceGroup":{"data":{"id":"1","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}}}},{"type":"bookingAdminFeeItem","id":"68075","attributes":{"entityConfigurationProfileId":0,"name":"booking charge item","priceTypeId":7,"priceType":"Covers","unitPrice":0.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"taxId":2,"taxCode":"5%","taxRate":5.00000000,"taxAmount":0.0,"netAmount":0.0,"margin":0.00000000,"showInDocuments":false,"showInInvoice":false,"quantity":1,"upsell":true,"unitPriceExcludingTax":0.0,"unitPriceIncludingTax":0.0,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:11.367"}},"relationships":{"item":{"data":{"id":"453","type":"adminFeeItem"}},"priceGroup":{"data":{"id":"1","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}}}},{"type":"privateBookingGeneralAdmissionItem","id":"68076","attributes":{"startTime":"2019-06-19T00:00:00","endTime":"2019-06-19T04:00:00","itineraryItem":false,"despatchItem":false,"printBeforeDespatch":false,"scanBeforeDespatch":false,"name":"GP Circuit","priceTypeId":1,"priceType":"Varied","unitPrice":0.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":2,"taxCode":"5%","taxRate":5.00000000,"taxAmount":0.0,"netAmount":0.0,"margin":0.00000000,"showInDocuments":false,"showInInvoice":false,"quantity":1,"units":0.0,"upsell":true,"unitPriceExcludingTax":0.0,"unitPriceIncludingTax":0.0,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:11.377"},"entityConfigurationProfileId":0},"relationships":{"item":{"data":{"id":"401","type":"generalAdmissionItem"}},"allocations":{"data":[{"id":"764028","type":"allocation"}]},"eligibleAssets":{"data":[{"id":"5","type":"asset"},{"id":"6","type":"asset"},{"id":"7","type":"asset"}]},"priceGroup":{"data":{"id":"1004","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}},"bookingItemDetails":{"data":[{"id":"109656","type":"bookingItemDetail"}]}}},{"type":"privateBookingGeneralAdmissionItem","id":"68077","attributes":{"startTime":"2019-06-19T00:00:00","endTime":"2019-06-19T04:00:00","itineraryItem":false,"despatchItem":false,"printBeforeDespatch":false,"scanBeforeDespatch":false,"name":"GP Circuit","priceTypeId":1,"priceType":"Varied","unitPrice":0.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":2,"taxCode":"5%","taxRate":5.00000000,"taxAmount":0.0,"netAmount":0.0,"margin":0.00000000,"showInDocuments":false,"showInInvoice":false,"quantity":1,"units":0.0,"upsell":true,"unitPriceExcludingTax":0.0,"unitPriceIncludingTax":0.0,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:12.053"},"entityConfigurationProfileId":0},"relationships":{"item":{"data":{"id":"401","type":"generalAdmissionItem"}},"allocations":{"data":[{"id":"764029","type":"allocation"}]},"eligibleAssets":{"data":[{"id":"5","type":"asset"},{"id":"6","type":"asset"},{"id":"7","type":"asset"}]},"priceGroup":{"data":{"id":"1004","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}},"bookingItemDetails":{"data":[{"id":"109657","type":"bookingItemDetail"}]}}},{"type":"privateBookingGeneralAdmissionItem","id":"68078","attributes":{"startTime":"2019-06-19T00:00:00","endTime":"2019-06-19T04:00:00","itineraryItem":false,"despatchItem":false,"printBeforeDespatch":false,"scanBeforeDespatch":false,"name":"GP Circuit","priceTypeId":1,"priceType":"Varied","unitPrice":0.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":2,"taxCode":"5%","taxRate":5.00000000,"taxAmount":0.0,"netAmount":0.0,"margin":0.00000000,"showInDocuments":false,"showInInvoice":false,"quantity":1,"units":0.0,"upsell":true,"unitPriceExcludingTax":0.0,"unitPriceIncludingTax":0.0,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:12.967"},"entityConfigurationProfileId":0},"relationships":{"item":{"data":{"id":"401","type":"generalAdmissionItem"}},"allocations":{"data":[{"id":"764030","type":"allocation"}]},"eligibleAssets":{"data":[{"id":"5","type":"asset"},{"id":"6","type":"asset"},{"id":"7","type":"asset"}]},"priceGroup":{"data":{"id":"1004","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}},"bookingItemDetails":{"data":[{"id":"109658","type":"bookingItemDetail"}]}}},{"type":"globalBookingQuestionnaire","id":"5479","relationships":{"questionnaire":{"data":{"id":"4","type":"globalQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5483","type":"textQuestionAnswer"}]}}},{"type":"globalBookingQuestionnaire","id":"5480","relationships":{"questionnaire":{"data":{"id":"17","type":"globalQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5485","type":"singleChoiceQuestionAnswer"}]}}},{"type":"packageBookingQuestionnaire","id":"5481","relationships":{"bookingPackage":{"data":{"id":"13723","type":"bookingPackage"}},"questionnaire":{"data":{"id":"9","type":"productQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5484","type":"textQuestionAnswer"}]}}},{"type":"itemBookingQuestionnaire","id":"5482","relationships":{"bookingPackage":{"data":{"id":"13723","type":"bookingPackage"}},"bookingItem":{"data":{"id":"68070","type":"bookingItem"}},"questionnaire":{"data":{"id":"17","type":"productQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5486","type":"singleChoiceQuestionAnswer"}]}}},{"type":"itemBookingQuestionnaire","id":"5483","relationships":{"bookingPackage":{"data":{"id":"13723","type":"bookingPackage"}},"bookingItem":{"data":{"id":"68070","type":"bookingItem"}},"questionnaire":{"data":{"id":"18","type":"productQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5487","type":"multipleChoiceQuestionAnswer"}]}}},{"type":"itemBookingQuestionnaire","id":"5484","relationships":{"bookingPackage":{"data":{"id":"13723","type":"bookingPackage"}},"bookingItem":{"data":{"id":"68070","type":"bookingItem"}},"questionnaire":{"data":{"id":"19","type":"productQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5488","type":"singleChoiceQuestionAnswer"}]}}},{"type":"itemBookingQuestionnaire","id":"5485","relationships":{"bookingPackage":{"data":{"id":"13723","type":"bookingPackage"}},"bookingItem":{"data":{"id":"68070","type":"bookingItem"}},"questionnaire":{"data":{"id":"20","type":"productQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5489","type":"textQuestionAnswer"}]}}},{"type":"itemBookingQuestionnaire","id":"5486","relationships":{"bookingPackage":{"data":{"id":"13723","type":"bookingPackage"}},"bookingItem":{"data":{"id":"68070","type":"bookingItem"}},"questionnaire":{"data":{"id":"21","type":"productQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5490","type":"booleanQuestionAnswer"}]}}},{"type":"itemBookingQuestionnaire","id":"5487","relationships":{"bookingPackage":{"data":{"id":"13723","type":"bookingPackage"}},"bookingItem":{"data":{"id":"68070","type":"bookingItem"}},"questionnaire":{"data":{"id":"22","type":"productQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5491","type":"multipleChoiceQuestionAnswer"}]}}},{"type":"itemBookingQuestionnaire","id":"5488","relationships":{"bookingPackage":{"data":{"id":"13723","type":"bookingPackage"}},"bookingItem":{"data":{"id":"68070","type":"bookingItem"}},"questionnaire":{"data":{"id":"23","type":"productQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5492","type":"textQuestionAnswer"}]}}},{"type":"itemBookingQuestionnaire","id":"5489","relationships":{"bookingPackage":{"data":{"id":"13723","type":"bookingPackage"}},"bookingItem":{"data":{"id":"68072","type":"bookingItem"}},"questionnaire":{"data":{"id":"25","type":"productQuestionnaire"}},"bookingQuestions":{"data":[{"id":"5493","type":"multipleChoiceQuestionAnswer"}]}}},{"type":"bookingItem","id":"68070","attributes":{"entityConfigurationProfileId":0}},{"type":"bookingItem","id":"68071","attributes":{"entityConfigurationProfileId":0}},{"type":"bookingItem","id":"68072","attributes":{"entityConfigurationProfileId":0}},{"type":"bookingItem","id":"68073","attributes":{"entityConfigurationProfileId":0}},{"type":"bookingItem","id":"68074","attributes":{"entityConfigurationProfileId":0}},{"type":"bookingItem","id":"68075","attributes":{"entityConfigurationProfileId":0}},{"type":"bookingItem","id":"68076","attributes":{"entityConfigurationProfileId":0}},{"type":"bookingItem","id":"68077","attributes":{"entityConfigurationProfileId":0}},{"type":"bookingItem","id":"68078","attributes":{"entityConfigurationProfileId":0}},{"type":"textQuestionAnswer","id":"5483","attributes":{"undecided":false,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"question":{"data":{"id":"4","type":"textQuestion"}}}},{"type":"singleChoiceQuestionAnswer","id":"5485","attributes":{"undecided":false,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"question":{"data":{"id":"21","type":"singleChoiceQuestion"}}}},{"type":"textQuestionAnswer","id":"5484","attributes":{"undecided":false,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"question":{"data":{"id":"9","type":"textQuestion"}}}},{"type":"singleChoiceQuestionAnswer","id":"5486","attributes":{"undecided":false,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"bookingAnswerChoice":{"data":{"id":9,"type":"bookingAnswerChoice"}},"question":{"data":{"id":"21","type":"singleChoiceQuestion"}}}},{"type":"multipleChoiceQuestionAnswer","id":"5487","attributes":{"undecided":false,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"question":{"data":{"id":"22","type":"multipleChoiceQuestion"}}}},{"type":"singleChoiceQuestionAnswer","id":"5488","attributes":{"undecided":true,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"bookingAnswerChoice":{"data":{"id":10,"type":"bookingAnswerChoice"}},"question":{"data":{"id":"23","type":"singleChoiceQuestion"}}}},{"type":"textQuestionAnswer","id":"5489","attributes":{"undecided":false,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"question":{"data":{"id":"24","type":"textQuestion"}}}},{"type":"booleanQuestionAnswer","id":"5490","attributes":{"undecided":false,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"question":{"data":{"id":"25","type":"booleanQuestion"}}}},{"type":"multipleChoiceQuestionAnswer","id":"5491","attributes":{"undecided":false,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"question":{"data":{"id":"26","type":"multipleChoiceQuestion"}}}},{"type":"textQuestionAnswer","id":"5492","attributes":{"undecided":true,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"question":{"data":{"id":"27","type":"textQuestion"}}}},{"type":"multipleChoiceQuestionAnswer","id":"5493","attributes":{"undecided":true,"auditInfo":{"insertedUser":"Testuser","insertedTime":"2019-06-18T06:06:13.68"}},"relationships":{"question":{"data":{"id":"29","type":"multipleChoiceQuestion"}}}},{"type":"textQuestion","id":"4","attributes":{"questionText":"Public Package Question","mandatory":false,"allowUndecided":false,"quantityRequired":false,"questionType":1,"questionNo":1},"relationships":{"salesChannels":{"data":[{"id":"1","type":"salesChannel"}]}}},{"type":"singleChoiceQuestion","id":"21","attributes":{"questionText":"Sample test","mandatory":false,"allowUndecided":false,"quantityRequired":false,"questionType":1,"questionNo":1}},{"type":"textQuestion","id":"9","attributes":{"questionText":"Testing GP Circuit","mandatory":false,"allowUndecided":false,"quantityRequired":false,"questionType":1,"questionNo":1},"relationships":{"salesChannels":{"data":[{"id":"1","type":"salesChannel"}]}}},{"type":"bookingAnswerChoice","id":9,"attributes":{"name":"I agreed","quantity":1}},{"type":"multipleChoiceQuestion","id":"22","attributes":{"questionText":"What food catagories should be available for the meals? (This is a multiple choice, Muilt answer)","mandatory":true,"allowUndecided":false,"questionType":2,"questionNo":1},"relationships":{"salesChannels":{"data":[{"id":"1","type":"salesChannel"}]}}},{"type":"bookingAnswerChoice","id":10,"attributes":{"name":"With family","quantity":5}},{"type":"singleChoiceQuestion","id":"23","attributes":{"questionText":"How will you atend the function? (This is a multiple choice, single answer)","mandatory":true,"allowUndecided":true,"quantityRequired":false,"questionType":1,"questionNo":2},"relationships":{"answerChoices":{"data":[{"id":"14","type":"answerChoice"},{"id":"15","type":"answerChoice"}]},"salesChannels":{"data":[{"id":"1","type":"salesChannel"}]}}},{"type":"textQuestion","id":"24","attributes":{"defaultAnswer":"this is a default value but the user can change it","questionText":"How did you got to know about the Event? (this is a text answer)","mandatory":false,"allowUndecided":false,"quantityRequired":false,"questionType":1,"questionNo":3},"relationships":{"salesChannels":{"data":[{"id":"1","type":"salesChannel"}]}}},{"type":"booleanQuestion","id":"25","attributes":{"questionText":"Would you recomend the event? (this is s Yes No answer)","mandatory":false,"allowUndecided":false,"quantityRequired":false,"questionType":1,"questionNo":4},"relationships":{"salesChannels":{"data":[{"id":"1","type":"salesChannel"}]}}},{"type":"multipleChoiceQuestion","id":"26","attributes":{"questionText":"How many kids will be visiting? (Multi choice with a quantity) ","mandatory":true,"allowUndecided":false,"questionType":1,"questionNo":5},"relationships":{"salesChannels":{"data":[{"id":"1","type":"salesChannel"}]}}},{"type":"textQuestion","id":"27","attributes":{"questionText":"How will you describe your experience on the Event? (undecided status)","mandatory":true,"allowUndecided":true,"quantityRequired":false,"questionType":2,"questionNo":6},"relationships":{"salesChannels":{"data":[{"id":"1","type":"salesChannel"}]}}},{"type":"multipleChoiceQuestion","id":"29","attributes":{"questionText":"What are the meal catagories?","mandatory":true,"allowUndecided":true,"questionType":1,"questionNo":1},"relationships":{"salesChannels":{"data":[{"id":"1","type":"salesChannel"}]}}},{"type":"answerChoice","id":"14","attributes":{"name":"By my self"}},{"type":"answerChoice","id":"15","attributes":{"name":"With family"}}],"meta":{"Status":{"ProcessingTime":880,"EndTime":"2019-06-19T05:36:55.5382535+01:00","StartTime":"2019-06-19T05:36:54.6580184+01:00"}},"errors":null};
   
    var testJson2={"links":{"self":"http://139.99.208.167/COG/Optimov4RestAPI/api/v4.1/bookings/473?include=bookingItems,splitBookingItems,bookingpackages"},"data":{"type":"booking","id":"473","attributes":{"bookingReference":"IB473","bookingDate":"2020-06-19T00:53:07.17","confirmed":false,"confirmedDate":"2020-06-19T00:53:07.17","attendees":1,"eventName":"Test Booking TL","bookingReasonId":4,"bookingReason":"Information Requested","bookingSourceId":4,"bookingSource":"Email","grossAmount":219.25,"netAmount":199.31818182,"taxAmount":19.93181818,"discountAmountExcludingTax":0.0,"discountAmountIncludingTax":0.0,"deliveryCharge":0.0,"estimatedCost":0.0,"margin":100.00,"invoicedAmount":0.0,"paidAmount":0.0,"dueAmount":219.25,"cancelled":false,"salesChannelId":5,"salesChannel":"Internet","temporary":false,"agentBooking":false,"exported":false,"paymentOnCollection":false,"currencyExchangeRate":1.00000000,"paymentInProgress":false,"showPriceWithTax":false,"eventStartDate":"2020-06-27T09:30:00","eventEndDate":"2020-06-27T10:00:00","currencyID":7,"currencyCode":"$","currencyName":"Australian Dollar","entityConfigurationProfileId":0,"totalBookingQuestions":0,"totalAnsweredQuestions":0,"totalUnAnsweredMandatoryQuestions":0,"totalBookingTasks":0,"totalCompletedTasks":0,"totalOverdueTasks":0,"grossAmountExcludingBond":219.25,"netAmountExcludingBond":199.31818182,"totalBondAmount":0.0,"invoiceStatus":3,"paymentStatus":3,"approvalRequirementId":0,"pendingPushAction":false},"relationships":{"client":{"data":{"id":"1103","type":"client"},"links":{"related":"http://139.99.208.167/COG/Optimov4RestAPI/api/v4.1/customers/clients/1103"}},"contact":{"data":{"id":"1108","type":"contact"},"links":{"related":"http://139.99.208.167/COG/Optimov4RestAPI/api/v4.1/customers/contacts/1108"}},"bookingStatus":{"data":{"id":"36","type":"bookingStatus"}},"paymentTerm":{"data":{"id":"1","type":"paymentTerm"}},"cancellationPolicy":{"data":{"id":"1","type":"cancellationPolicy"}},"salesPerson":{"data":{"id":"6","type":"user"}},"eventManager":{"data":{"id":"14","type":"user"}},"priceConcession":{"data":{"id":"1","type":"priceConcession"}},"venue":{"data":{"id":"1","type":"venue"},"links":{"related":"http://139.99.208.167/COG/Optimov4RestAPI/api/v4.1/venues/1"}},"bookingPackages":{"data":[{"id":"760","type":"bookingPackage"}],"links":{"related":"http://139.99.208.167/COG/Optimov4RestAPI/api/v4.1/bookings/473/booking-packages"}},"bookingItems":{"data":[{"id":"3184","type":"bookingProductItem"},{"id":"3183","type":"privateBookingGeneralAdmissionItem"}]},"invoiceAddress":{"data":{"id":"12073","type":"address"}},"deliveryAddress":{"data":{"id":"12074","type":"address"}},"auditHistory":{"data":[{"id":"14845","type":"auditHistory"}]}}},"included":[{"type":"bookingPackage","id":"760","attributes":{"name":"Test Booking TL","attendees":1,"quantity":1,"priceTypeId":1,"priceType":"Varied","unitPrice":199.31818182,"unitPriceExcludingTax":199.31818182,"unitPriceIncludingTax":238.5,"priceSettingMethodId":1,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":1,"taxCode":"F","taxRate":10.00000000,"taxAmount":19.93181818,"netAmount":199.31818182,"margin":100.00000000,"totalAmount":219.25,"grossAmount":219.25,"startDate":"2020-06-27T09:30:00","endDate":"2020-06-27T10:00:00","bespoke":true,"attendeesPerPackage":1,"complimentary":false,"voucherPackage":false,"voucherRedeemedPackage":false,"hasUpsellItems":false,"auditInfo":{"insertedUser":"Optimo","insertedTime":"2020-06-19T00:53:08.053"},"entityConfigurationProfileId":0,"netAmountExcludingBond":0.0,"totalBondAmount":0.0,"unitPriceExcludingBond":0.0},"relationships":{"bookingItems":{"data":[{"id":"3184","type":"bookingProductItem"},{"id":"3183","type":"privateBookingGeneralAdmissionItem"}]},"event":{"data":{"id":"3","type":"event"}},"package":{"data":{"id":"11","type":"privatePackage"}}}},{"type":"bookingProductItem","id":"3184","attributes":{"despatchItem":false,"printBeforeDespatch":false,"scanBeforeDespatch":false,"startTime":"2020-06-27T09:30:00","endTime":"2020-06-27T10:00:00","itineraryItem":false,"attendeesPerItem":1,"multiplesOnly":false,"enforceAtUpsell":false,"name":"Auditorium - 1 or 2 Consecutive Performances - each*","priceTypeId":7,"priceType":"Covers","unitPrice":181.81818182,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":2,"taxCode":"C","taxRate":10.00000000,"taxAmount":18.18181818,"netAmount":181.81818182,"grossAmount":200.0,"margin":100.00000000,"showInDocuments":false,"showInInvoice":true,"quantity":1,"units":1.00000000,"upsell":true,"unitPriceExcludingTax":181.81818182,"unitPriceIncludingTax":200.000000002,"auditInfo":{"insertedUser":"Optimo","insertedTime":"2020-06-19T00:53:08.693"},"entityConfigurationProfileId":0,"invoiced":false,"costExported":false},"relationships":{"item":{"data":{"id":"33","type":"productItem"}},"priceGroup":{"data":{"id":"1","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}},"bookingPackage":{"data":{"id":"760","type":"bookingPackage"}}}},{"type":"privateBookingGeneralAdmissionItem","id":"3183","attributes":{"startTime":"2020-06-27T09:30:00","endTime":"2020-06-27T10:00:00","itineraryItem":false,"allocateToAll":false,"attendees":1,"despatchItem":false,"printBeforeDespatch":false,"scanBeforeDespatch":false,"name":"Courtyard Hire - per hr","priceTypeId":2,"priceType":"Hourly","unitPrice":35.0,"estimatedUnitCost":0.0,"estimatedTotalCost":0.0,"actualUnitCost":0.0,"actualTotalCost":0.0,"taxId":2,"taxCode":"C","taxRate":10.00000000,"taxAmount":1.75,"netAmount":17.5,"grossAmount":19.25,"margin":100.00000000,"showInDocuments":false,"showInInvoice":true,"quantity":1,"units":0.50000000,"upsell":true,"unitPriceExcludingTax":35.0,"unitPriceIncludingTax":38.5,"auditInfo":{"insertedUser":"Optimo","insertedTime":"2020-06-19T00:53:08.223"},"entityConfigurationProfileId":0,"invoiced":false,"costExported":false},"relationships":{"item":{"data":{"id":"45","type":"generalAdmissionItem"}},"allocations":{"data":[{"id":"3044","type":"allocation"}]},"eligibleAssets":{"data":[{"id":"226","type":"facility"}]},"priceGroup":{"data":{"id":"1","type":"priceGroup"}},"venue":{"data":{"id":"1","type":"venue"}},"bookingItemDetails":{"data":[{"id":"4912","type":"bookingItemDetail"}]},"bookingPackage":{"data":{"id":"760","type":"bookingPackage"}}}}],"meta":{"status":{"processingTime":163,"endTime":"2020-06-19T03:47:37.160739+10:00","startTime":"2020-06-19T03:47:36.9971476+10:00"},"apiId":"20061903-4736-WZW"},"errors":null};
debugger;
    var JsonDeserialized=((new Deserializer()).deserialize(testJson2));
  }
}
