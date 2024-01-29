import {
  Payment as PaymentEvent,
  PaymentV2 as PaymentV2Event
} from "../generated/PaymentGateway/PaymentGateway";
import { Payment } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function handlePayment(event: PaymentEvent): void {
  let entity = new Payment(event.transaction.hash.toHex());

  // event
  entity.orderId = event.params.orderId;
  entity.payInToken = event.params.payInToken;
  entity.payOutToken = event.params.payOutToken;
  entity.payInAmount = event.params.payInAmount;
  entity.payOutAmount = event.params.payOutAmount;
  entity.protocolFeeAmount = new BigInt(0);
  entity.merchant = event.params.merchant;

  // metadata
  entity.initiator = event.transaction.from;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.txHash = event.transaction.hash;

  entity.version = "1.0";

  entity.save();
}

export function handlePaymentV2(event: PaymentV2Event): void {
  let entity = new Payment(event.transaction.hash.toHex());

  // event
  entity.orderId = event.params.orderId;
  entity.payInToken = event.params.payInToken;
  entity.payOutToken = event.params.payOutToken;
  entity.payInAmount = event.params.payInAmount;
  entity.payOutAmount = event.params.payOutAmount;
  entity.protocolFeeAmount = event.params.protocolFeeAmount;
  entity.merchant = event.params.merchant;

  // metadata
  entity.initiator = event.transaction.from;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.txHash = event.transaction.hash;

  entity.version = "2.0";

  entity.save();
}
