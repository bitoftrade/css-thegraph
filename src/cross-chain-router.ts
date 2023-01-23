import { SrcCrossSwap as SrcCrossSwapEvent } from "../generated/CrossChainRouter/CrossChainRouter";
import { SrcCrossSwap } from "../generated/schema";

export function handleSrcCrossSwap(event: SrcCrossSwapEvent): void {
  let entity = new SrcCrossSwap(event.transaction.hash.toHex() + "-" + event.logIndex.toString());

  entity.srcToken = event.params.srcToken;
  entity.srcAmount = event.params.srcAmount;
  entity.destChainId = event.params.destChainId;
  entity.destToken = event.params.destToken;
  entity.minDestAmount = event.params.minDestAmount;
  entity.destUser = event.params.destUser;
  entity.connectorToken = event.params.connectorToken;
  entity.connectorTokenIncome = event.params.connectorTokenIncome;
  entity.refundAddress = event.params.refundAddress;
  //   In latest version changed to liquidityProvider
  entity.liquidityProvider = event.params.liqudityProvider;
  entity.initiator = event.transaction.from;

  entity.txHash = event.transaction.hash;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}
