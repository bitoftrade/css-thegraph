import { SrcCrossSwap as SrcCrossSwapEvent, SrcCrossSwapV2 as SrcCrossSwapV2Event } from "../generated/CrossChainRouter/CrossChainRouter";
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

export function handleSrcCrossSwapV2(event: SrcCrossSwapV2Event): void {
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
  entity.liquidityProvider = event.params.liquidityProvider;
  // here initiator is not event.transaction.from, but event.params.initiator 
  entity.initiator = event.params.initiator;

  entity.version = "1.2";

  entity.txHash = event.transaction.hash;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

