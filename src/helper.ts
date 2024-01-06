import {
  Funded as FundedEvent,
  FundingLive as FundingLiveEvent,
  Withdrawn as WithdrawnEvent,
} from "../generated/Helper/Helper"
import { Funded, FundingLive, Withdrawn } from "../generated/schema"

export function handleFunded(event: FundedEvent): void {
  let entity = new Funded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.funder = event.params.funder
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundingLive(event: FundingLiveEvent): void {
  let entity = new FundingLive(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.beneficiary = event.params.beneficiary
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
