import {
  OwnershipTransferred as OwnershipTransferredEvent,
  OracleAdded as OracleAddedEvent,
  OracleRemoved as OracleRemovedEvent,
} from "../generated/OracleProvider/OracleProvider";
import { OracleProviderOwnershipTransferred, OracleAdded, OracleRemoved, } from "../generated/schema";

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new OracleProviderOwnershipTransferred(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.txHash = event.transaction.hash;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleOracleAdded(event: OracleAddedEvent): void {
  let entity = new OracleAdded(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.oracle = event.params.oracle;
  entity.txHash = event.transaction.hash;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleOracleRemoved(event: OracleRemovedEvent): void {
  let entity = new OracleRemoved(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.oracle = event.params.oracle;
  entity.txHash = event.transaction.hash;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}