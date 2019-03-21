import * as _ from 'lodash';
import { JsonAPIUtil } from './jsonapi-util';

export class JsonAPIDeserializerUtil extends JsonAPIUtil {
    private alreadyIncluded: any[] = [];
    constructor(private jsonapi)
    {
        super();
    }
    perform(data :any): any {
        return _.extend(this.extractAttributes(data), this.extractRelationships(data));
    }   

    private extractAttributes(from: any) {
        if (!from.attributes) { return; }
        let dest = this.keyForAttribute(from.attributes || {});
        if ('id' in from) {
            dest.id = from.id;
        }
        if ('type' in from) {
            dest.type = from.type;
        }
        return dest;
    }
    private extractRelationships(from: any): any {
        
        if (!from.relationships) { return; }

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
                        return dest[this.keyForAttribute(key)] = includes;
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
            return null;
        } else {
            this.alreadyIncluded.push(includedObject);
        }

        if (included) {
            return _.extend(this.extractAttributes(included), this.extractRelationships(included));
        } else {
            return {
                id: relationshipData.id,
                type: relationshipData.type
            };
        }
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