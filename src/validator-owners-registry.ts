import {
  OwnershipTransferred as OwnershipTransferredEvent,
  OracleUpdated as OracleUpdatedEvent,
  ValidatorAddressAdded as ValidatorAddressAddedEvent,
  ValidatorsOwnersAdded as ValidatorsOwnersAddedEvent,
} from "../generated/ValidatorOwnersRegistry/ValidatorOwnersRegistry";
import {
  OracleUpdated,
  OwnershipTransferred,
  ValidatorAddressAdded,
  ValidatorsOwnersAdded,
} from "../generated/schema";

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new OwnershipTransferred(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleOracleUpdated(event: OracleUpdatedEvent): void {
  let entity = new OracleUpdated(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.oracle = event.params.oracle;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleValidatorAddressAdded(event: ValidatorAddressAddedEvent): void {
  let entity = new ValidatorAddressAdded(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.validatorAddress = event.params.validatorAddress;
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleValidatorsOwnersAdded(event: ValidatorsOwnersAddedEvent): void {
  let entity = new ValidatorsOwnersAdded(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  for (let i = 0; i < event.params.validatorsOwners.length; i++) {
      entity.validatorsOwners.push(event.params.validatorsOwners[i])
  }
  entity.blockHash = event.block.hash;
  entity.blockNumber = event.block.number;
  entity.timestamp = event.block.timestamp;
  entity.save();
}
