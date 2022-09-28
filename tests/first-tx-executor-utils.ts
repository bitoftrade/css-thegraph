import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminUpdated,
  CCSmartWalletAddressUpdated,
  FirstPartOfSwapExecuted
} from "../generated/FirstTxExecutor/FirstTxExecutor"

export function createAdminUpdatedEvent(
  oldAdmin: Address,
  newAdmin: Address
): AdminUpdated {
  let adminUpdatedEvent = changetype<AdminUpdated>(newMockEvent())

  adminUpdatedEvent.parameters = new Array()

  adminUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  adminUpdatedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminUpdatedEvent
}

export function createCCSmartWalletAddressUpdatedEvent(
  oldAddress: Address,
  newAddress: Address
): CCSmartWalletAddressUpdated {
  let ccSmartWalletAddressUpdatedEvent = changetype<
    CCSmartWalletAddressUpdated
  >(newMockEvent())

  ccSmartWalletAddressUpdatedEvent.parameters = new Array()

  ccSmartWalletAddressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldAddress",
      ethereum.Value.fromAddress(oldAddress)
    )
  )
  ccSmartWalletAddressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return ccSmartWalletAddressUpdatedEvent
}

export function createFirstPartOfSwapExecutedEvent(
  destNetworkId: BigInt,
  destTokenAddress: Address,
  destAmount: BigInt,
  destUserAddress: Address,
  slippage: BigInt
): FirstPartOfSwapExecuted {
  let firstPartOfSwapExecutedEvent = changetype<FirstPartOfSwapExecuted>(
    newMockEvent()
  )

  firstPartOfSwapExecutedEvent.parameters = new Array()

  firstPartOfSwapExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "destNetworkId",
      ethereum.Value.fromUnsignedBigInt(destNetworkId)
    )
  )
  firstPartOfSwapExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "destTokenAddress",
      ethereum.Value.fromAddress(destTokenAddress)
    )
  )
  firstPartOfSwapExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "destAmount",
      ethereum.Value.fromUnsignedBigInt(destAmount)
    )
  )
  firstPartOfSwapExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "destUserAddress",
      ethereum.Value.fromAddress(destUserAddress)
    )
  )
  firstPartOfSwapExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "slippage",
      ethereum.Value.fromUnsignedBigInt(slippage)
    )
  )

  return firstPartOfSwapExecutedEvent
}
