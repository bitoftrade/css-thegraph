import {
  OwnershipTransferred as OwnershipTransferredEvent,
  ArbitraryTxWasSent as ArbitraryTxWasSentEvent,
  Deposit as DepositEvent,
  MarketMakerUpdated as MarketMakerUpdatedEvent,
  DestCrossSwap as DestCrossSwapEvent,
  SrcTxExecutorUpdated as SrcTxExecutorUpdatedEvent
} from "../generated/CCSmartWallet/CCSmartWallet";
import {
  SrcTxExecutorUpdated,
  DestCrossSwap,
  ArbitraryTxWasSent,
  Deposit,
  MarketMakerUpdated,CCSmartWalletOwnershipTransferred
} from "../generated/schema";

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new CCSmartWalletOwnershipTransferred(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

export function handleArbitraryTxWasSent(event: ArbitraryTxWasSentEvent): void {
  let entity = new ArbitraryTxWasSent(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.to = event.params.to;
  entity.callData = event.params.callData;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.sender = event.params.sender;
  entity.amount = event.params.amount;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleMarketMakerUpdated(event: MarketMakerUpdatedEvent): void {
  let entity = new MarketMakerUpdated(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.oldMarketMaker = event.params.oldMarketMaker;
  entity.newMarketMaker = event.params.newMarketMaker;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleDestCrossSwap(event: DestCrossSwapEvent): void {
  let entity = new DestCrossSwap(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.srcChainId = event.params.srcChainId;
  entity.srcTransactionHash = event.params.srcTransactionHash;
  entity.srcToken = event.params.srcToken;
  entity.srcAmount = event.params.srcAmount;
  entity.destToken = event.params.destToken;
  entity.destAmount = event.params.destAmount;
  entity.destUser = event.params.destUser;
  entity.usdcOutcome = event.params.usdcOutcome;
  entity.initiator = event.transaction.from;
  entity.destTransactionHash = event.transaction.hash;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleSrcTxExecutorUpdated(event: SrcTxExecutorUpdatedEvent): void {
  let entity = new SrcTxExecutorUpdated(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.oldSrcTxExecutor = event.params.oldSrcTxExecutor;
  entity.newSrcTxExecutor = event.params.newSrcTxExecutor;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}