import * as _ from 'lodash';
import { JsonAPISerializerUtil } from './jsonapi-serializer-util';
import { JsonAPISerializerOptions } from './jsonapi-serilizer-option';

export class Serializer {
    private payload: any = {};
    constructor(private collectionName: string = "", public opts: JsonAPISerializerOptions = null) { }

    serialize(data: any) {
        if (_.isArray(data)) {
            return this.collection(data);
        } else {
            return this.resource(data);
        }
    }

    collection(data: any) {
        this.payload.data = [];
        var serializerUtils = new JsonAPISerializerUtil(this.collectionName, this.opts);
        //data mapping
        data.forEach((record: any) => {            
            this.payload.data.push(serializerUtils.perform(record));
        });
         //include mapping
        if (serializerUtils.included.length > 0) {
            this.payload.included = serializerUtils.included;
        }
        return this.payload;
    }

    resource(data: any) {
        var serializerUtils = new JsonAPISerializerUtil(this.collectionName, this.opts);
        //data mapping
        this.payload.data = serializerUtils.perform(data);
         //include mapping
        if (serializerUtils.included.length > 0) {
            this.payload.included = serializerUtils.included;
        }
        return this.payload;
    }

   
}