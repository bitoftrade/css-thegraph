import { PaymentCompleted as PaymentCompletedEvent } from "../generated/PaymentGateway/PaymentGateway";
import { PaymentCompleted } from "../generated/schema";

export function handlePaymentCompleted(event: PaymentCompletedEvent): void {
  let entity = new PaymentCompleted(event.transaction.hash.toHex() + "-" + event.logIndex.toString());

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
