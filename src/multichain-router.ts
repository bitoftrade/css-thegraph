import {
  LogAnySwapOut as LogAnySwapOutEvent,
  LogAnySwapIn as LogAnySwapInEvent,
} from "../generated/MultichainRouter/MultichainRouter";
import {
  MultichainRouterLogAnySwapOut,
  MultichainRouterLogAnySwapIn,
} from "../generated/schema";

export function handleLogAnySwapOut(event: LogAnySwapOutEvent): void {
  let entity = new MultichainRouterLogAnySwapOut(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.token = event.params.token;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.amount = event.params.amount;
  entity.fromChainID = event.params.fromChainID;
  entity.toChainID = event.params.toChainID;
  entity.txHash = event.transaction.hash;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  entity.save();
}

export function handleLogAnySwapIn(event: LogAnySwapInEvent): void {
  let entity = new MultichainRouterLogAnySwapIn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.srcTxHash = event.params.txhash;
  entity.token = event.params.token;
  entity.to = event.params.to;
  entity.amount = event.params.amount;
  entity.fromChainID = event.params.fromChainID;
  entity.toChainID = event.params.toChainID;
  entity.txHash = event.transaction.hash;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  entity.save();
}
