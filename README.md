[![License](https://img.shields.io/github/license/toshi1127/paidy-node)](https://github.com/toshi1127/paidy-node/blob/master/LICENSE)
![NPM Downloads](https://img.shields.io/npm/dw/paidy-node)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/toshi1127/paidy-node/.github/workflows/ci.yml)

![Banner](https://download.paidy.com/Checkout_728x90.png)

# Paidy Node

Paidy Node is the simple and thin Paidy API wrapper library for Node.js that supports following features.

- [Payments API](https://paidy.com/docs/en/payments.html#paidyapi_pay)
- [Tokens API](https://paidy.com/docs/en/tokens.html#paidyapi_tok)
- [Webhooks](https://paidy.com/docs/en/webhook.html)

## Installation

Install `paidy-node` using **yarn**

```shell
yarn add paidy-node
```

or **npm**

```shell
npm i paidy-node
```

or **pnpm**

```shell
pnpm i paidy-node
```

## Usage

```javascript
import { Configuration, DefaultApi } from "paidy-node";

const paidy = new DefaultApi(
  new Configuration({
    headers: {
      Authorization: `Bearer ${process.env.PAIDY_SECRET_KEY}`,
      "Paidy-Version": "2018-04-10",
    },
  })
);
```

### Create Payment

```javascript
await paidy.createPayment({
  createPaymentRequest: {
    currency: "JPY",
    tokenId: "tokenId",
    amount: 1100,
    buyerData: {
      userId: "userId",
    },
    order: {
      items: [
        {
          quantity: 1,
          id: "id",
          unitPrice: 1000,
        },
      ],
      tax: 100,
    },
  },
});
```

### Capture Payment

```javascript
await paidy.capturePayment({
  id: "paymentId",
  refundPaymentRequest: {
    captureId: "captureId",
  },
});
```

### Refund Payment

```javascript
await paidy.refundPayment({
  id: "paymentId",
});
```

### Get Payment

```javascript
await paidy.capturePayment({
  id: "paymentId",
});
```
