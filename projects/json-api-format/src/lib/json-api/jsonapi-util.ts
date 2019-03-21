import * as _ from 'lodash';
export class JsonAPIUtil {

    protected keyForAttribute(attribute: any): any {
        if (_.isPlainObject(attribute)) {
            return _.transform(attribute, (result, value, key) => {
                if (this.isComplexType(value)) {
                    result[this.keyForAttribute(key)] = this.keyForAttribute(value);
                } else {
                    result[this.keyForAttribute(key)] = value;
                }
            });
        } else if (_.isArray(attribute)) {
            return attribute.map((attr) => {
                if (this.isComplexType(attr)) {
                    return this.keyForAttribute(attr);
                } else {
                    return attr;
                }
            });
        } else {
            return attribute;
            //if (_.isFunction(this.opts.keyForAttribute)) {
            //    return this.opts.keyForAttribute(attribute);
            //} else {
            //    //TL
            //    //return Inflector.caserizeFunc(attribute, this.opts.keyForAttribute);
            //    return attribute;
            //}
        }
    }

    protected isComplexType(obj: any) {
        return _.isArray(obj) || _.isObject(obj);
    }
}