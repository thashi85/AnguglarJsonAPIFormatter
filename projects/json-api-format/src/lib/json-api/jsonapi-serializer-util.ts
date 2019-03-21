import * as _ from 'lodash';
import { JsonAPISerializerOptions } from './jsonapi-serilizer-option';
import { JsonAPIUtil} from './jsonapi-util';
export class JsonAPISerializerUtil extends JsonAPIUtil {
 
    public payload: any; 
    public included: any[] = [];

    constructor(public collectionName: string = "", public opts: JsonAPISerializerOptions = null)
    {
        super();     
    }
    //first method which is called for serialization
    perform(record:any): any {
        return this.serializeResource(record)
    }
    private serializeResource(obj: any) {
        if (_.isNull(obj)) {
            return null;
        }

        // Top-level data.
        var data: any = {
            type: this.getType(obj),
            id: String(obj[this.getId(obj)])
        };
        var tid = this.getTid(obj)
        if (!_.isUndefined(tid) && tid != null) {
            data.tid = tid;
        }

        //Data attribute and relationship populate
        _.transform(obj, (result, value, key) => {
           
            if (key.toString() != "id" && key.toString() != "type") {
                if (!data.attributes) { data.attributes = {}; }

                if (this.isComplexType(value)) {
                    // data.attributes[this.keyForAttribute(key)] = this.keyForAttribute(value);                    
                    this.serialize(data, value, key,_.isArray(value), this.opts);

                } else {
                    data.attributes[this.keyForAttribute(key)] = value;
                }
            }
        });
        return data;
    }
    private serialize(dest: any, current: any, attribute: any,isArray:boolean, opts: JsonAPISerializerOptions) {
        if (this.isRelationship(current)) {

            var id = current[this.getId(current)];//todo tid
            var type = this.getType(current);

            if (!(dest.relationships)) { dest.relationships = {}; }
            if (!dest.relationships[attribute]) { dest.relationships[attribute] = {};}
           
            if (isArray) {
                if (!dest.relationships[attribute].data)
                    dest.relationships[attribute].data = [];
                dest.relationships[attribute].data.push({ 'id': id, 'type': type });

            }
            else {
                if (!dest.relationships[attribute].data)
                    dest.relationships[attribute].data = { 'id': id, 'type': type };
            }
            

           
            //handle include
            var incAdded = _.find(this.included, function (inc) {
                return inc.id == id && inc.type.toLowerCase() == type.toLowerCase()
            });

            if (!incAdded) {
                this.included.push(this.serializeResource(current));
            }

        } else {
            dest.attributes[this.keyForAttribute(attribute)] = this.keyForAttribute(current);
        }
    }
    private isRelationship(obj: any) {
        return !_.isUndefined(obj.id) || !_.isUndefined(obj.tid)
    }
  

    private getId(obj:any): string {
       // return this.opts.id || 'id';      
        if (!_.isUndefined(obj.id))
            return 'id'
        return 'id';
    }
    private getTid(obj: any): string {
        // return this.opts.id || 'id';
        if (!_.isUndefined(obj.tid))
            return 'tid';       
        return null;
    }
    private getType(obj:any): string {
        let type: string=obj.type;
      
        if (_.isUndefined(type)) {
            type = obj.constructor.name;
        }

        return type;
    }
}