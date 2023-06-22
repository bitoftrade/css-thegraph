import { Payment as PaymentEvent } from "../generated/PaymentGateway/PaymentGateway";
import { Payment } from "../generated/schema";

export function handlePayment(event: PaymentEvent): void {
  let entity = new Payment(event.transaction.hash.toHex() + "-" + event.logIndex.toString());

  // event
  entity.orderId = event.params.orderId;
  entity.payInToken = event.params.payInToken;
  entity.payOutToken = event.params.payOutToken;
  entity.payInAmount = event.params.payInAmount;
  entity.payOutAmount = event.params.payOutAmount;
  entity.merchant = event.params.merchant;

  // metadata
  entity.initiator = event.transaction.from;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.txHash = event.transaction.hash;

  entity.save();
}
