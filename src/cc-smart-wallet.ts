import {
  CCSmartWalletAdminUpdated as CCSmartWalletAdminUpdatedEvent,
  ArbitraryTxWasSent as ArbitraryTxWasSentEvent,
  Deposit as DepositEvent,
  MarketMakerUpdated as MarketMakerUpdatedEvent,
  ResponseTxWasSent as ResponseTxWasSentEvent,
  SignerUpdated as SignerUpdatedEvent,
  CCSmartWalletDirectUSDCTransfer as CCSmartWalletDirectUSDCTransferEvent,
} from "../generated/CCSmartWallet/CCSmartWallet";
import {
  CCSmartWalletAdminUpdated,
  ArbitraryTxWasSent,
  Deposit,
  MarketMakerUpdated,
  ResponseTxWasSent,
  SignerUpdated,
  CCSmartWalletDirectUSDCTransfer,
} from "../generated/schema";

export function handleCCSmartWalletAdminUpdated(
  event: CCSmartWalletAdminUpdatedEvent
): void {
  let entity = new CCSmartWalletAdminUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldAdmin = event.params.oldAdmin;
  entity.newAdmin = event.params.newAdmin;
  entity.save();
}

export function handleArbitraryTxWasSent(event: ArbitraryTxWasSentEvent): void {
  let entity = new ArbitraryTxWasSent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.to = event.params.to;
  entity.callData = event.params.callData;
  entity.save();
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleMarketMakerUpdated(event: MarketMakerUpdatedEvent): void {
  let entity = new MarketMakerUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldMarketMaker = event.params.oldMarketMaker;
  entity.newMarketMaker = event.params.newMarketMaker;
  entity.save();
}

export function handleCCSmartWalletDirectUSDCTransfer(
  event: CCSmartWalletDirectUSDCTransferEvent
): void {
  let entity = new CCSmartWalletDirectUSDCTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.userAddress = event.params.userAddress;
  entity.amount = event.params.amount;
  entity.smartWallet = event.params.smartWallet;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleResponseTxWasSent(event: ResponseTxWasSentEvent): void {
  let entity = new ResponseTxWasSent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.srcChainId = event.params.srcChainId;
  entity.srcTransactionHash = event.params.srcTransactionHash;
  entity.destTransactionHash = event.transaction.hash;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.initiator = event.transaction.from;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleSignerUpdated(event: SignerUpdatedEvent): void {
  let entity = new SignerUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.oldSigner = event.params.oldSigner;
  entity.newSigner = event.params.newSigner;
  entity.save();
}
