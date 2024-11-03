/* tslint:disable */
/* eslint-disable */
/**
 * Paidy Payment API
 * API for creating payments through Paidy.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CapturePayment201ResponseBuyer
 */
export interface CapturePayment201ResponseBuyer {
    /**
     * 
     * @type {string}
     * @memberof CapturePayment201ResponseBuyer
     */
    name1?: string;
    /**
     * 
     * @type {string}
     * @memberof CapturePayment201ResponseBuyer
     */
    name2?: string;
}

/**
 * Check if a given object implements the CapturePayment201ResponseBuyer interface.
 */
export function instanceOfCapturePayment201ResponseBuyer(value: object): value is CapturePayment201ResponseBuyer {
    return true;
}

export function CapturePayment201ResponseBuyerFromJSON(json: any): CapturePayment201ResponseBuyer {
    return CapturePayment201ResponseBuyerFromJSONTyped(json, false);
}

export function CapturePayment201ResponseBuyerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapturePayment201ResponseBuyer {
    if (json == null) {
        return json;
    }
    return {
        
        'name1': json['name1'] == null ? undefined : json['name1'],
        'name2': json['name2'] == null ? undefined : json['name2'],
    };
}

  export function CapturePayment201ResponseBuyerToJSON(json: any): CapturePayment201ResponseBuyer {
      return CapturePayment201ResponseBuyerToJSONTyped(json, false);
  }

  export function CapturePayment201ResponseBuyerToJSONTyped(value?: CapturePayment201ResponseBuyer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name1': value['name1'],
        'name2': value['name2'],
    };
}

