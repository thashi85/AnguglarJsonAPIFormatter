import * as _ from 'lodash';
import { JsonAPIUtil } from './jsonapi-util';

export class JsonAPIDeserializerUtil extends JsonAPIUtil {
    private alreadyIncluded: any[] = [];
    private includeObjects: any[] = [];
    constructor(private jsonapi)
    {
        super();
    }
    perform(data :any): any {
        return this.populateObject(data);
    }   
    private  populateObject(data:any)
    {
       
        let obj=this.includeObjects.find(o=>o.id==data.id && o.type==data.type);
        if(obj){
            return obj;
        }
          let ret= _.extend(this.extractAttributes(data), this.extractRelationships(data));
        this.includeObjects.push(ret);
        return ret;
        /* var resp;
        var prm=new Promise((resolve, reject) => {
            let ret= _.extend(this.extractAttributes(data), this.extractRelationships(data));
            resolve(ret);
         });
         
         prm.then((r)=>{resp=r;});
    
        let responses = await Promise.all([prm]);
        
        this.includeObjects.push(resp);  
        return resp;*/
    } 
    private extractAttributes(from: any) {
        if (from==undefined||!from.attributes) { return; }          
        let dest=this.keyForAttribute(from.attributes || {});
        if ('id' in from) {
            dest.id = from.id;
        }
        if ('type' in from) {
            dest.type = from.type;
        }
        return dest;
    }
    private extractRelationships(from: any): any {
        
        if (from==undefined|| !from.relationships) { return; }

        let dest: any = {};

        Object.keys(from.relationships)
            .map((key: string) => {                
                let relationship = from.relationships[key];

                if (relationship.data === null) {
                    return dest[this.keyForAttribute(key)] = null;
                } else if (_.isArray(relationship.data)) {
                    let includes = relationship.data
                        .map((relationshipData: Array<any>) => {
                            return this.extractIncludes(relationshipData, key, from);
                        });
                    if (includes) {
                        dest[this.keyForAttribute(key)] = includes;
                    }
                } else {
                    let includes = this.extractIncludes(relationship.data, key, from)
                    if (includes) {
                        dest[this.keyForAttribute(key)] = includes;
                    }
                }
            });
        return dest;
    }


    private extractIncludes(relationshipData: any, relationshipName: any, from: any) {
        let included = this.findIncluded(relationshipData, relationshipName, from)
        let valueForRelationship = this.getValueForRelationship(relationshipData, included);
        return valueForRelationship;
    }
    private findIncluded(relationshipData: any, relationshipName: any, from: any) {
        if (!relationshipData) {
            return null;
        }

        let included = _.find(this.jsonapi.included, {
            id: relationshipData.id,
            type: relationshipData.type
        });

        var includedObject = {
            to: {
                id: from.id,
                type: from.type
            },
            from: Object.assign({}, relationshipData),
            relation: relationshipName            
        };
        
        // Check if the include is already processed (prevent circular references).
        if (_.find(this.alreadyIncluded, includedObject)) {
            var obj=this.includeObjects.find(o=>o.id==relationshipData.id && o.type==relationshipData.type);
            return obj;
        } 
         else 
        {
            this.alreadyIncluded.push(includedObject);
        } 
     
        let ret: {};
        if (included) {       
            ret=this.populateObject(included) //_.extend(this.extractAttributes(included), this.extractRelationships(included));  
                    
        } else {
            ret= {
                id: relationshipData.id,
                type: relationshipData.type
            };              
        }
       // this.includeObjects.push(ret);
       // this.alreadyIncluded.push(includedObject);     
        return ret;
    }
     

  

    private getValueForRelationship(relationshipData: any, included: any) {
        //if (this.opts && relationshipData && this.opts[relationshipData.type]) {
        //    let valueForRelationshipFct = this.opts[relationshipData.type]
        //        .valueForRelationship;

        //    return valueForRelationshipFct(relationshipData, included);
        //} else 
        {
            return included;
        }
    }
}