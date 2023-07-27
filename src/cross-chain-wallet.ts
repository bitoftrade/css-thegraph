
import { DestCrossSwap as DestCrossSwapEvent } from "../generated/CrossChainWallet/CrossChainWallet";
import { DestCrossSwap } from "../generated/schema";

export function handleDestCrossSwap(event: DestCrossSwapEvent): void {
  let entity = new DestCrossSwap(event.transaction.hash.toHex() + "-" + event.logIndex.toString());

  entity.srcChainId = event.params.srcChainId;
  entity.srcTransactionHash = event.params.srcTransactionHash;
  entity.destToken = event.params.destToken;
  entity.destAmount = event.params.destAmount;
  entity.destUser = event.params.destUser;
  entity.connectorToken = event.params.connectorToken;
  entity.protocolFee = event.params.protocolFee;
  entity.gasCompensation = event.params.gasCompensation;
  entity.liquidityProvider = event.params.liquidityProvider;
  entity.initiator = event.transaction.from;

  entity.version = "1.1";

  entity.txHash = event.transaction.hash;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}
