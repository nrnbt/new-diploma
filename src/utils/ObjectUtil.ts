import _ from "lodash";

/**
 * Object utility
 */
class ObjectUtil {
  /**
   * Check value is object
   * @param {any} value
   * @return {boolean}
   */
  static isObject = (value: any): boolean => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  };

  /**
   * Get nested property value from object
   * @param {object} object
   * @param {string} key For example: foo.bar.baz
   * @return {any}
   */
  static getValue = (object: object, key: string): any => {
    return typeof key === "string" ? _.property(key.split("."))(object) : null;
  };

  /**
   * Set value of object's nested property
   * @param {object} object
   * @param {string} key For example: foo.bar.baz
   * @param {any} value
   */
  static setValue = (object: object, key: string, value: any): void => {
    _.set(object, key, value);
  };

  /**
   * Safe JSON parse
   * @param {string} value
   * @return {object | null}
   */
  static safeJsonParse = (value: string): object | null => {
    let valid = false;
    let json: object = {};
    try {
      json = JSON.parse(value);
      valid = true && json !== null;
    } catch (e) {
      console.log(e);
    }

    return valid && json ? json : null;
  };

  /**
   * Safe JSON stringify
   * @param {any} value
   * @return {string | null}
   */
  static safeJsonStringify = (value: any): string | null => {
    let valid = false;
    let string = "";
    try {
      string = JSON.stringify(value);
      valid = true;
    } catch (e) {
      console.log(e);
    }

    return valid && string ? string : null;
  };

  /**
   * Form data to JSON
   * @param {FormData} formData
   * @return {object}
   */
  static formDataToJson = (formData: FormData): object => {
    var data: any = {};

    try {
      formData.forEach((value, key) => (data[key] = value));
    } catch (e) {
      console.log(e);
    }

    return data;
  };

  /**
   * JSON to form data
   * @param {object} json
   * @return {FormData}
   */
  static jsonToFormData = (json: any): FormData => {
    let formData = new FormData();

    for (let key in json) {
      formData.append(key, json[key]);
    }

    return formData;
  };
}

export default ObjectUtil;
