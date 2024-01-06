import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FundFulfilled,
  FundRequested,
  HelperCreated
} from "../generated/HelperFactory/HelperFactory"

export function createFundFulfilledEvent(
  helperContract: Address,
  funder: Address,
  beneficiary: Address,
  fulfilledAmount: BigInt
): FundFulfilled {
  let fundFulfilledEvent = changetype<FundFulfilled>(newMockEvent())

  fundFulfilledEvent.parameters = new Array()

  fundFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "helperContract",
      ethereum.Value.fromAddress(helperContract)
    )
  )
  fundFulfilledEvent.parameters.push(
    new ethereum.EventParam("funder", ethereum.Value.fromAddress(funder))
  )
  fundFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  fundFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "fulfilledAmount",
      ethereum.Value.fromUnsignedBigInt(fulfilledAmount)
    )
  )

  return fundFulfilledEvent
}

export function createFundRequestedEvent(
  helperContract: Address,
  funder: Address,
  beneficiary: Address,
  requestedAmount: BigInt
): FundRequested {
  let fundRequestedEvent = changetype<FundRequested>(newMockEvent())

  fundRequestedEvent.parameters = new Array()

  fundRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "helperContract",
      ethereum.Value.fromAddress(helperContract)
    )
  )
  fundRequestedEvent.parameters.push(
    new ethereum.EventParam("funder", ethereum.Value.fromAddress(funder))
  )
  fundRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  fundRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestedAmount",
      ethereum.Value.fromUnsignedBigInt(requestedAmount)
    )
  )

  return fundRequestedEvent
}

export function createHelperCreatedEvent(
  user: Address,
  helper: Address
): HelperCreated {
  let helperCreatedEvent = changetype<HelperCreated>(newMockEvent())

  helperCreatedEvent.parameters = new Array()

  helperCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  helperCreatedEvent.parameters.push(
    new ethereum.EventParam("helper", ethereum.Value.fromAddress(helper))
  )

  return helperCreatedEvent
}
