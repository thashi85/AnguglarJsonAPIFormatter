import { pluralize, underscore, dasherize, camelize} from 'inflected';

export namespace Inflector {
 export function caserizeFunc(attribute: string, conversionCase: string): string {
      attribute =underscore(attribute);
    switch (conversionCase) {
      case 'dash-case':
      case 'lisp-case':
      case 'spinal-case':
      case 'kebab-case':
            return dasherize(attribute);
      case 'underscore_case':
      case 'snake_case':
        return attribute;
      case 'CamelCase':
            return camelize(attribute);
      case 'camelCase':
            return camelize(attribute, false);
      default:
            return dasherize(attribute);
    }
  }

  export function pluralizeFunc(attribute: string): string {
        return pluralize(attribute);
  }
}
