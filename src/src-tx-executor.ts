import {
  CCSmartWalletAddressUpdated as CCSmartWalletAddressUpdatedEvent,
  SrcCrossSwap as SrcCrossSwapEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/SrcTxExecutor/SrcTxExecutor";
import {
  SrcTxExecutorOwnershipTransferred,
  CCSmartWalletAddressUpdated,
  SrcCrossSwap,
} from "../generated/schema";

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new SrcTxExecutorOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}


export function handleCCSmartWalletAddressUpdated(
  event: CCSmartWalletAddressUpdatedEvent
): void {
  let entity = new CCSmartWalletAddressUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldAddress = event.params.oldAddress;
  entity.newAddress = event.params.newAddress;
  entity.save();
}

export function handleSrcCrossSwap(
  event: SrcCrossSwapEvent
): void {
  let entity = new SrcCrossSwap(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.srcToken = event.params.srcToken;
  entity.srcAmount = event.params.srcAmount;
  entity.destChainId = event.params.destChainId;
  entity.destToken = event.params.destToken;
  entity.minDestAmount = event.params.minDestAmount;
  entity.destUser = event.params.destUser;
  entity.usdcIncome = event.params.usdcIncome;
  entity.initiator = event.transaction.from;
  entity.srcTransactionHash = event.transaction.hash;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}
