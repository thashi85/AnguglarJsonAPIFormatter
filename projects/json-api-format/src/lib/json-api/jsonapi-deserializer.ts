import * as _ from 'lodash';
import { JsonAPIDeserializerUtil } from './jsonapi-deserializer-util';

export class Deserializer {
    constructor(public opts: any = {}) { }

    deserialize(jsonapi: any) {
        if (_.isArray(jsonapi.data)) {
            return this.collection(jsonapi);
        } else {
            return this.resource(jsonapi);
        }
    }

    private collection(jsonapi: any) {
        return _.map(jsonapi.data, (d) => {
            return new JsonAPIDeserializerUtil(jsonapi).perform(d);
        });
    }

    private resource(jsonapi: any) {
        return new JsonAPIDeserializerUtil(jsonapi).perform(jsonapi.data);
    }
}

