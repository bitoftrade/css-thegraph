import {
  AdminUpdated as AdminUpdatedEvent,
  CCSmartWalletAddressUpdated as CCSmartWalletAddressUpdatedEvent,
  FirstPartOfSwapExecuted as FirstPartOfSwapExecutedEvent,
  DirectUSDCTransfer as DirectUSDCTransferEvent,
} from "../generated/FirstTxExecutor/FirstTxExecutor";
import {
  AdminUpdated,
  CCSmartWalletAddressUpdated,
  FirstPartOfSwapExecuted,
  SrcDirectUSDCTransfer,
} from "../generated/schema";

export function handleAdminUpdated(event: AdminUpdatedEvent): void {
  let entity = new AdminUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldAdmin = event.params.oldAdmin;
  entity.newAdmin = event.params.newAdmin;
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

export function handleDirectUSDCTransfer(event: DirectUSDCTransferEvent): void {
  let entity = new SrcDirectUSDCTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.txHash = event.transaction.hash;
  entity.amount = event.params.amount;
  entity.userAddress = event.params.userAddress;
  entity.smartWallet = event.params.smartWallet;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.save();
}

export function handleFirstPartOfSwapExecuted(
  event: FirstPartOfSwapExecutedEvent
): void {
  let entity = new FirstPartOfSwapExecuted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.destAmount = event.params.destAmount;
  entity.destNetworkId = event.params.destNetworkId;
  entity.destTokenAddress = event.params.destTokenAddress;
  entity.destUserAddress = event.params.destUserAddress;
  entity.slippage = event.params.slippage;
  entity.initiator = event.transaction.from;
  entity.srcTransactionHash = event.transaction.hash;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}
