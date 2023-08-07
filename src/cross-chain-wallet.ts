import {
  DestCrossSwap as DestCrossSwapEvent,
  DestCrossSwapV2 as DestCrossSwapV2Event,
  StargateTransferReceived as StargateTransferReceivedEvent,
} from '../generated/CrossChainWallet/CrossChainWallet';
import { DestCrossSwap, StargateTransferReceived } from '../generated/schema';


export function handleDestCrossSwap(event: DestCrossSwapEvent): void {
  let entity = new DestCrossSwap(event.transaction.hash.toHex() + '-' + event.logIndex.toString());

  entity.srcChainId = event.params.srcChainId;
  entity.srcTransactionHash = event.params.srcTransactionHash;
  entity.destToken = event.params.destToken;
  entity.destAmount = event.params.destAmount;
  entity.destUser = event.params.destUser;
  entity.connectorToken = event.params.connectorToken;
  entity.protocolFee = event.params.protocolFee;
  entity.gasCompensation = event.params.gasCompensation;
  entity.liquidityProvider = event.params.liquidityProvider;

  // legacy version, initiator is event.transaction.from
  entity.initiator = event.transaction.from;

  entity.version = '2.0';

  entity.txHash = event.transaction.hash;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleDestCrossSwapV2(event: DestCrossSwapV2Event): void {
  let entity = new DestCrossSwap(event.transaction.hash.toHex() + '-' + event.logIndex.toString());

  entity.srcChainId = event.params.srcChainId;
  entity.srcTransactionHash = event.params.srcTransactionHash;
  entity.destToken = event.params.destToken;
  entity.destAmount = event.params.destAmount;
  entity.destUser = event.params.destUser;
  entity.connectorToken = event.params.connectorToken;
  entity.protocolFee = event.params.protocolFee;
  entity.gasCompensation = event.params.gasCompensation;
  entity.liquidityProvider = event.params.liquidityProvider;

  // here initiator is not event.transaction.from, but event.params.initiator
  entity.initiator = event.params.initiator;

  entity.version = '2.1';

  entity.txHash = event.transaction.hash;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleStargateTransferReceived(event: StargateTransferReceivedEvent): void {
  let entity = new StargateTransferReceived(event.transaction.hash.toHex() + '-' + event.logIndex.toString());

  entity.sgChainId = event.params.sgChainId;
  entity.token = event.params.token;
  entity.amount = event.params.amount;
  entity.nonce = event.params.nonce;
  entity.sgNonce = event.params.sgNonce;

  entity.txHash = event.transaction.hash;
  entity.txGasUsed = event.transaction.gasLimit;
  entity.txGasPrice = event.transaction.gasPrice;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;

  entity.save();
}
