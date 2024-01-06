import {
  FundFulfilled as FundFulfilledEvent,
  FundRequested as FundRequestedEvent,
  HelperCreated as HelperCreatedEvent
} from "../generated/HelperFactory/HelperFactory"
import {
  FundFulfilled,
  FundRequested,
  HelperCreated
} from "../generated/schema"
import {Helper} from "../generated/templates"

export function handleFundFulfilled(event: FundFulfilledEvent): void {
  let entity = new FundFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.helperContract = event.params.helperContract
  entity.funder = event.params.funder
  entity.beneficiary = event.params.beneficiary
  entity.fulfilledAmount = event.params.fulfilledAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundRequested(event: FundRequestedEvent): void {
  let entity = new FundRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.helperContract = event.params.helperContract
  entity.funder = event.params.funder
  entity.beneficiary = event.params.beneficiary
  entity.requestedAmount = event.params.requestedAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleHelperCreated(event: HelperCreatedEvent): void {
  let entity = new HelperCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.helper = event.params.helper

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
  Helper.create(event.params.helper)
}
