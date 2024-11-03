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
import type { CapturePayment201ResponseBuyer } from './CapturePayment201ResponseBuyer';
import {
    CapturePayment201ResponseBuyerFromJSON,
    CapturePayment201ResponseBuyerFromJSONTyped,
    CapturePayment201ResponseBuyerToJSON,
    CapturePayment201ResponseBuyerToJSONTyped,
} from './CapturePayment201ResponseBuyer';

/**
 * 
 * @export
 * @interface CapturePayment201Response
 */
export interface CapturePayment201Response {
    /**
     * 
     * @type {string}
     * @memberof CapturePayment201Response
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof CapturePayment201Response
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CapturePayment201Response
     */
    expiresAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof CapturePayment201Response
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof CapturePayment201Response
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof CapturePayment201Response
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CapturePayment201Response
     */
    storeName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CapturePayment201Response
     */
    test?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CapturePayment201Response
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CapturePayment201Response
     */
    tier?: string;
    /**
     * 
     * @type {CapturePayment201ResponseBuyer}
     * @memberof CapturePayment201Response
     */
    buyer?: CapturePayment201ResponseBuyer;
}

/**
 * Check if a given object implements the CapturePayment201Response interface.
 */
export function instanceOfCapturePayment201Response(value: object): value is CapturePayment201Response {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function CapturePayment201ResponseFromJSON(json: any): CapturePayment201Response {
    return CapturePayment201ResponseFromJSONTyped(json, false);
}

export function CapturePayment201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CapturePayment201Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
        'amount': json['amount'] == null ? undefined : json['amount'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'description': json['description'] == null ? undefined : json['description'],
        'storeName': json['store_name'] == null ? undefined : json['store_name'],
        'test': json['test'] == null ? undefined : json['test'],
        'status': json['status'] == null ? undefined : json['status'],
        'tier': json['tier'] == null ? undefined : json['tier'],
        'buyer': json['buyer'] == null ? undefined : CapturePayment201ResponseBuyerFromJSON(json['buyer']),
    };
}

  export function CapturePayment201ResponseToJSON(json: any): CapturePayment201Response {
      return CapturePayment201ResponseToJSONTyped(json, false);
  }

  export function CapturePayment201ResponseToJSONTyped(value?: CapturePayment201Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'expires_at': value['expiresAt'] == null ? undefined : ((value['expiresAt']).toISOString()),
        'amount': value['amount'],
        'currency': value['currency'],
        'description': value['description'],
        'store_name': value['storeName'],
        'test': value['test'],
        'status': value['status'],
        'tier': value['tier'],
        'buyer': CapturePayment201ResponseBuyerToJSON(value['buyer']),
    };
}

