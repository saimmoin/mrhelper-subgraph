import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { FundFulfilled } from "../generated/schema"
import { FundFulfilled as FundFulfilledEvent } from "../generated/HelperFactory/HelperFactory"
import { handleFundFulfilled } from "../src/helper-factory"
import { createFundFulfilledEvent } from "./helper-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let helperContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let funder = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let beneficiary = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let fulfilledAmount = BigInt.fromI32(234)
    let newFundFulfilledEvent = createFundFulfilledEvent(
      helperContract,
      funder,
      beneficiary,
      fulfilledAmount
    )
    handleFundFulfilled(newFundFulfilledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FundFulfilled created and stored", () => {
    assert.entityCount("FundFulfilled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FundFulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "helperContract",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FundFulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "funder",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FundFulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "beneficiary",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "FundFulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fulfilledAmount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
