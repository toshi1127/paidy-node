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
import type { CreatePayment201ResponseCapturesInner } from './CreatePayment201ResponseCapturesInner';
import {
    CreatePayment201ResponseCapturesInnerFromJSON,
    CreatePayment201ResponseCapturesInnerFromJSONTyped,
    CreatePayment201ResponseCapturesInnerToJSON,
    CreatePayment201ResponseCapturesInnerToJSONTyped,
} from './CreatePayment201ResponseCapturesInner';
import type { CreatePayment201ResponseOrder } from './CreatePayment201ResponseOrder';
import {
    CreatePayment201ResponseOrderFromJSON,
    CreatePayment201ResponseOrderFromJSONTyped,
    CreatePayment201ResponseOrderToJSON,
    CreatePayment201ResponseOrderToJSONTyped,
} from './CreatePayment201ResponseOrder';
import type { CreatePayment201ResponseShippingAddress } from './CreatePayment201ResponseShippingAddress';
import {
    CreatePayment201ResponseShippingAddressFromJSON,
    CreatePayment201ResponseShippingAddressFromJSONTyped,
    CreatePayment201ResponseShippingAddressToJSON,
    CreatePayment201ResponseShippingAddressToJSONTyped,
} from './CreatePayment201ResponseShippingAddress';
import type { CreatePayment201ResponseBuyer } from './CreatePayment201ResponseBuyer';
import {
    CreatePayment201ResponseBuyerFromJSON,
    CreatePayment201ResponseBuyerFromJSONTyped,
    CreatePayment201ResponseBuyerToJSON,
    CreatePayment201ResponseBuyerToJSONTyped,
} from './CreatePayment201ResponseBuyer';

/**
 * 
 * @export
 * @interface CreatePayment201Response
 */
export interface CreatePayment201Response {
    /**
     * 
     * @type {string}
     * @memberof CreatePayment201Response
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreatePayment201Response
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreatePayment201Response
     */
    expiresAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof CreatePayment201Response
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof CreatePayment201Response
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePayment201Response
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePayment201Response
     */
    storeName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePayment201Response
     */
    test?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreatePayment201Response
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePayment201Response
     */
    tier?: string;
    /**
     * 
     * @type {CreatePayment201ResponseBuyer}
     * @memberof CreatePayment201Response
     */
    buyer?: CreatePayment201ResponseBuyer;
    /**
     * 
     * @type {CreatePayment201ResponseOrder}
     * @memberof CreatePayment201Response
     */
    order?: CreatePayment201ResponseOrder;
    /**
     * 
     * @type {CreatePayment201ResponseShippingAddress}
     * @memberof CreatePayment201Response
     */
    shippingAddress?: CreatePayment201ResponseShippingAddress;
    /**
     * 
     * @type {Array<CreatePayment201ResponseCapturesInner>}
     * @memberof CreatePayment201Response
     */
    captures?: Array<CreatePayment201ResponseCapturesInner>;
    /**
     * 
     * @type {Array<object>}
     * @memberof CreatePayment201Response
     */
    refunds?: Array<object>;
    /**
     * 
     * @type {object}
     * @memberof CreatePayment201Response
     */
    metadata?: object;
}

/**
 * Check if a given object implements the CreatePayment201Response interface.
 */
export function instanceOfCreatePayment201Response(value: object): value is CreatePayment201Response {
    return true;
}

export function CreatePayment201ResponseFromJSON(json: any): CreatePayment201Response {
    return CreatePayment201ResponseFromJSONTyped(json, false);
}

export function CreatePayment201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePayment201Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'expiresAt': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
        'amount': json['amount'] == null ? undefined : json['amount'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'description': json['description'] == null ? undefined : json['description'],
        'storeName': json['store_name'] == null ? undefined : json['store_name'],
        'test': json['test'] == null ? undefined : json['test'],
        'status': json['status'] == null ? undefined : json['status'],
        'tier': json['tier'] == null ? undefined : json['tier'],
        'buyer': json['buyer'] == null ? undefined : CreatePayment201ResponseBuyerFromJSON(json['buyer']),
        'order': json['order'] == null ? undefined : CreatePayment201ResponseOrderFromJSON(json['order']),
        'shippingAddress': json['shipping_address'] == null ? undefined : CreatePayment201ResponseShippingAddressFromJSON(json['shipping_address']),
        'captures': json['captures'] == null ? undefined : ((json['captures'] as Array<any>).map(CreatePayment201ResponseCapturesInnerFromJSON)),
        'refunds': json['refunds'] == null ? undefined : json['refunds'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

  export function CreatePayment201ResponseToJSON(json: any): CreatePayment201Response {
      return CreatePayment201ResponseToJSONTyped(json, false);
  }

  export function CreatePayment201ResponseToJSONTyped(value?: CreatePayment201Response | null, ignoreDiscriminator: boolean = false): any {
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
        'buyer': CreatePayment201ResponseBuyerToJSON(value['buyer']),
        'order': CreatePayment201ResponseOrderToJSON(value['order']),
        'shipping_address': CreatePayment201ResponseShippingAddressToJSON(value['shippingAddress']),
        'captures': value['captures'] == null ? undefined : ((value['captures'] as Array<any>).map(CreatePayment201ResponseCapturesInnerToJSON)),
        'refunds': value['refunds'],
        'metadata': value['metadata'],
    };
}

