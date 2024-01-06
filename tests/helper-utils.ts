import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Funded, FundingLive, Withdrawn } from "../generated/Helper/Helper"

export function createFundedEvent(funder: Address, amount: BigInt): Funded {
  let fundedEvent = changetype<Funded>(newMockEvent())

  fundedEvent.parameters = new Array()

  fundedEvent.parameters.push(
    new ethereum.EventParam("funder", ethereum.Value.fromAddress(funder))
  )
  fundedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundedEvent
}

export function createFundingLiveEvent(
  recipient: Address,
  amount: BigInt,
  deadline: BigInt
): FundingLive {
  let fundingLiveEvent = changetype<FundingLive>(newMockEvent())

  fundingLiveEvent.parameters = new Array()

  fundingLiveEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  fundingLiveEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundingLiveEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )

  return fundingLiveEvent
}

export function createWithdrawnEvent(
  beneficiary: Address,
  amount: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawnEvent
}
