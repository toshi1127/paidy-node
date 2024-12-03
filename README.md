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

## Usage

```javascript
import { Configuration, DefaultApi } from 'paidy-node';

const paidy = new DefaultApi(
  new Configuration({
    headers: {
      Authorization: `Bearer ${process.env.PAIDY_SECRET_KEY}`,
      'Paidy-Version': '2018-04-10',
    },
  }),
);
```
