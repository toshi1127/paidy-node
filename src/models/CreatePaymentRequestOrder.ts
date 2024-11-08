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
import type { CreatePaymentRequestOrderItemsInner } from './CreatePaymentRequestOrderItemsInner';
import {
    CreatePaymentRequestOrderItemsInnerFromJSON,
    CreatePaymentRequestOrderItemsInnerFromJSONTyped,
    CreatePaymentRequestOrderItemsInnerToJSON,
    CreatePaymentRequestOrderItemsInnerToJSONTyped,
} from './CreatePaymentRequestOrderItemsInner';

/**
 * 
 * @export
 * @interface CreatePaymentRequestOrder
 */
export interface CreatePaymentRequestOrder {
    /**
     * 
     * @type {Array<CreatePaymentRequestOrderItemsInner>}
     * @memberof CreatePaymentRequestOrder
     */
    items: Array<CreatePaymentRequestOrderItemsInner>;
    /**
     * 
     * @type {number}
     * @memberof CreatePaymentRequestOrder
     */
    tax?: number;
    /**
     * 
     * @type {number}
     * @memberof CreatePaymentRequestOrder
     */
    shipping?: number;
    /**
     * 
     * @type {string}
     * @memberof CreatePaymentRequestOrder
     */
    orderRef?: string;
}

/**
 * Check if a given object implements the CreatePaymentRequestOrder interface.
 */
export function instanceOfCreatePaymentRequestOrder(value: object): value is CreatePaymentRequestOrder {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function CreatePaymentRequestOrderFromJSON(json: any): CreatePaymentRequestOrder {
    return CreatePaymentRequestOrderFromJSONTyped(json, false);
}

export function CreatePaymentRequestOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePaymentRequestOrder {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(CreatePaymentRequestOrderItemsInnerFromJSON)),
        'tax': json['tax'] == null ? undefined : json['tax'],
        'shipping': json['shipping'] == null ? undefined : json['shipping'],
        'orderRef': json['order_ref'] == null ? undefined : json['order_ref'],
    };
}

  export function CreatePaymentRequestOrderToJSON(json: any): CreatePaymentRequestOrder {
      return CreatePaymentRequestOrderToJSONTyped(json, false);
  }

  export function CreatePaymentRequestOrderToJSONTyped(value?: CreatePaymentRequestOrder | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'items': ((value['items'] as Array<any>).map(CreatePaymentRequestOrderItemsInnerToJSON)),
        'tax': value['tax'],
        'shipping': value['shipping'],
        'order_ref': value['orderRef'],
    };
}

