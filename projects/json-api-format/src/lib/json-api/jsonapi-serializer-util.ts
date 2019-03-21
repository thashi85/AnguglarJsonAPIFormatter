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
       
        if (obj[this.getId(obj)] || obj[this.getTid(obj)]) {
            // Top-level data.
            var data: any = {
                type: this.getType(obj)                
            };
            var id = obj[this.getId(obj)];
            if (!_.isUndefined(id) && id != null) {
                data.id = String(id);
            }
            var tid = this.getTid(obj)
            if (!_.isUndefined(tid) && tid != null) {
                data.tid = obj[tid];
            }



            //Data attribute and relationship populate
            _.transform(obj, (result, value, key) => {

                if (key.toString() != "id" && key.toString() != "tid" && key.toString() != "type") {
                    if (!data.attributes) { data.attributes = {}; }

                    if (this.isComplexType(value)) {
                        // data.attributes[this.keyForAttribute(key)] = this.keyForAttribute(value);                    
                        this.serialize(data, value, key, _.isArray(value), this.opts);

                    } else {
                        if (this.isResource(data))
                            data.attributes[this.keyForAttribute(key)] = value;
                        else
                            data[this.keyForAttribute(key)] = value;
                    }
                }
            });

            return data;
        } else {
            return obj;
        }
        
    }
    private serialize(dest: any, current: any, attribute: any,isArray:boolean, opts: JsonAPISerializerOptions) {
        if (this.isResource(current, isArray)) {
            
            if (!(dest.relationships)) { dest.relationships = {}; }
            if (!dest.relationships[attribute]) { dest.relationships[attribute] = {};}
           
            if (isArray) {              

                if (!dest.relationships[attribute].data)
                    dest.relationships[attribute].data = [];

                _.forEach(current, (value, index) => {
                    this.generateRelationship(value, dest, attribute, isArray);
                });               

            }
            else {
                if (!dest.relationships[attribute].data) {
                    this.generateRelationship(current, dest, attribute, isArray);
                }
            }
            

           
           

        } else {
            if (this.isResource(dest))
                dest.attributes[this.keyForAttribute(attribute)] = this.keyForAttribute(current);
            else
                dest[this.keyForAttribute(attribute)] = this.keyForAttribute(current);
        }
    }

    private generateRelationship(resource,dest,attribute,isArray) {
        var id = resource[this.getId(resource)];
        var tid = resource[this.getTid(resource)];
        var type = this.getType(resource);
        var resObj = tid ? { 'tid': tid, 'type': type } : { 'id': id, 'type': type }
        if (isArray) {            
                dest.relationships[attribute].data.push(resObj);         
        } else {           
                dest.relationships[attribute].data = resObj;
        }

        //handle include
        var isInclude = false;
        Object.keys(resource).forEach(function (key, index) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
            if (key.toLowerCase() != "id" && key.toLowerCase() != "tid" && key.toLowerCase() != "type") {
                isInclude = true;
                return;
            }
        });
        if (isInclude) {
            var incAdded = _.find(this.included, function (inc) {
                return ((!_.isUndefined(inc.id) && inc.id == id) || (!_.isUndefined(inc.tid) && inc.tid == tid)) && inc.type.toLowerCase() == type.toLowerCase()
            });

            if (!incAdded) {
                this.included.push(this.serializeResource(resource));
            }
        }

    }
    private isResource(obj: any, isArray: boolean = false)
    {
        if (obj) {
            var tp = this.getType(obj);
            var res = obj;
            if (isArray) {                
                tp = this.getType(obj[0]);
                res = obj[0];
            }
           
            return !_.isUndefined(tp) && !_.isUndefined(res) && (!_.isUndefined(res.id) || !_.isUndefined(res.tid));
        }
        return null;
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
    private getType(obj: any): string {
        if (obj) {
            let type: string = obj.type;

            if (_.isUndefined(type)) {
                type = obj.constructor.name;
            }

            return type;
        }
        return null;
    }
}